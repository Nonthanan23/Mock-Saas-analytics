export const fmt = {
  number: (n: number) => new Intl.NumberFormat().format(n),
  currency: (n: number, c = "USD") => new Intl.NumberFormat(undefined, { style: "currency", currency: c }).format(n),
  percent: (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(1)}%`,
};