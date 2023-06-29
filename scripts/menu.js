let modalActive = false
const modal = document.querySelector(".modal-overflow")
const burguer = document.querySelector(".burguer")

burguer.addEventListener("click", (event) => {
  const lineOne = event.target.children[0]
  const lineTwo = event.target.children[1]
  const lineThree = event.target.children[2]

  if (modalActive === false) {
    lineOne.style.transform = "rotate(45deg) translate(9px, 10px)"
    lineTwo.style.opacity = "0"
    lineThree.style.transform = "rotate(-45deg) translate(9px, -10px)"

    document.body.style.overflowY = "hidden"
    modal.classList.add("active")
    modalActive = true
  } else {
    lineOne.style.transform = "rotate(0deg) translate(0px, 0px)"
    lineTwo.style.opacity = "1"
    lineThree.style.transform = "rotate(0deg) translate(0px, 0px)"

    document.body.style.overflowY = "scroll"
    modal.classList.remove("active")
    modalActive = false
  }
})
