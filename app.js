function first() {
    //Про 10+50 кнопка
    alert(`Будет ${150+150} братан!`)
}
function second() {
    // prompt() - не
    let age = prompt('Кто ты по масти: ')
    if (age < 18) {
        alert('Какой ты не хороший челодой моловек!')
}
    else {
        alert('Здарова братан!')
    }
 }
 function third() {
    //Вставить в элемент HTML с id 'zp' вставить тысячу
    document.getElementById('zp').innerHTML = '1000$'
 }
