/**
 * Portfolio
 *
 * @author Shivan Taher
 * @date 06.09.13
 */

(function (ui) {

	"use strict";

	$("html").hide();
	$(document).ready(function() {
		$("html").fadeIn(1000, function() {
			ui.init();
			ui.showMailAddress();
		});
	});

	ui.navigate = function() {
		$(window).hashchange(function () {
			var hash = location.hash || "#home";
			var contentId = "#section-" + hash.substring(1);

			$("#navigation li.pure-menu-selected").toggleClass("pure-menu-selected");
			$(hash + "Nav").toggleClass("pure-menu-selected", true);

			$("html, body").animate({ scrollTop: $(contentId).offset().top });
		});

		$(window).hashchange();
	}

	ui.init = function() {
		$("#navigation li a").click(function() {
			var hash = $(this).prop('hash') || "#home";
			var clickHash = this.hash;

      console.log(location.hash);
			if(hash == clickHash) {
				var contentId = "#section-" + hash.substring(1);
				$("html, body").animate({ scrollTop: $(contentId).offset().top });
			}
		});

		ui.navigate();
	}

	ui.showMailAddress = function() {
		var encryptedAddress = "vkl1wdkhuCjpdlo1frp";

		var encrypt = function(value, key) {
			var encryptedValue = "";
			for(var i=0; i<value.length; i++)
				encryptedValue += String.fromCharCode(value.charCodeAt(i)+key);
			return encryptedValue;
		}

		var address = encrypt(encryptedAddress, -3);
		$("#mailAddress").html('<a href="mailto:'+address+'">'+address+'</a>');
	}

})(window.ui = window.ui || {});
