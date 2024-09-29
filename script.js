const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
window.addEventListener('load', () => {
  setTimeout(() => {
    scroll.update();
  }, 500); // Adjust delay if necessary
});
var timeout;
var anims = gsap.timeline();


function revealtoSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {

    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    
  
    elem.innerHTML = "";
    elem.appendChild(parent);
   
  });
}
function valuesetters() {
  gsap.set("#home #nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home #nav button", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });
  gsap.set(".arrow i", { y: 100 });
}
function loaderanimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 200,
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-110%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
      onComplete: function () {
        animatehomepage();
      },
    });
}
function animatehomepage() {
  var tl = gsap.timeline();

  tl.to("#nav  a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  });
  tl.to("#nav button", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home .parent .child", {
      y: 0,
      delay: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .to("#home .row img", {
      opacity: 1,
      delay: -0.5,
      ease: Expo.easeInOut,
    })
    .to(".arrow i", {
      y: -80,
      rotate: 180,
      rotate: 360,
      duration: 2,
    })
    .to(".arrow i", {
      y: 0,
      repeat: Infinity,
      yoyo: true,
      duration: 2,
    })
    .to(".down i", {
      y: 40,
      repeat: Infinity,
      yoyo: true,
      duration: 1,
    });
  anims.to("#inner #inside", {
    y: 100,
    stagger: 0.1,
    duration: 2,
    scrub: 10,
    repeat: Infinity,
    yoyo: true,
    y: -80,
  });
}
function appopener() {
  const whatsappButton = document.getElementById("whatsapp");
  whatsappButton.addEventListener("click", () => {
    const phoneNumber = "+919054100373"; // Replace with the desired phone number
    const message = "Hey Sagar, I have just visited your portfolio."; // Replace with your desired message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  });

  const emailButton = document.getElementById("maill");
  emailButton.addEventListener("click", () => {
    const emailAddress = "Sagardabhi816@gmail.com.com"; // Replace with the desired email address
    const subject = ""; // Replace with your desired subject
    const body = ""; // Replace with your desired email body

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });

  const emailButton1 = document.getElementById("mail");
  emailButton1.addEventListener("click", () => {
    const emailAddress = "Sagardabhi816@gmail.com.com"; // Replace with the desired email address
    const subject = ""; // Replace with your desired subject
    const body = ""; // Replace with your desired email body

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });

  const linkedinButton = document.getElementById("Linkedin");
  linkedinButton.addEventListener("click", () => {
    const linkedinProfileUrl =
      "https://www.linkedin.com/in/sagar-dabhi-131a1626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // Replace with your LinkedIn profile URL
    window.open(linkedinProfileUrl, "_blank");
  });

  const instagramButton = document.getElementById("Insta");
  instagramButton.addEventListener("click", () => {
    const instagramProfileUrl = "https://www.instagram.com/Sagar_dabhi96"; // Replace with your Instagram profile URL
    window.open(instagramProfileUrl, "_blank");
  });

  const instagramButton2 = document.getElementById("Instaa");
  instagramButton2.addEventListener("click", () => {
    const instagramProfileUrl2 = "https://www.instagram.com/Sagar_dabhi96"; // Replace with your Instagram profile URL
    window.open(instagramProfileUrl2, "_blank");
  });
}
function Hamburgermenu() {

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  let count = 1;
  const anchorContent = `<li class="nav-item">  
  <a href="mailto:Sagardabhi816@gmail.com.com" class="nav-link" id="hello">Gmail
  <span id="line1" class="line"></span>
  <span id="line2" class="line"></span></a>
</li>
<li class="nav-item">
  <a href="https://www.linkedin.com/in/sagar-dabhi-131a1626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="nav-link">Linkedin
  <span id="line1" class="line"></span>
  <span id="line2" class="line"></span></a></a>
</li>
<li class="nav-item">
  <a href="https://www.instagram.com/Sagar_dabhi96" class="nav-link">Instagram
   <span id="line1" class="line"></span>
  <span id="line2" class="line"></span></a></a>
</li>`;
  const buttonContent = `<li class="nav-item">
  <button id="mail"><img src="Svgs/Mail.svg" alt="" /></button>
</li>
<li class="nav-item">
  <button id="Linkedin"><img src="Svgs/Linkedin.svg" alt="" /></button>
</li>
<li class="nav-item">
  <button id="Insta"><img src="Svgs/Insta.svg" alt="" /></button>
</li>`;

  hamburger.addEventListener("click", () => {
    if (count === 1) {
      count = 0;
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      navMenu.innerHTML = anchorContent;
    } else {
      count = 1;
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      setTimeout(() => {
        navMenu.innerHTML = buttonContent;
      }, 100);
    }
  });
}
function ProjectMaker(){
  let parentdiv = document.querySelector(".portfolio>.portfolio-gallery");
  var clutter = "";
  let arrayofdata = [
    
    {
      Video: "Videos/Obys.mp4",
      Heading: "Obys Agency",
      Para: "A responsive clone replicating Obys Agency’s UI with dynamic animations",
      Language: "HTML , CSS , JavaScript , GSAP , Locomotive.JS",
      Livelink: "https://sagardabhi816.github.io/Obys-Agency/",
      Srccodelink: "https://github.com/SagarDabhi816/Obys-Agency",
      type: "animations",
    },
    {
      Video: "Videos/Cynthia.mp4",
      Heading: "Cynthia Ugwu",
      Para: "My First Animated landing page clone that I've made while learning at same time",
      Language: "HTML , CSS , JavaScript , GSAP , Locomotive.JS",
      Livelink: "https://sagardabhi816.github.io/Cynthia-Ugwu/",
      Srccodelink: "https://github.com/SagarDabhi816/Cynthia-Ugwu",
      type: "animations",
    },
    {
      Video: "Videos/Golf.mp4",
      Heading: "Sidcup Family Golf",
      Para: "landing Page with animations and micro interactions",
      Language: "HTML , CSS , JavaScript , GSAP , Locomotive.JS",
      Livelink: "https://sagardabhi816.github.io/Sidcup-Family-Golf-/",
      Srccodelink: "https://github.com/SagarDabhi816/Sidcup-Family-Golf-",
      type: "animations",
    },
    {
      Video: "Videos/Works.mp4",
      Heading: "Works Studio",
      Para: "Recreating Experience of the Works Studio Webpage",
      Language: "HTML , CSS , JavaScript , GSAP , Locomotive.JS",
      Livelink: "https://sagardabhi816.github.io/Works-Studio/",
      Srccodelink: "https://github.com/SagarDabhi816/Works-Studio",
      type: "animations",
    },
    {
      Video: "Videos/Errorvdo.mp4",
      Heading: "Bubble Pop Game",
      Para: "Spot the target number shows on screen and pop it before time runs out. Each successful pop will increases your score My First Animated landing page clone that ive made while lerning at same time",
      Language: "HTML , CSS , JavaScript ",
      Livelink:
        "https://sagardabhi816.github.io/Small-JavaScript-Projects/Bubble%20Game/index.html",
      Srccodelink:
        "https://github.com/SagarDabhi816/Small-JavaScript-Projects/tree/main/Bubble%20Game",
      type: "minor",
    },
    {
      Video: "Videos/Passgen.mp4",
      Heading: "Password Generator",
      Para: "Simple Random Password Generator",
      Language: "HTML , CSS , JavaScript ",
      Livelink:
        "https://sagardabhi816.github.io/Small-JavaScript-Projects/Password%20Generator/index.html",
      Srccodelink:
        "https://github.com/SagarDabhi816/Small-JavaScript-Projects/tree/main/Password%20Generator",
      type: "minor",
    },
    {
      Video: "Videos/scsdb.mp4",
      Heading: "SCSDB",
      Para: "A movie page with real time trending movies/tvshows with dedicated page for celebries information",
      Language: "React , Tailwind CSS",
      Livelink: "https://scsdbmvapp.netlify.app/",
      Srccodelink: "https://github.com/SagarDabhi816/SCSDB-A-Movie-App",
      type: "react",
    },
    {
      Video: "Videos/Reactpassgen.mp4",
      Heading: "Password Generator",
      Para: "Performance optimised Password Generator with copy to clipboard functionality",
      Language: "React , Tailwind CSS",
      Livelink: "https://passwordgenerstor.netlify.app/",
      Srccodelink:"https://github.com/SagarDabhi816/Optimised-Password-Generator",
      type: "react",
    },
    {
      Video: "Videos/Currency_convo1.mp4",
      Heading: "Currency Converter",
      Para: "Seamless and accurate conversions between various global currencies",
      Language: "React , Tailwind CSS",
      Livelink:
        "https://currency-converter-e17cd7.netlify.app/",
      Srccodelink:
        "https://github.com/SagarDabhi816/Currency-Converter",
      type: "react",
    },
    {
      Video: "Videos/Refokus.mp4",
      Heading: "Refokus",
      Para: "Static Landing Page of Refokus",
      Language: "React , Tailwind CSS",
      Livelink:
        "https://refokusxd.netlify.app/",
      Srccodelink:
        "https://github.com/SagarDabhi816/Refokus",
      type: "react",
    },
  ];

  clutter += arrayofdata
    .map(
      (val) =>
        `
        <div class="portfolio-box mix ${val.type}">
                              <div class="portfolio-img">
                                  <video src="${val.Video}" autoplay muted loop></video>
                              </div>
                              <div class="portfolio-content">    
                                  <div id="rightpart">
                                      <h1 class="headingh1">${val.Heading}</h1>
                                      <p>${val.Para}</p>
                                      <h3>${val.Language}</h3>
                                      <div class="wrapper">                                  
                                          <a class="cta" href="${val.Livelink}"><span>Watch Live </span>
                                              <span>
                                                  <svg width="36px" height="23px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                      <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                      <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                                      <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                                      <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                                                      </g>
                                                  </svg>
                                              </span> 
                                              </a>
                                              <a class="cta" href="${val.Srccodelink}"><span> Source Code </span>
                                              <span>
                                                  <svg width="36px" height="23px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                      <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                      <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                                      <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                                      <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                                                      </g>
                                                  </svg>
                                               </span> 
                                              </a>           
                                      </div>
                                  </div> 
           </div>   
      </div>         `
    )
    .join("");

  parentdiv.innerHTML = clutter;
  mixitup(".portfolio-gallery", {
    selectors: {
      target: ".portfolio-box",
    },
    animation: {
      duration: 500,
    },
  });

  document.querySelector(".mini").innerText =
    "(" + "0" + arrayofdata.length + ")";
}
function scrollbuttons(){
  document.querySelector(".arrow i").addEventListener("click", function(){
    scroll.scrollTo(700);
  });
  document.querySelector(".down i").addEventListener("click", function () {
    scroll.scrollTo(1380);
  });

document
  .querySelector("#nav .project")
  .addEventListener("click", function () {
    scroll.scrollTo(1370);
  });
document
  .querySelector("#nav .aboutme")
  .addEventListener("click", function () {
    scroll.scrollTo(3150);
  });
document
  .querySelector("#nav .contact")
  .addEventListener("click", function () {
    scroll.scrollTo(3950);
  });

document
  .querySelector("#foter .backtotop")
  .addEventListener("click", function () {
    scroll.scrollTo(0);
  });
}

Hamburgermenu();
ProjectMaker();
revealtoSpan();
valuesetters();
loaderanimation();
scrollbuttons();
appopener();
