export const addDays = (date, days) => {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}