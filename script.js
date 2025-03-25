ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [52.853485, 70.507365], // Центр — Трамбовка
        zoom: 10,
        controls: ["zoomControl", "fullscreenControl"]
    });

    // Массив точек
    var places = [
        { coords: [52.853485, 70.507365], name: "Трамбовка", desc: "Село Трамбовка, Казахстан" },
        { coords: [52.828190, 70.783249], name: "Степняк", desc: "Город Степняк" },
        { coords: [52.812160, 70.596054], name: "Ульги", desc: "Село Ульги" },
        { coords: [52.704911, 70.427726], name: "Жукей", desc: "Озеро Жукей" },
        { coords: [52.892845, 70.561721], name: "Уюмшил", desc: "Село Уюмшил" },
        { coords: [52.904442, 70.523994], name: "Карловка", desc: "Село Карловка" },
        { coords: [52.729000, 70.410000], name: "Гора Беркуты", desc: "Гора Беркуты" },
        { coords: [52.710000, 70.440000], name: "Озеро Жукей", desc: "Озеро Жукей" },
        { coords: [52.850000, 70.500000], name: "Озеро в Трамбовке", desc: "Озеро в Трамбовке" }
    ];

    // Добавляем точки на карту
    places.forEach(function(place) {
        var placemark = new ymaps.Placemark(place.coords, {
            hintContent: place.name,
            balloonContent: <strong>${place.name}</strong><br>${place.desc}
        }, {
            preset: "islands#redIcon"
        });
        myMap.geoObjects.add(placemark);
    });

    // Автомасштабирование карты
    myMap.setBounds(myMap.geoObjects.getBounds(), { checkZoomRange: true });
}
