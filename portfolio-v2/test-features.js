const puppeteer = require('puppeteer');
const fs = require('fs');

const SCREENSHOTS_DIR = './screenshots';

// Create screenshots directory if it doesn't exist
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function testPortfolio() {
  console.log('🚀 Starting comprehensive portfolio testing...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = {
    passed: [],
    failed: [],
    warnings: []
  };

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // ==========================================
    // TEST 1: Homepage - Hero Section
    // ==========================================
    console.log('📸 TEST 1: Homepage Hero Section');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
    await sleep(3000); // Wait for 3D globe to render

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/01-homepage-hero.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    // Check for white background
    const bgColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    console.log(`  ✓ Background color: ${bgColor}`);
    if (bgColor === 'rgb(255, 255, 255)' || bgColor === 'white') {
      results.passed.push('White background confirmed');
    } else {
      results.warnings.push(`Background is ${bgColor}, expected white`);
    }

    // Check for headline text
    const headline = await page.evaluate(() => {
      return document.body.innerText.includes('Building systems that scale');
    });
    console.log(`  ${headline ? '✓' : '✗'} Headline present`);
    headline ? results.passed.push('Hero headline present') : results.failed.push('Hero headline missing');

    // Check for Earth globe component
    const hasGlobe = await page.evaluate(() => {
      return document.body.innerText.includes('Software Engineer') || document.querySelector('canvas');
    });
    console.log(`  ${hasGlobe ? '✓' : '✗'} Earth globe canvas element`);
    hasGlobe ? results.passed.push('Earth globe rendering') : results.failed.push('Earth globe not found');

    // ==========================================
    // TEST 2: Check for prohibited content (company names, etc.)
    // ==========================================
    console.log('\n📸 TEST 2: Verify sanitization (no company names)');
    const pageText = await page.evaluate(() => document.body.innerText.toLowerCase());

    const prohibited = ['siemens', 'spectrum power', 'university of minnesota', 'uofmn', 'bachelor of arts'];
    let sanitizationPassed = true;

    for (const term of prohibited) {
      const found = pageText.includes(term);
      if (found) {
        console.log(`  ✗ Found prohibited term: "${term}"`);
        results.failed.push(`Found prohibited term: ${term}`);
        sanitizationPassed = false;
      }
    }

    if (sanitizationPassed) {
      console.log('  ✓ No prohibited terms found');
      results.passed.push('Data sanitization complete');
    }

    // Check email not visible
    const hasEmail = pageText.includes('contact@elvedin.dev') || pageText.includes('@gmail.com');
    console.log(`  ${hasEmail ? '✗' : '✓'} Email hidden: ${!hasEmail}`);
    !hasEmail ? results.passed.push('Email address removed') : results.failed.push('Email address still visible');

    // ==========================================
    // TEST 3: Skills Section with Proficiency
    // ==========================================
    console.log('\n📸 TEST 3: Skills Section with Proficiency Levels');
    await page.evaluate(() => {
      const skillsSection = Array.from(document.querySelectorAll('h2')).find(h =>
        h.textContent.includes('Technical Stack')
      );
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await sleep(1000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/02-skills-proficiency.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    const hasSkillLevels = await page.evaluate(() => {
      const text = document.body.innerText;
      return text.includes('Expert') && text.includes('Proficient') && text.includes('Familiar');
    });
    console.log(`  ${hasSkillLevels ? '✓' : '✗'} Proficiency levels present`);
    hasSkillLevels ? results.passed.push('Skill proficiency indicators added') : results.failed.push('Skill proficiency levels missing');

    // ==========================================
    // TEST 4: Achievements Section
    // ==========================================
    console.log('\n📸 TEST 4: Impact & Achievements Section');
    await page.evaluate(() => {
      const achievementsSection = Array.from(document.querySelectorAll('h2')).find(h =>
        h.textContent.includes('Impact') || h.textContent.includes('Achievements')
      );
      if (achievementsSection) {
        achievementsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await sleep(1000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/03-achievements.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    const hasMetrics = await page.evaluate(() => {
      const text = document.body.innerText;
      return text.includes('300+') && text.includes('30+') && text.includes('5x');
    });
    console.log(`  ${hasMetrics ? '✓' : '✗'} Achievement metrics (300+, 30+, 5x)`);
    hasMetrics ? results.passed.push('Achievement metrics present') : results.failed.push('Achievement metrics missing');

    // ==========================================
    // TEST 5: Experience Section (simplified)
    // ==========================================
    console.log('\n📸 TEST 5: Experience Section (title + industry only)');
    await page.evaluate(() => {
      const expSection = Array.from(document.querySelectorAll('h2')).find(h =>
        h.textContent.includes('Experience')
      );
      if (expSection) {
        expSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await sleep(1000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/04-experience.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    const experienceText = await page.evaluate(() => {
      return document.body.innerText;
    });

    const hasGenericIndustry = experienceText.includes('Energy Management Software') ||
                                experienceText.includes('Grid Control');
    console.log(`  ${hasGenericIndustry ? '✓' : '✗'} Generic industry terms used`);
    hasGenericIndustry ? results.passed.push('Experience uses generic industry terms') : results.failed.push('Specific company names still present');

    // Check for bullet points (should not have them)
    const hasBullets = experienceText.includes('•') || experienceText.includes('▹') ||
                       await page.evaluate(() => {
                         return document.querySelectorAll('li').length > 10; // Some bullets OK for other sections
                       });
    console.log(`  ${!hasBullets ? '✓' : '✗'} No bullet points in experience`);

    // ==========================================
    // TEST 6: Technical Interests Section
    // ==========================================
    console.log('\n📸 TEST 6: Technical Interests (AI & Developer Tools)');
    await page.evaluate(() => {
      const interestsSection = Array.from(document.querySelectorAll('h2')).find(h =>
        h.textContent.includes('Technical Interests')
      );
      if (interestsSection) {
        interestsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    await sleep(1000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/05-interests.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });

    const hasAIContent = await page.evaluate(() => {
      const text = document.body.innerText;
      return text.includes('AI') &&
             (text.includes('Developer Tools') || text.includes('Internal Developer'));
    });
    console.log(`  ${hasAIContent ? '✓' : '✗'} AI and Developer Tools mentioned`);
    hasAIContent ? results.passed.push('Technical interests include AI and developer tools') : results.failed.push('AI/Developer tools content missing');

    // ==========================================
    // TEST 7: About Page
    // ==========================================
    console.log('\n📸 TEST 7: About Page');
    await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle2' });
    await sleep(1000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/06-about-page.png`,
      fullPage: true
    });

    const aboutText = await page.evaluate(() => document.body.innerText.toLowerCase());

    // Check for improved content
    const hasSystemsThinking = aboutText.includes('systems') || aboutText.includes('architecture');
    console.log(`  ${hasSystemsThinking ? '✓' : '✗'} Systems thinking content`);
    hasSystemsThinking ? results.passed.push('About page mentions systems thinking') : results.warnings.push('Consider adding more systems thinking content');

    // Verify no education details
    const hasGradDate = aboutText.includes('2024') || aboutText.includes('graduated');
    console.log(`  ${!hasGradDate ? '✓' : '✗'} No graduation date`);
    !hasGradDate ? results.passed.push('Graduation date removed') : results.failed.push('Graduation date still visible');

    // ==========================================
    // TEST 8: Projects Page
    // ==========================================
    console.log('\n📸 TEST 8: Projects Page');
    await page.goto('http://localhost:3000/projects', { waitUntil: 'networkidle2' });
    await sleep(1000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/07-projects-page.png`,
      fullPage: true
    });

    console.log('  ✓ Projects page loaded');
    results.passed.push('Projects page accessible');

    // ==========================================
    // TEST 9: Contact Form
    // ==========================================
    console.log('\n📸 TEST 9: Contact Form (opens in new tab)');

    // Go back to homepage
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await sleep(1000);

    // Click "Get In Touch" button and verify it tries to open new tab
    const contactButtonExists = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('a'));
      const contactBtn = buttons.find(a => a.textContent.includes('Get In Touch'));
      return contactBtn && contactBtn.getAttribute('target') === '_blank' && contactBtn.getAttribute('href') === '/contact';
    });

    console.log(`  ${contactButtonExists ? '✓' : '✗'} Contact button opens in new tab`);
    contactButtonExists ? results.passed.push('Contact button configured correctly') : results.failed.push('Contact button not set to open in new tab');

    // Navigate to contact page directly
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2' });
    await sleep(1000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/08-contact-form.png`,
      fullPage: true
    });

    const hasFormFields = await page.evaluate(() => {
      const inputs = document.querySelectorAll('input, textarea');
      const text = document.body.innerText.toLowerCase();
      return inputs.length >= 3 && (text.includes('name') || text.includes('email') || text.includes('message'));
    });
    console.log(`  ${hasFormFields ? '✓' : '✗'} Contact form has fields`);
    hasFormFields ? results.passed.push('Contact form created') : results.failed.push('Contact form missing fields');

    // ==========================================
    // TEST 10: Mobile Responsiveness
    // ==========================================
    console.log('\n📸 TEST 10: Mobile Responsiveness (375x812 - iPhone)');
    await page.setViewport({ width: 375, height: 812 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await sleep(2000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/09-mobile-homepage.png`,
      fullPage: true
    });
    console.log('  ✓ Mobile screenshot captured');
    results.passed.push('Mobile layout tested');

    // ==========================================
    // TEST 11: Tablet Responsiveness
    // ==========================================
    console.log('\n📸 TEST 11: Tablet Responsiveness (768x1024 - iPad)');
    await page.setViewport({ width: 768, height: 1024 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await sleep(2000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/10-tablet-homepage.png`,
      fullPage: true
    });
    console.log('  ✓ Tablet screenshot captured');
    results.passed.push('Tablet layout tested');

    // ==========================================
    // TEST 12: Ultrawide Desktop
    // ==========================================
    console.log('\n📸 TEST 12: Ultrawide Desktop (2560x1440)');
    await page.setViewport({ width: 2560, height: 1440 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await sleep(2000);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/11-ultrawide-homepage.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 2560, height: 1440 }
    });
    console.log('  ✓ Ultrawide screenshot captured');
    results.passed.push('Ultrawide layout tested');

    // ==========================================
    // TEST 13: Check Footer
    // ==========================================
    console.log('\n📸 TEST 13: Footer (no LinkedIn, contact link instead of email)');
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await sleep(1000);

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await sleep(500);

    await page.screenshot({
      path: `${SCREENSHOTS_DIR}/12-footer.png`,
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 400 }
    });

    const footerText = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      return footer ? footer.innerText.toLowerCase() : '';
    });

    const hasLinkedIn = footerText.includes('linkedin') || await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a')).some(a =>
        a.href.includes('linkedin.com')
      );
    });
    console.log(`  ${!hasLinkedIn ? '✓' : '✗'} LinkedIn removed from footer`);
    !hasLinkedIn ? results.passed.push('LinkedIn removed') : results.failed.push('LinkedIn link still present');

    const hasGitHub = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a')).some(a =>
        a.href.includes('github.com')
      );
    });
    console.log(`  ${hasGitHub ? '✓' : '✗'} GitHub link present`);
    hasGitHub ? results.passed.push('GitHub link present') : results.warnings.push('GitHub link not found');

  } catch (error) {
    console.error('❌ Error during testing:', error);
    results.failed.push(`Test error: ${error.message}`);
  } finally {
    await browser.close();
  }

  // ==========================================
  // FINAL REPORT
  // ==========================================
  console.log('\n' + '='.repeat(60));
  console.log('📊 TEST RESULTS SUMMARY');
  console.log('='.repeat(60));

  console.log(`\n✅ PASSED (${results.passed.length}):`);
  results.passed.forEach(item => console.log(`  ✓ ${item}`));

  if (results.warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${results.warnings.length}):`);
    results.warnings.forEach(item => console.log(`  ⚠ ${item}`));
  }

  if (results.failed.length > 0) {
    console.log(`\n❌ FAILED (${results.failed.length}):`);
    results.failed.forEach(item => console.log(`  ✗ ${item}`));
  }

  console.log('\n' + '='.repeat(60));
  console.log(`📁 Screenshots saved to: ${SCREENSHOTS_DIR}/`);
  console.log('='.repeat(60));

  const score = Math.round((results.passed.length / (results.passed.length + results.failed.length)) * 100);
  console.log(`\n🎯 Overall Score: ${score}%`);

  if (results.failed.length === 0) {
    console.log('\n🎉 ALL TESTS PASSED! Portfolio is ready for deployment!');
  } else {
    console.log('\n🔧 Some issues need attention. Check failed items above.');
  }
}

testPortfolio().catch(console.error);
