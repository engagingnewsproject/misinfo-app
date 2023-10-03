Misinfo App new Expo framework app.

## Requirements
To use Expo, you need to have the following tools installed on your machine:

- [Node.js LTS release](https://nodejs.org/en/) - Only Node.js LTS releases (even-numbered) are recommended.

- Git for source control.
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) (for Linux or macOS users).

## [Install Expo Go on your device](https://docs.expo.dev/get-started/expo-go/#install-expo-go-on-your-device)

When you run `npx expo start` in your project, Expo CLI starts a development server and generates a QR code. On Android, you can open the Expo Go app on your device and scan the QR code to connect to the dev server. On iOS, use the device's camera to scan the QR code.

```
npx expo start

```

When you run the above command, the Expo CLI starts Metro Bundler. This bundler is an HTTP server that compiles the JavaScript code of your app using Babel and serves it to the Expo app. See how [Expo Development Server](https://docs.expo.dev/more/expo-cli/#develop) works for more information about this process.

## [Log in with your Expo account](https://docs.expo.dev/get-started/expo-go/#log-in-with-your-expo-account)

Open the Expo Go app after it has finished installing. If you have [created an account with Expo CLI](https://docs.expo.dev/more/expo-cli/#authentication), you can sign in by clicking the Log In button in the top header on the Home tab. Signing in will make it easier for you to open projects in the Expo Go app while developing them — they will appear automatically under the Projects section on the Home tab of the app.

## [Open the app on your device](https://docs.expo.dev/get-started/create-a-project/#open-the-app-on-your-device)

To open the app your device that has [Expo Go](https://docs.expo.dev/get-started/expo-go/) already installed:

On your Android device, press Scan QR Code on the Home tab of the Expo Go app and scan the QR code you see in the terminal.
On your iPhone or iPad, open the default Apple Camera app and scan the QR code you see in the terminal.

_Links:_

- [Project Structure](https://docs.expo.dev/develop/project-structure/)
- [Guides](https://docs.expo.dev/guides/overview/)
- [Reference](https://docs.expo.dev/versions/latest/)
- [Learn](https://docs.expo.dev/tutorial/introduction/)

## Tools

- [VSCode Expo Tools](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools)
## Packages

1. Install the latest EAS CLI
	- EAS CLI is the command-line app that you will use to interact with EAS services from your terminal. To install it, run the command [Docs](https://docs.expo.dev/build/setup/#install-the-latest-eas-cli):

		```
		npm install -g eas-cli

		```
2. [Build for iOS Simulators](https://docs.expo.dev/build-reference/simulators/)

		- iOS bundle identifier: `com.cme.misinfoApp`
		
- Firebase - [Docs](https://docs.expo.dev/guides/using-firebase/)
	- `npx expo install firebase` - [Firebase JS SDK Installation](https://docs.expo.dev/guides/using-firebase/#install-and-initialize-firebase-js-sdk)
	- [How to Create an Expo App with React-Native Firebase](https://www.youtube.com/watch?v=mZlKwRV4MC8)

- react-native-async-storage/async-storage
	- `npx expo install @react-native-async-storage/async-storage` - [Docs](https://docs.expo.dev/versions/latest/sdk/async-storage/)
	
## Create a build for emulator/simulator

[_docs_](https://docs.expo.dev/develop/development-builds/create-a-build/#create-a-build-for-emulatorsimulator)

- Run the following command to create the development build on an iOS Simulator:

	```
	eas build --profile development-simulator --platform ios
	```
## Expo Commands

Open on the web:
```
npx expo start -w
```