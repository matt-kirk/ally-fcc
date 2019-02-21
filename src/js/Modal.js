const Modal = () => {
  $('.Login').on('click', function() {
    $('body').addClass('is-showing');
  });

  $('.Modal-close').on('click', function() {
    $('body').removeClass('is-showing');
  });
}

export default Modal;