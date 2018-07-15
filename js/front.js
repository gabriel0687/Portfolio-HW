$(function () {

// Navbar
$(document).scroll(function () {
    if ($(window).scrollTop() >= $('header').offset().top) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
});

// Scroll Spy
$('body').scrollspy({
        target: '.navbar',
        offset: 80
});

// Preventing URL update on navigation link click
$('.navbar-nav a, #scroll-down').bind('click', function (e) {
    var anchor = $(this);
$('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
});

// Google Map
map();

var stylesheet = $('link#theme-stylesheet');
    $( "<link id='new-stylesheet' rel='stylesheet'>" ).insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

$("#colour").change(function () {

    if ($(this).val() !== '') {

var theme_csspath = 'css/style.' + $(this).val() + '.css';

    alternateColour.attr("href", theme_csspath);

    $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

}

    return false;
});

});

// styled Google Map
function map() {
    if ($('#map').length > 0) {

function initMap() {

var location = new google.maps.LatLng(26.1224, -80.1373);

var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: location,
        zoom: 15,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(mapCanvas, mapOptions);

var markerImage = 'img/marker.png';

var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: markerImage
});

var contentString = '<div class="info-window">' +
    '<h3>Current Location</h3>' +
    '<div class="info-content">' +
    '<p>Fort Lauderdale, FL</p>' +
    '</div>' +
    '</div>';

var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
});

    marker.addListener('click', function () {
    infowindow.open(map, marker);
});

var styles = [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }];

    map.set('styles', styles);
    }

    google.maps.event.addDomListener(window, 'load', initMap);
    }

}
