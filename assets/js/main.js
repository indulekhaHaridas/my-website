(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // section menu active
	function onScroll(event) {
		var sections = document.querySelectorAll('.page-scroll');
		var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute('href');
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
			if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
				document.querySelector('.page-scroll').classList.remove('active');
				currLink.classList.add('active');
			} else {
				currLink.classList.remove('active');
			}
		}
	};

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    "use strict";

}) ();


function toggleContent(platform) {
  // Hide all platform images
  document.querySelectorAll('.platform-image').forEach(image => {
    image.classList.remove('active');
  });
  
  // Show the selected platform image
  document.getElementById(`platform-image-${platform}`).classList.add('active');

  // Define the content for each platform
  const platformContents = {
    android: "Manage Android devices efficiently with Hexnode's UEM platform.",
    ios: "Secure and manage iOS devices with ease using Hexnode.",
    mac: "Leverage Hexnode's desktop management for macOS to its full potential.",
    windows: "Hexnode provides comprehensive management for Windows devices.",
    tvos: "Manage and secure tvOS devices seamlessly with Hexnode UEM.",
    fireos: "FireOS devices can be securely managed with Hexnode's UEM solution."
  };

  // Set the content for the popup
  document.getElementById("popup-text").textContent = platformContents[platform];
  
  // Show the popup
  document.getElementById("popup-overlay").classList.add("show");
}

function closePopup() {
  // Hide the popup
  document.getElementById("popup-overlay").classList.remove("show");
}

