const puppeteer = require("puppeteer");

const visited = new Set();

const markAttendance = async (url) => {
    let id = url.split("student_id=").pop();
    if(visited.has(id)) return; 
    visited.add(id) 
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
   const [button] = await page.$x("//button[contains(., 'View Rubric')]");
    if (button) {
        await button.click();
    }
   const [span] = await page.$x("//span[contains(., '3 pts')]");
    if (span) {
        await span.click();
    }

    await browser.close();
    }

markAttendance(
  "https://canvas.instructure.com/courses/1705731/gradebook/speed_grader?assignment_id=15566023&student_id=24765744"
);