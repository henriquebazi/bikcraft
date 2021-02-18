const html = document.documentElement
html.classList.add("js")

if(window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote",
    auto: true,
    time: 5000
  })
  
  new SimpleSlide({
    slide: "portfolio",
    auto: true,
    time: 5000,
    nav: true
  })
}

if (window.SimpleAnime) {
  new SimpleAnime();
}