function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //si tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem light de Caio Takahata")
  } else {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Imagem de Caio Takahata")
  }
}
