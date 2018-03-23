( function( wp, i18n ) {
	wp.blocks.registerBlockType(
		'jetpack/form', {
			title : i18n.__( 'Form' ),
			icon : 'feedback',
			category : 'common',

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
						wp.element.createElement(
							'h1',
							{
								key : 'jetpack/form/placeholder',
							},
							'This is a Placeholder.'
						),
						! ! props.focus && wp.element.createElement(
							wp.blocks.InspectorControls,
							{ key : 'inspector' },
							[
							wp.element.createElement(
								wp.blocks.InspectorControls.TextControl,
								{
									key : 'jetpack/form/inspector/subject',
									onChange : handleSubjectChange,
									value : props.attributes.subject,
									label : i18n.__( 'What would you like the subject of the email to be?' )
									}
							),
							wp.element.createElement(
								wp.blocks.InspectorControls.TextControl,
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
} )( window.wp, window.wp.i18n );
