/*Создавая игру, ваш партнер Грег решил создать функцию для проверки того, жив ли пользователь, которая называется checkAlive/CheckAlive/check_alive. К сожалению, Грег допустил несколько ошибок при создании функции.

checkAlive/CheckAlive/check_alive должен возвращать значение true, если здоровье игрока больше 0, или false, если оно равно 0 или ниже.

Функция получает один параметр health, который всегда будет целым числом в диапазоне от -10 до 10.*/

//Grasshopper - If/else syntax debug

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}
