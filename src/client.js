import ReactDOM from 'react-dom'

import { createClient } from '@reachfive/identity-core';

import authWidget from './widgets/auth/authWidget';
import { logError } from './helpers/logger';

export class UiClient {
    constructor(config, urlParser) {
        this.config = config;
        this.urlParser = urlParser;
        this.client = createClient(config);
    }

    showAuth(options) {
        this._ssoCheck(authWidget, options);
    }

    async _showWidget(widget, options = {}, props = {}) {
        const container = typeof options.container === 'string'
            ? document.getElementById(options.container)
            : options.container;

        if (!container) {
            throw new Error(`Container '#${options.container}' not found.`);
        }

        try {
            const config = {
                ...this.config,
                countryCode: options.countryCode || this.config.countryCode || 'FR'
            };

            const result = await widget(options, {
                ...props,
                config,
                apiClient: this.client
            });

            const { onReady = () => { } } = options;

            container.innerHTML = '';

            ReactDOM.render(result, container);

            const instance = {
                destroy() { ReactDOM.unmountComponentAtNode(container) }
            };

            onReady(instance);
        } catch (e) {
            const message = e.isUserError ? e.message : 'Unexpected error';

            container.innerHTML = `<div style="color: red; text-align: center;">${message}</div>`;

            if (e.isUserError) {
                logError(`ReachFive widget display fails: ${e.message}`);
            } else {
                logError(e);
            }
        }
    }

    _ssoCheck(widget, options) {
        const { auth = {} } = options;
        const showAuthWidget = session => this._showWidget(widget, options, { session });

        if (this.config.sso || auth.idTokenHint || auth.loginHint) {
            setTimeout(() =>
                Promise.resolve(this.urlParser.parseUrlFragment(window.location.href)).then(authResult => {
                    // Avoid authentication triggering when an authentication response is present
                    if (authResult) return;

                    this.client
                        .getSessionInfo()
                        .then(session => {
                            const reAuthenticate = auth && auth.prompt && auth.prompt === 'login'

                            if (session.isAuthenticated && !reAuthenticate) {
                                this.client.loginFromSession(auth);
                            } else {
                                showAuthWidget(session);
                            }
                        })
                        .catch(err => {
                            logError(err);
                            showAuthWidget();
                        });
                }),
                0);
        } else {
            showAuthWidget();
        }
    }
}