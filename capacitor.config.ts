import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'notification-testing-i5vue',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: "splash.png",
      iconColor: "#FFFFFF",
      // sound: "beep.wav",
    },
  },
};

export default config;
