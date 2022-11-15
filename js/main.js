$(document).ready(function () {

  // Слайдер
  let swiper = new Swiper('.swiper', {
    speed: 400,
    observer: true,
    observeParents: true,

    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerGroup: 1,
        slidesPerView: 1
      },
      1280: {
        slidesPerGroup: 2,
        slidesPerView: 2
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      }
    }
  });

  // Меню

  $('.menu-icon').click(function () {
    $('.menu_mobile').slideToggle(500);

    if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }
  });

  //  Фильтр раздела стили

  $('.styles-grid > div').not(".styles-grid > div[filter='economy']").hide();
  $('.button_styles-filter-switcher[filter]').click(function () {

    if ($(this).attr('val') == 'off') {
      $('.button_styles-filter-switcher[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.button_styles-filter-switcher[filter]').removeClass('button_active');
      $(this).addClass('button_active');
      $('.styles-grid > div').hide(300);
      var filter = $(this).attr('filter');
      $('.styles-grid > div[filter=' + filter + ']').show(300);
    }
  })

  $('.catalog__text_modal > .catalog__p').not('.catalog__text_modal > .catalog__p[filter="description"]').hide();
  $('.button_catalog-switcher[filter]').click(function() {
    if ($(this).attr('val') == 'off') {
      $('.button_catalog-switcher[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.button_catalog-switcher[filter]').removeClass('button_catalog-switcher_active');
      $(this).addClass('button_catalog-switcher_active');
      $('.catalog__text_modal > .catalog__p').hide(300);
      var filter = $(this).attr('filter');
      $('.catalog__text_modal > .catalog__p[filter=' + filter + ']').show(300);
    }
  })

  // Фильтр раздела декоры

  $('.button_dekor-switcher[filter]').click(function () {
    if ($(this).attr('filter') == 'all') {
      if ($(this).attr('val') == 'off') {
        $('.button_dekor-switcher[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button_dekor-switcher[filter]').removeClass('button_dekor-switcher_active');
        $(this).addClass('button_dekor-switcher_active');
        $('.filter > div').show(300);
      }
    } else
      if ($(this).attr('val') == 'off') {
        $('.button_dekor-switcher[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button_dekor-switcher[filter]').removeClass('button_dekor-switcher_active');
        $(this).addClass('button_dekor-switcher_active');
        $('.filter > div').hide(300);
        var filter = $(this).attr('filter');
        $('.filter > div[filter=' + filter + ']').show(300);
      }
  });

 

  // Quiz
  let i = 0;
  $('.button_quiz-start').click(function(){
    i = 1;
    $('.quiz-start').hide(300);
    $('.quiz-form__slide'+i).show(300);
    $('.quiz').css(
      {
      "border-radius": "10px"
      }
    );
    console.log(i);
  });

  $('.button_quiz-next').click(function(){
    $('.quiz-form__slide' + i).hide(300);
    i++;
    $('.quiz-form__slide' + i).show(300);
    console.log(i);
  });

  $('.button_quiz-prev').click(function(){
    if(i==1) {
      $('.quiz-form__slide' + i).hide(300);
      $('.quiz-start').show(300);
    } else {
      $('.quiz-form__slide' + i).hide(300);
      i--;
      $('.quiz-form__slide' + i).show(300);
      console.log(i);
    }
  });
  
  $(".quiz-form__label_radio").click(function(){
    if (($("#radio_direct").is(':checked'))) {
      console.log('Выбор A');
      $('.quiz-form__img_a').show();
      $('.quiz-form__img_b').hide();
      $('.quiz-form__img_c').hide();
      $('#quiz__range_a').show();
      $('#quiz__range_b').hide();
      $('#quiz__range_c').hide();
      $('#quiz-form__label_range_a').show();
      $('#quiz-form__label_range_a').css({
        'display':'flex'
      });
      $('#quiz-form__label_range_b').hide();
      $('#quiz-form__label_range_c').hide();
    } else if ($("#radio_corner").is(':checked')) {
      console.log('Выбор B');
      $('.quiz-form__img_a').hide();
      $('.quiz-form__img_b').show();
      $('.quiz-form__img_c').hide();
      $('#quiz__range_a').show();
      $('#quiz__range_b').show();
      $('#quiz__range_c').hide();
      $('#quiz-form__label_range_a').show();
      $('#quiz-form__label_range_a').css({
        'display':'flex'
      });
      $('#quiz-form__label_range_b').show();
      $('#quiz-form__label_range_b').css({
        'display':'flex'
      });
      $('#quiz-form__label_range_c').hide();
    } else if ($("#radio_u-shaped").is(':checked')) {
      console.log('Выбор C');
      $('.quiz-form__img_a').hide();
      $('.quiz-form__img_b').hide();
      $('.quiz-form__img_c').show();
      $('#quiz__range_a').show();
      $('#quiz__range_b').show();
      $('#quiz__range_c').show();
      $('#quiz-form__label_range_a').show();
      $('#quiz-form__label_range_a').css({
        'display':'flex'
      });
      $('#quiz-form__label_range_b').show();
      $('#quiz-form__label_range_b').css({
        'display':'flex'
      });
      $('#quiz-form__label_range_c').show();
      $('#quiz-form__label_range_c').css({
        'display':'flex'
      });
    }

  });
  $('#quiz-form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
	// 	// if (document.form.name.value == '' || document.form.phone.value == '' ) {
	// 	// 	valid = false;
	// 	// 	return valid;
	// 	// }
		$.ajax({
			type: "POST",
			url: "mail/mail.php",
			data: $('#quiz-form').serialize()
      }).done(function() {
        $('#myModal').fadeIn();
        $(this).find('input').val('');
        $('#quiz-form').trigger('reset');
		})
		return false;
	});

  
  $('#call-form').submit(function() {
      $.ajax({
        type: "POST",
        url: "mail/call.php",
        data: $('#call-form').serialize()
        }).done(function() {
          console.log('ok');
          $('.modal_call_start').hide();
          $('.modal__h2').hide();
          $('.modal_call_end').fadeIn();
          $('.back').fadeIn();
          $(this).find('input').val('');
          $('#call-form').trigger('reset');
      })
      return false;
    });

  $('.back').click(function() {
    $('.modal__h2').show();
    $('.modal_call_start').fadeIn();
    $('.modal_call_end').hide();
    $(this).hide();
  });
  
  $('#button_call').click(function() {
    $('#modal_call').fadeIn();
  });

  $('#catalog__item').click(function() {
    $('#catalog__item_modal').fadeIn();
  });

  $('.close').click(function() {
    $('.modal').fadeOut();
  });

  $(document).on('keyup', (function(e) {
    let keyCode = e.key;
    if (keyCode === "Escape") {
      $('.modal').fadeOut();
    }
  }));


  $('.modal').click(function() {
    $('.modal').fadeOut();
  });

  $('.modal__content').click(function(event) {
    event.stopPropagation();
  });
  
  // function getRangeValue(value, target) {
  //   target.html(value);
  // }

  // $('#quiz__range_a').change(getRangeValue($('#quiz__range_a').val(), $('#quiz-form-range__counter_a')));
  // $('#quiz__range_b').change(getRangeValue($('#quiz__range_b').val(), $('#quiz-form-range__counter_b')));
  // $('#quiz__range_c').change(getRangeValue($('#quiz__range_c').val(), $('#quiz-form-range__counter_c')));

  $(document).on('input', '#quiz__range_a', function() {
    $('#quiz-form-range__counter_a').html( $(this).val() );
  });

  $(document).on('input', '#quiz__range_b', function() {
    $('#quiz-form-range__counter_b').html( $(this).val() );
  });
  
  $(document).on('input', '#quiz__range_c', function() {
    $('#quiz-form-range__counter_c').html( $(this).val() );
  });

  $('.gallery__item').click(function(e) {
    if ($('.gallery__img_big').attr('src') != $(this).attr('href')) {
      $('.gallery__img_big').hide().attr('src', $(this).attr('href')).fadeIn(1000);
    }
    e.preventDefault();
  })

  $('.gallery__img_small').click(function() {
    $('.gallery__img_small').fadeTo(100, 1);
    $(this).fadeTo(100, 0.6);
  })
});



