/*
 * Unit tests for lib/calculator.js
 */
describe('Calculator', function() {
    // API for interacting with the page.
    var controls = {
        get result() {
            return document.getElementById('result').innerHTML;
        },
        get x() {
            return document.getElementById('x').value;
        },
        set x(val) {
            document.getElementById('x').value = val;
        },
        get y() {
            return document.getElementById('y').value;
        },
        set y(val) {
            document.getElementById('y').value = val;
        },
        clickAdd: function() {
            document.getElementById('add').click();
        },
        init: function(x, y) {
            this.x = x;
            this.y = y;
            this.clickAdd();
        }
    };
    // inject the HTML fixture for the tests
    beforeEach(function() {
        // Why this line? See: https://github.com/billtrik/karma-fixture/issues/3
        fixture.base = 'test';
        fixture.load('calculator.fixture.html');

        window.calculator.init();
    });
    // remove the html fixture from the DOM
    afterEach(function() {
        fixture.cleanup();
    });


    it('should return 3 for 1+2', function() {
        controls.init(1, 2);
        controls.result.should.equal('3');
    });

    it('should calculate zero for invalid x value', function() {
        controls.init('hello', 2);
        controls.result.should.equal('0');
    });

    it('should calculate zero for invalid y value', function() {
        controls.init(1, 'goodbye');
        controls.result.should.equal('0');
    });
});