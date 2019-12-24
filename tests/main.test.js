
describe('Calculator', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div id="fixture">' +
            '<input id="first" type="text">' +
            '<button id="fibonacci"  ></button>' +
            '<button id="palindrome"  ></button>' +
            '<tr></tr>' +
            'Result: <span id="result" /></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        window.operations.init();
    });

    it('should return an object', async function() {
        const response= await fetch('http://localhost:3480/schedules');

        const data= await response.json();

        expect(typeof data).toBe('object');
    });

    it('should return 15 for 5(fibonacci)', function() {
        document.getElementById('first').value = 5;
        document.getElementById('fibonacci').click();
        expect(document.getElementById('result').innerHTML).toBe('15');
    });

    it('should return true for  anna in input a', function() {
        document.getElementById('first').value = 'anna';
        document.getElementById('palindrome').click();
        expect(document.getElementById('result').innerHTML).toBe('true');
    });





});
