const { chromium } = require('playwright');
(async () => {
  const dir = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + dir + '/laminas.html');
  await p.waitForTimeout(500);
  await p.pdf({ path: dir + '/out.pdf', width: '420mm', height: '297mm', printBackground: true });
  await b.close();
})();
