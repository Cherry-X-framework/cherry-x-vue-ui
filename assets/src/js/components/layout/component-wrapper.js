import { wrapperClasses } from '../../mixins/wrapper-classes';
import { checkConditions } from '../../mixins/check-conditions';

const ComponentWrapper = {

	name: 'cx-vui-component-wrapper',
	template: '#cx-vui-component-wrapper',
	mixins: [ wrapperClasses, checkConditions ],
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
		conditions: {
			type: Array,
			default() {
				return [];
			}
		},
	},
};

export default ComponentWrapper;
