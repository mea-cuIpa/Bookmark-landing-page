const preloadImg = url => {
  new Image().src = url;
};

preloadImg('./images/illustration-features-tab-1.svg');
preloadImg('./images/illustration-features-tab-2.svg');
preloadImg('./images/illustration-features-tab-3.svg');

const body = document.querySelector('body');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');

const toggleMobileNav = () => {
  header.classList.toggle('mobile-nav--active');
};

const disableScroll = () => {
  body.classList.toggle('disable-scroll');
};

menuBtn.addEventListener('click', () => {
  toggleMobileNav();
  disableScroll();
});

const featureSection = document.querySelector('.feature');
const tabs = document.querySelector('.tabs');
const featureHeading = document.querySelector('.feature__heading');
const featureDescription = document.querySelector('.feature__description');
const featureImg = document.querySelector('.feature__img');

let features = [
  {
    heading: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    imgPath: './images/illustration-features-tab-1.svg',
    altText: 'dashboard',
  },
  {
    heading: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    imgPath: './images/illustration-features-tab-2.svg',
    altText: 'dashboard with magnifying glass',
  },
  {
    heading: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    imgPath: './images/illustration-features-tab-3.svg',
    altText: 'people waving to each other',
  },
];

const changeTab = index => {
  const changeContent = index => {
    featureHeading.textContent = features[index].heading;
    featureDescription.textContent = features[index].description;
    featureImg.src = features[index].imgPath;
    featureImg.alt = features[index].altText;
  };
  featureSection.classList.add('fade-out');

  setTimeout(() => {
    changeContent(index);
    featureSection.classList.remove('fade-out');
  }, 1000);
};

function changeTabs(e) {
  for (tab of tabs.children) {
    tab.classList.remove('tabs__tab--active');
  }

  e.target.classList.add('tabs__tab--active');

  if (e.target.id === 'tab-1') {
    changeTab(0);
  } else if (e.target.id === 'tab-2') {
    changeTab(1);
  } else if (e.target.id === 'tab-3') {
    changeTab(2);
  }
}

tabs.addEventListener('click', e => {
  changeTabs(e);
});

tabs.addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    changeTabs(e);
  }
});

const loginBtn = document.querySelector('.header__nav__link--login');
const btns = document.querySelectorAll('.btn');

function addRippleEffect(e) {
  e.addEventListener('click', e => {
    let boundingBox = e.target.getBoundingClientRect();
    let x = e.clientX - boundingBox.left;
    let y = e.clientY - boundingBox.top;

    let ripple = document.createElement('span');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    e.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 800);
  });
}

addRippleEffect(loginBtn);

btns.forEach(btn => {
  addRippleEffect(btn);
});

const pop = new Audio('./audio/pop.mp3');
const whoosh = new Audio('./audio/whoosh.mp3');

const attribution = document.querySelector('.attribution');
const attributionImg = document.querySelector('.attribution__img');

attributionImg.addEventListener('click', () => {
  if (attribution.classList.contains('attribution-active')) {
    whoosh.play();
  } else {
    pop.play();
  }
  attribution.classList.toggle('attribution-active');
});
