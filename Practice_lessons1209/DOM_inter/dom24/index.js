// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const sidebarbtn = document.querySelector('#menu-sidebar');

sidebarbtn.addEventListener('click', () => {document.querySelector('#app-sidebar').classList.toggle('show')})