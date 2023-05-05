//1
const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

//2
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');
//3
stdout.write('Привет, как делишки? напиши  что-нибудь: ');
//4
stdin.on('data', (chunk) => {

  if (chunk.toString().trim() ==='exit') {
    process.on('exit', () => stdout.write('Наигрался ? Тогда прощай!'));
    process.exit();   
  } else {
    writeStream.write(chunk);
  }
});
process.on('SIGINT', () => {
  stdout.write('\n Ты посмел нажать "Ctrl+C" ? Мы еще встретимся, смертный! ');
  process.exit();
});

// 1. Импорт всех требуемых модулей.
// 2. Создание потока записи в текстовый файл
// 3. Вывод в консоль приветственного сообщения
// 4. Ожидание ввода текста пользователем, с дальнейшей проверкой ввода на наличие ключевого слова **exit**
// 5. Запись текста в файл
// 6. Ожидание дальнейшего ввода
// 7. Реализация прощального сообщения при остановке процесса