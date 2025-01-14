import React, { useMemo, useRef } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderWidth: "3px",
  borderColor: "#8B5CF6",
};

const acceptStyle = {
  borderWidth: "3px",
  borderColor: "#00e676",
};

const rejectStyle = {
  borderWidth: "3px",
  borderColor: "#ff1744",
};

const acceptImgFormats = {
  accept: { "image/jpeg": [".jpeg", ".jpg"], "image/png": [".png"] },
};

const acceptAudioFormats = {
  accept: { "audio/mpeg": [".mp3"], "audio/aac": [".aac"] },
};

function DragDrop({ label, name }) {
  const hiddenInputRef = useRef(null);

  const acceptFileFormats =
    label === "Single Cover" || label === "Album Cover"
      ? acceptImgFormats
      : label === "Track"
        ? acceptAudioFormats
        : null;

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 1,
    ...acceptFileFormats,
    onDrop: (incomingFiles) => {
      if (hiddenInputRef.current) {
        // Note the specific way we need to munge the file into the hidden input
        // https://stackoverflow.com/a/68182158/1068446
        const dataTransfer = new DataTransfer();
        incomingFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
    },
  });

  const files = acceptedFiles.map((file) => {
    const path = file.path.slice(0, 20);

    return (
      <li key={file.path}>
        {path} {file.path.length <= 20 ? "" : "..."} - {file.size} bytes
      </li>
    );
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <div className="container flex h-[290px] w-[270px] flex-col">
      <label className="text-lg font-medium">{label}</label>
      <div
        {...getRootProps({ style })}
        className="flex h-[250px] items-center justify-center gap-2"
      >
        <input
          type="file"
          name={name}
          required={name === "track" || name === "album cover" ? true : false}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
        />
        <input {...getInputProps()} />
        <p>Drag 'n' drop your file here, or click to select file</p>
        <span className="text-6xl">+</span>
        <aside>
          <ul className="w-full">
            {files}
            {acceptedFiles.length === 0 && !isDragReject && (
              <>
                <li>Only 1 file can be uploaded.</li>
                <li>
                  {name === "single cover" || name === "album cover"
                    ? "Only .jpg .jpeg .png formats are accepted."
                    : "Only .mp3 .aac formats are accepted."}
                </li>
              </>
            )}
            {isDragReject && (
              <li className="text-red-500">Upload rules violation detected.</li>
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default DragDrop;
