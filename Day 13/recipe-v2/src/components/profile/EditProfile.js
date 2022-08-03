import React, { useState } from "react";

import fileService from "../services/file.service";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  const [fileData, setFileData] = useState('');


  function onFileSelected(e) {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setFile(file);

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setFileData(reader.result);
      });

      reader.readAsDataURL(file);
    } else {
      setFile(null);
      setFileData("");
    }
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const downloadUrl = await fileService.uploadImage(file, (progress) => {
        console.log(progress);
      });

      console.log(downloadUrl);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="p-3 m-3 border border-3 border-white rounded bg-secondary">
      <h1 className="text-center">Edit Your Profile</h1>

      <div className="card card-body">
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Add Profile Picture</label>
            <input
              type="file"
              onChange={onFileSelected}
              className="form-control"
            />
            {fileData ? (
              <div className="text-center mt-3">
                <img
                  style={{
                    width: "300px",
                    height: "450px",
                    "objectFit": "contain",
                  }}
                  src={fileData}
                  alt="cover"
                />
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Enter Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Enter Age</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
            />
          </div>

          <button className="btn mt-4 btn-outline-dark">Save Profile</button>
        </form>
      </div>
    </div>
  );
}
