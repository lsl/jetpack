<?php
/**
 * Jetpack Contact Form Gutenberg
 *
 * Adds a Gutenberg block that displays a contact from.
 *
 * @package Jetpack\modules\contact-from
 * @since 5.9
 */
class Jetpack_Contact_Form_Gutenberg {

	public static function init() {
		register_block_type(
			'jetpack/form',
			array(
				'render_callback' => function ( $args ) {
					return '<pre>' . print_r( $args, true ) . '</pre>';
				},
			)
		);
	}

	public static function enqueue_block_editor_assets() {
		wp_register_script(
			'jetpack-contact-form-gutenberg',
			plugins_url( 'js/jetpack-contact-form-gutenberg.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element', 'wp-i18n' )
		);

		wp_enqueue_script( 'jetpack-contact-form-gutenberg' );
	}
}
