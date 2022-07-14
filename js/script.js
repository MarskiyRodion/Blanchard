
window.addEventListener('DOMContentLoaded', function () {

  //скролл по сайту 
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  //burger
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger__menu').classList.toggle('is-active')
  })
  document.querySelector('#burger__close').addEventListener('click', function () {
    document.querySelector('#burger__menu').classList.toggle('is-active')
  })

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#body').classList.toggle('body-active')
  })
  document.querySelector('#burger__close').addEventListener('click', function () {
    document.querySelector('#body').classList.toggle('body-active')
  })

  document.querySelectorAll('.burger__link').forEach(burgerLink => {
    const burger = document.querySelector(".burger");
    const body = document.querySelector(".body");
    burgerLink.addEventListener("click", function() {
      burger.classList.remove("is-active");
      body.classList.remove("body-active");
    })
  })

  //field
  document.querySelector('#mobile__search').addEventListener('click', function () {
    document.querySelector('#field').classList.toggle('is-active')
  })
  document.querySelector('#field__close').addEventListener('click', function () {
    document.querySelector('#field').classList.toggle('is-active')
  })


  //modal
  document.querySelector('#test-slide').addEventListener('click', function () {
    document.querySelector('#modal').classList.toggle('modal-active')
  })
  document.querySelector('#modal__close').addEventListener('click', function () {
    document.querySelector('#modal').classList.toggle('modal-active')
  })

  document.querySelector('#test-slide').addEventListener('click', function () {
    document.querySelector('#body').classList.toggle('body-active')
  })
  document.querySelector('#modal__close').addEventListener('click', function () {
    document.querySelector('#body').classList.toggle('body-active')
  })


  //Слайдер hero

  const container = document.querySelector(".container")
  const swiper = new Swiper('.hero__swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,


  })


})
/*Меню 1920*/
window.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll(".menu__btn");
  const dropdowns = document.querySelectorAll(".dropdown");
  const activeClassdropdowns = "menu__dropdown-active";
  const activeClassbtns = "btn__active";

  btns.forEach(item => {
    item.addEventListener("click", function () {
      let DropThis = this.parentElement.querySelector(".dropdown");
      dropdowns.forEach(el => {
        if (el != DropThis) {
          el.classList.remove(activeClassdropdowns)
        }
      });
      console.log(activeClassdropdowns)
      btns.forEach(el => {
        if (el != this) {
          el.classList.remove(activeClassbtns)
        }
      });
      DropThis.classList.toggle(activeClassdropdowns);
      this.classList.toggle(activeClassbtns);
    })
  })
})

//слайдер галерея
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".test-section .test-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".test-next",
      prevEl: ".test-prev"
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});

// select
const select = document.querySelector('.custom-select');
const choices = new Choices(select, {
  itemSelectText: '',
  position: 'bottom',
  searchEnabled: false,
});

/*Catalog*/
//accordion
$(document).ready(function () {
  accordion.init({ speed: 300, oneOpen: true, heighStyle: "content" });
});


//Catalog tab
window.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.accordion__link').forEach(function (listLink) {
    listLink.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__left').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__left--active')
      })

      document.querySelectorAll('.accordion__link').forEach(function (tabContent) {
        tabContent.classList.remove('accordion__btn__active')
      })
      listLink.classList.add("accordion__btn__active")
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left--active')
    })
  })
})

/*Swiper news */

const swiper2 = new Swiper('.news__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  // If we need pagination
  pagination: {
    clickable: true,
    el: '.news__swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.news__button-next',
    prevEl: '.news__button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 30,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    600: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    850: {
      spaceBetween: 25,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1025: {
      spaceBetween: 24,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

});

//tooltip
// With the above scripts loaded, you can call `tippy()` with a CSS
// selector and a `content` prop:

tippy('#myButton--1', {
  content: 'Пример современных тенденций - современная методология разработки',
  interactive: true,
  arrow: true,
  maxWidth: 264,
});
tippy('#myButton--2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  interactive: true,
  arrow: true,
  maxWidth: 264,
});
tippy('#myButton--3', {
  content: 'В стремлении повысить качество',
  interactive: true,
  arrow: true,
  maxWidth: 232,
});

/*Swiper project*/

const swiper3 = new Swiper('.project__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.project__button-next',
    prevEl: '.project__button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

});

//form
let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.form', {
  rules: {
    email: {
      required: true,
      email: true
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    name: {
      required: true
    },
  },
  messages: {
    name: {
      required: 'Недопустимый формат',
    },
    tel: {
      required: 'Укажите ваш телефон',
    },
  },
  colorWrong: '#D11616',
});
