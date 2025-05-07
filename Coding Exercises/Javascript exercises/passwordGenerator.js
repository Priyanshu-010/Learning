let pass = '';
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 1; i < 8; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  pass += chars.charAt(randomIndex);
}

console.log(pass)