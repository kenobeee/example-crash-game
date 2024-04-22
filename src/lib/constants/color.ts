enum Colors {
    primaryBg = 'primaryBg',
    secondaryBg = 'secondaryBg',

    accentText = 'accentText',

    border = 'border'
}

type ColorSchema = Record<Colors, string>;

export const colorSchema:ColorSchema = {
    primaryBg: '#202326',
    secondaryBg: '#1d2023',

    accentText: '#fff',

    border: '2px solid rgba(0, 255, 196, 0.15)'
};