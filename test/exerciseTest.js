var assert = chai.assert;

describe('ReturnDiv', function() {
    it('should return div', function() {
        // Given
        var divTry = document.getElementById(id);
        // When
        var result = returnDiv();
        // Then
        assert.equal(result, 'div-try');
    });
});

