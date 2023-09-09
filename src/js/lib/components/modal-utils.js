import $ from '../core';

const _isScrollbarVisible = (el) => el.scrollHeight > el.clientHeight;

const _calcScrollBarWidth = () => {
  if(!_isScrollbarVisible(document.documentElement)) return 0;

  const div = document.createElement('div');
  div.style.cssText = `
    width: 50px;
    height: 50px;
    overflow-y: scroll;
    visibility: hidden;
  `;

  document.body.appendChild(div);
  const scrollBarWidth = div.offsetWidth - div.clientWidth;
  div.parentNode.removeChild(div);

  return scrollBarWidth;
}

const _closeAllModals = () => {
  $('.modal').fadeOut(500);
  document.body.style.overflow = '';
  document.body.style.marginRight = '';
};

const _deleteAfter = (cb, target, shouldDelete, time = 1000) => (e) => {
  cb(e);
  const targetEl = document.querySelectorAll(target);
  if(shouldDelete) setTimeout(() => targetEl.forEach(el => el.parentNode !== null && el.parentNode.removeChild(el)), time);
};

const _createBtns = (btn) => {
  const {text, classNames = [], close, cb} = btn;

  const button = document.createElement('button');
  button.classList.add('btn', ...classNames);
  button.textContent = text;

  if(close) button.setAttribute('data-close', 'true');
  if(typeof cb === 'function') button.addEventListener('click', cb);

  return button;
};

const _getModalHtml = (title, body) => `
  <div class="modal-dialog">
    <div class="modal-content">
      <button class="close" data-close>
          <span>&times;</span>
      </button>
      <div class="modal-header">
          <div class="modal-title">${title}</div>
      </div>
      <div class="modal-body">
          ${body}
      </div>
      <div class="modal-footer">
      
      </div>
    </div>
  </div>
`;

export {
  _isScrollbarVisible,
  _calcScrollBarWidth,
  _closeAllModals,
  _deleteAfter,
  _createBtns,
  _getModalHtml
}