import $ from './../core';

$.prototype.dropdown = function() {
  this.forEach((el) => {
    const id = el.getAttribute('id');
    const menu = $(`[data-toggle-id="${id}"]`);
    $(el).click(() => {
      menu.toggleFade(400);
    })
  });
}

$('.dropdown-toggle').dropdown();