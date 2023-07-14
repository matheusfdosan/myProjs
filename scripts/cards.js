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
        allCards[i].style.display = "none"
      }
    })
})
