const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);// Get the weight and height values from the input fields
  const results = document.getElementById("results");
  const weightGuide = document.getElementById("weight-guide");

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || height == " " || weight == " ") {
    results.innerHTML = "Please enter valid positive numbers for weight and height.";
    // document.getElementById("results").textContent = "Please enter valid positive numbers for weight and height.";
  }
  else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2); // Calculate BMI (height is converted from cm to m)
    results.innerHTML = `Your BMI is: <span>${bmi}</span>`;

    if (bmi < 18.5) {
        weightGuide.innerHTML = "You are underweight. Consider consulting a healthcare provider for advice.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        weightGuide.innerHTML = "You have a normal weight. Keep up the good work!";
    } else if (bmi >= 24.9 && bmi < 29.9) {
        weightGuide.innerHTML = "You are overweight. Consider a balanced diet and regular exercise.";
    }
        else {
        weightGuide.innerHTML = "You are obese. It's important to consult a healthcare provider for guidance.";
    }
}
});