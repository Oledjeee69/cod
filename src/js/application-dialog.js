export function initApplicationDialog(form, submitBtn) {
  const dialog = document.querySelector('#application-dialog');
  const output = document.querySelector('#application-json');
  const closeBtn = document.querySelector('#application-dialog-close');

  if (!dialog || !output || !closeBtn) {
    return {
      show(payload) {
        alert(JSON.stringify(payload, null, 2));
      },
    };
  }

  const close = () => {
    dialog.close();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Оформить заявку';
  };

  closeBtn.addEventListener('click', close);
  dialog.addEventListener('cancel', close);
  dialog.addEventListener('close', () => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Оформить заявку';
  });

  return {
    show(payload) {
      output.textContent = JSON.stringify(payload, null, 2);
      submitBtn.disabled = true;
      submitBtn.textContent = 'Заявка отправлена';
      dialog.showModal();
    },
  };
}
