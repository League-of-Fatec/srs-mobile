import { addHours, format } from 'date-fns';

export const currentWeekDay = () => {
  const date = new Date();

  const timeZoneDifference = 1; // A diferença de fuso horário entre UTC e São Paulo é de -3 horas
  const adjustedDate = addHours(date, timeZoneDifference);
  return adjustedDate.getDay();
};
