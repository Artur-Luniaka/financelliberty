const input = document.querySelector('#phone');
const iti = window.intlTelInput(input, {
  utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.21/build/js/utils.js', // подключаем утилиты
  initialCountry: 'auto',
  onlyCountries: [],
  preferredCountries: [],
  separateDialCode: false,
  autoHideDialCode: true,
  nationalMode: false,
  formatOnDisplay: true,
  customPlaceholder: 'Введите номер',
  hiddenInput: 'phone',
});
