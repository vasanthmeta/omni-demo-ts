export type Item = { price: number; qty: number };

export function total(items: Item[], discountPercent = 0): number {
  if (discountPercent < 0 || discountPercent > 100) throw new Error("invalid discount");
  const sum = items.reduce((s, i) => s + i.price * i.qty, 0);
  return Math.round(sum * (1 - discountPercent / 100) * 100) / 100;
}


