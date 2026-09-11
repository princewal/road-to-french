import "../css/style.css"
import "./script.js"
import logoUrl from "../assets/images/logo.png"

const header = `
  <header class="fixed inset-x-0 top-0 z-50">
    <a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
    <nav aria-label="Primary navigation" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between rounded-b-[1.5rem] border border-white/30 bg-white/80 px-4 py-4 shadow-[0_12px_40px_rgba(17,19,23,0.05)] backdrop-blur-sm transition-all duration-300 lg:px-6">
        <a href="/index.html" class="flex items-center" aria-label="Road to French home">
          <img src="${logoUrl}" alt="Road to French logo" class="h-10 w-auto object-contain" />
          <span class="ml-2 whitespace-nowrap text-sm font-bold">Road to French</span>
        </a>
        <div class="hidden items-center gap-7 lg:flex">
          <a href="/index.html" class="nav-link text-sm font-black uppercase tracking-[0.18em] text-[#111827]">Home</a>
          <details class="relative">
            <summary class="flex cursor-pointer list-none items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#111827] transition hover:text-theme-primary-strong [&::-webkit-details-marker]:hidden">
              Programs <span aria-hidden="true" class="text-xs">+</span>
            </summary>
            <div class="absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <a href="/pr.html" class="block rounded-xl px-4 py-3 text-sm font-bold text-[#111827] transition hover:bg-theme-primary-soft hover:text-theme-primary-strong">TCF/TEF · PR</a>
              <a href="/sle.html" class="block rounded-xl px-4 py-3 text-sm font-bold text-[#111827] transition hover:bg-theme-primary-soft hover:text-theme-primary-strong">Federal SLE</a>
              <a href="/private-coaching.html" class="block rounded-xl px-4 py-3 text-sm font-bold text-[#111827] transition hover:bg-theme-primary-soft hover:text-theme-primary-strong">Private Coaching</a>
            </div>
          </details>
          <a href="/coaches.html" class="nav-link text-sm font-black uppercase tracking-[0.18em] text-[#111827]">Coaches</a>
          <a href="/faq.html" class="nav-link text-sm font-black uppercase tracking-[0.18em] text-[#111827]">FAQ</a>
          <a href="/contact.html" class="nav-link text-sm font-black uppercase tracking-[0.18em] text-[#111827]">Contact</a>
          <a href="/contact.html" class="inline-flex items-center justify-center rounded-full bg-theme-primary px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-theme-text transition hover:bg-theme-primary-hover">Book a Call</a>
        </div>
        <div class="flex items-center gap-3 lg:hidden">
          <a href="/contact.html" class="inline-flex items-center justify-center rounded-full bg-theme-primary px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-theme-text transition hover:bg-theme-primary-hover">Book</a>
          <button type="button" data-menu-toggle aria-controls="mobile-menu" class="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800" aria-label="Open menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>
          </button>
        </div>
      </div>
      <div data-mobile-menu id="mobile-menu" class="hidden overflow-hidden rounded-b-3xl border border-slate-200 bg-white shadow-xl lg:hidden">
        <div class="flex flex-col gap-2 px-5 py-4">
          <a href="/index.html" class="nav-link py-2 text-sm font-black uppercase tracking-[0.18em] text-[#111827]">Home</a>
          <details>
            <summary class="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-black uppercase tracking-[0.18em] text-[#111827] [&::-webkit-details-marker]:hidden">Programs <span aria-hidden="true" class="text-base">+</span></summary>
            <div class="flex flex-col gap-1 pb-2 pl-4">
              <a href="/pr.html" class="py-2 text-sm font-bold text-slate-700 transition hover:text-theme-primary-strong">TCF/TEF · PR</a>
              <a href="/sle.html" class="py-2 text-sm font-bold text-slate-700 transition hover:text-theme-primary-strong">Federal SLE</a>
              <a href="/private-coaching.html" class="py-2 text-sm font-bold text-slate-700 transition hover:text-theme-primary-strong">Private Coaching</a>
            </div>
          </details>
          <a href="/coaches.html" class="nav-link py-2 text-sm font-black uppercase tracking-[0.18em] text-[#111827]">Coaches</a>
          <a href="/faq.html" class="nav-link py-2 text-sm font-black uppercase tracking-[0.18em] text-[#111827]">FAQ</a>
          <a href="/contact.html" class="nav-link py-2 text-sm font-black uppercase tracking-[0.18em] text-[#111827]">Contact</a>
        </div>
      </div>
    </nav>
  </header>
`

const footer = `
  <footer class="bg-theme-primary text-white">
    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-center gap-4 border-b border-white/20 pb-6 text-sm font-bold uppercase tracking-[0.18em] sm:gap-8">
        <a href="/index.html" class="transition hover:text-theme-primary-soft">Home</a>
        <a href="/coaches.html" class="transition hover:text-theme-primary-soft">Coaches</a>
        <a href="/pr.html" class="transition hover:text-theme-primary-soft">TCF/TEF · PR</a>
        <a href="/sle.html" class="transition hover:text-theme-primary-soft">Federal SLE</a>
        <a href="/private-coaching.html" class="transition hover:text-theme-primary-soft">Private Coaching</a>
        <a href="/faq.html" class="transition hover:text-theme-primary-soft">FAQ</a>
        <a href="/contact.html" class="transition hover:text-theme-primary-soft">Contact</a>
        <a href="/contact.html" class="transition hover:text-theme-primary-soft">Book a Call</a>
      </div>
      <div class="flex flex-col gap-8 py-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <img src="${logoUrl}" alt="Road to French logo" class="h-12 w-auto" />
          <p class="mt-5 max-w-md text-base leading-7 text-white/80">Structured French coaching for PR candidates, federal professionals, and learners with a clear goal.</p>
          <a href="/contact.html" class="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-theme-primary transition hover:bg-theme-primary-soft">Book a Call</a>
        </div>
        <div>
          <p class="mt-5 text-base leading-7 text-white/80">Tell us about your goal, timeline, and current French level.</p>
          <a href="mailto:hello@roadtofrench.com" class="mt-4 inline-block text-xl font-medium text-white underline decoration-white/70 underline-offset-4">hello@roadtofrench.com</a>
        </div>
      </div>
      <div class="border-t border-white/20 pt-8"><p class="text-sm text-white/80">© 2026 Road to French. All rights reserved.</p></div>
    </div>
  </footer>
`

document.querySelector("[data-site-header]").innerHTML = header
document.querySelector("[data-site-footer]").innerHTML = footer
