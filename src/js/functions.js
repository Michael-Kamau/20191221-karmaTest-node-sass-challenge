window.operations = window.operations || {};

(function() {
    var modulus = function() {
        var x = parseInt(document.getElementById('first').value);
        var y =parseInt( document.getElementById('second').value);
        document.getElementById('result').innerHTML = (x % y).toString();
    };


    var fibonacci = function() {
        var num = parseInt(document.getElementById('first').value);
        var a = 1, b = 0, temp;

        while (num >= 0){
            b=b+num;
            num--;
        }
        document.getElementById('result').innerHTML = b.toString();
    };


    var divide = function() {
        var x = parseFloat(document.getElementById('first').value);
        var y = parseFloat(document.getElementById('second').value);
        document.getElementById('result').innerHTML = (x / y).toString();
    };



    var multiply = function() {
        var x = parseInt(document.getElementById('first').value);
        var y = parseInt(document.getElementById('second').value);
        document.getElementById('result').innerHTML = (x * y).toString();
    };



    var palindrome = function() {
        var x = document.getElementById('first').value;
        var re = /[\W_]/g;
        var lowRegStr = x.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        document.getElementById('result').innerHTML = (reverseStr === lowRegStr).toString();
    };


    window.operations.init = function() {
        document.getElementById('fibonacci').addEventListener('click', fibonacci);
        document.getElementById('palindrome').addEventListener('click', palindrome);
    };

})();
