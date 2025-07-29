const SCRIPT_URL = "https://script.google.com/macros/s/ID_TAU/exec"; // Înlocuiește cu URL-ul Web App real

fetch(SCRIPT_URL)
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#clasament tbody");
    tbody.innerHTML = "";

    data.forEach(row => {
      const nume = row[0];     // prima coloană din Sheet = Nume
      const puncte = row[1];   // a doua coloană din Sheet = Puncte

      const tr = document.createElement("tr");

      const tdNume = document.createElement("td");
      tdNume.textContent = nume;

      const tdPuncte = document.createElement("td");
      tdPuncte.textContent = puncte;

      tr.appendChild(tdNume);
      tr.appendChild(tdPuncte);

      tbody.appendChild(tr);
    });
  })
  .catch(error => {
    console.error("Eroare la încărcarea clasamentului:", error);
  });
