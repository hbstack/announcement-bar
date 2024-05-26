import { test, expect } from '@playwright/test';

test('English announcement bar', async ({ page }) => {
  await page.goto('/');

  const items = page.locator('.hb-announcement');
  await expect(items).toHaveCount(2);

  await expect(items.nth(0)).toHaveText('Plain Text');

  await expect(items.nth(1)).toHaveAttribute('href', 'https://hbstack.dev/');
  await expect(items.nth(1)).toHaveText('HB Framework');
});

test('Chinese announcement bar', async ({ page }) => {
  await page.goto('/zh-hans/');

  const items = page.locator('.hb-announcement');
  await expect(items).toHaveCount(2);
  
  await expect(items.nth(0)).toHaveText('纯文本');

  await expect(items.nth(1)).toHaveAttribute('href', 'https://hbstack.dev/');
  await expect(items.nth(1)).toHaveText('HB 框架');
});

test('French announcement bar', async ({ page }) => {
  await page.goto('/fr/');

  const items = page.locator('.hb-announcement');
  await expect(items).toHaveCount(0);
});
