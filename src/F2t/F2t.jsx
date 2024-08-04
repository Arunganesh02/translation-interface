import React from "react";
import './f2t.css';

function F2t(){

    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Image to Text Translation</title>
  <link rel="stylesheet" href="image.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <div className="title-card">
    <a href="index.html" className="btn">
      <span className="icon">
        <svg viewBox="0 0 175 80" width={40} height={40}>
          <rect width={80} height={15} fill="#f0f0f0" rx={10} />
          <rect y={30} width={80} height={15} fill="#f0f0f0" rx={10} />
          <rect y={60} width={80} height={15} fill="#f0f0f0" rx={10} />
        </svg>
      </span>
      <span className="text">MENU</span>
    </a>
    <div className="title">Image to Text Translation</div>
  </div>
  <div className="container">
    <div className="upload-box">
      <button className="Documents-btn">
        <span className="folderContainer">
          <svg
            className="fileBack"
            width={146}
            height={113}
            viewBox="0 0 146 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
              fill="url(#paint0_linear_117_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_117_4"
                x1={0}
                y1={0}
                x2="72.93"
                y2="95.4804"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8F88C2" />
                <stop offset={1} stopColor="#5C52A2" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="filePage"
            width={88}
            height={99}
            viewBox="0 0 88 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width={88} height={99} fill="url(#paint0_linear_117_6)" />
            <defs>
              <linearGradient
                id="paint0_linear_117_6"
                x1={0}
                y1={0}
                x2={81}
                y2="160.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset={1} stopColor="#686868" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="fileFront"
            width={160}
            height={79}
            viewBox="0 0 160 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
              fill="url(#paint0_linear_117_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_117_5"
                x1="38.7619"
                y1="8.71323"
                x2="66.9106"
                y2="82.8317"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C3BBFF" />
                <stop offset={1} stopColor="#51469A" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <p className="text">Files</p>
      </button>
      <input
        type="file"
        id="upload-input"
        className="upload-input"
        accept="image/*"
        onchange="displayImageDetails(event)"
      />
      <p className="upload-message">Upload Image</p>
      <div id="image-details" className="file-details" />
      <select className="language-dropdown">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        {/* Add more language options here */}
      </select>
    </div>
    <div className="translation-box">
      <textarea
        className="translated-content"
        placeholder="Translated Content"
        readOnly=""
        defaultValue={""}
      />
      <select className="output-language-dropdown">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        {/* Add more language options here */}
      </select>
    </div>
    <button className="translate-button">Translate</button>
  </div>
</>



    )

}

export default F2t;