const btn = document.getElementById("bg-switch");

    const pastelColors = [
        "#FFB3BA", "#cdb498", "#c0c07a",
        "#82a98a", "#9fcbec", "#E0BBE4",
        "#7bb4ba", "#b49d78", "#E499B2",
        "#7d88b6"
    ];

    btn.addEventListener("click", () => {
        const randomColor = pastelColors[
            Math.floor(Math.random() * pastelColors.length)
    ];

    document.querySelector(".outerframe").style.background = randomColor;
    });

    const start = document.getElementById("Start");
    const stop = document.getElementById("Stop");
    const reset = document.getElementById("Reset");
    const timer = document.getElementById("timer");


    let timeLeft = 1500;
    let interval;

    const updateTimer = () =>{
        const minutes = Math.floor(timeLeft/60);
        const seconds = timeLeft%60;

        timer.innerHTML = 
        `${minutes.toString().padStart(2,"0")}
        :${seconds.toString().padStart(2,"0")}`;
 
    }

    const startTimer = () => {
        if(interval) return;
        interval = setInterval(() => {
            timeLeft--;
            updateTimer();

            if(timeLeft ==0){
                clearInterval(interval);
                interval=null;
                alert("Time's up!");
                timeLeft=1500;
                updateTimer();
            }
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(interval);
        interval=null;
    }
    const resetTimer = () =>{
        clearInterval(interval);
        interval=null;
        timeLeft=1500;
        updateTimer();
    }

    start.addEventListener("click",startTimer);
    stop.addEventListener("click",stopTimer);
    reset.addEventListener("click",resetTimer);