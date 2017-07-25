$('#container').on('click', function(e) {
  var $this = $(this);
  var seekPos = $this.offset()
  var clickPos = e.clientX - seekPos.left;
  var width = $this.width();
  
  var clickPercent = (clickPos/width)*100;
  $this.find("#left").css({width: clickPercent+"%"});
  $this.find('#thumb').css({left: clickPercent+"%"});
  $this.find("#right").css({width: (100-clickPercent)+"%"})
});

$("#container").mousemove(function(e) {
  if (e.which !== 1) {
    return;
  }

  var $this = $(this);
  var seekPos = $this.offset()
  var clickPos = e.clientX - seekPos.left;
  var width = $this.width();
  
  var clickPercent = (clickPos/width)*100;
  $this.find("#left").css({width: clickPercent+"%"});
  $this.find('#thumb').css({left: clickPercent+"%"});
  $this.find("#right").css({width: (100-clickPercent)+"%"})
});

$('#container').hover(function(e) {
  $(this).children().addClass('hovering');
}, function(e) {
    $(this).children().removeClass('hovering');
});

