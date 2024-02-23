export const formatCurrency = (value: string | number) => {
  const number = parseFloat(value.toString());
  return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
