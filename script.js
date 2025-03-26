// Создаём карту
var map = L.map('map').setView([52.5, 69.5], 8); // Координаты Казахстана

// Добавляем слой OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Добавляем точки на карту
var places = [
    { name: "Жукей", coords: [52.54, 69.22] },
    { name: "Карловка", coords: [52.60, 69.30] },
    { name: "Трамбовка", coords: [52.57, 69.10] },
    { name: "Ульги", coords: [52.48, 69.15] },
    { name: "Степняк", coords: [52.35, 69.40] },
    { name: "Гора Беркуты", coords: [52.45, 69.50] },
    { name: "Озеро Жукей", coords: [52.50, 69.25] },
    { name: "Озеро Бощеколь", coords: [52.42, 69.32] }
];

// Отображаем точки на карте
places.forEach(place => {
    L.marker(place.coords).addTo(map)
        .bindPopup(<b>${place.name}</b>)
        .openPopup();
});
