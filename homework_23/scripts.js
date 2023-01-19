
const userBirthYear = prompt('Привiт! В якому роцi ти народився?');
const userTown = prompt('У якому мiстi живешь?');
const userSport = prompt('Який у тебе улюблений вид спорту?');

const getAge = (data) => {
    if (data === null){
        return 'Шкода, що Ви не захотіли ввести свою дату народження'
    }else{
        return new Date().getFullYear() - data;
    }
};

const requestOfTown = (town) => {
    if (town === 'Київ'){
        return 'Ти живеш у столиці України'
    }else if (town === 'Вашингтон'){
        return 'Ти живеш у столиці США'
    }else if (town === 'Лондон'){
        return 'Ти живеш у столиці Великої Британії'
    }else if (town === null) {
       return 'Шкода, що Ви не захотіли ввести своє місто'
    }else{
        return `Ти живеш у місті ${town}`
    }
};


const requestOfSport = (sport) => {
    if (sport === 'футбол'){
        return 'Круто! Хочеш стати Кріштіану Рональду?'
    }else if (sport === 'баскетбол') {
        return 'Круто! Хочеш стати Майклом Джорданом?'
    }else if (sport === 'біг'){
        return 'Круто! Хочеш стати Еліудом Кіпчоге?'
    }else if (sport === null){
        return 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту'
    }
};


alert(`Твій вiк ${getAge(userBirthYear)}
${requestOfTown(userTown)}
${requestOfSport(userSport)}`);
