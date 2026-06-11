# React Native Starter Template

A lightweight Expo starter app built with:

- **Expo SDK 56**
- **Expo Router** for file-based routing
- **TypeScript**
- **NativeWind** + **Tailwind CSS** support
- A simple starter screen in `src/app/index.tsx`

This template is designed for building universal apps with Expo on Android, iOS, and web.

## Quick start

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the Expo development server

   ```bash
   npm start
   ```

3. Open the app

- `a` for Android
- `i` for iOS
- `w` for web

Or use the QR code in the Expo CLI output to open it in Expo Go.

## Project structure

- `src/app/` – main app router files and screens
- `src/app/_layout.tsx` – root layout for Expo Router
- `src/app/index.tsx` – default home screen
- `global.css` – global styles imported by the app
- `tailwind.config.js` – NativeWind/Tailwind setup
- `package.json` – project scripts and dependencies

## Included features

- `expo-router` file-based routing
- `expo-image`, `expo-splash-screen`, `expo-status-bar`, `expo-device`, and other Expo libraries
- `react-native-safe-area-context` and `react-native-gesture-handler`
- `react-native-web` for web support

## Useful scripts

- `npm start` — launch Expo CLI
- `npm run android` — start on Android emulator/device
- `npm run ios` — start on iOS simulator/device
- `npm run web` — start web version
- `npm run lint` — run Expo linting
- `npm run reset-project` — reset starter app content (moves starter code to `app-example` and creates a fresh `app` folder)

## Customize

Edit `src/app/index.tsx` and add screens under `src/app/` to expand the app. Update `global.css` and `tailwind.config.js` for styling.

## Learn more

- Expo docs: https://docs.expo.dev
- Expo Router: https://docs.expo.dev/router/introduction/
- NativeWind: https://www.nativewind.dev
