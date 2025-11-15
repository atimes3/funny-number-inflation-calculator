let startingDate = new Date(2025, 10, 15, 10, 43, 0);

function calculateInflation() {
    let currentDate = new Date();

    let diff = currentDate - startingDate;
    diff = Math.round(diff / 1000);
    console.log(`Diff in seconds: ${diff}`);

    let sixtyNine = 69;
    let fourTwenty = 420;

    sixtyNine = Math.round(sixtyNine * (1.035 ** (diff / 60)));
    fourTwenty = Math.round(sixtyNine * (1.035 ** (diff / 60)));
    
    funnyNumbersHTML = document.getElementsByTagName("h2");
    funnyNumbersHTML[0].innerHTML = sixtyNine;
    funnyNumbersHTML[1].innerHTML = fourTwenty;

    console.log(sixtyNine);
    console.log(fourTwenty);
}

setInterval(calculateInflation, 1000)