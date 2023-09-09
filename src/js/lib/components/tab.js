import $ from './../core';

$.prototype.tab = function() {
  this.forEach(el => {
    $(el).click(() => {
      $(el)
        .addClass('tab-item-active')
        .siblings()
        .removeClass('tab-item-active')
        .closest('.tab')
        .find('.tab-content')
        .removeClass('tab-content-active')
        .eq($(el).index())
        .addClass('tab-content-active');
    });
  });
}

$('[data-tabpanel] .tab-item').tab();