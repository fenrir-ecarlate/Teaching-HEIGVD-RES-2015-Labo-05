// ce script a pour but d'envoier toute les tant de temps 
// un datagram dans un sous-reseau multicast pour signaler
// sa présence au serveur proxy/load balancer
// (code de base repris du thérmométre vu en cours)

var protocol = require('./protocol');

var dgram = require('dgram');

var s = dgram.createSocket('udp4');

function HearthBeat(){

	var that = this;
	HearthBeat.prototype.update = function() {
      //indique qu'elle type c'est (ici frontend)
		var payload = "frontend";
		message = new Buffer(payload);
      // envoie le message
		s.send(message, 0, message.length, protocol.PROTOCOL_PORT, protocol.PROTOCOL_MULTICAST_ADDRESS, function(err, bytes){});
	}
    setInterval(that.update, 200);
}

var beat = new HearthBeat();