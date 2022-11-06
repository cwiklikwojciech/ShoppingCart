const numberFormat2 = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' });

export default function formatCurrency (number:number) {
    return numberFormat2.format(number);
}