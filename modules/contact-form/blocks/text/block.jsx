const {
	registerBlockType,
	InspectorControls,
	InnerBlocks,
} = wp.blocks;

const { createElement } = wp.element;
const { ToggleControl, TextControl } = wp.components;

const { __ } = wp.i18n;

function inputName( str ) {
	return str.toLowerCase().replace(/[^a-z0-9]/,'');
}

// Define the form block
let Form = {
	title : __( 'Form: Text' ),
	icon : 'editor-textcolor',
	category : 'common',
	description: __( 'Text field' ),
	attributes: {
		// Set label to display above the input
		fieldname: {
			type: 'string',
			default: 'Custom Text',
		},

		// Inspector: set placeholder value for the input
		placeholder: {
			type: 'string',
			default: '',
		},

		// Inspector: determine if input is required or optional
		required : {
			type : 'boolean',
			default : false,
		},
	},

	save: ( { className, attributes, instanceId } ) => {
		// todo: display a default field label if the user clicks off with it empty? pros and cons, maybe
		// default value filled and start with the thing highlighted

		// todo: uuid?
		const id = `jetpack-form-text-TODO`;

		return <div className={ className }>
			<TextControl
				label={ attributes.fieldname }
				name={ inputName( attributes.fieldname ) }
				placeholder={ attributes.placeholder }
				required={ attributes.required }
			/>
		</div>
	},
	edit: ( props ) => {
		// todo: add on select highlight content
		// todo: on enter, tab over (might be guten scope)

		const { attributes, setAttributes, focus } = props;
		// Not in focus? Show preview.
		if ( ! focus ) {
			return Form.save(props);
		}

		// In focus? Show editable.
		return [
			<TextControl
				key="jetpack/form-text/field-name"
				label={ attributes.fieldname }
				value={ attributes.fieldname }
				placeholder={ __( 'e.g. Name' ) }
				onChange= { value => setAttributes ( { 'fieldname': value } ) }
				required={ "true" }
			/>,
			<InspectorControls key="inspector">
				<TextControl
					key="jetpack/form-text/placeholder"
					label={ __( 'Placeholder Text' ) }
					help={ __( 'What would you like the input box to show as placeholder text when empty?' ) }
					placeholder={ __( 'Placeholder...' ) }
					value={ attributes.placeholder }
					onChange={ value => setAttributes( { 'placeholder': value } ) }
				/>
				<ToggleControl
					key="jetpack/form-text/required"
					label={ __( 'Is required?' ) }
					help={ __( 'Should the user be forced to enter text into this field?' ) }
					checked={ attributes.required  }
					onChange={ value => setAttributes( { 'required': value } ) }
					// todo: onChange probably broken -
					// From gutenberg:paragraph onChange={ this.toggleDropCap }
				/>
			</InspectorControls>
		];
	},
};

// Register the form block under jetpack/form
registerBlockType( 'jetpack/form-text', Form );
