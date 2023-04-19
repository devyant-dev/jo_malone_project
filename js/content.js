$(document).ready(function(){


  $('.recom_tab .btn_tab').click(function (e) {
    e.preventDefault();

    $('.recom_tab .btn_tab').removeClass('Act');
    $(this).addClass('Act');

    var idx = $('.recom_tab .btn_tab.Act').index();
    $('.recom_list_wrap > ul').removeClass('On');
    $('.recom_list_wrap > ul').eq(idx).addClass('On');
  });


  //with

  $('.with_list').slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.f_right').click(function(e){

    e.preventDefault();

    var idx = $('.flag_slider li.On').index();
    $('.flag_slider li').removeClass('On');
    $('.flag_btm_wrap li').removeClass('Act');



    if(idx < 2){
      $('.flag_slider li').eq(idx+1).addClass('On');
      $('.flag_btm_wrap li').eq(idx+1).addClass('Act');
    }

    else if(idx == 2){
      $('.flag_slider li').eq(0).addClass('On');
      $('.flag_btm_wrap li').eq(0).addClass('Act');
    }


  });

  $('.f_left').click(function(e){

    e.preventDefault();

    var idx = $('.flag_slider li.On').index();
    $('.flag_slider li').removeClass('On');
    $('.flag_btm_wrap li').removeClass('Act');



    if(idx > 0){
      $('.flag_slider li').eq(idx-1).addClass('On');
      $('.flag_btm_wrap li').eq(idx-1).addClass('Act');
    }

    else if(idx == 0){
      $('.flag_slider li').eq(2).addClass('On');
      $('.flag_btm_wrap li').eq(2).addClass('Act');
    }


  });

  $('.flag_btm_wrap li').click(function(e){

    e.preventDefault();
    // a tag 위로 올라가는 기능 막아줌! 그래서 function 괄호 안에 e 적음



    var idx = $(this).index();
    //index는 순서를 세는 메소드

    $('.flag_btm_wrap li').removeClass('Act');
    $('.flag_btm_wrap li').eq(idx).addClass('Act');

    $('.flag_slider li').removeClass('On');
    $('.flag_slider li').eq(idx).addClass('On');

  });



});
