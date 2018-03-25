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

	// Return a setter for given props and key
	function setAttributes( props, key ) {
		return function ( value ) {
			attrs = {};
			attrs[key] = value;
			props.setAttributes(attrs);
			return value;
		}
	}

	// Define the form block
	var Form = {
		title : i18n.__( 'Form' ),
		icon : 'feedback',
		category : 'common',
		attributes: {
			subject : {
				type : 'string',
				default : '',

			},
			to : {
				type: 'string',
				default: ''
			}
		}
	};

	// Render the editor
	Form.edit = function edit( props ) {
		return [
			// Display the inner blocks
			el(
				InnerBlocks, {
					key: 'jetpack/form/innerblocks',
					layouts: {
						stacked: { label: 'Stacked', icon: 'align-left' },
						horizontal: { label: 'Horizontal', icon: 'align-wide' },
					}
				}
			),
			// Display on Focus
			! ! props.focus &&
			el(
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
	};

	// Render the form content
	Form.save = function save( props ) {
		return el(
			'div', { className: props.className },
			el( InnerBlocks.Content )
		);
	}

	// Register the form block under jetpack/form
	blocks.registerBlockType( 'jetpack/form', Form );
} )(
	window.wp.blocks,
	window.wp.components,
	window.wp.element,
	window.wp.i18n
);
