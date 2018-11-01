const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const constraints = isMobile
  ? { video: { facingMode: { exact: "environment" } } }
  : { video: true };

function main() {
  const video = document.querySelector("#videoElement");

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => alert(err));
}

document.addEventListener("DOMContentLoaded", main)