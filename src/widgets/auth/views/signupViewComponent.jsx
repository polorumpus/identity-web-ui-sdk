import React from 'react';

import { Heading, Link, Alternative, Separator } from '../../../components/miscComponent';
import SocialButtons from '../../../components/form/socialButtonsComponent';
import PasswordSignupForm from '../../../components/form/passwordSignupFormComponent';
import { WebAuthnSignupViewButtons } from '../../../components/form/webAuthAndPasswordButtonsComponent';

export default class SignupView extends React.Component {
    render() {
        const { socialProviders, i18n } = this.props;

        return <div>
            <Heading>{i18n('signup.title')}</Heading>

            {socialProviders && socialProviders.length > 0 &&
                <SocialButtons providers={socialProviders} auth={this.props.auth} />}
            {socialProviders && socialProviders.length > 0 && <Separator text={i18n('or')} />}

            {this.props.allowWebAuthnSignup
                ? <WebAuthnSignupViewButtons
                    i18n={i18n}
                    onPasswordClick={() => this.props.goTo('signup-with-password')}
                    onBiometricClick={() => this.props.goTo('signup-with-web-authn')} />
                : <PasswordSignupForm {...this.props} />
            }

            {this.props.allowLogin && <Alternative>
                <span>{i18n('signup.loginLinkPrefix')}</span>
                &nbsp;
                <Link target={this.props.allowWebAuthnLogin ? 'login-with-web-authn' : 'login'}>
                    {i18n('signup.loginLink')}
                </Link>
            </Alternative>}
        </div>;
    }
}
