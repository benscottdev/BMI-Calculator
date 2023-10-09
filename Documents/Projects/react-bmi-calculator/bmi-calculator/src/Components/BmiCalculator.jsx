import { useState } from "react";

function BmiCalculator(props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);

  const getHeight = (e) => {
    setHeight(e.target.value);
  };

  const getWeight = (e) => {
    setWeight(e.target.value);
  };

  const getAge = (e) => {
    setAge(e.target.value);
  };

  let finalBmi = ((weight / (height * height)) * 10000).toFixed(1);

  const calculateBmi = (e) => {
    e.preventDefault();
    props.getBmi(finalBmi);
  };

  return (
    <div className="calculator">
      <form onSubmit={calculateBmi}>
        <input
          id="height"
          type="numeric"
          placeholder="Height (m)"
          onChange={getHeight}
          required
        />
        <input
          id="weight"
          type="number"
          placeholder="Weight (kg)"
          onChange={getWeight}
          required
        />
        <input
          id="age"
          type="number"
          placeholder="Age"
          onChange={getAge}
          required
        />
        <button id="submit">Calculate</button>
      </form>
    </div>
  );
}
export default BmiCalculator;
