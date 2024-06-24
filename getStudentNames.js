// getStudentNames.js

// Funkcja, która zwraca tablicę imion studentów
function getStudentNames(students) {
    return students.map(student => student.name);
}

// Testowanie funkcji
const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 23 }
];
const studentNames = getStudentNames(students);

console.log('Oryginalna tablica studentów:', students);
// Wyświetli: Oryginalna tablica studentów: [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 22 }, { name: 'Charlie', age: 23 }]
console.log('Tablica imion studentów:', studentNames); // Wyświetli: Tablica imion studentów: ['Alice', 'Bob', 'Charlie']
