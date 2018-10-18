import {calculate} from './calc'

window.addEventListener('load', function OnWindowLoaded() {
    const textArea = document.getElementById('inputVal');

    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });
    
    function onButtonClick(e) {
        if (e.target.innerHTML === 'C') {
            textArea.innerHTML = '0';
        } else if (e.target.innerHTML === '=') {
            let result = calculate(textArea.innerHTML);
            textArea.innerHTML = result;
        } else if (textArea.innerHTML === '0') {
            textArea.innerHTML = e.target.innerHTML;
        } else {
            textArea.innerHTML += e.target.innerHTML;
        }
    }
})
