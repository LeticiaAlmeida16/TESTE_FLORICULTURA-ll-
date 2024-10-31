let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Calcula o novo índice
    currentIndex += direction;

    // Verifica os limites do índice
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Volta para o último
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Volta para o primeiro
    }

    // Atualiza a posição do carrossel
    const offset = -currentIndex * (items[0].clientWidth + 20); // 20 é a margem
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
}
