import { DateData } from "react-native-calendars";

const formatDate = (date: DateData, currentDay: number) => {

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const { day, month, year } = date;

    enum relativeDates {
        Ontem = "Ontem,",
        Hoje = "Hoje,",
        Amanha = "Amanhã,",
    }

    let relativeDate = "";

    if (day == currentDay) {
        relativeDate = relativeDates.Hoje
    } else if (day == currentDay - 1) {
        relativeDate = relativeDates.Ontem
    } else if (day == currentDay + 1) {
        relativeDate = relativeDates.Amanha
    } else {
        relativeDate = "No"
    }

    return `${relativeDate} dia ${date.day} de ${months[date.month]} de ${date.year}
    \nAs aulas serão as seguintes: \n
    Álgebra Linear\n
    Desenvolvimento Web III\n
    `;

}

export default formatDate;