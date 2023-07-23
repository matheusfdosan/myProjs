/**
 * Pegar a URL
 * Filtrar docs e markdown
 * Adicionar cards
 */

async function start() {
  const username = "matheusfdosan"
  const perPage = 100
  let page = 1

  const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
  const repos = await fetch(url).then((response) => response.json())

  container = document.querySelector(".cards-grid")

  repos.forEach((repos) => {
    if (repos.topics.includes("docs") || repos.topics.includes("markdown")) {
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
}

start()
  .then(() => {
    const homeContainer = document.querySelector(".some-projects > .cards-grid")

    const allCards = homeContainer.children

    for (let i = 6; i <= allCards.length; i++) {
      allCards[i].classList.add("hidden")
    }
  })
  .catch((err) => console.log("A little something wrong isn't right! " + err))
