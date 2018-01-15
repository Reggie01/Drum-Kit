
let LOGGER = ( function( options ) {
  let DEBUGGER = true;
  let options = {
      
  }
  let createHeader = function( header ) {
      return `|${header}|\n`;
  };
  let createHeading = function( heading ) {
    let border = "+----------------------------------+---------+------------------------+----------------+\n";
    let pad      = "                                                                                                                            ";
    let borderLength = border.length;
    let borderPadding = function( msg ) {
             // leave room for beginning and ending border "|"
             // and minus "\n" nextline string 
             // |blue      |
             return ( msg + pad ).slice( 0, borderLength - 3 );       
    }
    let paddedHeader = borderPadding( heading );
    
    if( DEBUGGER ) {
        console.log( "%cPadded Header : " + paddedHeader, 'background: #222; color: #bada55' );
        console.log( this );
    } 
    return border + this.createHeader( paddedHeader ) + border;
  };
  let setDebugger = function( bool ) {
      this.options.DEBUGGER = bool;
  }
  return {
      createHeading : createHeading,
      setDegger : setDebugger
  }
  }
})( options );