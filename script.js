const input = document.querySelector('.login_input');
const button = document.querySelector('login_button');
const form = document.querySelector('.login_form');


form.addEventListener('submit', handleSubmit);

const handSubmit = (event) => { event.preventDefault ();
    localStorage.setItem('player',input.value);
    window.location = 'pages/game.html';
}


input.addEventListener('input', validateInput) 

const validadeInput = ({target}) => {
        if (usename.value.length >= 1) {
            button.removeAttribute('disabled');
        }
        else {
        button.setAttribute('disabled', '');
        }
}
