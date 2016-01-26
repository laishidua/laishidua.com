/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
( function( $ ) {
	/* Site title and description. */
	
	wp.customize( 'zerif_logo', function( value ) {
	
	/* zerif_email */
	wp.customize( 'zerif_email', function( value ) {
		value.bind( function( to ) {
			if( to != '' ) {
				$( 'footer .zerif-footer-email' ).removeClass( 'zerif_hidden_if_not_customizer' );
			}
			else {
				$( 'footer .zerif-footer-email' ).addClass( 'zerif_hidden_if_not_customizer' );
			}
			$( 'footer .zerif-footer-email' ).html( to );
		} );
	} );
	
	/* zerif_phone */
	wp.customize( 'zerif_phone', function( value ) {
		value.bind( function( to ) {
			if( to != '' ) {
				$( 'footer .zerif-footer-phone' ).removeClass( 'zerif_hidden_if_not_customizer' );
			}
			else {
				$( 'footer .zerif-footer-phone' ).addClass( 'zerif_hidden_if_not_customizer' );
			}
			$( 'footer .zerif-footer-phone' ).html( to );
		} );
	} );
	
	/* zerif_address */
	wp.customize( 'zerif_address', function( value ) {
		value.bind( function( to ) {
			if( to != '' ) {
				$( 'footer .zerif-footer-address' ).removeClass( 'zerif_hidden_if_not_customizer' );
			}
			else {
				$( 'footer .zerif-footer-address' ).addClass( 'zerif_hidden_if_not_customizer' );
			}
			$( 'footer .zerif-footer-address' ).html( to );
		} );
	} );
	
	
	
	
	
	
	
	
	
	wp.customize( 'zerif_contactus_show', function( value ) {
	
	
	

} )( jQuery );