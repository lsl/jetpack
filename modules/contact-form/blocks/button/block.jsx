const {
	registerBlockType,
	InspectorControls,
	InnerBlocks,
} = wp.blocks;

const { createElement } = wp.element;
const { ToggleControl, TextControl, ButtonGroup, Button, RadioControl } = wp.components;

const { __ } = wp.i18n;

function inputName( str ) {
	return str.toLowerCase().replace(/[^a-z0-9]/,'');
}

// Define the form block
let FormText = {
	title : __( 'Form: Button' ),
	icon : 'editor-break',
	category : 'common',
	description: __( 'A Button' ),
	attributes: {
		text: {
			type: 'string',
			default: 'Submit',
		},
		isPrimary: {
			type: 'boolean',
			default: true,
		},
		type: {
			type: 'string',
			default: 'submit',
		}
	},

	save: ( { className, attributes, instanceId } ) => {
		// todo: uuid?
		const id = `jetpack-form-button-TODO`;

		return <div className={ className }>
			<ButtonGroup>
				<Button isPrimary={ attributes.isPrimary } type={ attributes.type }>
					{ attributes.text }
				</Button>
			</ButtonGroup>
		</div>
	},
	edit: ( props ) => {
		const { attributes, setAttributes, focus } = props;

		// Not in focus? Show preview.
		if ( ! focus ) {
			return FormText.save(props);
		}

		// todo: should swap button block component out for button library/button block?

		// In focus, show editable controls
		return [
			<TextControl
				label={ __( 'Button Text' ) }
				placeholder={ __( 'Submit' ) }
				value={ attributes.text }
				onChange={ value => setAttributes( { 'text': value } ) }
			/>,
			<InspectorControls key="inspector">
				<RadioControl
					label={ __( 'Button Type' ) }
					help={ __( 'The type of the selected button' ) }
					selected={ attributes.type }
					options={ [
						{ label: __( 'Submit' ), value: 'submit' },
						{ label: __( 'Reset' ), value: 'reset' },
						{ label: __( 'Cancel' ), value: 'cancel' },
						{ label: __( 'Button' ), value: 'button' },
					] }
					onChange={ value => setAttributes( { 'type': value } ) }
				/>
				<ToggleControl
					key="jetpack/form-text/toggle"
					label={ __( 'Is primary?' ) }
					checked={ attributes.isPrimary }
					onChange={ value => setAttributes( { 'isPrimary': value } ) }
				/>
			</InspectorControls>
		];
	},
};

// Register the form block under jetpack/form
registerBlockType( 'jetpack/form-button', FormText );
