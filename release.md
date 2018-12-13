The eLIPSE Design System is published as a package on npm. These are instructions for releasing package updates to npm.

## How to release updates to the eLIPSE Design System
First, ensure that the webpack.config.js file has the following option set (this makes sure that the bundle is minified when it is published).
```javascript
mode: 'production'
```

Also take the time to update the Styleguidist docs, as explained in updatingDocs.md.

After this is done, merge it into the master branch, and navigate to the master branch and rebuild the bundle:
```bash
git checkout master
npm run clean // only for Mac OS at the moment
npm run build
```

Update the package version and publish using:
```bash
npm version [major | minor | patch]
git push --tags origin master
git push
npm publish --access public
```
