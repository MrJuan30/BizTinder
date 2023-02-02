import React, { useState } from 'react'

const FormBusiness = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [interests, setInterests] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Interests: ${interests}`);
        console.log(`City: ${city}`);
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor="interests">Interests:</label>
      <input
        type="text"
        id="interests"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default FormBusiness