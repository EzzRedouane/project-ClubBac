document.addEventListener("DOMContentLoaded", function () {
  // Load saved table data from localStorage
  const savedData = localStorage.getItem("tableData");
  if (savedData) {
      const rows = JSON.parse(savedData);
      rows.forEach(row => addRowToTable(row.image, row.name, row.sector, row.address, row.about, row.linkedin, row.instagram));
  }
});

document.querySelector(".save").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent page reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const sector = document.getElementById("sector").value.trim();
  const address = document.getElementById("address").value.trim();
  const about = document.getElementById("about").value.trim();
  const linkedin = document.getElementById("linkedin").value.trim();
  const instagram = document.getElementById("instagram").value.trim();
  const imageInput = document.getElementById("imageInput");

  // Validate required fields
  if (!name || !sector || !address || !about || !imageInput.files.length) {
      alert("Please fill in all required fields (Name, Image, Sector, About, Address).");
      return;
  }

  // Handle image input
  const reader = new FileReader();
  reader.onload = function (e) {
      const imageSrc = e.target.result;

      // Add the new row after validation passes
      addRowToTable(imageSrc, name, sector, address, about, linkedin, instagram);
      saveTableToLocalStorage(); // Save the updated table to localStorage
  };
  reader.readAsDataURL(imageInput.files[0]);

  // Reset form fields
  document.querySelector("form").reset();
  document.getElementById("imagePreview").innerHTML = ""; // Clear the image preview
});

function addRowToTable(imageSrc, name, sector, address, about, linkedin, instagram) {
  const tableBody = document.querySelector("#ordersTable tbody");

  // Create a new row
  const newRow = document.createElement("tr");

  // Add columns to the row
  newRow.innerHTML = `
      <td><img src="${imageSrc}" alt="member" style="width: 50px; height: 50px;"></td>
      <td>${name}</td>
      <td>${sector}</td>
      <td>${address}</td>
      <td>${about}</td>
      <td>${linkedin ? `<a href="${linkedin}" target="_blank">LinkedIn</a>` : "N/A"}</td>
      <td>${instagram ? `<a href="${instagram}" target="_blank">Instagram</a>` : "N/A"}</td>
      <td><button class="delete-btn">Delete</button></td>
  `;

  // Append the row to the table
  tableBody.appendChild(newRow);

  // Add delete functionality
  newRow.querySelector(".delete-btn").addEventListener("click", function () {
      newRow.remove();
      saveTableToLocalStorage(); // Save the updated table to localStorage
  });
}

function saveTableToLocalStorage() {
  const tableRows = document.querySelectorAll("#ordersTable tbody tr");
  const tableData = [];

  tableRows.forEach(row => {
      const image = row.querySelector("td:nth-child(1) img").src;
      const name = row.querySelector("td:nth-child(2)").textContent;
      const sector = row.querySelector("td:nth-child(3)").textContent;
      const address = row.querySelector("td:nth-child(4)").textContent;
      const about = row.querySelector("td:nth-child(5)").textContent;
      const linkedin = row.querySelector("td:nth-child(6) a") ? row.querySelector("td:nth-child(6) a").href : "";
      const instagram = row.querySelector("td:nth-child(7) a") ? row.querySelector("td:nth-child(7) a").href : "";

      tableData.push({ image, name, sector, address, about, linkedin, instagram });
  });

  localStorage.setItem("tableData", JSON.stringify(tableData));
}
