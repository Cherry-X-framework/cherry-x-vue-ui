const Repeater = {
	name: 'cx-vui-repeater',
	template: '#cx-vui-repeater',
	props: {
		buttonLabel: {
			type: String,
		},
		buttonStyle: {
			type: String,
			default: 'accent',
		},
		buttonSize: {
			type: String,
			default: 'default',
		},
	},
	methods: {
		handleClick( event ) {
			this.$emit( 'add-new-item', event );
		},
	},
};

export default Repeater;