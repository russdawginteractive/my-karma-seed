window.calculator = window.calculator || {};

(function() {
    var getIntById = function(id) {
        return parseInt(document.getElementById(id).value, 10);
    }
    var calculate = function() {
        var x = getIntById('x');
        var y = getIntById('y');
        var sum = x + y;
        document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
    };

    window.calculator.init = function() {
        document.getElementById('add').addEventListener('click', calculate);
    };
})();