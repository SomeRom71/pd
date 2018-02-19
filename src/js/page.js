$(function() {
    // svg4everybody init
    svg4everybody();
    
    var popupOpenBtn = document.querySelector(".asd-popup__open");
	var popupCloseBtn = document.querySelector(".asd-popup__close"); 
	var links = document.querySelectorAll(".options__item");
	 
	function handleAccordeonClick(e) {
		e.target.classList.toggle("active");
	};

	function popupDisplay() {
    	var popup = document.querySelector(".asd-popup");
    	popup.classList.toggle("asd-popup_visible");
	};

	links.forEach(function(link){
		link.addEventListener("click", handleAccordeonClick);
	});
	popupOpenBtn.addEventListener("click", popupDisplay);
	popupCloseBtn.addEventListener("click", popupDisplay);
});