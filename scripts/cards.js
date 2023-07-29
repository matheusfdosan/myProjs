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
      <div class="card" data-techs="${repos.topics}" data-name="${
      repos.name
    }" data-projects="${
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

  /* ---------- */
  /*    Modal   */
  /* ---------- */

  const cards = container.children

  for (let i = 0; i <= cards.length; i++) {
    cards[i].onclick = (event) => {
      document.querySelector(".card-modal").classList.add("on")
      document.querySelector(".card-modal").style.overflowY = "auto"
      document.querySelector("html").style.overflowY = "hidden"

      let card = event.target.parentElement

      if (event.target.parentElement.className === "text") {
        card = event.target.parentElement.parentElement
      }

      /* Add modal info */

      document.querySelector(
        ".card-modal img"
      ).src = `https://raw.githubusercontent.com/matheusfdosan/${card.getAttribute(
        "data-name"
      )}/master/.github/preview.png`

      document.querySelector(".card-modal .container h2").innerText = card
        .getAttribute("data-name")
        .replace(/-/g, " ")

      document.querySelector(".card-modal p").innerHTML =
        card.querySelector("div.text > p").innerText

      document.querySelector(".card-modal .techs").innerHTML = card
        .getAttribute("data-techs")
        .replace(/,/g, ", ")

      document.querySelector(".card-modal span a").href =
        "https://matheusfdosan.github.io/" + card.getAttribute("data-name")

      /* Close modal */
      document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector("html").style.overflowY = "scroll"
        document.querySelector(".card-modal").classList.remove("on")
      })
    }
  }
}

start().finally(() => {
  const cards = document.querySelectorAll(".some-projects .card")
  console.log(cards)

  for (const key in cards) {
    if (key >= 6) {
    cards[key].classList.add('hidden')}
  }
})
