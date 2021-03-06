export function format(sFormat, args) {
    for (var i = 0; i < arguments.length - 1; i++) {
        if (arguments[i + 1] != null) {
            sFormat = sFormat.split('{' + i + '}').join(arguments[i + 1]);
        }
    }

    return sFormat;
}

const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function getRandomToken(length = 8) {
    const buf = [];

    for (let i = 0; i < length; i++) {
        buf.push(CHARS[getRandomInt(0, CHARS.length)]);
    }

    return buf.join('');
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* Returns whether a form value has been set with a valid value */
export function isValued(v) {
    return (
        v !== null &&
        v !== undefined &&
        v !== '' &&
        !Number.isNaN(v) &&
        (Array.isArray(v) ? v.length > 0 : true)
    )
}

export function formatISO8601Date(year, month, day) {
    if (isValued(year) && isValued(month) && isValued(day)) {
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }

    return null
}
