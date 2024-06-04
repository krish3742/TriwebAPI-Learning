function getDigitalTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hrs = hours > 12 ? `0${hours-12}` : hours;
    let min = minutes < 10 ? `0${minutes}` : minutes;
    let sec = seconds < 10 ? `0${seconds}` : seconds;
    let time = hours >= 12 ? "PM" : "AM";

    console.log(`${hrs}:${min}:${sec} ${time}`);
}

getDigitalTime();