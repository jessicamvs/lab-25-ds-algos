const expect = require('chai').expect;
const algos = require('../lib/algos.js');

describe('algorithms', function() {
  describe('#mergeSort()', function() {
    it('should throw an error if no parameter is provided', function() {
      expect(algos.mergeSort()).to.equal(Error);
    });

    it('should return an error if an array is not provided', function() {
      expect(algos.mergeSort('lol')).to.equal(Error);
    });

    it('should return an error if array is empty', function() {
      expect(algos.mergeSort([])).to.equal(Error);
    });

    it('should sort an array with one element', function() {
      expect(algos.mergeSort([5])).to.deep.equal([5]);
    });

    it('should sort an array with even number of elements', function() {
      expect(algos.mergeSort([5,1,10,4])).to.deep.equal([1,4,5,10]);
    });

    it('should sort an array with uneven number of elements', function() {
      expect(algos.mergeSort([5,2,1,6,4])).to.deep.equal([1,2,4,5,6]);
    });
  });

  describe('#binarySearch()', function() {
    it('should return Error if arr is not provided', function() {
      expect(algos.binarySearch()).to.equal(Error);
    });

    it('should return false if array is empty', function() {
      expect(algos.binarySearch([], 6)).to.equal(false);
    });

    it('should return false if number is not in array', function() {
      expect(algos.binarySearch([5,8,10,12], 7)).to.equal(false);
    });

    it('should return true if number is in array', function() {
      expect(algos.binarySearch([1,4,6,8], 4)).to.equal(true);
    });

  });

});
