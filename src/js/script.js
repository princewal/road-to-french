import "../css/style.css"

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

  const nav = document.querySelector("header nav")
  const updateNavbar = () => {
    if (!nav) return
    const panel = nav.firstElementChild
    if (!panel) return
    panel.classList.toggle("bg-white/95", window.scrollY >= 40)
    panel.classList.toggle(
      "shadow-[0_12px_40px_rgba(17,19,23,0.05)]",
      window.scrollY >= 40,
    )
  }

  updateNavbar()
  window.addEventListener("scroll", updateNavbar, { passive: true })

  const menuToggle = document.querySelector("[data-menu-toggle]")
  const mobileMenu = document.querySelector("[data-mobile-menu]")
  const programMenus = document.querySelectorAll("header nav details")

  const closeProgramMenus = () => {
    programMenus.forEach((menu) => menu.removeAttribute("open"))
  }

  document.addEventListener("click", (event) => {
    programMenus.forEach((menu) => {
      if (!menu.contains(event.target)) {
        menu.removeAttribute("open")
      }
    })
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProgramMenus()
    }
  })

  if (menuToggle && mobileMenu) {
    const setMenuState = (isOpen) => {
      mobileMenu.classList.toggle("hidden", !isOpen)
      menuToggle.setAttribute("aria-expanded", String(isOpen))
    }

    menuToggle.addEventListener("click", (event) => {
      event.preventDefault()
      const isOpen = mobileMenu.classList.contains("hidden")
      setMenuState(isOpen)
    })

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false)
      })
    })

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setMenuState(false)
      }
    })
  }

  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    })
  }
})
