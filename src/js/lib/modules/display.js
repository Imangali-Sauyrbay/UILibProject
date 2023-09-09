import $ from './../core';

const withStyleDisplay = (style, shouldToggle = false) => function() {
  this.forEach((el) => {
    if(!el.style){
      return;
    }

    if(shouldToggle){
      el.style.display = el.style.display === 'none' ? '' : 'none';
      return;
    }

    el.style.display = style;
  });

  return this;
}

$.prototype.show = withStyleDisplay('');
$.prototype.hide = withStyleDisplay('none');
$.prototype.toggle = withStyleDisplay('', true);