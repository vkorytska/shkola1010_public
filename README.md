# Angular lessons

Current project is internship2018-1

## What you need to build the project
In order to build **internship2018-1**, you need to have the latest Node.js/npm and git 1.7 or later. Earlier versions might work, but are not supported.

For Windows, you have to download and install [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/).

## How to build local copy of the project
1. Make your fork for current repository
2. Run command 
```bash
git clone <path-to-your-fork-repository>
```
3. Install webpack version 3 and http-server globally
```bash
npm install webpack@3 http-server --global
```
4. Now make sure you have webpack and http-server installed by testing:
```bash
webpack --version
```
```bash
http-server --help
```
5. Using Visual studio code open /shkola1010_public/internship2018-1 folder
6. Install your dependencies and development dependencies
```bash
npm install
```
7. Build the project
```bash
npm run build
```
8. Start the project
```bash
npm run start
```