import { LocaleConfig } from "react-native-calendars";

const localeConfigData = LocaleConfig;

localeConfigData.locales["br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abrii",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan.",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui.", "Sex", "Sab"],
  today: "Hoje",
};

localeConfigData.defaultLocale = "br";

export default localeConfigData;
