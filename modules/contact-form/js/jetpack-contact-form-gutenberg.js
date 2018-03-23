( function(
	blocks,
	element,
	i18n
) {
	var el = element.createElement;
	var InspectorControls = wp.blocks.InspectorControls;
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
					default : ''
				},
				to : {
					type : 'string',
					default : ''
				}
			},

			// Display the form in the editor
			edit : function( props ) {
				function handleSubjectChange( value ) {
					props.setAttributes(
						{
							subject : value
							}
					);
						return value;
				}
				function handleToChange( value ) {
					props.setAttributes(
						{
							to : value
							}
					);
					return value;
				}

				return [
					el(
						'h1', { key : 'jetpack/form/placeholder' },
						'This is a Placeholder.'
					),
					// The below is only shown under focus
					! ! props.focus && el(
						InspectorControls, { key : 'inspector' },
						[
							el(
								InspectorControls.TextControl,
								{
									key : 'jetpack/form/inspector/subject',
									onChange : handleSubjectChange,
									value : props.attributes.subject,
									label : i18n.__( 'What would you like the subject of the email to be?' )
								}
							),
							el(
								InspectorControls.TextControl,
								{
									key : 'jetpack/form/inspector/to',
									onChange : handleToChange,
									value : props.attributes.to,
									label : i18n.__( 'Which email address should we send the submissions to?' ),
									help : 'Help for to line whatever'
								}
							)
						]
					),
				];
			},

			save : function() {
				return null;
			}
		}
	);
} )(
	window.wp.blocks,
	window.wp.element,
	window.wp.i18n
);
