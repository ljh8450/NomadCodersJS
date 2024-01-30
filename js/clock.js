const clock = document.querySelector("h2#clock");
const myDate = document.querySelector("h1#myDate");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function reternDow(dOW){
    if (dOW === 0) {
        return "SUN"
    }else if (dOW === 1) {
        return "MON"
    }else if (dOW === 2) {
        return "TUE"
    }else if (dOW === 3) {
        return "WED"
    }else if (dOW === 4) {
        return "THU"
    }else if (dOW === 5) {
        return "FRI"
    }else {
        return "SAT"
    }
}

function getDate() {
    const date = new Date();
    const years = String(date.getFullYear()).padStart(4, "0");
    const months = String(date.getMonth()+1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    const dOW = reternDow(new Date(`${years}-${months}-${days}`).getDay());
    myDate.innerText = `${years}/${months}/${days} ${dOW}`
}

getClock();
setInterval(getClock, 1000);
getDate();
setInterval(getDate, 24*60*60*1000);