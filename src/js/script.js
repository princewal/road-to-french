document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader-wrapper")

  if (preloader) {
    document.body.classList.add("preloader-site")
    window.addEventListener(
      "load",
      () => {
        preloader.classList.add("is-hidden")
        document.body.classList.remove("preloader-site")
      },
      { once: true },
    )
  }

  const navbar = document.querySelector(".navbar.fixed-top")
  const updateNavbar = () => {
    if (!navbar) return
    navbar.classList.toggle("bg-primary", window.scrollY >= 200)
  }

  updateNavbar()
  window.addEventListener("scroll", updateNavbar, { passive: true })

  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    })
  }
})
