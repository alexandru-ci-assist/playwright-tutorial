import { Browser, chromium } from '@playwright/test';

export class BrowserSingleton {
  private static browserInstance: Browser;

  /**
   * Creates an instance of the Chromium Browser.
   * @returns browser instance.
   */
  public static async getInstance(): Promise<Browser> {
    if (!BrowserSingleton.browserInstance) {
      BrowserSingleton.browserInstance = await chromium.launch();
    }

    return BrowserSingleton.browserInstance;
  }
}
