const input = document.querySelector(".search-input")

input.addEventListener("input", (e) => {
  const filter = e.target.value.toUpperCase()

  const cardList = document.querySelector(".cards-grid")
  const card = cardList.querySelectorAll("div.card")

  for (let i = 0; i < cardList.childElementCount; i++) {
    const item = card[i]
    const textValue = item.getAttribute("data-projects")

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      item.style.display = ""
    } else {
      item.style.display = "none"
    }
  }
})

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
    document.body.style.overflow = "hidden"
    modal.classList.add("active")
    modalActive = true

    lineOne.style.transform = "rotate(45deg) translate(9px, 10px)"
    lineTwo.style.opacity = "0"
    lineThree.style.transform = "rotate(-45deg) translate(9px, -10px)"
  } else {
    document.body.style.overflow = "scroll"
    modal.classList.remove("active")
    modalActive = false

    lineOne.style.transform = "rotate(0deg) translate(0px, 0px)"
    lineTwo.style.opacity = "1"
    lineThree.style.transform = "rotate(0deg) translate(0px, 0px)"
  }
})

window.onscroll = () => {
  if (document.documentElement.scrollTop < 1) {
    document.querySelector("body > header").classList.remove("addShadow")
  } else {
    document.querySelector("body > header").classList.add("addShadow")
  }
}

const API = fetch("https://api.github.com/users/matheusfdosan/repos")

API.then((response) => {
  response
    .json()
    .then((data) => {
      container = document.querySelector(".cards-grid")

      data.forEach((repos) => {
        if (
          repos.topics.includes("docs") ||
          repos.topics.includes("markdown")
        ) {
          return
        }

        const HTMLModel = `
      <div class="card" data-projects="${
        repos.name.replace(/-/g, " ") + " " + repos.description
      }">
      <div class="img" style="background-image: url(https://raw.githubusercontent.com/matheusfdosan/${
        repos.name
      }/master/.github/preview.png);"></div>
      <div class="text">
      <h3>${repos.name.replace(/-/g, " ")}</h3>
      <p>${repos.description}</p>
      </div>
      </div>`

        container.insertAdjacentHTML("beforeend", HTMLModel)
      })
    })
    .then(() => {
      const homeContainer = document.querySelector(
        ".some-projects > .cards-grid"
      )

      const allCards = homeContainer.children

      for (let i = 6; i <= allCards.length; i++) {
        allCards[i].classList.add("hidden")
      }
    })
})
