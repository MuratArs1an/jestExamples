const CalculationOperations = {

    Add: function (a, b) {
        return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    },

    multiple: function (a, b) {
        return a * b;
    },

    divide: function (a, b) {
        if(b===0){
            return "Cannot divide by zero";
        }
        return a / b;
    },

    square: function (a){
        return a*a;
    },

    exponentiation: function (a, b) {
        if (b === 0) {
            return 1;
        }
        let result = 1;
        for (let i = 1; i <= b; i++) {
            result *= a;
        }
        return b < 0 ? 1 / result : result;
    }

}

module.exports = CalculationOperations