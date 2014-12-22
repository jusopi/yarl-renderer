/**
 * Created by jopitz on 12/21/2014.
 */
"use strict";

var _            = require( 'lodash' ),
	NodeRenderer = require( './NodeRenderer' )

var YarlRenderer = function( container, nodeRenderer )
{
	this._container = container;
	this._nodeRenderer = nodeRenderer || new NodeRenderer();
}

YarlRenderer.prototype.init = function( w, h )
{
	this._container.innerHTML = '';

	var s = w * h,
		i = 0,
		elem = undefined

	this._nodes = [];

	while( i < s )
	{
		elem = document.createElement( 'span' );
		elem.name = 'node-' + i;
		elem.textContent = '.';

		this._nodes.push( elem )
		this._container.appendChild( elem )

		if( i > 0 && i % w == 0 )
			this._container.appendChild( document.createElement( 'br' ) )

		i++
	}
}

YarlRenderer.prototype.render = function( renderData )
{
	_.forEach( renderData, renderNode )
}

var renderNode = function( node )
{

}

module.exports = YarlRenderer;