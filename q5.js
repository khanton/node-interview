// Вывести:
// 1. список
// 2. Общее количество
// 3. Общая стоимость на складе
const prices = [
    { name: 'Nissan X-Trail', price: 1730000, stock: 2 },
    { name: 'Nissan Quashqai', price: 1397000, stock: 3 },
    { name: 'Toyota RAV4', price: 2204000, stock: 1 }
]

// -=-=-=-=-=-=-=-=-=-=-

prices.forEach(element => {
    console.log(element.name, element.price, element.stock)
});

console.table(prices.map(i=> [i.name, i.price, i.stock]))

console.log('Всего штук:', prices.reduce((accumulator, i) => (accumulator + i.stock), 0))
console.log('Общая стоимость на складе:', prices.reduce((accumulator, i) => (accumulator + i.stock * i.price), 0))
