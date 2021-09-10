import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import SocketIO from 'socket.io-client'

/* Establish Connection */
const socketConnection = SocketIO('https://socket-bot-bin.herokuapp.com/');

export default function() {
  Vue.use(new VueSocketIO({
    debug: false,
    connection:socketConnection
  })
);
}





