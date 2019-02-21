const Tabs = () => {
  const tabs = document.querySelectorAll('.Tabs-list button');

  $.each(tabs, function() {
    $(this).on('click', function() {
      if(!$(this).hasClass('is-visible')) {
        const visible = $('.Tabs-list .is-visible');
        visible.removeClass('is-visible');
        visible.addClass('is-hidden');
        visible.attr('aria-selected', 'false');

        $(this).removeClass('is-hidden');
        $(this).addClass('is-visible');
        $(this).attr('aria-selected', true);
      }
    });
  })
}

export default Tabs;