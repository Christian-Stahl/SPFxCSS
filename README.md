## Branding CSS web part

Build in SPFx V.1.8.1.
Put in this web part onto a modern page.
The page standard SharePoint CSS will be overwritten by this web part's CSS.
It will affect the headers for the web parts, a border surrounding the main canvas and add some style for the mega meny (no problems if you don't use a mega menu)

This web part is not ment for a classic page, or not for SharePoint server (since I have not tested this one on 2016/2019)

### installing the code
git clone the repo (if using git)
npm i
gulp serve for local workbench or gulp serve --nobrowser to test it on a real SP modern page


This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options
gulp clean
gulp test
gulp build
gulp bundle --ship
gulp package-solution --ship
