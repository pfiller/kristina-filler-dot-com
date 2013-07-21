$(function(){
  var hash, filter;

  $container = $('.design-thumbs');
  $header = $("h1");

  hash = window.location.hash.replace('#','');
  filter = hash.length ? '[data-category="'+hash+'"]' : '';

  $container.isotope({
    filter: filter,
    itemSelector : 'li',
    layoutMode : 'fitRows'
  });
  $("nav").on("click", ".category-link", function(evt){
    var category = evt.target.hash.substring(1);
    $container.isotope({ filter: '[data-category="'+category+'"]' });
  });
  $header.on("click", function(evt){
    window.location.hash = "";
    $container.isotope({ filter: '*' });
  });
});
