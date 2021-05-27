// Почему ошибка? Как исправить?
function Location(name) {
    this.name = name
}

Location.showLocation = function () {
    console.log(this.name);
}

const me = new Location('Moscow')

me.showLocation();
