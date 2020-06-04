let visited = new Set();

// document.addEventListener("DOMContentLoaded", () => {

    
    const run = () => {
        let student = document.querySelector('.ui-selectmenu-item-header').innerText
        // if(visited.size === 3) return
        if(visited.has(student)) return; 
        visited.add(student);
        document.querySelector("#grade_container").click();
        setTimeout(() => {
            let rubric = document.querySelector('.toggle_full_rubric');
            rubric.click();
            
            setTimeout(() => {
                document.querySelector('.rating-tier').click()
                document.querySelector('.save_rubric_button').click()
                document.querySelector("#grading-box-extended").value = 3;
                document.querySelector(".icon-arrow-right").click();
                run()
            }, 1000)

        }, 2000)
        
        
    }

    const start = () => {
        setTimeout(run, 3000);

    }
    
start();
// })