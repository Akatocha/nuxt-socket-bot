import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import SocketIO from 'socket.io-client'

/* Establish Connection */
const socketConnection = SocketIO('http://localhost:4000');

export default function() {
  Vue.use(new VueSocketIO({
    debug: false,
    connection:socketConnection
  })
);
}





