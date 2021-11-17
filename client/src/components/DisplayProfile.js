import React, { useState, useEffect } from "react";
// import Nav from "./Nav";
import axios from "axios";
import "./PhotoGallery.css";
import imgg from "./imgg.jpeg"; 

const DisplayProfile = (props) => {
    const [pet, setPet] = useState(props.pet);
    // console.log("Displayprofile",props.pet);
    console.log(JSON.stringify(props.pet))
    const [selectedFile, setSelectedFile] = useState(null);
    
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    const handleClick = e => {
        hiddenFileInput.current.click(e);
      };
    
    // On file select (from the pop up)
    const onFileChange = (e) => {
        const fileUploaded = e.target.files[0];
       setSelectedFile(fileUploaded);
      };


    // On file upload (click the upload button)
    const onFileUpload = async () => {
        console.log("Hi")
        // Create an object of formData
        const formData = new FormData();

    // Update the formData object
      formData.append("imagefile", selectedFile, selectedFile.name);
      console.log("formdata")

      try {
        // Request made to the backend api
        // Send formData object
        //replace axios with fetch
        //replace 1 with id dynamic
        const res = await axios.put(`/pets/image/${pet.pet_id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
       let newPet = pet;
       newPet.pet_img = res.data;
      //  console.log(res.data);
       setPet(newPet);
      } catch (err) {
        console.log(err);
      }
    }; 

    // useEffect(() => {
    // }, [pet]);


    return(

      
      <div>



        <div className="body">
      <div className="prof-pic-div">
      {pet && pet.pet_img ? <img src={`/img/${pet.pet_img}`}alt="avatar"id="pic"  onClick={handleClick} /> : <img src={imgg} alt="avatar"id="pic"  onClick={handleClick}/>}
   
          {/* console.log(pet.pet_img); */}
       <label>Profile Picture:</label><br/>
           <input type="file" ref={hiddenFileInput} id="file" accept="image/*" onChange={onFileChange} />
           <button className="e-file" id="uploadBtn" onClick={onFileUpload}>Upload</button>
           </div>
           </div>

           {/* <img src={`/img/${pet.pet_img}`} /> */}

           {/* <img src= {`/img/${pet.pet_img}` ? `/img/${pet.pet_img}` : require(`../components/${imgg.jpg}`)}  alt="avatar"id="pic"  onClick={handleClick}/> */}
        
       </div>
       
    )
}

export default DisplayProfile;