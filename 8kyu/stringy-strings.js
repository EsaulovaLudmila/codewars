/*ОПИСАНИЕ:
напишите мне функцию stringy, которая принимает sizeи возвращает stringчередующиеся 1s и 0s.

строка должна начинаться с 1.

строка с size6 должна возвращать : '101010'.

с size4 должно вернуться: '1010'.

с size12 должно вернуться: '101010101010'.

Размер всегда будет положительным и будет использовать только целые числа.*/

function stringy(size) {
  let stringy = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
      stringy += "1";
    } else {
      stringy += "0";
    }
  }
  return stringy;
}
