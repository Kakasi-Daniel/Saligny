const UI = (function(){
  
  document.querySelector('.dropdown_btn').addEventListener('mouseleave', () => {
    document.querySelector('.dropdown').style.visibility = 'hidden';
    document.querySelector('.dropdown').style.opacity = 0;
  });

  document.querySelector('.dropdown').addEventListener('mouseenter', e => {
    document.querySelector('.dropdown').style.visibility = 'visible';
    document.querySelector('.dropdown').style.opacity = 1;
  });

  document.querySelector('.dropdown').addEventListener('mouseleave', e => {
    document.querySelector('.dropdown').style.visibility = 'hidden';
    document.querySelector('.dropdown').style.opacity = 0;
  });

  document.querySelectorAll('.dropdown_btn').forEach(e =>{
    e.addEventListener('mouseenter', () => {
      document.querySelector('.dropdown').style.visibility = 'visible';
      document.querySelector('.dropdown').style.opacity = 1;
    });
  });

  document.querySelector('.dropdown_btn2').addEventListener('mouseleave', () => {
    document.querySelector('.dropdown2').style.visibility = 'hidden';
    document.querySelector('.dropdown2').style.opacity = 0;
  });

  document.querySelector('.dropdown2').addEventListener('mouseenter', e => {
    document.querySelector('.dropdown2').style.visibility = 'visible';
    document.querySelector('.dropdown2').style.opacity = 1;
  });

  document.querySelector('.dropdown2').addEventListener('mouseleave', e => {
    document.querySelector('.dropdown2').style.visibility = 'hidden';
    document.querySelector('.dropdown2').style.opacity = 0;
  });

  document.querySelectorAll('.dropdown_btn2').forEach(e =>{
    e.addEventListener('mouseenter', () => {
      document.querySelector('.dropdown2').style.visibility = 'visible';
      document.querySelector('.dropdown2').style.opacity = 1;
    });
  });

  window.onscroll = () => {
    if(pageYOffset > innerHeight /2 ){
      document.querySelector('.nav_2').style.top = 0;
      document.querySelector('.hamburger_btn').style.top = '88%';
    }else{
      document.querySelector('.nav_2').style.top = '-100px';
      document.querySelector('.dropdown2').style.visibility = 'hidden';
      document.querySelector('.dropdown2').style.opacity = 0;
      document.querySelector('.hamburger_btn').style.top = '5%';
    }
  }
})();

