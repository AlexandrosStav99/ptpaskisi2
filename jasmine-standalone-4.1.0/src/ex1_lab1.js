function subtract(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {/*check if both args are numbers*/
        isPositive = num1 >= num2 /*check if num1 is greater than num2*/
        if (isPositive === true) {/*if it is postiive return"POSITIVE" */
            return "POSITIVE";
        }
        return "NEGATIVE";
    }
    else return "incorrect input"
}
