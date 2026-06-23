/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1F1F1F',
    background: '#FAF8F2',
    backgroundElement: '#F2EFE7',
    backgroundSelected: '#DDEBDA',
    textSecondary: '#5F5F5F',
    primary: '#4F7658',
    primaryDark: '#355A40',
    primaryLight: '#DDEBDA',
    terracotta: '#A55235',
    border: '#E4DED4',
    warning: '#F4C8BD',
    success: '#CDEBCF',
  },
  dark: {
    text: '#FAF8F2',
    background: '#1F1F1F',
    backgroundElement: '#2D332E',
    backgroundSelected: '#355A40',
    textSecondary: '#D8D2C8',
    primary: '#8FB996',
    primaryDark: '#DDEBDA',
    primaryLight: '#2D332E',
    terracotta: '#D18264',
    border: '#4A4A42',
    warning: '#7A3F30',
    success: '#365C3B',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
