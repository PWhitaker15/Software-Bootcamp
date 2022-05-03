


function countDown(time) {
    let id = setInterval(function() {

        if (time <= 0) {
            console.log("Done!")
            clearInterval(id)
        }

        if (time > 0) {
            console.log(time);
            time--;
        }
    }, 1000)
}


function randomGame() {
    let count = 0;
    let id = setInterval(function() {
        count ++;
        let random = Math.random();
        if (random > .75) {
            console.log(random);
            console.log(count);
            clearInterval(id);
        } else {
            console.log(random);
        }
    }, 1000)
}