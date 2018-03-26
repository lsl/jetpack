<?php
/**
 * Jetpack Gutenberg Form
 *
 * This file loads Gutenberg block support for the Jetpack contact form module.
 *
 * @package Jetpack\modules\contact-form
 * @since 5.9
 */
function jetpack_form_enqueue_editor() {
	wp_enqueue_script(
		'jetpack-contact-form-gutenberg',
		plugins_url( 'blocks/form/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'js/jetpack-contact-form-gutenberg.js' )
	);
}

add_action( 'enqueue_block_editor_assets', 'jetpack_form_enqueue_editor' );
