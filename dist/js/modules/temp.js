/* шаблоны из видео
const regExpName = /^[a-z0-9_-]{3,16}$/;
const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const regExpPass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
 */

/*  https://mattweb.ru/moj-blog/raznoe/item/142-30-primerov-regulyarnykh-vyrazhenij
Для проверки российских телефонных номеров используйте следующее выражение:
^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$
 */

const formsValidity = () => {
  const feedForms = document.querySelectorAll('.feed-form');
  const submitBtn = document.querySelectorAll('.button_submit');

  /*   let formIsValid = false;
  submitBtn.forEach(bnt => {
    if (formIsValid) bnt.disabled = false;
    else bnt.disabled = true;
  }); */

  const validation = () => {};
  let userData = [];

  feedForms.forEach(form => {
    //form.querySelector('.button_submit').disabled = true;
    form.addEventListener('input', e => {
      let target = e.target;

      const errorMsg = document.querySelector('.error-msg');

      switch (target.name) {
        case 'name':
          {
            target.value = target.value.trim().replaceAll(' ', '');
            if (target.value.length < 3) {
              errorMsg ||
                target.insertAdjacentHTML(
                  'afterend',
                  `<label class="error-msg" for="name">Имя должно быть менее трех символов</label>`
                );
            } else {
              userData.push({ name: target.value });
              errorMsg && errorMsg.remove();
            }
          }
          break;
        case 'phone':
          {
            let x = target.value
              .replace(/\D/g, '')
              .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            target.value = !x[2]
              ? x[1]
              : '(' +
                x[1] +
                ')' +
                x[2] +
                (x[3] ? '-' + x[3] : '') +
                (x[4] ? '-' + x[4] : '');

            if (x[0].length != 10) {
              errorMsg ||
                target.insertAdjacentHTML(
                  'afterend',
                  `<label class="error-msg" for="name">Введите корректный номер телефона, 10 символов</label>`
                );
            } else {
              userData.push({ phone: target.value });
              errorMsg && errorMsg.remove();
            }
            //console.log('phone: ', target.value);
          }
          break;
        case 'email': {
          let x = target.value.match(
            /^[\.\-_A-Za-z0-9]+?@[\.\-A-Za-z0-9]+?\.[A-Za-z0-9]{2,6}$/
          );
          if (!x) {
            errorMsg ||
              target.insertAdjacentHTML(
                'afterend',
                `<label class="error-msg" for="name">Введите корректный e-mail адрес</label>`
              );
          } else {
            userData.push({ email: target.value });
            errorMsg && errorMsg.remove();
            console.log(userData);
          }
        }
      }
    }); // input
  }); // form
};

export default formsValidity;

/* оригинал, работает, маска (111)222-33-44 
  let x = target.value
    .replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    target.value = !x[2]
      ? x[1]
      : '(' +
        x[1] +
        ')' +
        x[2] +
        (x[3] ? '-' + x[3] : '') +
        (x[4] ? '-' + x[4] : ''); 
*/

/* 04/11/2020 - 20:50
feedForms.forEach(form => {
  form.querySelector('.button_submit').disabled = true;
  form.addEventListener('input', event => {
    switch (event.target.name) {
      case 'name':
        validation(event, regExpName, errorMsgName);
        break;
      case 'phone':
        {
          if (!regExpPhone.test(target.value)) {
            errorMsg ||
              target.insertAdjacentHTML(
                'afterend',
                `<label class="error-msg" for="name">Введите корректный номер телефона, 10 символов</label>`
              );
          } else errorMsg && errorMsg.remove();

          if (target.value == '') errorMsg && errorMsg.remove();
        }
        break;
      case 'email':
        {
          if (!regExpEmail.test(target.value)) {
            errorMsg ||
              target.insertAdjacentHTML(
                'afterend',
                `<label class="error-msg" for="name">Введите корректный e-mail адрес</label>`
              );
          } else errorMsg && errorMsg.remove();

          if (target.value == '') errorMsg && errorMsg.remove();
        }
        break;
    } //switch
  }); // input
}); // form
}; */

// закрытие модальных окон closeModals.js
/* const modalId = e.target.parentElement.id;
      switch (modalId) {
        case 'consultation':
          modalConsultation.style.display = 'none';
          break;
        case 'order':
          modalOrder.style.display = 'none';
          break;
        case 'thanks':
          modalThanks.style.display = 'none';
          break;
} */

//target.value = target.value.trim().replaceAll(' ', ''); хотел использовать для имени forms.js

/* closeModals - закрыть все, передел на конкретные 
modalCloseElem.forEach(elem => {
  elem.addEventListener('click', e => {
    overlayElem.style.display = 'none';
    modalsElem.forEach(modal => (modal.style.display = 'none'));
  });
});
 */
