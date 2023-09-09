import $ from './../core';
const _resetDots = (dots, activeIdx) => {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[activeIdx].classList.add('active')
}

$.prototype.carousel = function() {
  this.forEach(el => {
    const width = +getComputedStyle(el.querySelector('.carousel-inner')).width.replace(/[^\.\d]/g, '');

    const slides = el.querySelectorAll('.carousel-item');
    slides.forEach(slide => slide.style.width = width + 'px');

    const slidesWrapper = el.querySelector('.carousel-slides');
    slidesWrapper.style.width = 100 * slides.length + '%';

    let offset = 0;

    const dots = Array.from(el.querySelectorAll('.carousel-indicators li'));
    _resetDots(dots, Math.round(offset / width));

    const withSlideController = (cb) => (e) => {
      e.preventDefault();
      offset = cb(offset, width, slides.length - 1);

      slidesWrapper.style.transform = `translateX(-${offset}px)`;
      _resetDots(dots, Math.round(offset / width));
    }


    const nextBtns = Array.from(el.querySelectorAll('[data-slide="next"]'));
    const prevBtns = Array.from(el.querySelectorAll('[data-slide="prev"]'));

    $(nextBtns).click(
      withSlideController((offset, width, slidesCount) => offset >= width * slidesCount ? 0 : offset + width)
    );

    $(prevBtns).click(
      withSlideController((offset, width, slidesCount) => offset <= 0 ? width * slidesCount : offset - width)
    );

    $(dots).click((e) => {
      const slideTo = +(e.target.getAttribute('data-slide-to') || 0);
      offset = width * slideTo;
      slidesWrapper.style.transform = `translateX(-${offset}px)`;
      _resetDots(dots, Math.round(offset / width));
    });
  });
}

$('.carousel').carousel();

const _getCarouselInnerHTml = (images) => (`
  <ol class="carousel-indicators">
    ${images.reduce((acc, _, i) => acc + `<li class="active" data-slide-to="${i}"></li>`, '')}
  </ol>
  <div class="carousel-inner">
    <div class="carousel-slides">
        ${images.reduce((acc, url) => acc + `<div class="carousel-item"><img src="${url}" alt="img"></div>`, '')}
    </div>
  </div>
  <a href="#" class="carousel-prev" data-slide="prev"><span class="carousel-prev-icon">&lt;</span></a><a href="#" class="carousel-next" data-slide="next"><span class="carousel-next-icon">&gt;</span></a>
`);

$.prototype.createCarousel = function(props = {}) {
  const {images} = props
  const wrapper = this[0];
  wrapper.classList.add('carousel');
  wrapper.innerHTML = _getCarouselInnerHTml(images);

  this.carousel();
}