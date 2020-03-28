(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

var search = document.getElementById('btnSearch');
var searchInputValue = document.getElementById('searchInput');

//alert(searchInputValue.value);
// initAutocomplete(searchInputValue.value);

$(function () {
  $('#btnSearch').click(function () {
    var val = [];
    $('#select-product').each(function () {
      val = $(this).val();

      if (val != '#') {
        switch (val) {
          case 'Νερό':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.5856899, lng: 22.9588858 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Lidl", ["Νερό", "Αλεύρι", "Οινόπνευμα", "Αλεύρι"], [15, 20, 25, 50], 40)
              },
              {
                coords: { lat: 40.5881467, lng: 22.9596181 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Σκλαβενίτης", ["Νερό", "Γάλα", "Ζυμαρικά", "Λάδι", "Χαρτί Υγείας"], [15, 20, 25], 10)
              },
              {
                coords: { lat: 40.5882771, lng: 22.9534168 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Ελληνικά Μάρκετ", ["Νερό", "Αλεύρι", "Οινόπνευμα", "Αλεύρι"], [15, 20, 25, 35], 20)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Νερό", "Γάλα", "Λάδι", "Χαρτί Υγείας"], [15, 20, 25, 40], 30)
              }
            ];
            initMap(markersAdd);
            break;
          case 'Γάλα':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.5856899, lng: 22.9588858 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Lidl", ["Γάλα", "Αλεύρι", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 20], 40)
              },
              {
                coords: { lat: 40.5881467, lng: 22.9596181 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Σκλαβενίτης", ["Γάλα", "Ζυμαρικά", "Οινόπνευμα", "Χαρτί Υγείας"], [15, 20, 25, 25], 15)
              },
              {
                coords: { lat: 40.5882771, lng: 22.9534168 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Ελληνικά Μάρκετ", ["Γάλα", "Αλεύρι", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 60], 23)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Γάλα", "Αντισειπτικά", "Οινόπνευμα", "Χαρτί Υγείας"], [15, 20, 25, 40], 20)
              }
            ];
            initMap(markersAdd);
            break;
          case 'Ζυμαρικά':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.585711, lng: 22.946956 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μίνι Μάρκετ", ["Ζυμαρικά", "Γάλα", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 30], 40)
              },
              {
                coords: { lat: 40.587677, lng: 22.964766 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Shop", ["Ζυμαρικά", "Αλεύρι", "Οινόπνευμα", "Χαρτί Υγείας"], [15, 20, 25, 10], 15)
              }
              ,
              {
                coords: { lat: 40.5882771, lng: 22.9534168 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Ελληνικά Μάρκετ", ["Ζυμαρικά", "Γάλα", "Οινόπνευμα", "Μάσκες"], [15, 20, 25, 70], 20)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Ζυμαρικά", "Αλεύρι", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 35], 33)
              }
            ];
            initMap(markersAdd);
            break;
          case 'Αλεύρι':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.585711, lng: 22.946956 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μίνι Μάρκετ", ["Αλεύρι", "Γάλα", "Οινόπνευμα", "Μάσκες"], [15, 20, 25, 15], 30)
              },
              {
                coords: { lat: 40.587677, lng: 22.964766 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Shop", ["Αλεύρι", "Ζυμαρικά", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 70], 15)
              },
              {
                coords: { lat: 40.5882771, lng: 22.9534168 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Ελληνικά Μάρκετ", ["Αλεύρι", "Γάλα", "Οινόπνευμα", "Μάσκες"], [15, 20, 25, 32], 25)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Αλεύρι", "Ζυμαρικά", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 44], 40)
              }
            ];
            initMap(markersAdd);
            break;
          case 'Λάδι':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.585711, lng: 22.946956 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μίνι Μάρκετ", ["Λάδι", "Ζυμαρικά", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 23], 30)
              },
              {
                coords: { lat: 40.587677, lng: 22.964766 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Shop", ["Λάδι", "Γάλα", "Οινόπνευμα", "Μάσκες"], [15, 20, 25, 33], 15)
              },
              {
                coords: { lat: 40.5882771, lng: 22.9534168 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Ελληνικά Μάρκετ", ["Λάδι", "Ζυμαρικά", "Οινόπνευμα"], [15, 20, 25, 22], 40)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Λάδι", "Αλεύρι", "Οινόπνευμα", "Μάσκες"], [15, 20, 25, 11], 25)
              }
            ];
            initMap(markersAdd);
            break;
          case 'Αντισειπτικά':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.585711, lng: 22.946956 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μίνι Μάρκετ", ["Αντισειπτικά", "Αλεύρι", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 44], 40)
              },
              {
                coords: { lat: 40.587677, lng: 22.964766 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Shop", ["Αντισειπτικά", "Ζυμαρικά", "Οινόπνευμα", "Μάσκες"], [15, 20, 25, 24], 15)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Αντισειπτικά", "Γάλα", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 70], 20)
              }
            ];
            initMap(markersAdd);
            break;
          case 'Μάσκες':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.585711, lng: 22.946956 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μίνι Μάρκετ", ["Μάσκες", "Αλεύρι", "Οινόπνευμα"], [15, 20, 25, 65], 30)
              },
              {
                coords: { lat: 40.587677, lng: 22.964766 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Shop", ["Μάσκες", "Γάλα", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 89], 15)
              },
              {
                coords: { lat: 40.5882771, lng: 22.9534168 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Ελληνικά Μάρκετ", ["Μάσκες", "Ζυμαρικά", "Οινόπνευμα", "Λάδι"], [15, 20, 25, 33], 20)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Μάσκες", "Αλεύρι", "Οινόπνευμα", "Μάσκες"], [15, 20, 25, 55], 40)
              }
            ];
            initMap(markersAdd);
            break;
          case 'Χαρτί Υγείας':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.585711, lng: 22.946956 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μίνι Μάρκετ", ["Χαρτί Υγείας", "Αλεύρι", "Οινόπνευμα", "Αντισειπτικά"], [15, 20, 25, 22], 30)
              },
              {
                coords: { lat: 40.587677, lng: 22.964766 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Shop", ["Χαρτί Υγείας", "Αλεύρι", "Οινόπνευμα", "Αντισειπτικά"], [15, 20, 25, 35], 15)
              },
              {
                coords: { lat: 40.5882771, lng: 22.9534168 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Ελληνικά Μάρκετ", ["Χαρτί Υγείας", "Ζυμαρικά", "Οινόπνευμα", "Οινόπνευμα"], [15, 20, 25, 65], 20)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Χαρτί Υγείας", "Αλεύρι", "Οινόπνευμα", "Οινόπνευμα"], [15, 20, 25, 67], 40)
              }
            ];
            initMap(markersAdd);
            break;
          case 'Οινόπνευμα':
            var markersAdd = [
              {
                coords: { lat: 40.5878228, lng: 22.9563379 },
                iconImage: '../assets/img/pin.png',
                content: '<h4>Σπίτι</h4>',
              },
              {
                coords: { lat: 40.585711, lng: 22.946956 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μίνι Μάρκετ", ["Οινόπνευμα", "Αλεύρι", "Χαρτί Υγείας", "Γάλα"], [15, 20, 25, 45], 30)
              },
              {
                coords: { lat: 40.587677, lng: 22.964766 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Shop", ["Οινόπνευμα", "Ζυμαρικά", "Νερό", "Γάλα"], [15, 20, 25, 78], 15)
              },
              {
                coords: { lat: 40.5882771, lng: 22.9534168 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Ελληνικά Μάρκετ", ["Οινόπνευμα", "Αλεύρι", "Χαρτί Υγείας", "Γάλα"], [15, 20, 25, 43], 20)
              },
              {
                coords: { lat: 40.582378, lng: 22.956753 },
                iconImage: '../assets/img/supermarket.png',
                content: addConent("Μασούτης", ["Οινόπνευμα", "Ζυμαρικά", "Νερό", "Γάλα"], [15, 20, 25, 44], 40)
              }
            ];
            initMap(markersAdd);
            break;
        }
      }
      else {
        clearResluts();
        alert('Πρέπει να επιλέξεις ένα προϊόν!');
      }
    });

  });
});
// 
////////////
//////////////
/////////////
////////////
////////////
/////////////
// 
////////////
//////////////
/////////////
////////////
////////////
/////////////
// 
////////////
//////////////
/////////////
////////////
////////////
/////////////

