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

  const contactForm = document.querySelector('form[action^="mailto:"]')
  if (contactForm) {
    const params = new URLSearchParams(window.location.search)
    const route = params.get("route")
    const profile = params.get("profile")
    const routeDetails = {
      "route-a": {
        level: "Starting from scratch",
        target: "Level B profile (Route A)",
        message:
          "I am interested in Route A, starting from scratch and preparing toward a Level B profile.",
      },
      "route-b": {
        level: "Around B1",
        target: "Level B profile (Route B)",
        message:
          "I am interested in Route B, preparing from around B1 toward a Level B profile.",
      },
      "route-c": {
        level: "Around B2",
        target: "Level C profile (Route C)",
        message:
          "I am interested in Route C, preparing from around B2 toward a Level C profile.",
      },
    }
    const selectedRoute = routeDetails[route]

    if (selectedRoute) {
      contactForm.elements.goal.value = "Federal SLE"
      contactForm.elements.level.value = selectedRoute.level
      contactForm.elements.target.value = profile
        ? `${selectedRoute.target} - ${profile}`
        : selectedRoute.target
      contactForm.elements.message.value = selectedRoute.message
    }
  }
})
