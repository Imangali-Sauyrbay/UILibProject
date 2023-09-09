import $ from './../core';

const _fadeIn = (el, display) => {
  el.style.display = display || 'block';
  return (complection) => {
    el.style.opacity = complection;
  }
}

const _fadeOut = (el) => (complection) => {
  el.style.opacity = 1 - complection;
  if(complection >= 1) el.style.display = 'none';
}

$.prototype.fadeIn = function(duration, display, fin) {
  this.forEach((el) => {
    const anim = this.animateOverTime(duration, _fadeIn(el, display), fin);
    requestAnimationFrame(anim);
  });

  return this;
}


$.prototype.fadeOut = function(duration, fin) {
  this.forEach((el) => {
    const anim = this.animateOverTime(duration, _fadeOut(el), fin);
    requestAnimationFrame(anim);
  });

  return this;
}

$.prototype.toggleFade = function(duration, display, fin) {
  this.forEach((el) => {
    let func = () => {};

    if(getComputedStyle(el).display === 'none'){
      func = _fadeIn(el, display);
    } else {
      func = _fadeOut(el);
    }

    const anim = this.animateOverTime(duration, func, fin);
    requestAnimationFrame(anim);
  });

  return this;
}

$.prototype.animateOverTime = function(duration = 10, cb = Function.prototype, fin = Function.prototype) {
  let startTime;

  function _animateOverTime(time){
    if(!startTime) startTime = time;

    const elapsedTime = time - startTime;
    const complection = Math.min(elapsedTime / duration, 1)
    cb(complection);

    if(elapsedTime < duration){
      requestAnimationFrame(_animateOverTime);
    } else {
      fin();
    }
  }

  return _animateOverTime;
}