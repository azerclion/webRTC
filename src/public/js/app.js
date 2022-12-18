const socket = io();
const myFace = document.getElementById("myFace");

let myStream;

async function getMedia() {
  console.log("getMedia start");
  if (navigator.mediaDevices) {
    console.log("is navigator.mediaDevices");
    try {
      myStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      console.log(myStream);
      myFace.srcObject = myStream;
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("No navigator.mediaDevices");
  }
}

getMedia();
