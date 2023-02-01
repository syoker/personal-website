const row = document.querySelectorAll(".row");
const pointer = document.querySelectorAll(".pointer");
const containerCards = document.querySelector(".containerCards");

pointer.forEach((perPointer, i) => {
  row[i].addEventListener("click", () => {
    let position = i;
    let newPosition = position * -50;

    containerCards.style.transform = `translateX(${newPosition}%)`;

    pointer.forEach((perPointer, i) => {
      pointer[i].classList.remove("active");
    });
    pointer[i].classList.add("active");
  });
});
