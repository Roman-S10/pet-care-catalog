$(function(){

    if (typeof ymaps !== 'undefined') {
        ymaps.ready(init);
        var myMap,
            bakeryPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 15
            });

            bakeryPlacemark = new ymaps.Placemark([55.76, 37.64], {
                hintContent: 'Котейкин',
                balloonContent: 'Вет клиника Котейкин'
            });

            myMap.geoObjects.add(bakeryPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
    }

    $(".button-collapse").sideNav();

    $('.slider').slider();

    $('.parallax').parallax();

    $('.modal').modal();

    $('select').material_select();

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
        weekdaysFull: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        weekdaysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
        weekdays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        monthsFull: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: 'Сегодня',
        clear: 'Очистить',
        close: 'Выбрать',
        closeOnSelect: false
    });
});