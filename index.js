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

  $('#logo-circle').on('mouseenter', function(event) {
    console.log('mouseenter');
    var _CURRENT_ANGLE = 360;

    	$("#logo-circle").css({ transform: 'rotate(' + _CURRENT_ANGLE + 'deg)' });
    	$("#ball-1").css({ transform: 'rotate(-' + _CURRENT_ANGLE + 'deg)' });
    	$("#ball-2").css({ transform: 'rotate(-' + _CURRENT_ANGLE + 'deg)' });
    });
});
