function filterMenu(category) {
    const drinks = document.querySelectorAll('.drink');
    
    drinks.forEach(drink => {
        if (category === 'all' || drink.classList.contains(category)) {
            drink.style.display = 'inline-block';
        } else {
            drink.style.display = 'none';
        }
    });
}