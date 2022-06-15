export const getCurrentDayTime = () => {
  const day = new Date();
  const hours = day.getHours();

  // if its is morning
  if (hours < 12) {
    return "Bom dia";
  }

  // if its is afternoon
  if (hours >= 12 && hours < 18) {
    return "Boa tarde";
  }

  // if its is evening
  return "Boa noite";
};
