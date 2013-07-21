function categoryClick(evt){
  var category = evt.target.hash.substring(1);
  $container.isotope({ filter: '[data-category="'+category+'"]' });

  //$('.design-thumbs li:not([data-category="'+category+'"])').hide();
  //$('.design-thumbs li[data-category="'+category+'"]').show();

}

$(function(){
  window.$container = $('.design-thumbs');
  $container.isotope({
    // options
    itemSelector : 'li',
    layoutMode : 'fitRows'
  });
  $("nav").on("click", ".category-link", categoryClick);
  $("h1").on("click", function(evt){
    window.location.hash = "";
    $container.isotope({ filter: '*' });
  });
});
