var burgerButton = document.getElementById("burger-menu");

burgerButton.onclick = function addClass() {
  var elem = document.getElementById("drop-down-menu");
  if (elem.classList.contains("drop-down-menu")) {
    elem.classList.remove("drop-down-menu");
  } else {
    elem.classList.add("drop-down-menu");
  }
};
