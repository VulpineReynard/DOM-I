const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Careers",
    "nav-item-8": "Intro",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street \n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navigation = document.querySelectorAll('nav a');

// Navigation links
navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];

// navigation.forEach((element, index) => {
//   element.textContent = siteContent.nav["nav-item-" + index];
// });

//Add 2 more links to navigation bar
let link = document.createElement("a");
let link2 = document.createElement("a");

document.querySelector('nav').appendChild(link).textContent = siteContent.nav["nav-item-7"];
document.querySelector('nav').prepend(link2);

link.setAttribute('href', '#');
link2.setAttribute('href', '#');
link2.textContent = siteContent.nav["nav-item-8"];

navigation = document.querySelectorAll('nav a');
navigation.forEach(element => element.setAttribute('style', 'color: green'));


// Update the Masthead Text
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text h1').style.whiteSpace = 'pre-line';

// Update Button Text
document.querySelector(".cta-text button").textContent = siteContent.cta["button"];

// Update Site Img
document.querySelector('.cta img').setAttribute('src', siteContent.cta["img-src"]);

// Top Content
document.querySelectorAll('.top-content div h4')[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll('.top-content div h4')[1].textContent = siteContent["main-content"]["about-h4"];

let topContentText = document.querySelectorAll('.top-content div p');
topContentText[0].textContent = siteContent["main-content"]["features-content"];
topContentText[1].textContent = siteContent["main-content"]["about-content"];

// Update middle img
document.querySelector('.middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content
let bottomContentHeaders = document.querySelectorAll('.bottom-content div h4');
bottomContentHeaders[0].textContent = siteContent["main-content"]['services-h4'];
bottomContentHeaders[1].textContent = siteContent["main-content"]['product-h4'];
bottomContentHeaders[2].textContent = siteContent["main-content"]['vision-h4'];

let bottomContentText = document.querySelectorAll('.bottom-content div p');
bottomContentText[0].textContent = siteContent["main-content"]['services-content'];
bottomContentText[1].textContent = siteContent["main-content"]['product-content'];
bottomContentText[2].textContent = siteContent["main-content"]['vision-content'];

//Contact Info
document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"];
document.querySelectorAll('.contact p')[0].textContent = siteContent.contact.address;
document.querySelectorAll('.contact p')[1].textContent = siteContent.contact.phone;
document.querySelectorAll('.contact p')[2].textContent = siteContent.contact.email;
document.querySelectorAll('.contact p')[0].style.whiteSpace = 'pre-line';

// Footer-Copyright
document.querySelector('footer p').textContent = siteContent.footer.copyright;

//-----Styling------//
const linkHover = function() {
  this.style.transform = 'scale(1.5)'; 
  this.style.transition = 'all .1s ease-in-out';
  this.style.backgroundColor = 'lightgrey';
  this.style.padding = '2px';
  this.style.borderRadius = '5px';
  this.style.textDecoration = 'none';
  this.style.boxShadow = '0 3px 3px 0 darkgrey';
}

const linkHover2 = function() {
  this.style.transform = 'scale(1.0)';
  this.style.backgroundColor = 'lightblue';
}

navigation.forEach(element => { 
  element.addEventListener("mouseover", linkHover);
  element.addEventListener("mouseout", linkHover2);
});

const changeText = function() {
  document.querySelector('.cta-text h1').textContent = "DOM \n Is \n Painful";
  document.querySelector('.cta #cta-img').setAttribute('src', 'img/stress.jpg');
  document.querySelector('body').style.backgroundColor = "black";
}

document.querySelector(".cta-text button").addEventListener("click", changeText);