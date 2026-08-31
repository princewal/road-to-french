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
    const panel = nav.querySelector(".rounded-b-\\[1.5rem\\]")
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

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden")
      mobileMenu.classList.toggle("hidden")
      menuToggle.setAttribute("aria-expanded", String(!isOpen))
    })
  }

  const tabButtons = document.querySelectorAll(".tab-button")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab

      tabButtons.forEach((btn) => {
        const active = btn === button
        btn.classList.toggle("active", active)
        btn.classList.toggle("text-slate-500", !active)
        btn.classList.toggle("text-[#111827]", active)
      })

      tabPanels.forEach((panel) => {
        const active = panel.dataset.panel === target
        panel.classList.toggle("hidden", !active)
        panel.classList.toggle("active", active)
      })
    })
  })

  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    })
  }
})
