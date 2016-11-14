module.exports = function( code ) {
   var slides = this.exec( code, this.resourcePath );

   this.cacheable();

   if( !(slides && slides.length) ) {
      return 'module.exports = [];';
   }

   var output = [
      'var empty = function() { return ""; }',
      'var slides = [',
      slides.map( function( slide ) {
         return ( '  {\n    ' + [
                    'html: ' + ( slide.source ? 'require(' + JSON.stringify( slide.source ) + ')' : '""' ),
                    'data: ' + ( slide.data ? JSON.stringify( slide.data ) : '{}' )
                ].join( ',\n    ' ) +
                '\n  }' );
      } ).join( ',\n' ),
      '];',
      'module.exports = slides.map( function( slide ) {',
      '  var section = document.createElement( "section" );',
      '  section.innerHTML = slide.html;',
      '  Object.keys( slide.data ).forEach( function( key ) {',
      '    section.setAttribute( "data-" + key, slide.data[ key ] );',
      '  } );',
      '  return section;',
      '} );',
      'if( module.hot ) {',
      slides.filter( function( slide ) {
         return !!(slide.source);
      } ).map( function( slide, index ) {
         return '  module.hot.accept(' + JSON.stringify( slide.source ) + ', function() { module.exports[' + index + '].innerHTML = require(' + JSON.stringify( slide.source ) + '); });';
      } ).join( '\n' ),
      '}'
   ].join( '\n' );
   return output;
}
