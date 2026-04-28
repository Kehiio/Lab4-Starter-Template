/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add === true) {
        let result = 0;

        result = Number(num1) + Number(num2);

        if (result == NaN )
        {
            return false;
        }
        else
        {
            return result;
        }
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {    
    const discounted = []
    const length = prices.length;

    // return false if price array is empty
    if (length == 0 || !Array.isArray(prices)){
        return false;
    }

    // checks that discount can be converted to a number between 0-1
    if (Number(prices) == NaN || (Number(prices) > 1 || Number(prices) < 0)){
        return false;
    }

    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        // return false if value in array is not a number, otherwise compute discount
        if (typeof prices[i] === 'number'){
            discountedPrice = prices[i] * (1 - discount);
            discounted.push(discountedPrice);
        }
        else{
            return false;
        }
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};