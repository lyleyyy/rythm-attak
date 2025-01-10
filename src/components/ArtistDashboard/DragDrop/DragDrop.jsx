import React from "react";
import { useDropzone } from "react-dropzone";

function DragDrop() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  console.log(files, "files");

  return (
    <section className="bg-white text-black">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className="flex">
        <h4>Files:</h4>
        <ul>{files.length ? files : "Please select your file."}</ul>
      </aside>
    </section>
  );
}

export default DragDrop;
