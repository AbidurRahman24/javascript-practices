// https://github.com/Niloy-Sumon/javascript-practices

// Kilometer To Meter
const kilometerToMeter = (kl) => {
    if (kl < 0) {
        return 0
    }
    else {
        let kilometer = kl * 1000;
        return kilometer
    }
}
const result = kilometerToMeter(5);
console.log(result);


// budgetCalclulator
const budgetCalculator = (wac, mob, lab) => {
    if (wac < 0, mob < 0, lab < 0) {
        return 0
    }
    else {
        var watch = wac * 50;
        var mobile = mob * 100;
        var labtop = lab * 500;
        return watch + mobile + labtop;
    }

}
const buy = budgetCalculator(2, 5, 2)
console.log(buy);

// Hotel Cost
const hotelCost = (cost) => {
    let rent = 0;
    if (rent >= 10) {
        rent = cost * 100;
    }
    else if (rent >= 20) {
        var firstTenDays = 10 * 100;
        var remaining = cost - 10;
        var secondTenDays = remaining * 80;
        rent = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = cost - 20;
        var thTenDays = remaining * 50;
        rent = firstTenDays + secondTenDays + thTenDays;
    }
    return rent
}

const cost = hotelCost(40)
console.log(cost);


// Mega Friend
const megaFriend = (array) => {
    var longestWord = "";

    array.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

var word = megaFriend(["Niloy", "AbidurNiloy", "Sumon", "Habib", "Najmul", "Fahmida", "Najbiha", "Ruhan"]);
console.log(word);
