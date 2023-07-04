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