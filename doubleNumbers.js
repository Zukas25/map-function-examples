// doubleNumbers.js

// Funkcja, która podwaja każdą liczbę w tablicy
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}

// Testowanie funkcji
const originalNumbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(originalNumbers);

console.log('Oryginalna tablica:', originalNumbers); // Wyświetli: Oryginalna tablica: [1, 2, 3, 4, 5]
console.log('Podwojona tablica:', doubledNumbers);   // Wyświetli: Podwojona tablica: [2, 4, 6, 8, 10]
