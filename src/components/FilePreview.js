import React from "react";
import styles from "../styles/FilePreview.module.css";

const FilePreview = ({ fileData }) => {
    // console.log("FileList" + fileData.fileList)
  return (
    <div className={styles.fileList}>
      <div className={styles.fileContainer}>
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
          return (
            <>
              <ol>
                <li key={f.lastModified + Math.random()} className={styles.fileList}>
                  {/* display the filename and type */}
                  <div key={f.name + Math.random()} className={styles.fileName}>
                    {f.name}
                  </div>
                </li>
              </ol>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreview;
