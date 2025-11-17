
let totalPressed = 0;
let testedKeys = new Set();

document.addEventListener('keydown', (e) => {
    e.preventDefault();

    totalPressed++;
    document.getElementById('totalPressed').textContent = totalPressed;

    let displayKey = e.key === ' ' ? 'Space' : e.key;
    if (displayKey.length === 1) displayKey = displayKey.toUpperCase();
    document.getElementById('lastKey').textContent = displayKey;

    let keyElement = findKeyElement(e);

    if (keyElement) {
        keyElement.classList.add('pressed');

        if (!testedKeys.has(keyElement.dataset.key)) {
            testedKeys.add(keyElement.dataset.key);
            document.getElementById('keysTested').textContent = testedKeys.size;
        }
    }
});

document.addEventListener('keyup', (e) => {
    let keyElement = findKeyElement(e);

    if (keyElement) {
        keyElement.classList.remove('pressed');
        keyElement.classList.add('tested');
    }
});

function findKeyElement(e) {
    let keyElement = document.querySelector(`[data-key="${e.code}"]`);
 
    

    if (!keyElement) {
        keyElement = document.querySelector(`[data-key="${e.key}"]`);
    }

    if (!keyElement) {
        keyElement = document.querySelector(`[data-key="${e.key.toLowerCase()}"]`);
    }

    return keyElement;
}

function resetKeyboard() {
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('pressed', 'tested');
    });
    totalPressed = 0;
    testedKeys.clear();
    document.getElementById('totalPressed').textContent = '0';
    document.getElementById('keysTested').textContent = '0';
    document.getElementById('lastKey').textContent = '—';
}
