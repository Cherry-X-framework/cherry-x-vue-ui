import { wrapperClasses } from '../../mixins/wrapper-classes';

const ComponentWrapper = {

	name: 'cx-vui-component-wrapper',
	template: '#cx-vui-component-wrapper',
	mixins: [ wrapperClasses ],
	props: {
		elementId: {
			type: String
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		preventWrap: {
			type: Boolean,
			default: false
		},
		wrapperCss: {
			type: Array,
			default: function() {
				return [];
			}
		},
	},
};

export default ComponentWrapper;
