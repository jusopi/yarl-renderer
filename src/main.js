/**
 * Created by jopitz on 12/22/2014.
 */

"use strict";

var YarlRenderer = require( './YarlRenderer' ),
	Array2D      = require( './Array2D' )

window.onload = function()
{
	console.log( 'onload' )

	var elem = document.getElementById( 'yarl-target' )
	var renderer = new YarlRenderer( elem )
	renderer.init( 100, 25 )
}