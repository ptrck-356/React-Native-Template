# React Native Starter Template

A lightweight Expo starter app built with:

- **Expo SDK 56**
- **Expo Router** for file-based routing
- **TypeScript** (strict mode)
- **NativeWind v4** + **Tailwind CSS v3** for styling
- **React Compiler** enabled
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

```
├── src/
│   ├── app/                  # Expo Router screens & layouts
│   │   ├── _layout.tsx       # Root layout
│   │   └── index.tsx         # Home screen
│   └── global.css            # Tailwind directives
├── assets/                   # Icons, splash screen, images
├── app.json                  # Expo config
├── babel.config.js           # Babel + NativeWind preset
├── metro.config.js           # Metro + NativeWind integration
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
└── tsconfig.json             # TypeScript config with path aliases
```

## Path aliases

The template includes two path aliases out of the box:

- `@/*` → `./src/*`
- `@/assets/*` → `./assets/*`

```tsx
import { MyComponent } from "@/components/MyComponent";
```

## Included dependencies

| Category | Packages |
|----------|----------|
| **Navigation** | `expo-router`, `react-native-screens`, `react-native-gesture-handler` |
| **Styling** | `nativewind`, `tailwindcss` |
| **Animation** | `react-native-reanimated`, `react-native-worklets` |
| **UI** | `@expo/ui`, `expo-image`, `expo-symbols`, `expo-glass-effect` |
| **Layout** | `react-native-safe-area-context` |
| **Platform** | `expo-device`, `expo-constants`, `expo-status-bar`, `expo-system-ui` |
| **Web** | `react-native-web`, `react-native-dom` |

## Useful scripts

| Command | Description |
|---------|-------------|
| `npm start` | Launch Expo CLI |
| `npm run android` | Start on Android emulator/device |
| `npm run ios` | Start on iOS simulator/device |
| `npm run web` | Start web version |
| `npm run lint` | Run Expo linting |

## Customize

Edit `src/app/index.tsx` and add screens under `src/app/` to expand the app. Update `src/global.css` and `tailwind.config.js` for styling.

## Learn more

- [Expo docs](https://docs.expo.dev)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [NativeWind](https://www.nativewind.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
