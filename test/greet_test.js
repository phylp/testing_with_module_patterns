'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet.js');

describe('greet', function(){
	it('should return an informal salutation', function(){
		expect(greet('John Doe')).to.eql('Hey, what\'s up John Doe?' );
	});
});


