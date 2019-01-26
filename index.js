$(document).ready(function(){

  const getUnselectedTabs = () => {
    return $('main').find('.tab');
  }

  const manageTabFlow = (element) => {
    if ($(element).hasClass('selected')) {

    } else if ($(element).hasClass('header-selected')) {
      $(element).removeClass('header-selected').addClass('header-default')
    } else if ($(element).hasClass('header')) {
      $(element).removeClass('header-default').addClass('header-selected')
      const tabs = getUnselectedTabs();
    } else if ($(element).hasClass('tab')) {
      $(element).removeClass('tab-default').addClass('tab-selected')
      console.log('tab clicked');
    }
  }



  const selectCategory = (element) => {
    const notSelectedCateogires = $(element).siblings();

    notSelectedCateogires.each(function(index, element) {
      const categoryHeading = $(element).children('div.category-heading')
      const contentContainer = $(element).children('div.content-container')

      if ($(element).hasClass('selected')) {
        console.log('has class selected');
        $(categoryHeading).removeClass('not-selected').addClass('none-selected');
        // $(categoryHeading).removeClass('selected-heading').addClass('not-selected-heading')
      } else {
        $(element).removeClass('none-selected selected').addClass('not-selected');
        $(categoryHeading).removeClass('selected-heading').addClass('not-selected-heading')
        $(contentContainer).addClass('hidden')
      }

    });
    element.removeClass('none-selected not-selected').addClass('selected');
  };


  const displaySelectedContent = (element) => {
    const heading = element.find('div.category-heading');
    const contentContainer = element.find('div.content-container');

    if ($(element).hasClass('selected')) {
      $(element).removeClass('none-selected selected').addClass('not-selected');
      heading.removeClass('selected-heading').addClass('not-selected-heading');
      contentContainer.addClass('hidden');
      return;
    }

    heading.removeClass('not-selected-heading').addClass('selected-heading');
    contentContainer.removeClass('hidden');
  };

  $('.tab, header').on('click', function(event) {
    var element = $(this);
    manageTabFlow(element);
    // selectCategory(element);
    // displaySelectedContent(element);
  });
});
