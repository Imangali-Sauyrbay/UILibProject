import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head-active', contentActive = 'accordion-content-active', paddings = 40) {
  this.forEach(el => {
    $(el).click(() => {
      const nextEl = el.nextElementSibling;
      $(el).toggleClass(headActive);
      $(nextEl).toggleClass(contentActive);

      if(el.classList.contains(headActive)) {
        nextEl.style.maxHeight = nextEl.scrollHeight + paddings + 'px';
        return;
      }

      nextEl.style.maxHeight = '0px'
    });
  });
}

$('.accordion-head').accordion();