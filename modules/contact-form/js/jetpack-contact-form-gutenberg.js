( function(
	blocks,
	components,
	element,
	i18n
) {
	var el = element.createElement;
	var InspectorControls = blocks.InspectorControls;
	var InnerBlocks = blocks.InnerBlocks;
	var TextControl = components.TextControl;

	function setAttributes( props, key ) {
		return function ( value ) {
			attrs = {};
			attrs[key] = value;
			props.setAttributes(attrs);
			return value;
		}
	}

	// Register the form block under jetpack/form
	blocks.registerBlockType(
		'jetpack/form',
		{
			// Standard attributes
			title : i18n.__( 'Form' ),
			icon : 'feedback',
			category : 'common',

			// Defaults
			attributes : {
				subject : {
					type : 'string',
					default : '',
				},
				to : {
					type: 'string',
					default: ''
				},
			},

			// Display the form in the editor
			edit : function( props ) {
				return [
					// Display the inner blocks
					el(
						InnerBlocks, {
							key: 'jetpack/form/innerblocks',
						}
					),
					// Display Inspector Controls
					! ! props.focus && el(
						InspectorControls,
						{ key : 'inspector' },
						[
							el(
								TextControl,
								{
									key : 'jetpack/form/inspector/subject',
									onChange : setAttributes( props, 'subject' ),
									value : props.attributes.subject,
									placeholder: i18n.__( '[Site Feedback]' ),
									label : i18n.__( 'What would you like the subject line of the email to be?' )
								}
							),
							el(
								TextControl,
								{
									key : 'jetpack/form/inspector/to',
									onChange : setAttributes( props, 'to' ),
									value : props.attributes.to,
									placeholder: i18n.__( 'admin@example.com' ),
									label : i18n.__( 'Which email address should we send the submissions to?' )
								}
							)
						]
					),
				];
			},

			save : function( props ) {
				return el(
					'div', { className: props.className },
					el( InnerBlocks.Content )
				);
			}
		}
	);
} )(
	window.wp.blocks,
	window.wp.components,
	window.wp.element,
	window.wp.i18n
);
