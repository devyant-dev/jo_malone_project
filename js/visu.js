$(document).ready(function(){

  first_act();
  function first_act(){
    $('.visu_slide').eq(0).addClass('Active');
    $('.visu_btm_wrap > li').eq(0).addClass('Act');

    active();
  }

  function active(){
    $('.visu_slide.Active').children('.visu_veil').animate({'width' : '44%'}, 1000);
    $('.visu_slide.Active').children('.visu_txt_wrap').delay(1500).animate({'opacity' : '1'}, 1000);
  }


  function reset(){
    $('.visu_slide').removeClass('Active');
    $('.visu_btm_wrap > li').removeClass('Act');
    $('.visu_slide').children('.visu_veil').animate({'width' : '0%'}, 0);
    $('.visu_slide').children('.visu_txt_wrap').animate({'opacity' : '0'}, 0);
  }

  $('.visu_arrow.right').click(function (){

    var idx = $('.visu_slide.Active').index();

    reset();
    if(idx<2){
      $('.visu_slide').eq(idx+1).addClass('Active');
      $('.visu_btm_wrap > li').eq(idx+1).addClass('Act');

    }

    else if(idx==2){
      $('.visu_slide').eq(0).addClass('Active');
      $('.visu_btm_wrap > li').eq(0).addClass('Act');
    }

    active();
  });

  $('.visu_arrow.left').click(function (){

    var idx = $('.visu_slide.Active').index();

    reset();
    if(idx>0){
      $('.visu_slide').eq(idx-1).addClass('Active');
      $('.visu_btm_wrap > li').eq(idx-1).addClass('Act');

    }

    else if(idx==0){
      $('.visu_slide').eq(2).addClass('Active');
      $('.visu_btm_wrap > li').eq(2).addClass('Act');
    }

    active();
  });


  $('.visu_btm_wrap li').not('.controls_wrap').click(function(e){
    e.preventDefault();

    reset();

      var idx = $(this).index();

      $(this).addClass('Act');
      $('.visu_slide').eq(idx).addClass('Active');

    active();

  })

  function play() {
    $('.visu_arrow.right').click();
  }

  var slider_play = setInterval(play, 4000);

  var slider_stop;

  $('.controls_wrap .control.stop').click(function (e){
    e.preventDefault();


    $(this).fadeOut(0);
    $('.controls_wrap .control.start').fadeIn(0);
    slider_stop = clearInterval(slider_play);
  })

    $('.controls_wrap .control.start').click(function (e){
      e.preventDefault();

      $(this).fadeOut(0);
      $('.controls_wrap .control.stop').fadeIn(0);

      slider_play = setInterval(play, 4000);
    })

});
