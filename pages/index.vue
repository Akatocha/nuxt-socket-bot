<template>
  <div>
    <h2 v-if="priceData" class="price" :class="priceColor">
      <span>{{ priceData.symbol }}</span> - {{ priceData.markPrice }}
    </h2>
    <div class="depth" v-if="depthData">
      <h3>Volume Data -- {{ depthData.symbol }}</h3>
      <div class="depth_box">
        <div class="depth_cell">
          <table>
            <caption>
              Asks
            </caption>
            <thead>
              <tr>
                <th>Volume median</th>
                <th>{{ depthData.asksMedian }}</th>
              </tr>
              <tr>
                <th>Price</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(ask, key) in depthData.depth.asks" :key="key">
                <td>{{ key }}</td>
                <td>{{ ask }}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>
              Asks -- Big Volume
            </caption>
            <thead>
              <tr>
                <th>Volume median</th>
                <th>{{ depthData.asksMedian }}</th>
              </tr>
              <tr>
                <th>Factor for Depth Volume</th>
                <th class="factor">{{ depthData.factorOfVolumeDepth }}</th>
              </tr>
              <tr>
                <th>Warning Volume factor</th>
                <th class="factor">
                  {{ depthData.targetBigVolumeWarningFactor }}
                </th>
              </tr>
              <tr>
                <th>Price</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(ask, key) in depthData.asksBigVolume"
                :key="key"
                :class="{
                  activeBigAsk: checkTargetVolume(
                    key,
                    depthData.targetAsksBigVolume
                  )
                }"
              >
                <td>{{ key }}</td>
                <td>{{ ask }}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>
              Bids -- Big Volume
            </caption>
            <thead>
              <tr>
                <th>Volume median</th>
                <th>{{ depthData.bidsMedian }}</th>
              </tr>
              <tr>
                <th>Factor for Depth Volume</th>
                <th class="factor">{{ depthData.factorOfVolumeDepth }}</th>
              </tr>
              <tr>
                <th>Warning Volume factor</th>
                <th class="factor">
                  {{ depthData.targetBigVolumeWarningFactor }}
                </th>
              </tr>
              <tr>
                <th>Price</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(bid, key) in depthData.bidsBigVolume"
                :key="key"
                :class="{
                  activeBigBid: checkTargetVolume(
                    key,
                    depthData.targetBidsBigVolume
                  )
                }"
              >
                <td>{{ key }}</td>
                <td>{{ bid }}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>
              Bids
            </caption>
            <thead>
              <tr>
                <th>Volume median</th>
                <th>{{ depthData.bidsMedian }}</th>
              </tr>
              <tr>
                <th>Price</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(bid, key) in depthData.depth.bids" :key="key">
                <td>{{ key }}</td>
                <td>{{ bid }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceData: null,
      priceColor: null,
      tradeVolumeMedian: null,
      trades: [],
      bigTrades: [],
      depthData: null
    };
  },

  async mounted() {
    this.sockets.subscribe("price", data => {
      const priceFromData = data?.markPrice;
      const priceAscending = Boolean(this.priceData?.markPrice > priceFromData);
      const priceDescending = Boolean(
        this.priceData?.markPrice < priceFromData
      );

      if (priceAscending) {
        this.priceColor = "green";
      } else if (priceDescending) {
        this.priceColor = "red";
      }

      this.priceData = data;
    });

    this.sockets.subscribe("depth", depthData => {
      this.depthData = depthData;
    });
  },

  methods: {
    checkTargetVolume(price, targetVolume) {
      if (this.depthData) {
        return targetVolume?.includes(price);
      } else {
        return false;
      }
    },
    getAmountColor(trade) {
      return trade.maker ? "buy" : "sell";
    },
  }
};
</script>

<style scoped lang="scss">
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
ul {
  font-size: 14px;
}
.price {
  &.red {
    color: #ff3737;
  }
  &.green {
    color: #3ec23e;
  }
}
th {
  text-align: left;
}
td {
  min-width: 130px;
}
.depth_cell {
  display: flex;
  align-items: start;
  grid-column-gap: 100px;
}
.factor {
  padding-left: 30px;
  font-size: 20px;
  color: #0c20d1;
  text-decoration: underline;
}
.activeBigAsk,
.activeBigBid {
  color: red;
  animation: blink 0.5s infinite;
}
@keyframes blink {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
