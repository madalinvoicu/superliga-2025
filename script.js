const url = "https://script.google.com/macros/s/AKfycbw63l_2KP4G9Wzwv3nnLGiGU_ovlYwaB1uTqbCDCtXJ9-aprg52vR505fRONXcrCzSp/exec"; // ← înlocuiește cu URL-ul real de Web App
fetch(url)
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#clasament tbody");
    data.forEach(echipa => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${echipa.Nume}</td><td>${echipa.Puncte}</td>`;
      tbody.appendChild(row);
    });
  })
  .catch(err => {
    console.error("Eroare la preluarea clasamentului:", err);
  });
