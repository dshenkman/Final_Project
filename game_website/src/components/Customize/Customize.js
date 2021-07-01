import React from "react";
import Main from '../Main/Main'
import axios from "axios";
import './customize.css'
import 'antd/dist/antd.css'
import {Avatar} from 'antd'
import FileDownloader from '../FileDownloader/FileDownloader'
import {BrowserRouter as Router,
        Route,
        Switch,
         Link,
} from 'react-router-dom'
import Select from 'react-select'



class Customize extends React.Component {
  constructor() {
    super();

  this.state = {
    imageDataURL: null,
    image_name: '',
    saveImage: false,
    firstName: '',
    lastName: '',
    bgColor: '',
    color:''
  };
}






  savePic = () => {

    fetch('http://localhost:3001/customize/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        image: this.state.imageDataURL,

      })
    })
    .then (response => response.json())
    .then(image => {
      if (image) {
        console.log('hi');


      }
    })

  }











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



  };







   download = (event) => {
    console.log(event.target.href);
    fetch(event.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  setPic = () => {
    const selfie= document.getElementById('selfie').src
    console.log(selfie);
    localStorage.setItem('selfie', selfie)
  }

  handleFNameChange = (e) => {
     this.setState({firstName: e.target.value});
  }


  handleLNameChange = (e) => {
     this.setState({lastName: e.target.value});
  }

  handleLogin = (e) => {
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value
    });


  }

  handleBgChange = (e) => {
    this.setState({
      bgColor: e.target.value
    })
  }

  handleColorChange = (e) => {
    this.setState({
      color: e.target.value
    })
  }














  render() {
    const pic = Boolean(this.state.imageDataURL) ? (
      <img
      className='picbox'
      id="selfie"
       src={this.state.imageDataURL}
       />
    ) : (
      <video
      className="picbox"

      ref={(ref) => {
          this.player = ref;
        }}
        autoPlay
      ></video>
    );


    const fname = this.state.firstName;
    const lname = this.state.lastName
    const bg = this.state.bgColor;
    const color = this.state.color





    return (

      <div id="customize" >

      <div id="camera">

            <h1 className="custhead">Take a Selfie</h1>
              <div>
              {pic}

              </div>
              <button
              className="button"
              onClick={this.initializeMedia}>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#008099"  class="bi bi-camera" viewBox="0 0 16 16">
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>
                </button>







              <button
              className="button"
               onClick={() => {this.capturePicture()}}>

               <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#008099" class="bi bi-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
              </button>



          <button
          id="homepage"
          onClick={() => {this.setPic()}}>
          Make this your home page picture
          </button>



    </div>





        <div id='logo'>



                            <h1 className="custhead">Create your own Logo</h1>
                              <div>
                            <input type="text" name="firstname" placeholder="First Name" onChange={this.handleFNameChange} />
                            </div>
                            <div>
                            <input type="text" name="lastname" placeholder="Last Name"  onChange={this.handleLNameChange}/>
                            </div>
                            <div>
                            <select
                            onChange={this.handleBgChange}
                            >

                              <option value= ''>Choose Background Color</option>
                              <option value= 'FF0000'>Red</option>
                              <option value= '006622'>Green</option>
                              <option value= '0000CC'>Blue</option>
                              <option value= 'FFFF00'>Yellow</option>
                            </select>
                            </div>
                            <div>

                            <select
                            onChange={this.handleColorChange}
                            >
                              <option value= ''>Choose Font Color</option>
                              <option value= 'FF0000'>Red</option>
                              <option value= '006622'>Green</option>
                              <option value= '0000CC'>Blue</option>
                              <option value= 'FFFF00'>Yellow</option>
                            </select>
                            </div>

                                <div>

                            <img src={`https://ui-avatars.com/api/?name=${fname}+${lname}&background=${bg}&color=${color}&rounded=true`} />


                                </div>



        </div>


      </div>










    );
  }

}

export default Customize;
