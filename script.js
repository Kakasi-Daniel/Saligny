const UI = (function () {

  const showDropdown = function (d) {
    if (d === 1) {
      document.querySelector('.dropdown').style.visibility = 'visible';
      document.querySelector('.dropdown').style.opacity = 1;
    } else {
      document.querySelector('.dropdown2').style.visibility = 'visible';
      document.querySelector('.dropdown2').style.opacity = 1;
    }
  };

  const hideDropdown = function (d) {
    if (d === 1) {
      document.querySelector('.dropdown').style.visibility = 'hidden';
      document.querySelector('.dropdown').style.opacity = 0;
    } else {
      document.querySelector('.dropdown2').style.visibility = 'hidden';
      document.querySelector('.dropdown2').style.opacity = 0;
    }
  };

  document.querySelector('.dropdown_btn').addEventListener('mouseenter', () => {
    showDropdown(1);
  });
  document.querySelector('.dropdown_btn').addEventListener('mouseleave', () => {
    hideDropdown(1);
  });
  document.querySelector('.dropdown').addEventListener('mouseenter', (e) => {
    showDropdown(1);
  });
  document.querySelector('.dropdown').addEventListener('mouseleave', (e) => {
    hideDropdown(1);
  });

  document
    .querySelector('.dropdown_btn2')
    .addEventListener('mouseenter', () => {
      showDropdown(2);
    });
  document
    .querySelector('.dropdown_btn2')
    .addEventListener('mouseleave', () => {
      hideDropdown(2);
    });
  document.querySelector('.dropdown2').addEventListener('mouseenter', (e) => {
    showDropdown(2);
  });
  document.querySelector('.dropdown2').addEventListener('mouseleave', (e) => {
    hideDropdown(2);
  });

  window.onscroll = () => {
    if (pageYOffset > innerHeight / 2) {
      document.querySelector('.nav_2').style.top = 0;
      document.querySelector('.hamburger_btn').style.top = '88%';
    } else {
      document.querySelector('.nav_2').style.top = '-100px';
      hideDropdown(2);
      document.querySelector('.hamburger_btn').style.top = '5%';
    }
  };

  document.querySelector('.hamDropBtn').addEventListener('click', () =>{
    document.querySelector('.hamDrop').classList.toggle('hamDropActive');
  });

  document.querySelector('.hamburger_btn').onclick = e => {
    document.querySelector('.hamburger_btn').classList.toggle('close');
    document.querySelector('.hamburger_menu').classList.toggle('hamburger_menuActive');
  }
})();
