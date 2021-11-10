import React, {useState, useEffect} from 'react';

export const ChoosePet = () => {

    const [pets, setPets] = useState([]); 


    const getPets = () => {
        // console.log('hi')
          fetch("/pets")
            .then((response) => response.json())
            .then(json => {
              // console.log(json);
              setPets(json);
            })
            .catch((error) => {
              console.log(error);
            });
        };

    const onSelectPet = (id) => {
        console.log(id)
        //need to add link to pet Id profile / dashboard
    }

    useEffect(() => {
        getPets();
    });


    return (
        <div>
            <h1>Choose a pet</h1>

            <ul>
            {pets.length > 0 && pets.map((i) => 
            <li className="button-list" key={i.id} onClick={() => onSelectPet(i.id)}>
               {i.pet_name}
            </li>)}
          </ul>

            <div>
            
      </div>
      <button className="btn btn-success">Add a new pet</button>
            

        </div>
    )
}

export default ChoosePet;