// const now = new Date();

// console.log(now);
// console.log(typeof now);

// year, month, day, times
// console.log('getFullYear: ', now.getFullYear());
// console.log('getMonth: ', now.getMonth());
// console.log('getDate: ', now.getDate());
// console.log('getDay: ', now.getDay());
// console.log('getHours: ', now.getHours());
// console.log('getMinutes: ', now.getMinutes());
// console.log('getSeconds: ', now.getSeconds());

// console.log('timeStamp: ', now.getTime());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// const before = new Date('February 1 2019 7:30:59');
// // const now = new Date();

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = Math.round(diff/1000/60);
// const hours = Math.round(mins/60);
// const days = Math.round(hours/24);

// console.log(`the blog was written ${days} agp`);
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));

const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const html = `<span>${h}</span>
    :<span>${m}</span>
    :<span>${s}</span>`;
    clock.innerHTML = html;
};

setInterval(tick, 1000);

const now = new Date();
// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'DD/MM/YYYY'));
// console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));
// console.log(dateFns.format(now, 'Do'));

const before = new Date('February 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now, before, {addSufix: true}));