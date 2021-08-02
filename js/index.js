//Making sure that the tab title matches//

const tabTitle = document.querySelector('Title');

tabTitle.textContent='Great Idea!';

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

//Fixing the Navigation Bar//

const navItems = document.querySelectorAll('a');

const navItems1 = navItems[0];
navItems1.textContent = siteContent.nav['nav-item-1'];
navItems1.style.color = 'green';

const navItems2 = navItems[1];
navItems2.textContent = siteContent.nav['nav-item-2'];
navItems2.style.color = 'green';

const navItems3 = navItems[2];
navItems3.textContent = siteContent.nav['nav-item-3'];
navItems3.style.color = 'green';

const navItems4 = navItems[3];
navItems4.textContent = siteContent.nav['nav-item-4'];
navItems4.style.color = 'green';

const navItems5 = navItems[4];
navItems5.textContent = siteContent.nav['nav-item-5'];
navItems5.style.color = 'green';

const navItems6 = navItems[5];
navItems6.textContent = siteContent.nav['nav-item-6'];
navItems6.style.color = 'green';

const newNav = document.querySelector('nav');
const newItem1 = document.createElement('a');
const newItem2 = document.createElement('a');
newItem1.textContent = "New Item 1";
newItem2.textContent = "New Item 2";
newNav.prepend(newItem1);
newNav.appendChild(newItem2);


//Fixing the CTA Items//

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta['button'];

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);


//Fixing Main Content Headers//

const mainContentHeaders = document.querySelectorAll('h4');

const mainContHead1 = mainContentHeaders[0];
mainContHead1.textContent = siteContent["main-content"]["features-h4"];

const mainContHead2 = mainContentHeaders[1];
mainContHead2.textContent = siteContent["main-content"]["about-h4"];

const mainContHead3 = mainContentHeaders[2];
mainContHead3.textContent = siteContent["main-content"]["services-h4"];

const mainContHead4 = mainContentHeaders[3];
mainContHead4.textContent = siteContent["main-content"]["product-h4"];

const mainContHead5 = mainContentHeaders[4];
mainContHead5.textContent = siteContent["main-content"]["vision-h4"];


//Fixing Main Content Paragraphs//

const mainContentParagraphs = document.querySelectorAll('p');

const mainContPara1 = mainContentParagraphs[0];
mainContPara1.textContent = siteContent["main-content"]["features-content"];

const mainContPara2 = mainContentParagraphs[1];
mainContPara2.textContent = siteContent["main-content"]["about-content"];

const mainContPara3 = mainContentParagraphs[2];
mainContPara3.textContent = siteContent["main-content"]["services-content"];

const mainContPara4 = mainContentParagraphs[3];
mainContPara4.textContent = siteContent["main-content"]["product-content"];

const mainContPara5 = mainContentParagraphs[4];
mainContPara5.textContent = siteContent["main-content"]["vision-content"];


//Fixing Main Content Image//

const mainImage = document.getElementById('middle-img');
mainImage.setAttribute('src', siteContent['main-content']['middle-img-src']);


//Fixing Footer Header//

const footerHeader = mainContentHeaders[5];
footerHeader.textContent = siteContent.contact["contact-h4"];


//Fixing Footer Paragraphs//

const footerPara1 = mainContentParagraphs[5];
footerPara1.textContent = siteContent.contact.address;

const footerPara2 = mainContentParagraphs[6];
footerPara2.textContent = siteContent.contact.phone;

const footerPara3 = mainContentParagraphs[7];
footerPara3.textContent = siteContent.contact.email;


//Fixing Footer Copyright Statement//

const copyrightStatement = mainContentParagraphs[8];
copyrightStatement.textContent = siteContent.footer.copyright;


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

