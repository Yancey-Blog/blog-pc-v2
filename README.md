<div align="center">

# Blog FE

Yancey blog with React, Next.js, styled-components, Apollo Client and GraphQL.

_This library is part of the [BEG (Blog Environment Group)](https://github.com/Yancey-Blog)_ ecosystem 📖

[![Build Status](https://travis-ci.com/Yancey-Blog/blog-fe.svg?branch=master)](https://travis-ci.com/Yancey-Blog/blog-fe)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8301052718f145cb9be68a6a28717f41)](https://www.codacy.com/app/YanceyOfficial/blog-fe?utm_source=github.com&utm_medium=referral&utm_content=Yancey-Blog/blog-fe&utm_campaign=Badge_Grade)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![Code Style](https://camo.githubusercontent.com/c83b8df34339bd302b7fd3fbb631f99ba25f87f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e737667)

[![Version](https://img.shields.io/github/package-json/v/Yancey-Blog/blog-fe)](https://github.com/Yancey-Blog/blog-fe)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/Yancey-Blog/blog-fe/pulls)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/Yancey-Blog/blog-fe.svg)](https://isitmaintained.com/project/Yancey-Blog/blog-fe)
[![Percentage of issues still open](https://isitmaintained.com/badge/open/Yancey-Blog/blog-fe.svg)](https://isitmaintained.com/project/Yancey-Blog/blog-fe)
[![Node](https://img.shields.io/badge/node-%3E%3D12.16.0-orange.svg)](https://nodejs.org/en/)
[![Gitter](https://badges.gitter.im/yancey-official/community.svg)](https://gitter.im/yancey-official/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![DependaBot](https://camo.githubusercontent.com/1fe7004c016a5ab641008b9579409c784eaa1725/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446570656e6461626f742d656e61626c65642d626c75652e737667)](https://dependabot.com/)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FYancey-Blog%2Fblog-fe.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FYancey-Blog%2Fblog-fe?ref=badge_shield)

⭐️ _Found it cool? Want more updates?_ [**Show your support by giving a ⭐️**](https://github.com/Yancey-Blog/blog-fe/stargazers)

<a href="https://www.paypal.me/yanceyleo" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a href="https://twitter.com/YanceyOfficial" target="_blank"><img src="https://img.shields.io/twitter/follow/YanceyOfficial.svg?style=social&label=Follow"></a>

</div>

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### `yarn start`

Runs the app in the production mode.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Checks the codes by eslint, we will lint them before commit automatically.

### `yarn commit`

An optional way to use `git cz` if you don't want to install `commitizen` globally.

## Pages

### Home page

![Home page](https://static.yancey.app/Jietu20200518-234148.jpg)

### Blog page

The whole site supports light and dark theme.

![light mode](https://static.yancey.app/Jietu20200518-234218.jpg)

![dark mode](https://static.yancey.app/Jietu20200518-234224.jpg)

### Blog detail page

![Blog detail page](https://static.yancey.app/Jietu20200518-234354.jpg)

### Music page

![Music page](https://static.yancey.app/Jietu20200518-234240.jpg)

### Privacy Policy page

![Privacy Policy page](https://static.yancey.app/Jietu20200518-234420.jpg)

## Lighthouse

The performances of lighthouse as follows, we will optimize the a11y next time.

![lighthouse](https://static.yancey.app/Jietu20200514-122909.jpg)

## Contributing

The main purpose of this repository is to continue to evolve BEG (Blog Environment Group), making it faster and easier to use. Development of Blog FE happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Blog FE.

### [Code of Conduct](./CODE_OF_CONDUCT.md)

[BEG](https://github.com/Yancey-Blog) has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](./CONTRIBUTING.md)

Read our [contributing guide](./CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Blog FE.

### Good Issues

Please make sure to read the [Issue Reporting Checklist](./.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

### Uses Commitizen

This app follows the [Angular Team's Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit), your commit will be checked by commitlint, please use `git cz` instead of `git commit`. For this reason, you should install `commitizen` globally or use `yarn commit` instead.

### Uses Env File

Creates `.env.development.local` file or other env files to cover the default environment varibles.

## TODOs

- [ ] Support responsive layout

- [ ] Optimize the a11y

## License

Blog FE is licensed under the terms of the [MIT licensed](https://opensource.org/licenses/MIT).
