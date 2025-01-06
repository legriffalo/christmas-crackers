import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pull.my.cracker.app',
  appName: 'PullMyCracker',
  webDir: 'dist',
  plugins: {
        "CapacitorSQLite": {
            "iosDatabaseLocation": "Library/CapacitorDatabase"
        },
        SplashScreen: {
          launchShowDuration: 1000,
          launchAutoHide: true,
          launchFadeOutDuration: 1000,
          backgroundColor: "#000000",
          androidSplashResourceName: "splash",
          androidScaleType: "FIT_END",
        },
  },
};

export default config;
