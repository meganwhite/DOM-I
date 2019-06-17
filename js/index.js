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
    "h1": "DOM Is Awesome",
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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelector('nav');

let navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

let headline = document.querySelector('h1');
headline.textContent = siteContent["cta"]["h1"];

let button = document.querySelector('button');
button.setAttribute('button',siteContent["cta"]["button"]);

let headlineImg = document.getElementById('cta-img');
headlineImg.setAttribute('src',siteContent["cta"]["img-src"]);

let topHeadlines = document.querySelectorAll(".top-content .text-content h4");
topHeadlines[0].textContent = siteContent["main-content"]["features-h4"];
topHeadlines[1].textContent = siteContent["main-content"]["about-h4"];

let topContent = document.querySelectorAll(".top-content .text-content p");
topContent[0].textContent = siteContent["main-content"]["features-content"];
topContent[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

let bottomHeadlines = document.querySelectorAll(".bottom-content .text-content h4");
bottomHeadlines[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeadlines[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeadlines[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll(".bottom-content .text-content p");
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

let contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];

let contact = document.querySelectorAll(".contact p");
contact[0].textContent = siteContent["contact"]["address"];
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];