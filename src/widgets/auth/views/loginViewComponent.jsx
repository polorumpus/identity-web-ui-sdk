import React from 'react';

import styled from 'styled-components';

import { email } from '../../../core/validation';
import { Heading, Link, Alternative, Separator } from '../../../components/miscComponent';
import { withTheme } from '../../../components/widget/widgetContext';

import SocialButtons from '../../../components/form/socialButtonsComponent';
import { createForm } from '../../../components/form/formComponent';
import { simpleField } from '../../../components/form/fields/simpleField';
import { simplePasswordField } from '../../../components/form/fields/simplePasswordField';
import checkboxField from '../../../components/form/fields/checkboxField';

const ForgotPasswordWrapper = withTheme(styled.div`
    margin-bottom: ${props => props.theme.get('spacing')}px;
    text-align: right;
    ${props => props.floating && `
        position: absolute;
        right: 0;
    `};
`);

export const LoginForm = createForm({
    prefix: 'r5-login-',
    fields({ showEmail = true, showRememberMe, canShowPassword, showForgotPassword, defaultEmail, i18n }) {
        return [
            showEmail && simpleField({
                key: 'email',
                label: 'email',
                type: 'email',
                autoComplete: 'email',
                defaultValue: defaultEmail,
                validator: email
            }),
            simplePasswordField({
                key: 'password',
                label: 'password',
                autoComplete: 'current-password',
                canShowPassword
            }),
            showForgotPassword && {
                staticContent: (
                    <ForgotPasswordWrapper key="forgot-password" floating={showRememberMe}>
                        <Link target="forgot-password">{i18n('login.forgotPasswordLink')}</Link>
                    </ForgotPasswordWrapper>
                )
            },
            showRememberMe && checkboxField({
                key: 'auth.persistent',
                label: 'rememberMe',
                defaultValue: false
            })
        ];
    },
    submitLabel: 'login.submitLabel'
});

export default class LoginView extends React.Component {
    handleLogin = data => {
        return this.props.apiClient.loginWithPassword({
            ...data,
            auth: {
                ...data.auth,
                ...this.props.auth,
            },
        });
    }

    render() {
        const { socialProviders, session = {}, i18n } = this.props;

        const defaultEmail = session.lastLoginType === 'password' ? session.email : null;

        return (
            <div>
                <Heading>{i18n('login.title')}</Heading>
                {socialProviders && socialProviders.length > 0 &&
                    <SocialButtons providers={socialProviders} auth={this.props.auth} acceptTos={this.props.acceptTos} />
                }
                {socialProviders && socialProviders.length > 0 &&
                    <Separator text={i18n('or')} />
                }
                <LoginForm
                    showLabels={this.props.showLabels}
                    showRememberMe={this.props.showRememberMe}
                    showForgotPassword={this.props.allowForgotPassword}
                    canShowPassword={this.props.canShowPassword}
                    defaultEmail={defaultEmail}
                    handler={this.handleLogin} />
                {this.props.allowSignup &&
                    <Alternative>
                        <span>{i18n('login.signupLinkPrefix')}</span>
                        &nbsp;
                        <Link target="signup">{i18n('login.signupLink')}</Link>
                    </Alternative>
                }
            </div>
        );
    }
}
