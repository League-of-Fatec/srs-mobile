export const formatTime = (time?: string | null) => {
  if (!time) {
    return;
  }

  const parts = time.split(':');
  return `${parts[0]}:${parts[1]}`;
};
