/**
 * Created by jopitz on 6/25/2014.
 */

//////////////////////////////
//  DEV
//////////////////////////////

var gulp   = require( 'gulp' ),
browserify = require( 'gulp-browserify' ),
sass       = require( 'gulp-sass' ),
connect    = require( 'gulp-connect' ),
rename     = require( 'gulp-rename' );

// Basic usage
gulp.task( 'compile', function()
{
	console.log( "browserifying" );

	// Single entry point to browserify
	return gulp.src( './src/main.js' )
		.pipe( browserify( {
			insertGlobals: true,
			debug:         !gulp.env.production
		} ) )
		.pipe( rename( './src/bundle.js' ) )
		.pipe( gulp.dest( '.' ) )
} );

gulp.task( 'scss', function()
{
	console.log( "scss'ing" )

	//return gulp.src( './src/assets/scss/styles.scss' )
	//	.pipe( sass() )
	//	.pipe( rename( './src/bundle.css' ) )
	//	.pipe( gulp.dest( '.' ) );
} )

gulp.task( 'connect', function()
{
	return connect.server( { root: './src', livereload: true } )
} );

gulp.task( 'reload', function()
{
	return gulp.src( './src/index.html' )
		.pipe( connect.reload() );
} );

gulp.task( 'watch', function()
{
	gulp.watch( [ "./src/**/*.*", "!./src/bundle.js", "!./src/bundle.css" ], [ 'scss', 'compile' ] );
	gulp.watch( [ './src/index.html', './src/bundle.js', './src/bundle.css' ], [ 'reload' ] );
} );

gulp.task( 'default', [ 'scss', 'compile', 'connect', 'watch' ] );