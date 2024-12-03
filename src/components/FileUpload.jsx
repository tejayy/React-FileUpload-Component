import {useRef, useState} from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const inputRef = useRef();

  // State variables for tracking file-related information
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select"); // "select" | "uploading" | "done"

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };
  return (
    <div>
      {/* File input element with a refrence */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{display: "none"}}
      />

      {/* Button to trigger the file input dialog */}
      {!selectedFile && (
        <button className="file-btn" onClick={onChooseFile}>
          <span className="material-symbols-outlined">upload</span>Upload File
        </button>
      )}

      {/* Display File Informationand progress when a file is selecteed */}
      {selectedFile && (
        <>
          <div className="file-card">
            <span className="material-symbols-outlined icon">description</span>
            <div className="file-info">
              <div style={{flex: 1}}>
                {/* Display file name and progress bar */}
                <h6>File Name Here</h6>
                <div className="progress-bg">
                  <div className="progress" style={{width: `40%`}} />
                </div>
              </div>
              {/* Display Clear button or upload progress */}
              <button onClick={() => {}}>
                <span className="material-symbols-outlined close-icon">
                  close
                </span>
              </button>
            </div>
          </div>

          {/* Button to finalize upload or clear selection */}
          <button className="upload-btn" onClick={() => {}}>
            Upload
          </button>
        </>
      )}
    </div>
  );
};

export default FileUpload;
