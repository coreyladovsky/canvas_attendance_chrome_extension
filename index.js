const puppeteer = require("puppeteer");
require('dotenv').config();

const visited = new Set();

const markAttendance = async (url) => {
    let id = url.split("student_id=").pop();
    if(visited.has(id)) return; 
    visited.add(id) 
    
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      devtools: true,
    });
    const page = await browser.newPage();
    await page.goto("https://canvas.instructure.com/login/canvas");
    
    await page.evaluate(() => {
        // console.log(document.querySelector("#pseudonym_session_unique_id"));
        //  document.querySelector("#pseudonym_session_unique_id").click()
        document.querySelector("#pseudonym_session_unique_id").value = process.env.EMAIL;
        document.querySelector("#pseudonym_session_password").value = process.env.PASSWORD;
        // document.querySelector("#pseudonym_session_remember_me").click();
        debugger
        document.querySelector('input[type="submit"]').click();
    });
    
     page = await browser.newPage();
    await page.goto(url);
    
   const [button] = await page.$x("//button[contains(., 'View Rubric')]");
    if (button) { await button.click() }
   
    const [span] = await page.$x("//span[contains(., '3 pts')]");
    if (span) { await span.click();}

    // await browser.close();
    }

markAttendance(
  "https://canvas.instructure.com/courses/1705731/gradebook/speed_grader?assignment_id=15566023&student_id=24765744"
);