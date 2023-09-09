import $ from './../core';

$.prototype.forEach = function(cb = Function.prototype){
  for(let i = 0; i < this.length; i++){
    if(cb(this[i], i, this) === false) break;
  }
}

$.prototype.html = function(content) {
  let result = [];

  this.forEach((el)=>{
    if(content){
      el.innerHTML = content;
      return;
    }

    result.push(el.innerHTML);
  });

  result = result.length > 0 ? result : this
  return result;
}

$.prototype.eq = function(n) {
  if(n < 0) {
    n = this.length + n;
  }

  return new $.prototype.init(this[n]);
}

$.prototype.index = function() {
  const parent = this[0].parentNode;
  const children = [...parent.children];

  const cb = (node) => node === this[0];

  return children.findIndex(cb);
}

$.prototype.find = function(selector) {
  let res = [];
 
  this.forEach((el) => {
    const arr = el.querySelectorAll(selector);
    if(arr.length === 0 || !arr) return;
    res = [...res, ...arr];
  });
  
  return new $.prototype.init(res);
}

$.prototype.closest = function(selector) {
  const res = [];

  this.forEach((el) => {
    const closest = el.closest(selector);
    (closest && !res.includes(closest)) && res.push(closest);
  });

  return new $.prototype.init(res); 
}

$.prototype.siblings = function() {
  const res = [];

  this.forEach((el) => {
    const sibs = [].slice.call(el.parentNode.children);
    sibs.forEach((sib) => {
      if(sib !== el && !res.includes(sib)) res.push(sib);
    });
  })

  return new $.prototype.init(res); 
}
