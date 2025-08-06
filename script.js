function convertMark(mark) {
  if (mark >= 67) {
    return 10;
  } else {
    let val = mark * 0.15;
    return (val - Math.floor(val)) >= 0.6 ? Math.ceil(val) : Math.floor(val);
  }
}

document.getElementById("marksForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const model1 = parseFloat(document.getElementById("model1").value);
  const model2 = parseFloat(document.getElementById("model2").value);
  const model3 = parseFloat(document.getElementById("model3").value);
  const nptel = parseFloat(document.getElementById("nptel").value);
  const online = parseFloat(document.getElementById("online").value);
  const hackathon = parseFloat(document.getElementById("hackathon").value);

  if (
    model1 < 0 || model1 > 100 ||
    model2 < 0 || model2 > 100 ||
    model3 < 0 || model3 > 100 ||
    nptel < 0 || nptel > 8 ||
    online < 0 || online > 7 ||
    hackathon < 0 || hackathon > 5
  ) {
    alert("Enter within limit!");
    return;
  }

  const model12_avg = (model1 + model2) / 2;
  const model12_internal = convertMark(model12_avg);
  const model3_internal = convertMark(model3);
  const total = model12_internal + model3_internal + nptel + online + hackathon;

  document.getElementById("output").innerHTML = `
    <h2>--- INTERNAL MARKS ---</h2>
    Model 1 and 2: ${model12_internal}/10 <br>
    Model 3: ${model3_internal}/10 <br>
    NPTEL: ${nptel}/8 <br>
    Online Course: ${online}/7 <br>
    Hackathon: ${hackathon}/5 <br>
    <strong>TOTAL INTERNAL: ${total}/40</strong>
  `;
});
