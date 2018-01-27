/**
 * Created by raja on 16/01/18.
 */

// Example Unit test for plain Javascript

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

// Example Angular Unit testing for SampleFactory

describe('Angular Test', function() {

   let SampleFactory;

   beforeEach(function() {
      window.module("angular-common");
      inject(function(_SampleFactory_) {
         SampleFactory = _SampleFactory_;
      });
   });


   describe('SampleFactory', function() {
     it('should have getter', function() {
        assert(SampleFactory.hasOwnProperty("get"));
     });

     it('should have setter', function() {
         assert(SampleFactory.hasOwnProperty("set"));
     });
   });

});