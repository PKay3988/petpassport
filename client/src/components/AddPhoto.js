import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";


const AddPhoto = (props) => {
    const [pet, setPet] = useState(props.pet);
    const [selectedFile, setSelectedFile] = useState(null);
  
    // On file select (from the pop up)
    const onFileChange = (event) => {
      // Update the state
      setSelectedFile(event.target.files[0]);
    };
  
    // On file upload (click the upload button)
    const onFileUpload = async () => {
      // Create an object of formData
      const formData = new FormData();
  
      // Update the formData object
      formData.append("imagefile", selectedFile, selectedFile.name);
  
      try {
        // Request made to the backend api
        // Send formData object
        //replace axios with fetch
        //replace 1 with id dynamic
        const res = await axios.post(`/image/${pet.pet_id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div>
        <Nav />
      <div className="App">
        <h3>Select file to upload:</h3>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload</button>
      </div>
      </div>
    );
  }
  
  export default AddPhoto