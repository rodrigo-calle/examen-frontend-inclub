/* eslint-disable no-undef */
import React, {useState} from 'react'
import './AddPokemon.scss';

const AddPokemon = () => {
    const [image, setImage] = useState();
    const [newPokemon, setNewPokemon] = useState({
        name: "",
        description: "",
        mainAbility: "",
      })



    const handleChange = (e) => {
        const  {name, value} = e.target;
        setNewPokemon((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    console.log(newPokemon)
    const handleSubmit = (e) => {
        e.preventDefault();

        document.querySelector("#pict").addEventListener("change", (e) => {
            const reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.addEventListener("load", () => {
                setImage(reader.result);
            });
        })

        console.log(image)
        localStorage.setItem('pokemon', JSON.stringify(newPokemon))

    }
    
    
    return (
        <div className="container-add-pokemon">
            <h1 className="container-add-pokemon__title">Register New Pokemon</h1>
            <div className="form-container">
                <form className="form-container__form">
                    <input type="text" placeholder="Pokemon Name" name="name" onChange={handleChange} /> <br />
                    <textarea placeholder="Pokemon Description"  name="description" onChange={handleChange} />   <br />
                    <input type="text" placeholder="Main Ability" name="ability" onChange={handleChange} /> <br />
                    <input type="file" id="pict"  accept="image/*"/> <br />
                    <input type="submit" value="Register" className="submit-register" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    )
}

export default AddPokemon;