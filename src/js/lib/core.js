const $ = function(selector) {
  return new $.prototype.init(selector);
}

$.prototype.init = function(selector) {
  if(!selector)
    return this; // {}

  let result = [];

  if(Array.isArray(selector)){
    selector.forEach(el => {
      if(el.tagName){
        result.push(el);
      }

      if(typeof el === 'string'){
        const arr = document.querySelectorAll(el);
        if(arr.length){
          result = [...result, ...arr];
        }
      }
    });
  }

  if(selector.tagName){
    result.push(selector);
  }

  if(typeof selector === 'string'){
    result = document.querySelectorAll(selector);
  }

  Object.assign(this, result);
  this.length = result.length;

  return this;
}

$.prototype.init.prototype = $.prototype;
window.$ = $;

export default $;