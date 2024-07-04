console.log('external JS'); // Menampilkan pesan 'external JS' di konsol browser
document.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var aboutUs = document.querySelector('#navbarbrake');
    var aboutUsOffset = aboutUs.offsetTop;

    if (window.scrollY >= aboutUsOffset) {
        navbar.classList.add('navbar-static');
    } else {
        navbar.classList.remove('navbar-static');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Slider & Text pada jam dan about us
    let index = 0;
    const images = document.querySelectorAll('.image-item');
    const totalImages = images.length;

    document.querySelector('.btn-next').addEventListener('click', function() {
        index = (index + 1) % totalImages;
        updateImagePosition();
    });
  
    document.querySelector('.btn-prev').addEventListener('click', function() {
        index = (index - 1 + totalImages) % totalImages;
        updateImagePosition();
    });

    function updateImagePosition() {
        const offset = -index * 5;
        document.querySelector('.image-list').style.transform = `translateX(${offset}%)`;
    }

    function toggleVisibilityOnScroll(elements) {
        window.addEventListener('scroll', () => {
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if(elementPosition < windowHeight && elementPosition > 0) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        });
    }

    toggleVisibilityOnScroll([document.querySelector('.heading'), document.querySelector('.about-content')]);

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkFadeOutAnimation() {
        var elements = document.querySelectorAll('.description');
        for (var i = 0; i < elements.length; i++) {
            if (isElementInViewport(elements[i])) {
                elements[i].classList.add('animate-fadeOut');
            }
        }
    }

    window.addEventListener('scroll', checkFadeOutAnimation);

    window.addEventListener("load", () => {
        clock();
        function clock() {
          const today = new Date();

          const hours = today.getHours();
          const minutes = today.getMinutes();
          const seconds = today.getSeconds();

          const hour = hours < 10 ? "0" + hours : hours;
          const minute = minutes < 10 ? "0" + minutes : minutes;
          const second = seconds < 10 ? "0" + seconds : seconds;

          const hourTime = hour > 12 ? hour - 12 : hour;

          const ampm = hour < 12 ? "AM" : "PM";

          const month = today.getMonth();
          const year = today.getFullYear();
          const day = today.getDate();

          const monthList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];

          const date = monthList[month] + " " + day + ", " + year;
          const time = hourTime + ":" + minute + ":" + second + ampm;

          const dateTime = date + " - " + time;

          document.getElementById("date-time").innerHTML = dateTime;
          setTimeout(clock, 1000);
        }
      });
});

// Pop-up login dan register
var loginPopup = document.getElementById("login-popup");
var registerPopup = document.getElementById("register-popup");

var loginBtn = document.getElementById("login-btn");
var registerBtn = document.getElementById("register-btn");

var closeLogin = document.getElementById("close-login");
var closeRegister = document.getElementById("close-register");

loginBtn.onclick = function() {
    loginPopup.style.display = "block";
}

registerBtn.onclick = function() {
    registerPopup.style.display = "block";
}

closeLogin.onclick = function() {
    loginPopup.style.display = "none";
}

closeRegister.onclick = function() {
    registerPopup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == loginPopup) {
        loginPopup.style.display = "none";
    }
    if (event.target == registerPopup) {
        registerPopup.style.display = "none";
    }
}
