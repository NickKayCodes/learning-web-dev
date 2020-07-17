
/**
 * this program prints out a "#" left sided right triangle
 * from 1 to 7
 * example:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */
function sharp() {
    let sharp = "#";
    for (let sharp = "#"; sharp.length < 7; sharp += "#") {
        console.log(sharp);
    }
}

/**
 * this program prints out 1-100
 * if number % 3 === 0 "Fizz" prints in place
 * if number % 5 === 0 "Buzz" prints in place
 * Example:
 * 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, etc...
 */
function fooBar() {
    let fizz = "Fizz";
    let buzz = "Buzz";

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(fizz);
        } else if (i % 5 === 0) {
            console.log(buzz);
        } else {
            console.log(i);
        }
    }

}
fooBar();