function enviarASheet(datos) {
  fetch("https://script.google.com/macros/s/AKfycbyfaj6Kl08akzFjo4JtNr_a6NoSghd2uFzUKPEyjSA/dev", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log("✅ Respuesta Google Sheets:", data);
  })
  .catch(err => console.error("❌ Error:", err));
}
