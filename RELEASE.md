# Guide for publication

1. Create a pull request named `Release vx.y.z` (add the Github tag `release`).

2. Describe the new features and the bug fixes in the [CHANGELOG.md](CHANGELOG.md) file.

3. Update the package's version with the command line below. It should respect the [semver](https://semver.org/) versioning.

    ```sh
    npm --no-git-tag-version version [<newversion> | major | minor | patch]
    ```

    This command will update the version in the [`package.json`](package.json) file.

    Commit and push the change with the version.

    ```sh
    git add .
    git commit -m "vx.y.z"
    ```

4. Submit your pull request.

5. Once the branch is merged into `master`, create the new tag.

    ```sh
    git tag <vx.y.z>
    git push origin <tag_name>
    ```

    [circleci](https://circleci.com/) will automatically trigger a build, run the tests and publish the new version of the SDK on [`npm`](https://www.npmjs.com/package/@reachfive/identity-ui).

    Refer to the [.circleci/config.yml](.circleci/config.yml) file to set up the integration.

6.  Finally, draft a new release in the [Github releases tab](https://github.com/ReachFive/identity-web-ui-sdk/releases) (copy/past the changelog in the release's description).