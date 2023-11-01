const weight = document.querySelector(".weightrange");
const height = document.querySelector(".heightrange");
const weightValue = document.querySelector(".weight");
const heightValue = document.querySelector(".height");
const BMIValue = document.querySelector(".BMI");
const bodyType = document.querySelector(".body");

weight.addEventListener("input", () => {
  weightValue.innerHTML = weight.value + " kg";
  BMICalculate();
});

height.addEventListener("input", () => {
  heightValue.innerHTML = height.value + " cm";
  BMICalculate();
});

function BMICalculate() {
  let heighttoMeters = height.value / 100;
  let BMI = weight.value / (heighttoMeters * heighttoMeters);
  BMIValue.innerHTML = BMI.toFixed(2);

  if (BMI < 18.5) {
    bodyType.innerHTML = "Under Weight";
    bodyType.style.color = "#BC9A00";
    BMIValue.style.color = "#BC9A00";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    bodyType.innerHTML = "Normal Weight";
    bodyType.style.color = "#4CBB6F";
    BMIValue.style.color = "#4CBB6F";
  } else if (BMI >= 25 && BMI <= 29.9) {
    bodyType.innerHTML = "Over Weight";
    bodyType.style.color = "#FF5555";
    BMIValue.style.color = "#FF5555";
  }else {
    bodyType.innerHTML = "Obese";
    bodyType.style.color = "#950000";
    BMIValue.style.color = "#950000";
  }
}
