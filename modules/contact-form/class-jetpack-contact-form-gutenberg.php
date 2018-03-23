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
			'jetpack/contact-form',
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
			array( 'wp-blocks', 'wp-element' )
		);

		wp_enqueue_script( 'jetpack-contact-form-gutenberg' );

		wp_localize_script(
			'jetpack-contact-form-gutenberg', 'grunionGutenblocks', array(
				'strings' => array(
					'Contact Form' => __( 'Contact Form', 'jetpack' ),
					'What would you like the subject of the email to be?' =>
							__( 'What would you like the subject of the email to be?', 'jetpack' ),
					'Which email address should we send the submissions to?' =>
							__( 'Which email address should we send the submissions to?', 'jetpack' ),
				),
			)
		);
	}
}
