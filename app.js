//Define elements

const wordNumber = document.querySelector('.word-number');
const textArea = document.querySelector('#text-area');

//Event listener

textArea.addEventListener('keyup', () => {
    let text = textArea.value.split(' ');
    if (text[text.length - 1] == ''){
        wordNumber.textContent = text.length - 1 ;
    } else if (text[text.length - 1] !== ''){
        wordNumber.textContent = text.length;
    }
    // wordNumber.textContent = text.length;
});