import { Haptics, ImpactStyle } from "@capacitor/haptics";

export async function hapticReveal(): Promise<void> {
  try {
    await Haptics.impact({ style: ImpactStyle.Medium });
  } catch {
    // Haptics unavailable (e.g. browser without vibration support) — ignore.
  }
}
