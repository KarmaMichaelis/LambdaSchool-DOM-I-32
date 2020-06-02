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

//updating the nav bar and links
 const navOne=document.querySelector('a:nth-of-type(1)')
 navOne.textContent='Services'

 const navTwo=document.querySelector('a:nth-of-type(2)')
 navTwo.textContent='Product'

 const navThree=document.querySelector('a:nth-of-type(3)')
 navThree.textContent='Vision'
 

 const navFour=document.querySelector('a:nth-of-type(4)')
 navFour.textContent='Features'

 const navFive=document.querySelector('a:nth-of-type(5)')
 navFive.textContent='About'

 const navSix=document.querySelector('a:nth-of-type(6)')
 navSix.textContent='Contact'

 //end of NavBar

 //top section-Image
 const circleImage=document.querySelector('#cta-img')

 circleImage.setAttribute('src','img/header-img.png')
 
 //end top section-Image

 //top section-H1 Text
 const boldText=document.querySelector('h1')
boldText.textContent='Dom Is  Awesome'

//end top Section-H1 Text

//top section-Button
const btn=document.querySelector('button')
btn.textContent='Get Started'

//end top Section-Button

//middle section-Image
const codeImage=document.querySelector('#middle-img')
codeImage.setAttribute('src', 'img/mid-page-accent.jpg')

//end middle section-Image

//middle-top section-H4
const firstH4=document.querySelector('.top-content .text-content:nth-of-type(1)  h4')
firstH4.textContent='Features'

const secondH4=document.querySelector('.top-content .text-content:nth-of-type(2) h4')
secondH4.textContent='About'

//end middle-top section h4

//middle-bottom section h4
const thirdH4=document.querySelector('.bottom-content .text-content:nth-of-type(3)  h4')
thirdH4.textContent='Vision'

const fourthH4=document.querySelector('.bottom-content .text-content:nth-of-type(2)  h4')
fourthH4.textContent='Product'

const fifthH4=document.querySelector('.bottom-content .text-content:nth-of-type(1)  h4')
fifthH4.textContent='Services'

//middle-bottom section h4 complete

//middle-top section-para
const paraOne=document.querySelector('.top-content .text-content:nth-of-type(1)  p')
paraOne.textContent='Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const paraTwo=document.querySelector('.top-content .text-content:nth-of-type(2)  p')
paraTwo.textContent='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//end middle-top section para

//middle-bottom section para
const paraThree=document.querySelector('.bottom-content .text-content:nth-of-type(1)  p')
paraThree.textContent='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const paraFour=document.querySelector('.bottom-content .text-content:nth-of-type(2)  p')
paraFour.textContent='Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const paraFive=document.querySelector('.bottom-content .text-content:nth-of-type(3)  p')
paraFive.textContent='Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//end middle-bottom section-para