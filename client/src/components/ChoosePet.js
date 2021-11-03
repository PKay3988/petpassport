import React from 'react'

export const ChoosePet = () => {
    return (
        <div>
            <h1>Choose a pet</h1>
      
            <div>
            <form> 
                <input type="radio" value="butterscotch" name="pet" /> Butterscotch
                <input type="radio" value="mrpeanut" name="pet" /> Mr Peanut
                <input type="radio"  value="new-pet" name="pet"/>Add a new pet 
                <input type="text" name="othertext" onchange=""/>
                <button type="submit" value="Submit"> Submit </button>
            </form>
      </div>
            {/* <button>delete a pet</button> */}

        </div>
    )
}

export default ChoosePet;