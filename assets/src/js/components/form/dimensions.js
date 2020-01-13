import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';

const Dimensions = {

	name: 'cx-vui-dimensions',
	template: '#cx-vui-dimensions',
	mixins: [ checkConditions ],
	props: {
		value: {
			default: {
				'top': '',
				'right': '',
				'bottom': '',
				'left': '',
				'is_linked': true,
				'units': 'px'
			}
		},
		units: {
			type: Array,
			default() {
				return [ 'px', 'em', '%' ];
			}
		},
		size: {
			validator (value) {
				return oneOf( value, [ 'fullwidth', 'default' ] );
			},
			default: 'default'
		},
		min: {
			type: Number
		},
		max: {
			type: Number
		},
		step: {
			type: Number
		},
		disabled: {
			type: Boolean,
			default: false
		},
		name: {
			type: String
		},
		elementId: {
			type: String
		},
		conditions: {
			type: Array,
			default() {
				return [];
			}
		},
		// Wrapper related props (should be passed into wrapper component)
		preventWrap: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		wrapperCss: {
			type: Array,
			default: function() {
				return [];
			}
		},
	},
	mounted() {
		if ( ! this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}
	},
	data() {
		return {
			currentValue: this.value,
			currentId: this.elementId,
			isLink: this.value['is_linked'] ? true : false,
		};
	},
	computed: {
		controlClasses: function() {
			let classesList = [ 'cx-vui-dimensions' ];

			classesList.push( 'size-' + this.size );

			return classesList;
		},

		sanitizeValue: function() {
			return {
				top: this.currentValue.top,
				right: this.currentValue.right,
				bottom: this.currentValue.bottom,
				left: this.currentValue.left,
				is_linked: this.isLink ? '1' : '0',
				units: this.currentValue.units
			}
		}
	},
	methods: {
		handleInput( value ) {

			if ( this.isLink ) {
				this.currentValue.top = value;
				this.currentValue.right = value;
				this.currentValue.bottom = value;
				this.currentValue.left = value;
			}

			this.$emit( 'input', this.sanitizeValue );
		},

		handleChange( event ) {
			let value = event.target.value;

			if ( this.isLink ) {
				this.currentValue.top = value;
				this.currentValue.right = value;
				this.currentValue.bottom = value;
				this.currentValue.left = value;
			}

			this.$emit( 'on-change', this.sanitizeValue );
		},

		unitHandler( unit ) {
			this.currentValue.units = unit;

			this.$emit( 'input', this.sanitizeValue );
			this.$emit( 'on-change', this.sanitizeValue );
			this.$emit( 'on-unit-updated', unit );
		},

		linkHandler() {
			this.isLink = ! this.isLink;
			this.currentValue['is_linked'] = this.isLink ? '1' : '0';

			this.$emit( 'input', this.sanitizeValue );
			this.$emit( 'on-change', this.sanitizeValue );
			this.$emit( 'on-link-updated' );
		}
	},
};

export default Dimensions;
