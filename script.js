window.addEventListener("load", function () {
  document.getElementById("popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
