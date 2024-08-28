export const getData = async (module) => {
    const url = 'https://jsonplaceholder.typicode.com/' + module + '?_limit=35';
    try {
        const response = await fetch(url); // Асинхронный запрос
        const todos = await response.json(); // Асинхронное получение данных в формате JSON
        return todos; // Возвращаем массив задач
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Использование сохраненных данных
// async function main() {
//     const todoList = await fetchTodos('todos'); // Сохраняем все задачи в переменную
//     console.log('Все задачи:', todoList); // Выводим данные в консоль

// }

// main();


