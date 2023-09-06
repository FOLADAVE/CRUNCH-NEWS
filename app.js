function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  
    // Save the dark mode preference to localStorage
    if (element.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.removeItem("darkMode");
    }
  }
  
  // Retrieve the dark mode preference from localStorage
  const darkModePreference = localStorage.getItem("darkMode");
  if (darkModePreference === "enabled") {
    document.body.classList.add("dark-mode");
  }
  if(darkModePreference === "enabled"){
    document.body.classList.change("")
  }

 const targetDiv = document.getElementById("contacts");
const btn = document.getElementById("list");


const hiddenState = localStorage.getItem("hiddenState");
if (hiddenState === "hidden") {
  targetDiv.style.display = "none";
}

btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
    localStorage.setItem("hiddenState", "hidden"); 
  } else {
    targetDiv.style.display = "block";
    localStorage.removeItem("hiddenState"); 
  }
};
document.addEventListener("click", function (event) {
    const isClickedInside = targetDiv.contains(event.target) || btn.contains(event.target);
    if (!isClickedInside) {
      targetDiv.style.display = "none";
      localStorage.setItem("hiddenState", "hidden");
    }
  });
