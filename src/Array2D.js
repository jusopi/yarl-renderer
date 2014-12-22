/**
 * Created by jusopi on 12/21/2014.
 */

"use strict";

var Array2D = function( w, h )
{
	this._w = w ? Number( w ) : 0;
	this._h = h ? Number( h ) : 0;

	this._s = this._w * this._h;
	this._array = new Array( this._s );
}

Object.defineProperty( Array2D.prototype, 'src', {
	get: function() { return this._array; }
} )

Object.defineProperty( Array2D.prototype, 'w', {
	get: function() { return this._w; }
} )

Object.defineProperty( Array2D.prototype, 'h', {
	get: function() { return this._h; }
} )

Array2D.prototype.size = function()
{
	return this._s;
}

Array2D.prototype.get = function( x, y )
{
	var idx = this.getIndex( x, y );

	if( idx > this._array.length )
		throw new Error( "index position is out of range" );

	return this._array[ idx ];
}


Array2D.prototype.getRow = function( y )
{
	if( y > this._h - 1 )
		throw new Error( "index of row is out of range" );

	var idxs = this.getIndex( 0, y );
	var idxe = this.getIndex( this._w, y );

	return this._array.slice( idxs, idxe );
}

Array2D.prototype.getAtIndex = function( idx )
{
	if( idx > this._array.length )
		throw new Error( "index position is out of range" );

	return this._array[ idx ];
}

Array2D.prototype.fill = function()
{
	if( arguments.length > 0 )
	{
		var a = arguments[ 0 ] instanceof Array ? arguments[ 0 ] : arguments;
		this._array.push.apply( this._array, a );

	}

	else
	{
		this._array.length = 0;
		this._array.length = this._s;
	}
}

//	Array2D.prototype.splice = function (idx, num, vals)
//	{
//		if( idx > this._array.length )
//			throw new Error( "index position is out of range" );
//
//		this._array.splice
//	}

Array2D.prototype.set = function( x, y, val )
{
	var idx = this.getIndex( x, y );

	if( idx > this._array.length )
		throw new Error( "index position is out of range" );

	this._array[ idx ] = val;

}

Array2D.prototype.setAtIndex = function( idx, val )
{
	if( idx > this._array.length )
		throw new Error( "index position is out of range" );

	this._array[ idx ] = val;
}

Array2D.prototype.getIndex = function( x, y )
{
	return y * this._w + x;
}

module.exports = Array2D;