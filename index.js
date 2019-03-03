$(document).ready(function(){

  const getTabs = () => $('main').find('.tab');
  const getHeader = () => $('body').find('header');

  const manageTabFlow = (element) => {
    const tabs = getTabs();
    const header = getHeader();

    if ($(element).hasClass('tab-selected')) {
      $(header).removeClass('header-not-selected').addClass('header-default');
      $(header).find('.header-content-container').removeClass('hidden')
      $.each(tabs, function(index, tab) {
        $(tab).removeClass('tab-selected tab-not-selected').addClass('tab-default');
      });
    } else if ($(element).hasClass('header-not-selected')) {
      $(element).removeClass('header-not-selected').addClass('header-default');
      $(header).find('.header-content-container').removeClass('hidden');
      $.each(tabs, function(index, tab) {
        $(tab).removeClass('tab-selected tab-default').addClass('tab-not-selected');
      });
    } else if ($(element).hasClass('tab')) {
      $.each(tabs, function(index, tab) {
          $(tab).removeClass('tab-default tab-selected').addClass('tab-not-selected');
      });
      $(element).removeClass('tab-not-selected').addClass('tab-selected');
      $(header).removeClass('header-default').addClass('header-not-selected');
      $(header).find('.header-content-container').addClass('hidden')
    }
  }

  const manageContentDisplay = (element) => {
    const tabHeading = $(element).find('.tab-heading');
    const tabContent = $(element).find('.tab-content');

    if (tabHeading.hasClass('selected-heading')){
      tabHeading.removeClass('selected-heading').addClass('not-selected-heading');
      tabContent.addClass('hidden');
    } else {
      const tabs = getTabs();
      $.each(tabs, function(index, tab) {
        $(tab).find('.tab-heading').removeClass('selected-heading').addClass('not-selected-heading');
        $(tab).find('.tab-content').addClass('hidden');
      })
      tabHeading.removeClass('not-selected-heading').addClass('selected-heading');
      tabContent.removeClass('hidden');
    }
  }

  const spinLogo = (event) => {

  }

  $('.tab, header').on('click', function(event) {
    var element = $(this);
    manageTabFlow(element);
    manageContentDisplay(element);
  });
});
