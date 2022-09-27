import { cartItemType } from "./cart/cart.types";

export const items: cartItemType[] = [
    {
        name: 'Tomatoes',
        amount: 2,
        unit: 'kg',
        price: { value: 20, currency: 'PLN' }
    },
    {
        name: 'Banana',
        amount: 5,
        unit: 'kg',
        price: { value: 36, currency: 'PLN' }
    }
];