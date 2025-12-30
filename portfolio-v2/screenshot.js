const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to desktop size
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Wait a bit for any animations/3D rendering
  await new Promise(resolve => setTimeout(resolve, 3000));

  const screenshotPath = './screenshot-homepage.png';
  console.log(`Taking screenshot and saving to ${screenshotPath}...`);
  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  console.log('Screenshot saved successfully!');

  await browser.close();
})();
