import React , { useEffect , useState} from 'react'
import { Popup } from 'react-leaflet';
import {Link} from 'react-router-dom'



function Wellness(props) {
    const initialStateFood = {brand: "", date: "", unit: "", notes: "", pet_id: ""};
    const initialStateGrooming = {type: "", date: "", notes: "", pet_id: ""};
    // const [inputPet, setInputPet] = useState (initialState)
    const [inputFood, setInputFood] = useState (initialStateFood)
    const [inputGrooming, setInputGrooming] = useState (initialStateGrooming)

    // const [diet, setDiet] = useState([])
    const [pet, setPet] = useState(props.pet)
    const [food, setFood] = useState ([])
    const [groom, setGroom] = useState ([])

    const getFoods = () => {
        fetch("/wellness/diet")
        .then((response) => response.json())
        .then((food) => {
            console.log(food)
            let filterwellness = food.filter((e) => e.grooming !== 1)
            console.log(filterwellness);
          setFood(filterwellness);
        })
        .catch((error) => {
          console.log(error);
        });
      };

    useEffect(() => {
        console.log("wellness/diet", props.pet)
        setPet(props.pet)
      }, []);

      useEffect(() => {
        getFoods()
      }, []);

      const getGrooms = () => {
        fetch("/wellness/grooming")
        .then((response) => response.json())
        .then((groom) => {
            console.log(groom)
            let filterwellness = groom.filter((e) => e.diet !== 1)
            console.log(filterwellness);
          setGroom(filterwellness);
        })
        .catch((error) => {
          console.log(error);
        });
      };

    useEffect(() => {
        console.log("wellness/grooming", props.pet)
        setPet(props.pet)
      }, []);

      useEffect(() => {
        getGrooms()
      }, []);

    const handleInputFood = (event) => {
        let {name, value } = event.target;
          setInputFood({ ...inputFood, [name]: value})
        }

    const handleInputGrooming = (event) => {
        let {name, value } = event.target;
              setInputGrooming({ ...inputGrooming, [name]: value})
        }
  
        const handleSubmitFood = (event) => {
          event.preventDefault(); 
          addFood();
        }
  
        const handleSubmitGrooming = (event) => {
          event.preventDefault();
          addGrooming();
        }
    const addFood = () => {
        fetch(`/wellness/diet/${pet.pet_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputFood)
        })
        .then(setInputFood(initialStateFood))
        .catch((error) => {
            console.log(error);
        });

    };

    const addGrooming = () => {
        fetch(`/wellness/grooming/${pet.pet_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputGrooming)
        })
        .then(setInputGrooming(initialStateGrooming))
        .catch((error) => {
            console.log(error);
        });
    }

    return (
     <div>
        <h2> Wellness Status of {pet.pet_name}</h2>
        <h3> Food </h3>

        <h5> Last info </h5>
        <p></p>
        <p></p>
        {food.map((foodsy) => 
        <div key={foodsy.id}>
        <ul>
        <li>{foodsy.brand},</li>
        <li>{foodsy.date},</li>
        <li>{foodsy.unit},</li> 
        <li>{foodsy.notes};</li>
        </ul>
        </div>)
}
    
    {/* <Popup>           */}
           <input
            value={inputFood.brand}
            onChange={handleInputFood}
            name="brand"
            type="text"
            placeholder="Brand"
          />

          <input
            value={inputFood.date}
            onChange={handleInputFood}
            name="date"
            type="date"
            placeholder="Last bought"
          />

          <input
            value={inputFood.unit}
            onChange={handleInputFood}
            name="unit"
            type="text"
            placeholder="Size"
          />

          <input
            value={inputFood.notes}
            onChange={handleInputFood}
            name="notes"
            type="text"
            placeholder="Notes"
          />

          {/* <input
            value={inputFood.pet_id}
            onChange={handleInputFood}
            name="pet_id"
            type="text"
          /> */}
           {/* </Popup>  */}
         
          <button className="button" onClick={handleSubmitFood}>
            Add new info
          </button>

          {/* <button className="button">
            <Link to="/addnewfood">
            Add new info
            </Link>
          </button> */}
<p></p>
<p></p>
          <h3> Grooming </h3>
          <h5> Last info </h5>
          <p></p>
          <p></p>
        {groom.map((groomsy) => 
        <div key={groomsy.id}>
        <ul>
        <li>{groomsy.type}</li>, 
        <li>{groomsy.date}</li>, 
        <li>{groomsy.notes};</li>
        </ul>
        </div>)
        }
          <input
            value={inputGrooming.type}
            onChange={handleInputGrooming}
            name="type"
            type="text"
            placeholder="Type"
          />

          <input
            value={inputGrooming.date}
            onChange={handleInputGrooming}
            name="date"
            type="date"
            placeholder="When was it"
          />

          <input
            value={inputGrooming.notes}
            onChange={handleInputGrooming}
            name="notes"
            type="text"
            placeholder="Notes"
          />

          {/* <input
            value={inputGrooming.pet_id}
            onChange={handleInputGrooming}
            name="pet_id"
            type="text"
          /> */}
         
         <button className="button" onClick={handleSubmitGrooming}>
            Add new info
          </button>

          {/* <button className="button">
            <Link to="/addnewgrooming">
            Add new
            </Link>
          </button> */}
    </div>
    );  
}

export default Wellness;