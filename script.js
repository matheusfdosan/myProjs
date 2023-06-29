const cardsData = [
  {
    img: "https://images.unsplash.com/photo-1633633749183-2b804f9f8159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    title: "3DIMG",
    description: "3D Image Creator",
  },
  {
    img: "https://images.unsplash.com/photo-1569615313731-7407da4f4594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Mr. Computer",
    description: "Sale of computer parts",
  },
  {
    img: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "GeekLife",
    description: "Geek doll shop",
  },
  {
    img: "https://images.unsplash.com/photo-1623118176012-9b0c6fa0712d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Booming Economy",
    description: "Economy news website",
  },
  {
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "DJ Town",
    description: "DJ track sales",
  },
  {
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=821&q=80",
    title: "To The Heavens",
    description: "An online travel agency",
  },
]

const container = document.querySelector(".cards-grid")

cardsData.forEach((card) => {
  container.innerHTML += `
  <div class="card">
    <div class="img" style="background-image: url(${card.img});"></div>
    <div class="text">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    </div>
  </div>
  `
})

