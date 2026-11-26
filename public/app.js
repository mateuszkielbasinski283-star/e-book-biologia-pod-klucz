const pages = [...document.querySelectorAll('.sample')]
const preview = document.querySelector('#preview')
const picture = document.querySelector('#preview-image')
const prev = document.querySelector('#previous')
const next = document.querySelector('#next')
let currentPage = 0

function showPage(index) {
  currentPage = index
  const page = pages[index]
  const title = page.querySelector('span').textContent.trim()
  document.querySelector('#preview-title').textContent = title
  picture.src = page.href
  picture.alt = page.querySelector('img').alt
  document.querySelector('.dialog-image').scrollTop = 0
  document.querySelector('#counter').textContent = `${index + 1} / ${pages.length}`
  prev.disabled = index === 0
  next.disabled = index === pages.length - 1
  if (document.activeElement === prev && prev.disabled) next.focus()
  if (document.activeElement === next && next.disabled) prev.focus()
}

for (const page of pages) {
  page.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    showPage(Number(page.dataset.page))
    preview.showModal()
  })
}
prev.addEventListener('click', () => showPage(currentPage - 1))
next.addEventListener('click', () => showPage(currentPage + 1))
document.querySelector('#close-preview').addEventListener('click', () => preview.close())
preview.addEventListener('click', event => {
  if (event.target === preview) preview.close()
})
preview.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' && !prev.disabled) showPage(currentPage - 1)
  if (event.key === 'ArrowRight' && !next.disabled) showPage(currentPage + 1)
})

const settings = window.oferta
const checkout = document.querySelector('#checkout')
const status = document.querySelector('#status')

function httpsUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : ''
  } catch {
    return ''
  }
}

function setText(id, value) {
  if (value) document.getElementById(id).textContent = value
}

function setLink(id, label, href) {
  if (!href) return
  const anchor = document.createElement('a')
  anchor.textContent = label
  anchor.href = href
  document.getElementById(id).replaceChildren(anchor)
}

const terms = httpsUrl(settings.regulamin)
const privacy = httpsUrl(settings.prywatnosc)
const consumer = httpsUrl(settings.prawaKonsumenta)
const contact = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(settings.email) ? settings.email : ''
const cart = httpsUrl(settings.koszyk)

setText('price', settings.cena)
setText('delivery', settings.dostawa)
setText('delivery-faq', settings.dostawa)
setText('seller', settings.sprzedawca)
setLink('contact', contact, contact ? `mailto:${contact}` : '')
setLink('terms', 'Regulamin sklepu', terms)
setLink('privacy', 'Polityka prywatności', privacy)
setLink('consumer', 'Prawa konsumenta', consumer)

if (cart) {
  checkout.href = cart
  status.hidden = true
} else {
  checkout.addEventListener('click', () => status.focus({preventScroll: true}))
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.remove('pending')
      observer.unobserve(entry.target)
    }
  })
  document.querySelectorAll('.reveal').forEach(element => {
    if (element.getBoundingClientRect().top > innerHeight) {
      element.classList.add('pending')
      observer.observe(element)
    }
  })
}
