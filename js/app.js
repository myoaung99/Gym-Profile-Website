$(document).ready(function () {
  $(".us-slick").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".training-video-slide").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  scrollNav();

  const currentHeight = $(window).height();
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();

    if (currentHeight <= scroll) {
      $(".site-nav").addClass("site-nav-scroll");
    } else {
      $(".site-nav").removeClass("site-nav-scroll");
    }
  });
});
function setActive(current) {
  $(`.nav-link`).removeClass("activeNav");
  $(`.nav-link[href="#${current}"]`).addClass("activeNav");
}

function scrollNav() {
  const currentActive = $("section[id]");
  console.log(currentActive);
  currentActive.waypoint(
    function (direction) {
      if (direction == "down") {
        setActive($(this.element).attr("id"));
      }
    },
    {
      offset: "130px",
    }
  );

  currentActive.waypoint(
    function (direction) {
      if (direction == "up") {
        setActive($(this.element).attr("id"));
      }
    },
    {
      offset: "0px",
    }
  );
}
