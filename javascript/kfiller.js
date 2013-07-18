function categoryClick(evt){
  var category = evt.target.hash.substring(1);
  $('.design-thumbs li:not([data-category="'+category+'"])').hide();
  $('.design-thumbs li[data-category="'+category+'"]').show();

  $("h1").hide();
  $(".reset-category-link").show()
}

$(function(){
  $("nav").on("click", ".category-link", categoryClick);
});
