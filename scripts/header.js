window.onscroll = () => {
  if (
    document.documentElement.scrollTop < 1) {
    document.querySelector("body > header").classList.remove("addShadow")
  } else {
    document.querySelector("body > header").classList.add("addShadow")
  }
}
