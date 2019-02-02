$(document).ready(function(){

  const getTabs = () => $('main').find('.tab');

  const getHeader = () => $('body').find('header');

  const manageTabFlow = (element) => {
    const tabs = getTabs();
    const header = getHeader();
    if ($(element).hasClass('tab-selected') || $(element).hasClass('header-selected')) {
      $(header).removeClass('header-selected header-not-selected').addClass('header-default');
      $.each(tabs, function(index, tab) {
        $(tab).removeClass('tab-selected tab-not-selected').addClass('tab-default');
      });
    } else if ($(element).hasClass('header')) {
      $(element).removeClass('header-default header-not-selected').addClass('header-selected')
      $.each(tabs, function(index, tab) {
        $(tab).removeClass('tab-selected tab-default').addClass('tab-not-selected');
      });
    } else if ($(element).hasClass('tab')) {
      $.each(tabs, function(index, tab) {
          $(tab).removeClass('tab-default tab-selected').addClass('tab-not-selected');
      });
      $(element).removeClass('tab-not-selected').addClass('tab-selected');
      $(header).removeClass('header-default').addClass('header-not-selected');
    }
  }


  $('.tab, header').on('click', function(event) {
    var element = $(this);
    manageTabFlow(element);
  });
});
