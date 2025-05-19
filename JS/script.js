$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
   dots:false,
   margin:48,
   loop: true,
         responsive : {
         0 : {
            items: 1,
         },
         601 : {
            items: 2,
         },
         1001 : {
            items: 3,
         }
      }
  });
});
const mobileNavHTML = `
<section class="mobile__nav" style="position:fixed; inset:0; background:#fff; z-index:9999; display:flex; flex-direction:column; overflow:hidden;">
  <div class="mobile__nav-header" style="display:flex;justify-content:space-between;align-items:center;padding:24px;">
    <a href="#">
      <img src="./img/icons/logo.svg" class="mobile__nav-logo" alt="Nav">
    </a>
    <button class="mobile__nav-btn" id="closeNav" style="background:none;border:none;">
      <img src="./img/icons/nav-bar.svg" alt="nav-bar">
    </button>
  </div>
  <nav class="mobile-list" style="flex:1;overflow:auto;">
    <ul class="mobile-items">
      <li><a href="" class="mobile-item">Hello</a></li>
      <li><a href="" class="mobile-item">Bonjour</a></li>
      <li><a href="" class="mobile-item">Olá</a></li>
      <li><a href="" class="mobile-item">Marhabaan</a></li>
    </ul>
  </nav>
  <div class="mobile__contacts">
    <ul class="contacts__items">
      <li class="item-title">Contact us</li>
      <li class="contacts__item"><a href="mailto:info@invoriem.com">info@invoriem.com</a></li>
      <li class="contacts__item"><a href="tel:+555 1234 52 58">+555 1234 52 58</a></li>
      <li class="contacts__item">3517 W. Gray St.<br>Utica,Pennsylvania <br>57867</li>
    </ul>
  </div>
  <div class="footer__copyright-nav">
    <div class="footer__email"><a href="mailto:info@invoriem.com">info@invoriem.com</a></div>
    <div class="footer__copyright">Copyright © 2020 Invoriem</div>
    <ul class="footer__social-items">
      <li><a href="#"><img src="./img/icons/instagram.svg" alt="instagram"></a></li>
      <li><a href="#"><img src="./img/icons/facebook.svg" alt="facebook"></a></li>
      <li><a href="#"><img src="./img/icons/linkedIn.svg" alt="linkedIn"></a></li>
      <li><a href="#"><img src="./img/icons/twitter.svg" alt="twitter"></a></li>
    </ul>
  </div>
</section>
`;

// Открытие меню
document.getElementById('btnHeader').addEventListener('click', function () {
  if (!document.querySelector('.mobile__nav')) {
    document.body.insertAdjacentHTML('beforeend', mobileNavHTML);
    document.body.style.overflow = 'hidden'; // запретить скролл фона

    // Закрытие меню
    document.getElementById('closeNav').addEventListener('click', function () {
      const nav = document.querySelector('.mobile__nav');
      if (nav) nav.remove();
      document.body.style.overflow = '';
    });
  }
});