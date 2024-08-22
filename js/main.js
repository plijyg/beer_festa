$(document).ready(function () {

  let ticket = document.querySelector('.ticket');
  ticket.addEventListener('click', click);

  function click(event) {
    let elem = event.currentTarget;
    if (elem.style.transform == "rotateY(180deg)") {
      elem.style.transform = "rotateY(0deg)";
    } else {
      elem.style.transform = "rotateY(180deg)";
    }
  }

});