const {
	registerBlockType,
	InspectorControls,
	InnerBlocks,
} = wp.blocks;

const { createElement } = wp.element;
const { CheckboxControl, TextControl } = wp.components;

const i18n = wp.i18n;

// Define the form block
let Form = {
	title : i18n.__( 'Form' ),
	icon : 'feedback',
	category : 'common',
	description: i18n.__( 'Contact Form Settings' ),
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
						key="jetpack/form/inspector/subject"
						label={ i18n.__( 'What would you like the subject line of the email to be?' ) }
						placeholder={ i18n.__( '[Site Feedback]' ) }
						value={ attributes.subject }
						onChange={ value => setAttributes( { 'subject': value } ) }
					/>

					<TextControl
						key="jetpack/form/inspector/to"
						label={ i18n.__( 'Which email address should we send the submissions to?' ) }
						value={ attributes.to }
						placeholder={ i18n.__( 'admin@example.com' ) }
						onChange={ value => setAttributes( { 'to': value } ) }
					/>
				</InspectorControls>
		];
	},
};

// Register the form block under jetpack/form
registerBlockType( 'jetpack/form', Form );
