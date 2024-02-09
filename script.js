const h1 = document.getElementById('flashing');
const text = h1.textContent;
h1.innerHTML = '';

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    h1.appendChild(span);
}

