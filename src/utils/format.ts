export function format(value: number){
  return value.toLocaleString('pt-BR', {
    maximumFractionDigits : 2,
  });
}