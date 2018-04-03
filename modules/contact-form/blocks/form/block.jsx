const {
	registerBlockType,
	InspectorControls,
	InnerBlocks,
} = wp.blocks;

const { createElement } = wp.element;
const { CheckboxControl, TextControl } = wp.components;

const { __ } = wp.i18n;

// Define the form block
let Form = {
	title : __( 'Form' ),
	icon : 'feedback',
	category : 'common',
	description: __( 'Contact Form Settings' ),
	attributes: {
		subject : {
			type : 'string',
			default : '',

		},
		to : {
			type: 'string',
			default: ''
		}
	},

	save: ( { className } ) =>
		<form className={ className }>
			<InnerBlocks.Content />
		</form>
	,
	edit: ( { attributes, setAttributes, focus } ) => {
		return [
			// Display the inner blocks
			<InnerBlocks
				key="jetpack/form/innerblocks"
				layouts={ {
					stacked: { label: 'Stacked', icon: 'align-left' },
					horizontal: { label: 'Horizontal', icon: 'align-wide' },
				} }
			/>,

			// Display on Focus
			!! focus &&
				<InspectorControls key="inspector">
					<TextControl
						key="jetpack/form/subject"
						label={ __( 'Email Subject' ) }
						help={ __( 'What would you like the subject line of the email to be?' ) }
						placeholder={ __( '[Site Feedback]' ) }
						value={ attributes.subject }
						onChange={ value => setAttributes( { 'subject': value } ) }
					/>

					<TextControl
						key="jetpack/form/to"
						label={ __( 'Email Address' ) }
						help={ __( 'Which email address should we send the submissions to?' ) }
						value={ attributes.to }
						placeholder={ __( 'admin@example.com' ) }
						onChange={ value => setAttributes( { 'to': value } ) }
					/>
				</InspectorControls>
		];
	},
};

// Register the form block under jetpack/form
registerBlockType( 'jetpack/form', Form );
