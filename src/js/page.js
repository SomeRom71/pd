import Inputmask from "inputmask";
$(function() {
    // svg4everybody init
    svg4everybody(); 
    
    var selector = document.getElementByClassName(".mask");
	var im = new Inputmask("99-9999999");
	im.mask(selector);
	var popupOpenBtn = document.querySelectorAll(".popup__btn");

	popupOpenBtn.forEach(function(popup){
		popup.addEventListener("click", popupDisplay);
	});

	function popupDisplay() {
    	var popup = document.querySelector(".popup");
    	popup.classList.toggle("popup_visible");
	};
});