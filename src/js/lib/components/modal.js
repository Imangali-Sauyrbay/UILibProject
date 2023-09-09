import $ from './../core';
import {
  _calcScrollBarWidth,
  _closeAllModals,
  _deleteAfter,
  _createBtns,
  _getModalHtml
} from './modal-utils';

$.prototype.modal = function (shouldDelete) {
  this.forEach((el) => {
    const target = el.getAttribute('data-target');
    const modal = $(target);

    $(el).click((e) => {
      e.preventDefault();
      modal.fadeIn(500);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = _calcScrollBarWidth() + 'px';
    });

    $(`${target} [data-close]`).forEach((el) => {
      $(el).click(_deleteAfter(_closeAllModals, target, shouldDelete));
    });
  
    $(target).click((e) => {
      if (e.target.classList.contains('modal')) _deleteAfter(_closeAllModals, target, shouldDelete)(e);
    });
  });

}

$.prototype.createModal = function (props = {}) {
  const {text: {title, body}, btns} = props;

  this.forEach((trigger) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', trigger.getAttribute('data-target').slice(1));
    modal.innerHTML = _getModalHtml(title, body);

    const buttons = btns.map(_createBtns);
    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal);

    $(trigger).modal(true);
    $(modal).fadeIn(500);
  });
}

$('[data-toggle="modal"]').modal();
