import validator from 'validator';

import { isValued } from '../helpers/utils'

class CompoundValidator {
    constructor(current, next) {
        this.current = current;
        this.next = next;
    }

    create(i18n) {
        const current = this.current.create(i18n);
        const next = this.next.create(i18n);

        return (value, ctx) => current(value, ctx) || next(value, ctx);
    }

    and(validator) {
        return new CompoundValidator(this, validator);
    }
}

export class Validator {
    constructor({ rule, hint, parameters = [] }) {
        this.rule = rule;
        this.hint = hint;
        this.parameters = parameters;
    }

    create(i18n) {
        const errorMessage = i18n(`validation.${this.hint}`, this.parameters);
        return (value, ctx) => !this.rule(value, ctx) && { error: errorMessage };
    }

    and(validator) {
        return new CompoundValidator(this, validator);
    }
}

export const empty = new Validator({
    rule: () => true
});

export const required = new Validator({
    rule: value => isValued(value),
    hint: 'required'
});

export const checked = new Validator({
    rule: value => value === true,
    hint: 'checked'
});

export const email = new Validator({
    rule: validator.isEmail,
    hint: 'email'
});

export const integer = new Validator({
    rule: validator.isInt,
    hint: 'integer'
});

export const float = new Validator({
    rule: validator.isFloat,
    hint: 'float'
});
