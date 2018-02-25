$(function() {
    // svg4everybody init
    svg4everybody();
    
	var popupOpenBtn = document.querySelector(".popup__open");
	var popupCloseBtn = document.querySelector(".popup__close"); 
	var links = document.querySelectorAll(".options__item");
	var smLinks = document.querySelectorAll(".sm-link");
	
	popupOpenBtn.addEventListener("click", popupDisplay);
	popupCloseBtn.addEventListener("click", popupDisplay);

	smLinks.forEach(function(smlink){
		smlink.addEventListener("click", smDisplay);
	});

	links.forEach(function(link){
		link.addEventListener("click", handleAccordeonClick);
	});

	function handleAccordeonClick(e) {
		e.target.classList.toggle("active");
	};

	function smDisplay(q) {
		q.target.parentNode.classList.toggle("active_sm");
	};

	function popupDisplay() {
    	var popup = document.querySelector(".popup");
    	popup.classList.toggle("popup_visible");
	};

	YMaps.jQuery(function () {
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
        map.setCenter(new YMaps.GeoPoint(30.491342, 59.932613), 14);
        var s = new YMaps.Style();
		s.iconStyle = new YMaps.IconStyle()
		s.iconStyle.href = "images/map-point.png";
		s.iconStyle.size = new YMaps.Point(42, 62);
        var placemark = new YMaps.Placemark(new YMaps.GeoPoint(30.490659, 59.933887), {style: s});
        map.addOverlay(placemark);
    })
});