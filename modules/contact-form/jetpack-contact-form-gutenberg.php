<?php
/**
 * Jetpack Contact Form - Gutenberg
 *
 * This file loads Gutenberg block support for the Jetpack contact form.
 *
 * @package Jetpack\modules\contact-form
 * @since 5.9
 */
require_once dirname( __FILE__ ) . '/class-jetpack-contact-form-gutenberg.php';

add_action( 'init', array( 'Jetpack_Contact_Form_Gutenberg', 'init' ) );
add_action( 'enqueue_block_editor_assets', array( 'Jetpack_Contact_Form_Gutenberg', 'enqueue_block_editor_assets' ) );
