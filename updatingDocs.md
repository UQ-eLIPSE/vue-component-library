The eLIPSE Design System uses Vue Styleguidist to automatically generate documentation with code examples and information about props.

## How to update docs
If you wish to manually add content to the docs, just add a Readme.md file inside your component folder (e.g. src/components/Header/Readme.md) and write the content.

The documentation is hosted on the UQ-eLIPSE/vue-component-library Git repository through GitHub Pages. The site is built from the master branch /docs folder. In order to update the content inside the /docs folder, run the following command inside the vue-component-library repo on the master branch:
```bash
npm run styleguide:build
```

After the docs are updated, push changes to GitHub.