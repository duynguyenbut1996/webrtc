
function openCamera(cb) {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
            cb(stream);

        })
        .catch(err => console.log(err));
}
module.exports = openCamera;