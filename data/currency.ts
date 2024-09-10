

export const Currency = [
    { value: "USD", label: "$ Dollar", locale: "en-US" },
    { value: "EUR", label: "€ Euro", locale: "fr-FR" },
    { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
    { value: "GBP", label: "£ Pound", locale: "en-GB" },
    { value: "AUD", label: "$ Australian Dollar", locale: "en-AU" },
    { value: "PHP", label: "₱ Peso", locale: "en-PH" }
];

export type Currency = (typeof Currency)[0]
