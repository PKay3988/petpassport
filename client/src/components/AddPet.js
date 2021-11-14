import React from "react";
import "./AddPet.css"

export const AddPet = () => {
    // const [isShown, setIsShown] = useState(false);

    // const imgDiv = document.querySelector('.prof-pic-div');
    // const img = document.querySelector('#photo');
    // const file = document.querySelector('#file');
    // const uploadBtn = document.querySelector('#uploadBtn');

    // //if user hover on profile div
    // imgDiv.('mouseenter', function()
    // {
    //     uploadBtn.style.display = "block"
    // });

    // //if user hover out from div
    // imgDiv.addEventListener('mouseleave', function()
    // {
    //     uploadBtn.style.display = "none"
    // });

    // //choose photo to upload
    // file.addEventListener('change', function(){
    //     const chosenFile = this.files[0];

    //     if(chosenFile) {
    //         //JS function
    //         const reader = new FileReader();

    //         reader.addEventListener('load', function() {
    //             img.setAttribute('src', reader.result)
    //         });

    //         reader.readAsDataURL(chosenFile);
    //     }
    // })

     


 
    return (
        <div>
           <div className="body">
           <div className="prof-pic-div">
            <img src ="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="avatar"id="pic"/>
            {/* <label>Profile Picture:</label><br/> */}
                <input type="file" id="file" /*onChange={onFileChange}*/ />
                <button className="choose-file" id="uploadBtn" /*onClick={onFileUpload}*/>Upload</button>
            </div>
            </div>

        
            
        </div>
    )
}
export default AddPet;
