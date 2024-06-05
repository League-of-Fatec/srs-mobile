import { addHours, format } from 'date-fns';

export const currentDate = () => {
  const date = new Date();

  const timeZoneDifference = -3; // A diferença de fuso horário entre UTC e São Paulo é de -3 horas
  const adjustedDate = addHours(date, timeZoneDifference);
  const currentDate = format(adjustedDate, 'yyyy-MM-dd');

  return currentDate;
};
