const form = document.querySelector('.contact-us-form');

function redirectToThankYouPage(event) {
  event.preventDefault();
  window.location.href = '../thank-you.html';
}

form.addEventListener('submit', redirectToThankYouPage);
