const sumInput = () => {
    let numbers = [];
    let sum = 0;

    for (;;) {
        let number = +prompt("Введите значение");
        if (!number) break;
        numbers.push(number);
        sum += number;
    }

    let numbers2 = numbers.slice();
    numbers2.sort((a, b) => a - b);

    alert('Исходный массив ' + numbers + '\n' + 'Отсортированный массив ' + numbers2 + '\n' + 'Сумма: ' + sum);
}

// btn.onclick = sumInput; - это если через id

const btn = document.querySelector('.btn');
btn.addEventListener("click", () => {
    sumInput()
});