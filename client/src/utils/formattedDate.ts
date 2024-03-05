// Функция для форматирования даты в формат "день месяца словом год"

export function formatDate(dateString: string){
    // Создаем объект Date, передавая строку с датой из базы данных
    const parsedDate = new Date(dateString);
  
    // Получаем компоненты даты из объекта Date
    const day = parsedDate.getDate(); // День месяца (1-31)
    const month = parsedDate.getMonth(); // Месяц (0-11)
    const year = parsedDate.getFullYear(); // Год (четыре цифры)
  
    // Определяем массивы с названиями месяцев и соответствующими им индексами
    const monthsArray = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
  
    // Формируем строку с датой в требуемом формате
    const formattedDate = `${day} ${monthsArray[month]} ${year}`;
  
    // Возвращаем отформатированную дату
    return formattedDate;
  }