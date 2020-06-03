let visited = new Set();

// document.addEventListener("DOMContentLoaded", () => {

    
    const run = () => {
        console.log("ran")
        let student = document.querySelector('.ui-selectmenu-item-header').innerText
        console.log(student)
        console.log(visited)
        if(visited.has(student)) return; 
        visited.add(student);
        let rubric = document.querySelector('.toggle_full_rubric');
        rubric.click();
        document.querySelector("#grading-box-extended").value = 3;

        setTimeout(() => {
            document.querySelector('.rating-tier').click()
            document.querySelector('.save_rubric_button').click()
            document.querySelector(".icon-arrow-right").click();
            run()
        }, 1000)
        
        
    }

    const start = () => {
        setTimeout(run, 3000);

    }
    
start();
// })