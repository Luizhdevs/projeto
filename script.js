function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") // Funciona da mesma forma que if else

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se estiver light mode, add a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Luiz Henrique em pé com camiseta cinza e barba"
    )
  } else {
    //se estiver sem ligth mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
