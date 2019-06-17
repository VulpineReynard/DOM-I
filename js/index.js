const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
const linebreak = document.createElement("br");

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navigation = document.querySelectorAll('a');
console.log(navigation);

navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];

// Update the Masthead Text
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;

// Update Button Text
document.querySelector(".cta-text button").textContent = siteContent.cta["button"];

// Update Site Img
document.querySelector('.cta img').setAttribute('src', siteContent.cta["img-src"]);

// Top Content
let topContentHeaders = document.querySelectorAll('.top-content div h4');
topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];

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

document.querySelector('footer p').textContent = siteContent.footer.copyright;