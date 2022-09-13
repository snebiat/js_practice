// TODO: log the button's textContent when it's clicked
document.querySelector('#my-button').addEventListener('click', event => {
    console.log(event.currentTarget.textContent)
})