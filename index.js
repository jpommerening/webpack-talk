import bespoke from 'bespoke';

import backdrop from 'bespoke-backdrop';
import bullets from 'bespoke-bullets';
import classes from 'bespoke-classes';
import fullscreen from 'bespoke-fullscreen';
import hash from 'bespoke-hash';
import keys from 'bespoke-keys';
import notes from 'bespoke-notes';
import touch from 'bespoke-touch';

import styles from './styles/main.scss';

import slides from './slides';

let deck;

function init(slides) {
   const container = document.querySelector( '#talk' );
   const first = container.querySelector( 'section' );
   slides.forEach( element => container.insertBefore( element, first ) );

   deck = bespoke.from( container, [
      backdrop(),
      bullets(),
      classes(),
      fullscreen(),
      hash(),
      keys(),
      notes({ visible: false }),
      touch()
   ] );
}

slides('de', init);

if( module.hot ) {
   module.hot.accept('./slides', function() {
      const module = require('./slides');
      const slides = module.__esModule ? module.default : module;
      const slide = deck.slide();

      const container = deck.parent;
      Array.from( container.childNodes ).forEach( element => container.removeChild( element ) );

      slides('de', function(slides) {
         init(slides);
         deck.slide(slide);
      });
   });
}
