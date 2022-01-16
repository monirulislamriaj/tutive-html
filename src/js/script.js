$(document).ready(function () {

  //Copyright Year
  var copyrightYear = document.getElementById("copyrightYear");
  copyrightYear.innerHTML = new Date().getFullYear();

  $('[data-toggle="tooltip"]').tooltip();

  $(".integration_page_sidebar_menu").scrollspy({ 
    
    animation: true,
    duration: 15000,
    offset: -100
  });



  // Video Replace from data attribute
  $(".video-button").on("click", function () {
    var video =
      '<iframe allowfullscreen src="' +
      $(this).attr("data-video") +
      '"></iframe>';
    $(this).replaceWith(video);
  });

  //pricing change into monthly to yearly
  $(".price_checkbox")
    .click(function () {
      $(".price_amount").toggleClass("price_amount_active");
    })
    .triggerHandler("click");

  //slick carasol
  $(".team_slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button"class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="7"><path fill-rule="evenodd" d="M24 6.999L0 7 7.003-.001v5.003H24v1.997z"/></svg></button>',
    nextArrow:
      '<button type="button"class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="7"><path fill-rule="evenodd" d="M24 7L0 6.999V5.002h16.996V-.001L24 7z"/></svg></button>',
      autoplay: true,
      autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 510,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  //slick carasol for About Page
  $(".full_team_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    prevArrow:
      '<button type="button"class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="7"><path fill-rule="evenodd" d="M24 6.999L0 7 7.003-.001v5.003H24v1.997z"/></svg></button>',
    nextArrow:
      '<button type="button"class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="7"><path fill-rule="evenodd" d="M24 7L0 6.999V5.002h16.996V-.001L24 7z"/></svg></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 510,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  //slick carasol for Testimonial
  $(".testimonial_slider").slick({
    slidesToShow: 3,
    dots: false,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow:
      '<button type="button"class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="7"><path fill-rule="evenodd" d="M24 6.999L0 7 7.003-.001v5.003H24v1.997z"/></svg></button>',
    nextArrow:
      '<button type="button"class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="7"><path fill-rule="evenodd" d="M24 7L0 6.999V5.002h16.996V-.001L24 7z"/></svg></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });
});

// sticky nav
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".navbar").addClass("nav-bg");
  } else {
    $(".navbar").removeClass("nav-bg");
  }
});

// G-Map
/**
 * Created by Kausar on 06/10/2016.
 */
 if(document.getElementById('map') != null) {
  window.marker = null;

  function initialize() {
    var map;
    var nottingham = new google.maps.LatLng(23.7783741, 90.3746808);
    var style = [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#e9e9e9",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#dedede",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#ffffff",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#333333",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#f2f2f2",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#fefefe",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#fefefe",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
    ];
    var mapOptions = {
      // SET THE CENTER
      center: nottingham,
      // SET THE MAP STYLE & ZOOM LEVEL
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      // REMOVE ALL THE CONTROLS EXCEPT ZOOM
      zoom: 13,
      panControl: false,
      scrollwheel: false,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
      },
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // SET THE MAP TYPE
    var mapType = new google.maps.StyledMapType(style, {
      name: "Grayscale",
    });
    map.mapTypes.set("grey", mapType);
    map.setMapTypeId("grey");
    //CREATE A CUSTOM PIN ICON
    var marker_image = "images/pin.png";
    var pinIcon = new google.maps.MarkerImage(
      marker_image,
      null,
      null,
      null,
      new google.maps.Size(25, 34)
    );
    marker = new google.maps.Marker({
      position: nottingham,
      map: map,
      icon: pinIcon,
      title: "bizcred",
    });
  }
  google.maps.event.addDomListener(window, "load", initialize);

 }

// PRogress bar for Blo Single Page
if(document.getElementById('myBar') != null) {
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
};
