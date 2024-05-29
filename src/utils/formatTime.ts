export const formatTime = (time: string) => {
  const parts = time.split(':');
  return `${parts[0]}:${parts[1]}`;
};
