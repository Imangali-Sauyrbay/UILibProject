import $ from './../core';


$.prototype.click = function(handler) {
  this.forEach((el) => {
    if(typeof handler === 'function'){
      el.addEventListener('click', handler);
      return;
    }

    el.click();
  });

  return this;
}

const withEventListener = (shouldRemove = false) => function(event, cb) {
  if(!event ||
    !cb ||
    typeof event !== 'string' ||
    typeof cb !== 'function'
  ) return this;

  const listener = (shouldRemove ? 'remove' : 'add') + 'EventListener';

  this.forEach((el) => {
    el[listener](event, cb);
  });
  return this;
}

$.prototype.on = withEventListener();
$.prototype.off = withEventListener(true);