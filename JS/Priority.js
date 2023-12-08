document.querySelector(".select .selected")
  .addEventListener("click", function () {
    document.querySelector(".select").classList.add("show");
  });
document.querySelectorAll(".dropdown a").forEach(function (item) {
  item.addEventListener("click", function () {
    document.querySelector(".select").classList.remove("show");
  });
});
