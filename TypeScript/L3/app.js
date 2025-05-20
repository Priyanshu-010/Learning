var form = document.querySelector('form');
var input = document.querySelector('form input');
form.onsubmit = function (e) {
    e.preventDefault();
    var value = Number(input.value);
    var p = document.createElement('p');
    p.innerText = String(value + 20);
    form.appendChild(p);
};
