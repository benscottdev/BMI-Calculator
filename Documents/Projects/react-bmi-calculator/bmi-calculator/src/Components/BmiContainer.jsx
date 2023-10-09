import BmiCalculator from "./BmiCalculator";
import BmiResults from "./BmiResults";

function BmiContainer() {
  return (
    <div>
      <div className="container">
        <h1 id="title">BMI CALCULATOR</h1>
        <BmiCalculator />
        <BmiResults />
      </div>
    </div>
  );
}
export default BmiContainer;
