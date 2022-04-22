btn = document.querySelector('btnOne');

btn.addEventListener('click', event => {
    button.innerHTML = `Nombre de clics : ${event.detail}`;
  });