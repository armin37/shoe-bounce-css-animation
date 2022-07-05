const colors = document.getElementsByClassName('color')
for (let color of colors) {
    color.addEventListener('click', changeProduct);
}

function changeProduct(event) {
    const color = event.currentTarget.dataset.color;
    let newItem = document.querySelectorAll(`[data-item=${color}]`)[0];
    let previousItem = document.querySelectorAll(`[data-selected]`)[0];

    if (newItem !== previousItem) {
        newItem.dataset.selected = '';
        newItem.classList.remove('fadeOut');

        setTimeout(() => {
            previousItem.style.display = 'none';
            newItem.classList.add('fadeIn');
            newItem.style.display = 'block';
            document.getElementById('shadow').className = '';
        }, 600)
        delete previousItem.dataset.selected;
        previousItem.classList.add('fadeOut');
        previousItem.classList.remove('fadeIn');

        document.getElementById('shadow').className = 'shadow';
    }
}
