import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import "./PhotoGallery.css";
import 'antd/dist/antd.css';
import Modal from "react-bootstrap/Modal";
// import { Modal } from 'antd';

const DisplayProfile = (props) => {
    const [pet, setPet] = useState(props.pet);
    const [selectedFile, setSelectedFile] = useState(null);

      const [show, setShow] = useState(false);


    // const [isModalVisible, setIsModalVisible] = useState(false);

    //     const showModal = () => {
    //         setIsModalVisible(true);
    //     };

    //     const handleOk = () => {
    //         setIsModalVisible(false);
    //     };

        // const handleClose = () => {
        //     props.onClose();
        //   };

    
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    const handleClick = e => {
        hiddenFileInput.current.click();
      };
    
    // On file select (from the pop up)
    const onFileChange = (e) => {
        const fileUploaded = e.target.files[0];
       setSelectedFile(fileUploaded);
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
        const res = await axios.post(`/pet/${pet.pet_img}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        console.log(res);
      } catch (err) {
        console.log(  err);
      }
    }; 



//    function handleEnter(e){
//     //    e.preventDefault();
//        console.log(e.target)
//     }

const handleClose = () => {
    setShow(false);
  };

    return(

      
      <div>


           <Modal show={true} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Profile Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="body">
      <div className="prof-pic-div">
       <img src ="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="avatar"id="pic"  onClick={handleClick}/>
       <label>Profile Picture:</label><br/>
           <input type="file" ref={hiddenFileInput} id="file" accept="image/*" onChange={onFileChange} />
           <button className="e-file" id="uploadBtn" onClick={onFileUpload}>Upload</button>
           </div>
           </div>
            
          
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          {/* <button variant="primary" onClick={addPet}>
            Save Changes
          </button> */}
        </Modal.Footer>
      </Modal>






        {/* <button type="primary" onClick={showModal}>
        Open Modal
      </button>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}


       </div>
       
       
    )
}

export default DisplayProfile;