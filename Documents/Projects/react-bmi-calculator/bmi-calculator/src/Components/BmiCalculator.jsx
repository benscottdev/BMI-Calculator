function BmiCalculator() {
  return (
    <div className="calculator">
      <form>
        <input id="height" type="numeric" placeholder="Height" />
        <input id="weight" type="number" placeholder="Weight" />
        <input id="age" type="number" placeholder="Age" />
        <button id="submit">Calculate</button>
      </form>
    </div>
  );
}
export default BmiCalculator;
