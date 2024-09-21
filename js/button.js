var count = 0;
document.getElementById("myButton").onclick = function () {
    count++;
    var demoElement = document.getElementById("demo");

    if (count % 2 == 0) {
        demoElement.innerHTML = ""; // Скрываем картинку
    } else {
        var img = document.createElement("img");
        img.src = "image3.jpg";
        img.alt = "Описание картинки"; // Добавляем атрибут alt для доступности
        demoElement.appendChild(img); // Показываем картинку
    }
}