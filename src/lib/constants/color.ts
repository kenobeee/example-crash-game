enum Colors {
    primaryBg = 'primaryBg',
    secondaryBg = 'secondaryBg',

    accentText = 'accentText',
    lighterAccentText = 'lighterAccentText',

    error = 'error',
    success = 'success',
    accent = 'accent'
}

type ColorSchema = Record<Colors, string>;

export const colorSchema:ColorSchema = {
    primaryBg: '#202326',
    secondaryBg: '#1d2023',

    accentText: '#fff',
    lighterAccentText: 'rgba(255,255,255,0.75)',

    error: 'orangered',
    success: 'green',
    accent: 'rgba(0, 255, 196, 0.15)'
};