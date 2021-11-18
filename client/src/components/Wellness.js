import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Wellness(props) {
  const initialStateFood = {
    brand: "",
    date: "",
    unit: "",
    notes: "",
    pet_id: `${props.pet.pet_id}`,
  };
  const initialStateGrooming = {
    type: "",
    date: "",
    notes: "",
    pet_id: `${props.pet.pet_id}`,
  };
  // const [inputPet, setInputPet] = useState (initialState)
  const [inputFood, setInputFood] = useState(initialStateFood);
  const [inputGrooming, setInputGrooming] = useState(initialStateGrooming);

  const [diet, setDiet] = useState([]);
  const [hair, setHair] = useState([]);

  const [pet, setPet] = useState(props.pet);

  const [food, setFood] = useState([]);
  const [groom, setGroom] = useState([]);

  useEffect(() => {
    fetch(`/wellness/diet/`)
      .then((response) => response.json())
      .then((food) => setDiet(food))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`/wellness/grooming`)
    .then(response => response.json())
    .then(grooming => setHair(grooming))
    .catch(err => console.log(err))
  }, [])

  const getFoods = () => {
    fetch(`/wellness/diet/${props.pet.pet_id}`)
      .then((response) => response.json())
      .then((food) => {
        console.log(food);
        let filterwellness = food.filter((e) => e.grooming !== 1);
        console.log(filterwellness);
        setFood(filterwellness);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("wellness/diet", props.pet);
    setPet(props.pet);
  }, []);

  useEffect(() => {
    getFoods();
  }, [diet]);

  const getGrooms = () => {
    fetch(`/wellness/grooming/${props.pet.pet_id}`)
      .then((response) => response.json())
      .then((groom) => {
        console.log(groom);
        let filterwellness = groom.filter((e) => e.diet !== 1);
        console.log(filterwellness);
        setGroom(filterwellness);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("wellness/grooming", props.pet);
    setPet(props.pet);
  }, []);

  useEffect(() => {
    getGrooms();
  }, [hair]);

  const handleInputFood = (event) => {
    let { name, value } = event.target;
    setInputFood({ ...inputFood, [name]: value });
  };

  const handleInputGrooming = (event) => {
    let { name, value } = event.target;
    setInputGrooming({ ...inputGrooming, [name]: value });
  };

  const handleSubmitFood = (event) => {
    event.preventDefault();
    addFood();
  };

  const handleSubmitGrooming = (event) => {
    event.preventDefault();
    addGrooming();
  };

  const addFood = () => {
    fetch(`/wellness/diet/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputFood),
    })
      .then(response => response.json())
      .then(food => {
        setInputFood(initialStateFood)
        setDiet(food)})
      .catch((error) => {
        console.log(error);
      });
    setShowFood(false);
  };

  const addGrooming = () => {
    fetch(`/wellness/grooming/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputGrooming),
    })
      .then(response => response.json())
      .then(groom => {
        setInputGrooming(initialStateGrooming)
        setHair(groom)})
      .catch((error) => {
        console.log(error);
      });
    setShowGrooming(false);
  };

  const [showFood, setShowFood] = useState(false);
  const [showGrooming, setShowGrooming] = useState(false);

  return (
    <div className="wellness-container">
      {/* <Nav pet={pet}/> */}
      {/* <h2> Wellness Status of {pet.pet_name}</h2> */}

      <div className="wellness-cards">
        <div className="indi-wellness-cards card1">
        <h4> Food Tracker </h4>
          <div className="card-content">
            {food &&
              food.map((foodsy) => (
                <div key={foodsy.id}>
                  <ul>
                    <li><strong>{foodsy.brand} </strong></li>
                    <li>{foodsy.date.slice(0, 10)}</li>
                    <li>{foodsy.unit}</li>
                    <li>{foodsy.notes}</li>
                  </ul>
                </div>
              ))}
            <button className="btn btn-primary wellness-button" onClick={() => setShowFood(true)}>
              Add new food
            </button>
          </div>
        </div>

        <div className="indi-wellness-cards card2">
         <h4> Last Grooming </h4>
          <div className="card-content">
            {groom.map((groomsy) => (
              <div key={groomsy.id}>
                <ul>
                  <li><strong>{groomsy.type}</strong></li>
                  <li>{groomsy.date.slice(0, 10)}</li>
                  <li>{groomsy.notes}</li>
                </ul>
              </div>
            ))}
            <button className="btn btn-primary wellness-button" onClick={() => setShowGrooming(true)}>
              Add new info
            </button>
          </div>
        </div>
      </div>

      {showFood ? (
        <div>
          <Modal show={showFood} onHide={() => setShowFood(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add new type of food:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowFood(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmitFood}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <div></div>
      )}

      {showGrooming ? (
        <div>
          <Modal show={showGrooming} onHide={() => setShowGrooming(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Last appointment:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowGrooming(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmitGrooming}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Wellness;
