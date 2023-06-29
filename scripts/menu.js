let modalActive = false
const modal = document.querySelector(".modal-overflow")
const burguer = document.querySelector(".burguer")

burguer.addEventListener("click", ({ target }) => {
  let lineOne
  let lineTwo
  let lineThree

  if (target.className === "line") {
    lineOne = target.parentElement.children[0]
    lineTwo = target.parentElement.children[1]
    lineThree = target.parentElement.children[2]
  } else {
    lineOne = target.children[0]
    lineTwo = target.children[1]
    lineThree = target.children[2]
  }

  if (modalActive === false) {
    document.body.style.overflowY = "hidden"
    modal.classList.add("active")
    modalActive = true

    lineOne.style.transform = "rotate(45deg) translate(9px, 10px)"
    lineTwo.style.opacity = "0"
    lineThree.style.transform = "rotate(-45deg) translate(9px, -10px)"
  } else {
    document.body.style.overflowY = "scroll"
    modal.classList.remove("active")
    modalActive = false

    lineOne.style.transform = "rotate(0deg) translate(0px, 0px)"
    lineTwo.style.opacity = "1"
    lineThree.style.transform = "rotate(0deg) translate(0px, 0px)"
  }
})
