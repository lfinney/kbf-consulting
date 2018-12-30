$(document).ready(function(){

  const selectCategory = (element) => {
    const notSelectedCateogires = $(element).siblings();

    notSelectedCateogires.each(function(index, element) {
      const categoryHeading = $(element).children('div.category-heading')
      const contentContainer = $(element).children('div.content-container')
      console.log(contentContainer, categoryHeading);
      $(element).removeClass('none-selected selected').addClass('not-selected');
      $(categoryHeading).removeClass('selected-heading').addClass('not-selected-heading')
      $(contentContainer).addClass('hidden')
    });
    element.removeClass('none-selected not-selected').addClass('selected');
  };


  const displaySelectedContent = (element) => {
    const heading = element.find('div.category-heading');
    const contentContainer = element.find('div.content-container');

    heading.removeClass('not-selected-heading').addClass('selected-heading');
    contentContainer.removeClass('hidden');
  };

  $('.category').on('click', function(event) {
    var element = $(this);
    selectCategory(element);
    displaySelectedContent(element);
  });
});
