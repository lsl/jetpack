const {
	registerBlockType,
	InspectorControls,
	InnerBlocks,
} = wp.blocks;

const { createElement } = wp.element;
const { ToggleControl, TextControl, FormFileUpload, BaseControl } = wp.components;

const { __ } = wp.i18n;

function inputName( str ) {
	return str.toLowerCase().replace(/[^a-z0-9]/,'');
}

// Define the form block
let FormAttachment = {
	title : __( 'Form: Attachment' ),
	icon : 'editor-textcolor',
	category : 'common',
	description: __( 'File attachment form element' ),
	attributes: {
		// Set label to display above the input
		fieldname: {
			type: 'string',
			default: 'Attachment',
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

		multiple: {
			type: 'boolean',
			default: false
		}
	},

	save: ( { className, attributes, instanceId } ) => {
		// todo: uuid?
		const id = `jetpack-form-attachment-TODO`;

		return <div className={ className }>
			<BaseControl label={ attributes.fieldname }>
				<FormFileUpload
					name={ inputName( attributes.fieldname ) }
					placeholder={ attributes.placeholder }
					required={ attributes.required }
					multiple={ attributes.multiple }
				/>
			</BaseControl>
		</div>
	},
	edit: ( props ) => {
		const { attributes, setAttributes, focus } = props;

		// Not in focus? Show preview.
		if ( ! focus ) {
			return FormAttachment.save(props);
		}

		// In focus? Show editable.
		return [
			<TextControl
				key="jetpack/form-text/field-name"
				label={ attributes.fieldname }
				value={ attributes.fieldname }
				placeholder={ __( 'e.g. Attachments' ) }
				onChange= { value => setAttributes ( { 'fieldname': value } ) }
				required={ "true" }
			/>,
			<InspectorControls key="inspector">
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
registerBlockType( 'jetpack/form-attachment', FormAttachment );
