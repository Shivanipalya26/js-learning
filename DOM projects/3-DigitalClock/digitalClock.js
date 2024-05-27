const clock = document.getElementById('clock');

setInterval(function() {
    const time = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = time.toLocaleTimeString();
}, 1000)