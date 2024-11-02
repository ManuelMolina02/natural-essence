export const formatterDate = (date: string) => {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
};

export const formatterPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
