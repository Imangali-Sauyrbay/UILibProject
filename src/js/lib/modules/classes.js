import $ from './../core';

const withClassList = (prop, isOnlyFirst = false) => function (...classes) {
  const classNames = isOnlyFirst ? [classes[0]] : classes;

  this.forEach((el) => {
    if(el.classList){
      el.classList[prop](...classNames);
    }
  });

  return this;
}

$.prototype.addClass = withClassList('add');
$.prototype.removeClass = withClassList('remove');
$.prototype.toggleClass = withClassList('toggle', true);