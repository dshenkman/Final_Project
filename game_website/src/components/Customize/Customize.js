import React from "react";

class Customize extends React.Component {
  state = {
    imageDataURL: null,
  };






  initializeMedia = () => {
    this.setState({ imageDataURL: null });

    if (!("mediaDevices" in navigator)) {
      navigator.mediaDevices = {};
    }

    if (!("getUserMedia" in navigator.mediaDevices)) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        var getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia Not Implemented"));
        }

        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.player.srcObject = stream;
      })
      .catch((error) => {
        console.error(error)
       });
  };



  capturePicture = () => {
    var canvas = document.createElement("canvas");
    canvas.width = this.player.videoWidth;
    canvas.height = this.player.videoHeight;
    var contex = canvas.getContext("2d");
    contex.drawImage(this.player, 0, 0, canvas.width, canvas.height);
    this.player.srcObject.getVideoTracks().forEach((track) => {
      track.stop();
    });

    console.log(canvas.toDataURL());
    this.setState({ imageDataURL: canvas.toDataURL() });
    console.log(this.state.imageDataURL);



  };

   savePic = () => {
    const form = new FormData();
    form.append("photo", "this.state.imageDataURL");
  fetch("https://mojipop.p.rapidapi.com/api/FaceDetection/CreateAvatar", {
    "method": "POST",
    "headers": {
      "content-type": "multipart/form-data; boundary=---011000010111000001101001",
      "x-rapidapi-key": "7ea3bba4femshe5fbca7638aac73p143dabjsn9df29e5ddd31",
      "x-rapidapi-host": "mojipop.p.rapidapi.com"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });

  }



  componentDidMount () {
      this.savePic()

        }



  render() {
    const playerORImage = Boolean(this.state.imageDataURL) ? (
      <img src={this.state.imageDataURL} />
    ) : (
      <video
        ref={(refrence) => {
          this.player = refrence;
        }}
        autoPlay
      ></video>
    );

    return (
      <div className="App">
        {playerORImage}
        <button onClick={this.initializeMedia}>Take Photo</button>
        <button onClick={() => {this.capturePicture(); this.savePic()}}>Capture</button>


      </div>
    );
  }
}

export default Customize;
