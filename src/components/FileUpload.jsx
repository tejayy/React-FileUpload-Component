import {useRef, useState} from "react";
import "./FileUpload.css";
import axios from "axios";

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

  // Function to clear slected file and reset state
  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  // Function to handle file upload
  const handleUpload = async () => {
    // If upload is already done, clear and return
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    try {
      //  Set upload status to 'uploading'
      setUploadStatus("uploading");

      // Create FormData and append selected file
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Make a asynchronous POST request to the server for file upload
      const response = await axios.post(
        "http://localhost:8000/api/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percentCompleted);
            }
          },
        }
      );
      setUploadStatus("done");
    } catch (error) {
      setUploadStatus("select");
    }
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
                <h6>{selectedFile.name}</h6>
                <div className="progress-bg">
                  <div className="progress" style={{width: `${progress}`}} />
                </div>
              </div>
              {/* Display Clear button or upload progress */}
              <button onClick={clearFileInput}>
                <span className="material-symbols-outlined close-icon">
                  close
                </span>
              </button>
            </div>
          </div>

          {/* Button to finalize upload or clear selection */}
          <button className="upload-btn" onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === "uploading"
              ? "upload"
              : "done"}
          </button>
        </>
      )}
    </div>
  );
};

export default FileUpload;
