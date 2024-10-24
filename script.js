let isJumpingBottom = false;
let isJumpingTop = false;

// Запуск игры
document.getElementById('playBtn').addEventListener('click', function() {
    document.getElementById('menu').classList.add('hidden');
    document.querySelector('.game-container').classList.remove('hidden');
    this.style.display = 'none'; // Скрыть кнопку "Играть"
});

// Обработчик прыжка
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (!isJumpingBottom) {
            jumpBottom();
        }
        if (!isJumpingTop) {
            jumpTop();
        }
    }
});

function jumpBottom() {
    isJumpingBottom = true;
    const dinoBottom = document.getElementById('dino-bottom');
    dinoBottom.style.bottom = '100px'; // Поднимаем нижнего динозавра

    setTimeout(() => {
        dinoBottom.style.bottom = '0'; // Опускаем нижнего динозавра
        isJumpingBottom = false;
    }, 300); // Время прыжка
}

function jumpTop() {
    isJumpingTop = true;
    const dinoTop = document.getElementById('dino-top');
    dinoTop.style.top = '50px'; // Поднимаем верхнего динозавра

    setTimeout(() => {
        dinoTop.style.top = '10px'; // Опускаем верхнего динозавра
        isJumpingTop = false;
    }, 300); // Время прыжка
}

// Логика столкновений для нижнего динозавра
setInterval(() => {
    const dinoBottom = document.getElementById('dino-bottom');
    const obstacle = document.getElementById('obstacle');

    const dinoRect = dinoBottom.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        dinoRect.left < obstacleRect.right &&
        dinoRect.right > obstacleRect.left &&
        dinoRect.bottom > obstacleRect.top
    ) {
        alert('Лошара АхахАхахахах!'); // Столкновение
        document.querySelector('.game-container').classList.add('hidden');
        document.getElementById('playBtn').style.display = 'block'; // Показать кнопку "Играть" снова
    }
}, 100); // Проверяем столкновения каждые 100 мс
