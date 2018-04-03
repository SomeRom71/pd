import Inputmask from "inputmask";
import Scrollbar from "smooth-scrollbar";
import {sendMail} from "sendmail.js"

// svg4everybody init
svg4everybody();
// var Inputmask = require('inputmask');

var selector = document.querySelectorAll(".mask");
var im = new Inputmask("+7 (999) 999 99 99");
var popupBtn = document.querySelectorAll(".popup__btn");

popupBtn.forEach(function(popup){
	popup.addEventListener("click", popupDisplay);
});

selector.forEach(function(selector){
	im.mask(selector);
});

function popupDisplay() {
	var popup = document.querySelector(".popup-wrap");
	var popupOverlay = document.querySelector(".popup-overlay");
	popup.classList.toggle("popup_visible");
	popupOverlay.classList.toggle("popup_visible");
	$('body').toggleClass("offscroll");
};

Scrollbar.init(document.querySelector('.popup__text'));
$(".feedback__form").submit(sendMail(this, '../sendmail.php'));