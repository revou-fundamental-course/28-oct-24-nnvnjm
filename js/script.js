// Function to calculate BMI
function calculateBMI() {
  // Get values from the form inputs
  const weight = parseFloat(document.getElementById("weight").value);
  const heightInCm = parseFloat(document.getElementById("height").value);

  // Convert height from cm to meters
  const heightInMeters = heightInCm / 100;

  // Calculate BMI
  const bmi = weight / heightInMeters ** 2;

  // Display BMI result
  document.getElementById("bmiValue").textContent = bmi.toFixed(1);

  // Interpretation of BMI
  let interpretation;
  if (bmi < 18.5) {
    interpretation = "Kekurangan Berat Badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Normal (ideal)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    interpretation = "Kelebihan Berat Badan";
  } else {
    interpretation = "Kegemukan (Obesitas)";
  }
  document.getElementById("bmiInterpretation").textContent = interpretation;
}
