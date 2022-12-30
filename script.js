let segment = document.querySelectorAll('.clock-digit > span');

let segmentDetector = (time) => {
    let segmentBCD = ['1111110', '0110000', '1101101', '1111001', '0110011', '1011011', '1011111', '1110000', '1111111', '1111011'];

    for (let i = 0; i < time.length; i ++) {
        for (let j = 0; j < 7; j ++) {
            if (segmentBCD[time[i]][j] === '1') {
                segment[i * 7 + j].classList.add('active');
            } else {
                segment[i * 7 + j].classList.remove('active');
            }
        }
    }
}

let timer = setInterval(() => {

    const dt = new Date();

    let hour = dt.getHours();
    let minute = dt.getMinutes();
    let second = dt.getSeconds();

    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour === 0) ? hour = 12 : hour;
    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? '0' + minute : minute;
    second = (second < 10) ? '0' + second : second;
   
    let timeStr = ''.concat(hour, minute, second);

    segmentDetector(timeStr);

}, 1000);