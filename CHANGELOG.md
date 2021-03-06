# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.11.5] - 2020-12-10

### Fixes

- Update Apple social login button style.
- Upgrade SDK Core dependency version.

### Changed

Revamp of this changelog to follow [Keep a Changelog](https://keepachangelog.com/en/1.0.0) guidelines.

## [1.11.4] - 2020-11-12

### Fixes

Temporary revert the SDK Core dependency version to solve the login with PKCE in hosted pages.

## [1.11.3] - 2020-11-10

### Fixes

- The [showAuth](https://developer.reachfive.com/sdk-ui/showAuth.html) widget can now handle signup with biometrics if
  the `allowWebAuthnSignup` option is enabled. This Features is also available on the Hosted Pages.
- The device's name is now optional in
  the [showWebAuthnDevices](https://developer.reachfive.com/sdk-ui/showWebAuthnDevices.html).

## [1.11.2] - 2020-11-04

### Features

A new check rule for password strength is now displayed on the signup view on
the [showAuth](https://developer.reachfive.com/sdk-ui/showAuth.html) widget.

## [1.11.1] - 2020-10-28

### Fixes

Revert the new check rule for password strength since the wordings are not yet deployed.

## [1.11.0] - 2020-10-28

### Features

New changes were made on the [showAuth](https://developer.reachfive.com/sdk-ui/showAuth.html) widget:

- A new check rule for password strength is now displayed on the signup view.
- The users will be notified when a password contains words contained in the given name, the family name, or the email
  address. These blacklist words will also be taken into account of the password strength.
- The validation errors will be displayed sooner on the form.

## [1.10.1] - 2020-10-19

### Fixes

Revert the latest FIDO2 signup Features since it's breaking the style of Hosted Pages.

## [1.10.0] - 2020-10-16

### Features

The [showAuth](https://developer.reachfive.com/sdk-ui/showAuth.html) widget can now handle signup with biometrics if
the `allowWebAuthnSignup` option is enabled.

## [1.9.0] - 2020-09-16

### Features

Always override account `opt-out` consents.

### Fixes

Fixes the CircleCi job to deploy a new version.

## [1.8.0] - 2020-07-22

### Features

Add custom fields types (email & phone).

## [1.7.0] - 2020-07-08

### Features

- The user can now set the device's name in
  the [showWebAuthnDevices](https://developer.reachfive.com/sdk-ui/showWebAuthnDevices.html) widget.
- The server error messages can now be overload in the `i18n` widget option.

## [1.6.0] - 2020-07-07

### Features

Display a friendly user error message on
the [showWebAuthnDevices](https://developer.reachfive.com/sdk-ui/showWebAuthnDevices.html) widget when the user wants to
add a device already registered.

## [1.5.0] - 2020-07-01

### Features

Add a new widget [showWebAuthnDevices](https://developer.reachfive.com/sdk-ui/showWebAuthnDevices.html) allowing the
management of the user’s registered FIDO2 devices.

## [1.4.1] - 2020-06-18

### Fixes

The UI SDK now uses the latest version of the Core SDK.

## [1.4.0] - 2020-06-15

### Features

Add a new `allowWebAuthnLogin` option to the [showAuth](https://developer.reachfive.com/sdk-ui/showAuth.html) widget to
allow a user to login with biometrics.

## [1.3.0] - 2020-05-29

### Fixes

Call only the validation methods when the field is required or when the value is not empty.

### Features

- Set the default value of the _Remember be_ to `false`.
- Upgrade all the dependencies.

## [1.2.1] - 2020-04-20

### Fixes

The `showRememberMe` check box now properly sets the boolean `persistent` field into `auth` options object with
the `showAuth` component.

## [1.2.0] - 2020-04-17

### Fixes

The UI SDK now uses the latest version of the Core SDK.

## [1.1.0] - 2020-04-16

### Fixes

The [showRememberMe](https://developer.reachfive.com/sdk-ui/showAuth.html#showRememberMe) option is now taken into
account.

## [1.0.1] - 2020-03-19

ReachFive UI SDK is out! 🚀

## [1.0.0-alpha.10] - 2020-02-19

### Features

Improve the UX/UI of the password policy rules validation.

## [1.0.0-alpha.9] - 2020-02-10

### Features

The _display password in clear text_ option can now be enabled on the password reset widget.

## [1.0.0-alpha.8] - 2020-02-06

### Fixes

The UI SDK uses now the latest version of the Core SDK.

## [1.0.0-alpha.7] - 2020-02-06

### Features

Add the `returnToAfterPasswordReset` parameter for reset password and the `returnToAfterEmailConfirmation` parameter for
signup.

## [1.0.0-alpha.6] - 2020-01-22

### Fixes

The bundles are no longer in the `build` folder but in the folder associated with their format (`umd`, `cjs` and `es`).

## [1.0.0-alpha.5] - 2020-01-21

### Fixes

Passwords in the French dictionary were considered good enough while they weren't.

## [1.0.0-alpha.4] - 2020-01-15

### Features

- French weak passwords are now rejected by the password strength policies.
- A UMD bundle is now generated at the build process. It will allow deploying the UI SDK on [unpkg](https://unpkg.com).

## [1.0.0-alpha.3] - 2020-01-07

### Features

- Implement continuous integration pipelines set up with CircleCI (see
  the [CircleCI configuration file](.circleci/config.yml) for more details).
- The widgets labels are now translated in the language specified in the client's configuration.

### Fixes

The eye icon is now correctly displayed in the Auth widget.

## [1.0.0-alpha.2] - 2019-11-06

### Features

- A `data-testid` attribute was added to most of the HTML elements.
- Handle the errors returned at the creation of a password non-compliant to the account's password policy.

## [1.0.0-alpha.1] - 2019-10-21

First version of the SDK Web UI.

[Unreleased]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.11.5...HEAD

[1.11.5]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.11.4...v1.11.5

[1.11.4]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.11.3...v1.11.4

[1.11.3]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.11.2...v1.11.3

[1.11.2]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.11.1...v1.11.2

[1.11.1]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.11.0...v1.11.1

[1.11.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.10.1...v1.11.0

[1.10.1]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.10.0...v1.10.1

[1.10.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.9.0...v1.10.0

[1.9.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.8.0...v1.9.0

[1.8.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.7.0...v1.8.0

[1.7.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.6.0...v1.7.0

[1.6.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.5.0...v1.6.0

[1.5.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.4.0...v1.5.0

[1.4.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.3.0...v1.4.0

[1.3.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.2.1...v1.3.0

[1.2.1]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.2.0...v1.2.1

[1.2.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.1.0...v1.2.0

[1.1.0]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.1...v1.1.0

[1.0.1]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.10...v1.0.1

[1.0.0-alpha.10]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.9...v1.0.0-alpha.10

[1.0.0-alpha.9]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.8...v1.0.0-alpha.9

[1.0.0-alpha.8]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.7...v1.0.0-alpha.8

[1.0.0-alpha.7]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.6...v1.0.0-alpha.7

[1.0.0-alpha.6]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.5...v1.0.0-alpha.6

[1.0.0-alpha.5]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.4...v1.0.0-alpha.5

[1.0.0-alpha.4]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.3...v1.0.0-alpha.4

[1.0.0-alpha.3]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.2...v1.0.0-alpha.3

[1.0.0-alpha.2]: https://github.com/ReachFive/identity-web-ui-sdk/compare/v1.0.0-alpha.1...v1.0.0-alpha.2

[1.0.0-alpha.1]: https://github.com/ReachFive/identity-web-ui-sdk/releases/tag/v1.0.0-alpha.1
