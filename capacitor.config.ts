import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.klarwurf.app",
  appName: "KlarWurf",
  webDir: "dist",
  backgroundColor: "#050505",
  server: {
    androidScheme: "https",
  },
};

export default config;
