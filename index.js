'use strict';

var Filter = require('broccoli-filter');
var myth = require('myth');

function MythFilter(inputTree, options) {
	if (!(this instanceof MythFilter)) {
		return new MythFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options   = options;
}

MythFilter.prototype = Object.create(Filter.prototype);
MythFilter.prototype.constructor = MythFilter;
MythFilter.prototype.extensions = ['css'];
MythFilter.prototype.targetExtension = 'css';
MythFilter.prototype.processString = function (str) {
	return myth(str, this.options);
};

module.exports = MythFilter;