//Methodos gia na ftiaksei ta markers
//
//
//
function initMap(markersAdd) {
  // Map options
  var options = {
    zoom: 14,
    center: { lat: 40.5878228, lng: 22.9563379 }
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Array of markers
  var markers = markersAdd;

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      animation: google.maps.Animation.DROP
    });

    // Check for customicon
    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
// 
////////////
//////////////
/////////////
////////////
////////////
/////////////
// 
////////////
//////////////
/////////////
////////////
////////////
/////////////
// 
////////////
//////////////
/////////////
////////////
////////////
/////////////


//Methodos gia to decoration twn markers
//
//
const addConent = (supermarketName, productName, productQuantity, livePerson) => {

  var content = '<div id="content" onmouseover="alertMessage(' + livePerson + ')">' +
    '<h4 id="firstHeading" class="firstHeading"> ' + supermarketName + '</h4>' +
    '<hr>' +
    '<table>' +
    '<tr>' +
    '<th>Προϊόν</th>' +
    '<th>Ποσότητα</th>' +
    '</tr>' +
    '<tr>' +
    '<td> ' + productName[0] + '</td>' +
    '<td> ' + productQuantity[0] + ' κιβ.</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' + productName[1] + '</td>' +
    '<td> ' + productQuantity[1] + ' κιβ.</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' + productName[2] + '</td>' +
    '<td> ' + productQuantity[2] + ' κιβ.</td>' +
    '</tr>' +
    '<tr>' +
    '<td>' + productName[3] + '</td>' +
    '<td> ' + productQuantity[3] + ' κιβ.</td>' +
    '</tr>' +
    '</table>' +
    '<div>' +
    '<hr>' +
    '<p> <strong style="color:red;">Live</strong>: ' + livePerson + ' επισκέπτες </p>' +
    '</div>' +
    '</div>';

  return content;
}

const alertMessage = (livePerson) => {
  if (livePerson >= 40) {
    alert('Opps, το κατάστημα που επέλεξες φαίνεται να είναι γεμάτο, για την πιο γρήγορη εξυπηρέτηση σου μπορείς να επισκεφτείς κάποιο άλλο κατάστημα!');
  }
}
var mapDiv = document.getElementById('map');
const clearResluts = () => {
  mapDiv.innerHTML = '';
};