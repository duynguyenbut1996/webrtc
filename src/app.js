const openCamera = require('./openCamera');

const playVideo = require('./playVideo');

const Peer = require('simple-peer');

const $ = require('jquery');


openCamera(function(stream){
    playVideo(stream, 'loadvideo')
    

     const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream : stream });

     p.on('signal', token => {
         $('#txtToken').val(JSON.stringify(token))
     });

     p.on('connect', () => {
         setInterval(() => p.send(Math.random()), 2000);
     });

     $('#btnConnect').click(() => {
         const tokenID = JSON.parse($('#tokenID').val());
         p.signal(tokenID);
     });

     p.on('stream' , streamSc => playVideo(streamSc,'loadvideoSc'))
});



