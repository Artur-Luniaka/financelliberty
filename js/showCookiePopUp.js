document.addEventListener('DOMContentLoaded', function () {
  const cookiePopUpHtml = `
    <div class="cookies-pop-up-wrapper">
      <h3 class="cookies-pop-up-title">We Use Cookies 🍪</h3>
      <p class="cookies-pop-up-text">
        This website uses cookies to enhance your experience, analyze traffic, and personalize
        content. By continuing to use the site, you agree to our Privacy Policy.
      </p>
      <button class="cookies-pop-up-btn" type="button">I agree ✅</button>
    </div>
  `;

  setTimeout(() => {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', cookiePopUpHtml);

    const cookiePopUp = document.querySelector('.cookies-pop-up-wrapper');
    const closePopUp = document.querySelector('.cookies-pop-up-btn');

    cookiePopUp.style.opacity = 0;
    cookiePopUp.style.visibility = 'hidden';
    cookiePopUp.style.transition = 'opacity 0.5s, visibility 0.5s';

    setTimeout(() => {
      cookiePopUp.style.opacity = 1;
      cookiePopUp.style.visibility = 'visible';
    }, 50);

    closePopUp.addEventListener('click', function () {
      cookiePopUp.style.opacity = 0;
      cookiePopUp.style.visibility = 'hidden';
    });
  }, 5000);
});
