let eggs = document.querySelectorAll('.egg');
let foundCount = 0;

eggs.forEach(egg => {
    egg.addEventListener('click', () => {
        if (!egg.classList.contains('clicked')) {
            egg.classList.add('clicked');
            foundCount++;
            if (foundCount === eggs.length) {
                document.getElementById('popup').classList.remove('hidden');
            }
        }
    });
});

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}
