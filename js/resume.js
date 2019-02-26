// ======================================== scroll down / up ====================================== //
let onScroll = () => {
  const windowTopPosition = ($(window).scrollTop())
  const windowHeight = $(window).height()
  const windowBottomPosition = (windowTopPosition + windowHeight)
  
  // Animation sections on scroll.
  const sections = $('section')
  sections.each((index, element) => {
    const elementTopPosition = $(element).offset().top 
    const elementHeight = $(element).height()
    const elementBottomPosition = $(element).offset().top + elementHeight 
    if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= (windowBottomPosition))) {
      $(element).addClass('scroll')
    }
    else {
      $(element).removeClass('scroll')
    }
  })

  // Animation active state top menu.
  sections.each((index, element) => {
    if ((windowTopPosition + 300) >= $(element).offset().top) {
      $('.top-menu a.active').removeClass('active')
      $('.top-menu a').eq(index).addClass('active')
    }
  })

  // Animate progress circles.
  const skillDescriptionManagement = $('.skill__management').children('.skill__description')
  const progressCircles = $('.skill__circle--progress')
  if ($('.section--skills').hasClass('scroll')) {
    skillDescriptionManagement.addClass('animate-description')
    progressCircles.addClass('animate-circle')
  }
  else {
    skillDescriptionManagement.removeClass('animate-description')
    progressCircles.removeClass('animate-circle')
  }
}

// Animation top-menu on scroll. 
let lastScrollTop = 0;
$(window).scroll(() => {
  let windowScrollTop = $(this).scrollTop()
  //  Scroll to top.
  if (windowScrollTop < lastScrollTop) {
    $('.top-menu').addClass('show-menu')
  } 

  // Scroll to bottom.
  else {
    $('.top-menu').removeClass('show-menu')
  }
  lastScrollTop = windowScrollTop;
})
// =========================================================================================== //

// ====================================== scroll to on click ================================= //  
let initOnClick = () => {
  $('.top-menu__button').click(function(e) {      
    let position = $($(this).attr('href')).offset().top
    $('html').animate({ scrollTop: position }, 500)
  }) 
}
// =========================================================================================== //

// ===================================== form validation ===================================== //
let initFormValidation = () => {
  const fields = $('.contact-form__field')
  const form = $('.contact-form__wrapper')

  form.submit(() => {
    let formErrors = 0
    fields.each(i => {
      formErrors += validateField(fields[i]) ? 0 : 1 
    })
    // If no error, send form via ajax.
    if (!formErrors) {
      // $.ajax({
      //   type: 'POST',
      //   url: 'https://formspree.io/helene.andre.06@gmail.com',
      //   data: form.serialize(), 
      //   success: function(data) {
      //     data = JSON.parse(data)

      //     if (!data.error) {
      //       $(fields)
      //         .removeClass('correct-field')
      //         .val('')

      //       $('.contact__success-message').addClass('show')
      //       setTimeout(function() {$('.contact__success-message').removeClass('show')}, 3000);
      //     }
      //   },  
      //   error: function() {
      //     $('.contact__failed-message').addClass('show')
      //     setTimeout(function() {$('.contact__failed-message').removeClass('show')}, 4000);
      //   }  
      // })
      // e.preventDefault()
      return true
    } 
    return false
  })  
  // Validate fields on keyup.

  fields.keyup(e => validateField(e.target))

  // fields.on('keyup', function() {
  //   validateField(this)
  // })
}
// ================================== validate form fields =================================== //
let validateField = field => {
  const fieldWrapper = $(field).parent()
  const fieldValue = $.trim($(field).val())

  if (!fieldValue) {
    fieldWrapper
      .addClass('invalid-field')
      .removeClass('correct-field invalid-email')
    return false 
  }

  // If field is email.
  else if (field.id === 'email' && !/^.+@.+\.[a-zA-Z]{2,}$/.test(fieldValue)) {
    fieldWrapper
      .removeClass('invalid-field correct-field')
      .addClass('invalid-email')
    return false 
  }
  
  else {
    fieldWrapper
      .removeClass('invalid-field invalid-email')
      .addClass('correct-field')
    return true 
  }
}
// =========================================================================================== //

// =============================== slide show projects ======================================= //
$(document).ready(() => {
  $('.projects-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
  })
})
// =========================================================================================== //




$(document).ready(() => {
  initOnClick()
  initFormValidation()
})

$(window).scroll(onScroll)