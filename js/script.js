// Function to calculate BMI
function calculateBMI() {
    // Ambil nilai berat dan tinggi dari form
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInCm = parseFloat(document.getElementById("height").value);

    // Check for valid input
    if (!weight || !heightInCm) {
        alert("Masukkan berat badan dan tinggi badan yang valid.");
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = heightInCm / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters ** 2);

    // Display BMI result
    document.getElementById("bmiValue").textContent = `BMI Anda: ${bmi.toFixed(1)}`;

    // Interpretation of BMI
    let interpretation;
    let healthTips = "";

    if (bmi < 18.5) {
        interpretation = "Kekurangan Berat Badan";
        healthTips = "Menunjukkan bahwa seseorang memiliki berat badan di bawah normal, yang bisa mengindikasikan malnutrisi atau masalah kesehatan lainnya. Orang dalam kategori ini berisiko mengalami kekurangan nutrisi, sistem imun lemah, dan osteoporosis.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Normal (ideal)";
        healthTips = " Rentang ini menunjukkan berat badan yang sehat dan ideal untuk tinggi badan seseorang. Ini menunjukkan keseimbangan yang baik antara lemak tubuh dan massa tubuh, serta risiko yang lebih rendah untuk penyakit kronis.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        interpretation = "Kelebihan Berat Badan";
        healthTips = "Menunjukkan bahwa seseorang memiliki lemak tubuh lebih dari yang disarankan. Ini meningkatkan risiko terkena masalah kesehatan seperti hipertensi dan diabetes tipe 2, sehingga diperlukan perbaikan gaya hidup.";
    } else if (bmi >= 30 && bmi <=39.9) {
        interpretation = "Obesitas Kelas (1 & 2)";
        healthTips = "Kategori ini menandakan lemak tubuh yang berlebihan dengan risiko tinggi terkena penyakit serius, seperti penyakit jantung, stroke, dan diabetes. Intervensi medis dan perubahan gaya hidup diperlukan untuk mengurangi risiko.";
    } else {
        interpretation = "Obesitas Ekstrem (kelas 3)";
        healthTips = "Merupakan tingkat obesitas yang sangat tinggi dan berbahaya, meningkatkan risiko komplikasi serius seperti masalah kardiovaskular, berbagai jenis kanker, dan gangguan pernapasan. Perlu penanganan medis segera dan pengawasan ketat.";
    }

    // Display result in the HTML
      document.getElementById("bmiInterpretation").textContent = interpretation;
      document.getElementById("healthTips").textContent = healthTips;

    //   Download Botton
    const downloadButtonContainer = document.getElementById("downloadButtonContainer");
    downloadButtonContainer.innerHTML = ""; // Clear any existing button
  
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download Hasil BMI";
    downloadButton.onclick = function () {
    
        // PDF document using jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // PDF Content
        doc.text(`Interpretasi BMI: ${interpretation}`, 10, 10);
        doc.text("Tips Kesehatan:", 10, 20);
        doc.text(healthTips, 10, 30, { maxWidth: 180 });

        // Save the PDF
        doc.save("Hasil_BMI.pdf");
    };
  
    downloadButtonContainer.appendChild(downloadButton);  
}




// Function to reset the result display
function resetResult() {
  document.getElementById("bmiValue").textContent = "";
  document.getElementById("bmiInterpretation").textContent = "";
  document.getElementById("healthTips").textContent = "";
  document.getElementById("downloadButtonContainer").innerHTML = ""; // Clear the download button
}

