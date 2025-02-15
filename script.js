let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("change", function () {
  if (!this.checked) {
    document.location.href = "#navigation";
  }
});
