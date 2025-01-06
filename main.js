
 document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document,getelementbyid(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setinterval(() => {
            current += increment;
            obj.textcount = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5787, 2500);
    counter("count3", 0, 1487, 3000);
    counter("count4", 0, 7287, 3000);
});