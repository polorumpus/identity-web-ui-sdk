import React from 'react';

import pick from 'lodash-es/pick';
import * as libphonenumber from 'libphonenumber-js';

import { Validator } from '../../../core/validation';

import { Input, FormGroup } from '../formControlsComponent';
import { createField } from '../fieldCreator';

class PhoneNumberField extends React.Component {
    componentDidMount() {
        const { phone, country } = this.props.value;

        try {
            const parsed = libphonenumber.parse(phone, country);
            const phoneValue = country === parsed.country
                ? libphonenumber.format(parsed, 'National')
                : phone;

            this.asYouType(phoneValue);
        } catch (e) { }
    }

    componentWillUnmount() {
        this.unmounted = true
    }

    asYouType = (inputValue) => {
        const { value: { country } } = this.props;

        const phone = new libphonenumber.AsYouType(country).input(inputValue);
        const formatted = libphonenumber.format(phone, country, 'International');
        const isValid = libphonenumber.isValidNumber(phone, country);

        this.props.onChange({
            value: {
                country,
                phone,
                formatted,
                isValid
            }
        });
    }

    render() {
        const {
            path,
            value,
            validation = {},
            inputId,
            required = true,
            label,
            placeholder = label
        } = this.props;

        return <FormGroup
            inputId={inputId}
            labelText={label}
            {...pick(validation, 'error')}
            showLabel={this.props.showLabel}>
            <Input
                id={inputId}
                name={path}
                type="tel"
                value={value.phone || ''}
                placeholder={placeholder}
                title={label}
                required={required}
                hasError={!!validation.error}
                onChange={event => this.asYouType(event.target.value)}
                onBlur={() => this.props.onChange({ isDirty: true })}
                data-testid={path} />
        </FormGroup>
    }
}

export default function phoneNumberField(props, config) {
    return createField({
        ...props,
        key: 'phone_number',
        label: 'phoneNumber',
        format: {
            bind: x => ({
                country: config.countryCode,
                phone: x,
                isValid: true
            }),
            unbind: x => x.formatted || x.phone
        },
        validator: new Validator({
            rule: value => value.isValid,
            hint: 'phone'
        }),
        component: PhoneNumberField
    });
}
