const cardsData = [
  {
    showInHome: true,
    img: "https://images.unsplash.com/photo-1633633749183-2b804f9f8159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    title: "3DIMG",
    description: "3D Image Creator",
  },
  {
    showInHome: true,
    img: "https://images.unsplash.com/photo-1569615313731-7407da4f4594?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Mr. Computer",
    description: "Sale of computer parts",
  },
  {
    showInHome: true,
    img: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "GeekLife",
    description: "Geek doll shop",
  },
  {
    showInHome: true,
    img: "https://images.unsplash.com/photo-1623118176012-9b0c6fa0712d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Booming Economy",
    description: "Economy news website",
  },
  {
    showInHome: true,
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "DJ Town",
    description: "DJ track sales",
  },
  {
    showInHome: true,
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=821&q=80",
    title: "To The Heavens",
    description: "An online travel agency",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Pictures & Pictures",
    description: "Sale of lenses for photographers",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/photo-1513918573039-35f42ae13895?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    title: "Grandpa Cars",
    description: "Vintage car sale",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbWlkYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Fancy Table",
    description: "A classic restaurant",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    title: "Builder Friend",
    description: "An online store to sell tools",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    title: "Karaoke Babe",
    description: "A karaoke blog",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/photo-1578311639859-c8679fccd561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Material Theme",
    description: "An online stationery store",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FiZWxlaXJlaXJvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Hairdresser Leila",
    description: "A hairdresser's blog",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=802&q=80",
    title: "BitMoney",
    description: "A news paper about the world of bitcoins",
  },
  {
    showInHome: false,
    img: "https://images.unsplash.com/photo-1633025094151-6fc996255e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    title: "Happy day",
    description: "An online costume shop",
  },
]

let container

cardsData.forEach((card) => {
  if (card.showInHome == true) {
    container = document.querySelector(".cards-grid")
  } else {
    container = document.querySelector(".cards-grid.all")
  }

  const HTMLModel = `
  <div class="card">
  <div class="img" style="background-image: url(${card.img});"></div>
  <div class="text">
  <h3>${card.title}</h3>
  <p>${card.description}</p>
  </div>
  </div>
  `

  container.insertAdjacentHTML("beforeend", HTMLModel)
})
