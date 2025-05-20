const form = document.querySelector('form') as HTMLFormElement;
let input = document.querySelector('form input') as HTMLInputElement;

form.onsubmit = (e) =>{
  e.preventDefault();
  const value = Number(input.value);
  const p = document.createElement('p');
  p.innerText = String(value + 20);
  form.appendChild(p);
}