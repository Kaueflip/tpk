//datepicker
$(function () {
  $("#checkin, #checkout, #checkin_nav, #checkout_nav").datepicker({
    dateFormat: "dd/mm/yy",
    dayNames: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S", "D"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    nextText: "Próximo",
    prevText: "Anterior",
  });
});
$(function () {
  $("#checkin").datepicker();
  $("#checkout").datepicker();
});
$(function () {
  $("#checkin_nav").datepicker();
  $("#checkout_nav").datepicker();
});

function enviarFormulario() {
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;
  var adults = document.getElementById("adults").value;
  var children = document.getElementById("children").value;
  var url =
    "https://hbook.hsystem.com.br/Booking?companyId=5aa16a08c19a3b0c6c2825d9" +
    "&checkin=" +
    encodeURIComponent(checkin) +
    "&checkout=" +
    encodeURIComponent(checkout) +
    "&adults=" +
    encodeURIComponent(adults) +
    "&children=" +
    encodeURIComponent(children);
  window.location.href = url;
}
function enviarFormularioNav() {
  var checkin = document.getElementById("checkin_nav").value;
  var checkout = document.getElementById("checkout_nav").value;
  var adults = document.getElementById("adults_nav").value;
  var children = document.getElementById("children_nav").value;
  var url =
    "https://hbook.hsystem.com.br/Booking?companyId=5aa16a08c19a3b0c6c2825d9" +
    "&checkin=" +
    encodeURIComponent(checkin) +
    "&checkout=" +
    encodeURIComponent(checkout) +
    "&adults=" +
    encodeURIComponent(adults) +
    "&children=" +
    encodeURIComponent(children);
  window.location.href = url;
}

const offerSwiper = new Swiper(".offersSlider", {
  spaceBetween: 0,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const hotelImagesSlider = new Swiper(".hotelImagesSlider", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  speed: 800,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1.35,
      spaceBetween: 0,
    }
  }
});
const hotelAccomodationsSlider = new Swiper(".hotelAccomodationsSlider", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  speed: 800,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    350: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 80,
    }
  }
});

//booking navbar append
document.addEventListener("DOMContentLoaded", function () {
  let prevScrollpos = window.scrollY || window.pageYOffset;
  let content = document.getElementById("content");

  window.onscroll = function () {
    let currentScrollPos = window.scrollY || window.pageYOffset;

    if (currentScrollPos > 700) {
      content.classList.add("visible");
      content.classList.remove("invisible");
    } else {
      content.classList.remove("visible");
      content.classList.add("invisible");
    }

    prevScrollpos = currentScrollPos;
  };
});
//close mobile navbar when click outside
document.addEventListener("click", function (event) {
  var isClickInsideNavbar = document
    .querySelector(".navbar-collapse")
    .contains(event.target);
  if (!isClickInsideNavbar) {
    var navbar = document.querySelector(".navbar-toggler");
    var targetNavbar = document.querySelector(".navbar-collapse");
    if (targetNavbar.classList.contains("show")) {
      navbar.click();
    }
  }
});

//open and close hotel secondary list
document.addEventListener('DOMContentLoaded', function () {
  var toggleButtons = document.querySelectorAll('.expandListBtn');
  var hiddenLists = document.querySelectorAll('.listaAdicional');

  toggleButtons.forEach(function (button, index) {
    button.onclick = function () {
      hiddenLists[index].classList.toggle('hidden');
    };
  });
});
