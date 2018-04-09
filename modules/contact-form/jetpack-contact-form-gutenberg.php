<?php
/**
 * Jetpack Gutenberg Form
 *
 * This file loads Gutenberg block support for the Jetpack contact form module.
 *
 * @package Jetpack\modules\contact-form
 * @since 5.9
 */
function jetpack_form_enqueue_block( $name ) {
	wp_enqueue_script(
		"jetpack-form-{$name}",
		Jetpack::get_file_url_for_environment(
			"_inc/build/contact-form/blocks/{$name}/block.min.js",
			"modules/contact-form/blocks/{$name}/block.js"
		),
		array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n' ),
		JETPACK__VERSION,
		false
	);
}

function jetpack_form_enqueue_editor() {
	jetpack_form_enqueue_block( 'form' );
	jetpack_form_enqueue_block( 'text' );
	jetpack_form_enqueue_block( 'message' );
	jetpack_form_enqueue_block( 'email' );
	jetpack_form_enqueue_block( 'url' );
	jetpack_form_enqueue_block( 'name' );
	jetpack_form_enqueue_block( 'phone' );
	jetpack_form_enqueue_block( 'attachment' );
	jetpack_form_enqueue_block( 'button' );
	// jetpack_form_enqueue_block( 'option' ); // for checkboxes
	// jetpack_form_enqueue_block( 'choice' ); // for dropdown / radios
	// jetpack_form_enqueue_block( 'captcha' ); // for captchas
}

add_action( 'enqueue_block_editor_assets', 'jetpack_form_enqueue_editor' );
