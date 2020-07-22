const UI = (function(){
  document.querySelector('.dropdown_btn').addEventListener('mouseenter', () => {
    document.querySelector('.dropdown').style.visibility = 'visible';
    document.querySelector('.dropdown').style.opacity = 1;
  });

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
})();

