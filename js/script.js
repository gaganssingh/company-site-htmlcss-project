const yearElement = document.querySelector(".year");

const displayCurrentYear = () => {
  const getYear = new Date().getFullYear();
  yearElement.textContent = getYear;
};

window.addEventListener("DOMContentLoaded", displayCurrentYear);
