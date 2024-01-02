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
    },

    findfactorial: function(a){
        let result=1;
        for(let i=1; i<=a; i++){
            result*=i;
        }
        return result;
    },

    findMod: function(a,b){
        if(b===0){
            return "Cannot divide by zero";
        }
        let result=a%b
        return result;
    },

    converToBinary: function(a){
        return a.toString(2);
    }

}

module.exports = CalculationOperations