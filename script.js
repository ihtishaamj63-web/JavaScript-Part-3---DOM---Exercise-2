const updateName = document.getElementById("updateNameBtn");
const profName = document.getElementById("profileName");
const updateRole = document.getElementById("updateRoleBtn");
const profRole = document.getElementById("profileRole");
const toggleStatus = document.getElementById("toggleStatusBtn");
const profCard = document.getElementById("profileCard");
const profImage = document.getElementById("profileImage");
const changeImage = document.getElementById("changeImageBtn");
const statusText = document.getElementById("statusText");

updateName.addEventListener("click", function () {
  const userName = prompt("Enter your name:");

  if (userName === null) return;

  const trimmed = userName.trim();

  if (trimmed === "") {
    alert("Name cannot be empty.");
  } else if (trimmed.length < 3) {
    alert("Name must be at least 3 characters long.");
  } else {
    profName.textContent = trimmed;
  }
});

updateRole.addEventListener("click", function () {
  const userRole = prompt("Enter your role:");

  if (userRole === null) return;

  const trimmed = userRole.trim();

  if (trimmed === "") {
    alert("Role cannot be empty.");
  } else if (trimmed.length < 2) {
    alert("Role must be at least 2 characters long.");
  } else {
    profRole.textContent = trimmed;
  }
});

toggleStatus.addEventListener("click", function () {
  profCard.classList.toggle("active-status");

  statusText.textContent = profCard.classList.contains("active-status")
    ? "Active"
    : "Inactive";
});

changeImage.addEventListener("click", function () {
  const imageUrl = prompt("Enter the URL of the new profile image:");

  if (imageUrl === null) return;

  const trimmed = imageUrl.trim();

  if (trimmed === "") {
    alert("Image URL cannot be empty.");
  } else if (
    !trimmed.startsWith("http://") &&
    !trimmed.startsWith("https://")
  ) {
    alert("Please enter a valid URL starting with http:// or https://");
  } else {
    profImage.src = trimmed;
  }
});
