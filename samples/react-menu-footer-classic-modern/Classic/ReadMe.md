# myTakeda Global Nav SPFx application customizer

Building DEV, STAGING, and PROD versions of classic nav bootstrapper.
**NOTE**: Make sure you update the paths for the various injected scripts in the webpack.config.js file.

## Building DEV deployment

Run command
`npm version prerelease --preid=beta`

This will set the environment value to a number between 100-199. This will indicate to the bootstrapper that it should tell globalNavUI.js to load the GlobalNavUI_DEV tenant app property.

## Building STAGING deployment

Run command
`npm version prerelease --preid=pre`

This will set the environment value to a number between 200-299. This will indicate to the bootstrapper that it should tell globalNavUI.js to load the GlobalNavUI_STAGING tenant app property.

## Building PROD deployment

Run command
`npm version [major | minor | patch]`

This will set the environment value to 300. This will indicate to the bootstrapper that it should tell globalNavUI.js to load the GlobalNavUI_PROD tenant app property.
