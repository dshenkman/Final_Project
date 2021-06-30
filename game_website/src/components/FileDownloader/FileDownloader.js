import React from "react";
import Downloader from '../Downloader/Downloader'
import useFileDownloader from "../../hooks/userFileDownloader";

const files = [
  {
    name: "Photo 1",
    file:
      "https://www.google.co.il/imgres?imgurl=https%3A%2F%2Fpost.healthline.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fedible-flowers-732x549-thumbnail.jpg&imgrefurl=https%3A%2F%2Fwww.healthline.com%2Fnutrition%2Fedible-flowers&tbnid=zjVpCBWp9SNGtM&vet=12ahUKEwj5nNT5qb3xAhUDwYUKHWQWBVMQMygGegUIARDmAQ..i&docid=IZTp0sFoIg0qIM&w=732&h=549&q=flower&hl=en&authuser=0&safe=strict&ved=2ahUKEwj5nNT5qb3xAhUDwYUKHWQWBVMQMygGegUIARDmAQ" +
      Math.random(),
    filename: "photo-1.jpg",
  },


];

const FileDownloader = () => {
  const [downloadFile, downloaderComponentUI] = useFileDownloader();

  const download = (file) => downloadFile(file);

  return (
    <>


      <div className="row">
        <div className="col text-center">
          <div className="row mt-3">
            {files.map((file, idx) => (
              <div className="col" key={idx}>
                <div className="card ">
                  <div className="card-body" key={idx}>
                    <h5 className="card-title">{file.name}</h5>

                    <a
                      className="btn btn-primary cursor-pointer text-white"
                      onClick={() => download(file)}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                            </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {downloaderComponentUI}
      </div>
    </>
  );
};

export default FileDownloader;
