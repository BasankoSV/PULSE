import closeModals from '../modules/closeModals.js';

const forms = overlayElem => {
  const REGEXPNAME = /[A-Za-zА-Яа-яЁё]{3,}/;
  const REGEXPPHONE = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/;
  const REGEXPEMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const errorMsgName = `<label class="error-msg for="name">Имя должно быть менее трех символов</label>`;
  const errorMsgPhone = `<label class="error-msg for="phone">Введите корректный номер телефона, 10 символов</label>`;
  const errorMsgEmail = `<label class="error-msg for="email">Введите корректный e-mail адрес</label>`;
  const feedForms = document.querySelectorAll('.feed-form');
  const modalThanks = document.querySelector('#thanks');

  let isValid = false;
  let nameValid = false;
  let phoneValid = false;
  let emailValid = false;

  const validation = (event, regExp, errorMsg) => {
    const errorMsgElem = document.querySelector('.error-msg');
    let target = event.target;
    if (!regExp.test(target.value)) {
      errorMsgElem || target.insertAdjacentHTML('afterend', `${errorMsg}`);
      isValid = false;
    } else {
      errorMsgElem && errorMsgElem.remove();
      isValid = true;
    }
    if (target.value == '') errorMsgElem && errorMsgElem.remove();
  };
  // Локально работать не будет, только с сервера, MAMP например.
  const sendRequest = async formA => {
    try {
      const response = await fetch('mailer/smart.php', {
        method: 'POST',
        //headers: {"Content-Type": "application/json; charset=utf-8"},
        body: new FormData(formA),
      });
      //const data = await response;
      //console.log('DATA: ', data);
    } catch (e) {
      console.error(e);
    }
  };

  feedForms.forEach(formA => {
    const submitBtn = formA.querySelector('.button_submit');
    submitBtn.disabled = true;
    formA.addEventListener('input', event => {
      switch (event.target.name) {
        case 'name':
          validation(event, REGEXPNAME, errorMsgName);
          nameValid = isValid;
          break;
        case 'phone':
          validation(event, REGEXPPHONE, errorMsgPhone);
          phoneValid = isValid;
          break;
        case 'email':
          validation(event, REGEXPEMAIL, errorMsgEmail);
          emailValid = isValid;
          break;
      } //switch
      nameValid && phoneValid && emailValid
        ? (submitBtn.disabled = false)
        : (submitBtn.disabled = true);
    }); // input

    formA.addEventListener('submit', event => {
      event.preventDefault();
      closeModals(overlayElem, event);
      sendRequest(formA);
      formA.reset();
      overlayElem.style.display = 'block';
      modalThanks.style.display = 'block';
    });
  }); // form
};

export default forms;
