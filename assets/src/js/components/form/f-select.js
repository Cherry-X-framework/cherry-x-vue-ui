import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';
import { directive as clickOutside } from 'v-click-outside-x';

const FilterableSelect = {

	name: 'cx-vui-f-select',
	template: '#cx-vui-f-select',
	mixins: [ checkConditions ],
	directives: { clickOutside },
	props: {
		value: {
			type: [String, Number, Array],
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
		},
		optionsList: {
			type: Array,
			default: function() {
				return [];
			}
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		name: {
			type: String
		},
		multiple: {
			type: Boolean,
			default: false
		},
		elementId: {
			type: String
		},
		autocomplete: {
			validator (value) {
				return oneOf( value, ['on', 'off'] );
			},
			default: 'off'
		},
		conditions: {
			type: Array,
			default: function() {
				return [];
			}
		},
		remote: {
			type: Boolean,
			default: false
		},
		remoteCallback: {
			type: Function
		},
		remoteTrigger: {
			type: Number,
			default: 3
		},
		remoteTriggerMessage: {
			type: String,
			default: 'Please enter %d char(s) to start search'
		},
		notFoundMeassge: {
			type: String,
			default: 'There is no items find mathing these query'
		},
		loadingMeassge: {
			type: String,
			default: 'Loading...'
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
	data() {
		return {
			options: this.optionsList,
			currentValues: this.value,
			currentId: this.elementId,
			query: '',
			inFocus: false,
		};
	},
	watch: {
		value( val ) {
			this.storeCurrentValues( val );
		},
		optionsList( options ) {
			this.setOptions( options );
		},
	},
	created() {
		if ( ! this.currentValues ) {
			this.currentValues = [];
		} else if ( 'object' !== typeof this.currentValues || ! this.currentValues.isArray() ) {
			this.currentValues = [ this.currentValues ];
		}

	},
	mounted() {

		if ( ! this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}

		if ( this.remote && this.remoteCallback ) {

			const promise = this.remoteCallback();

			if ( promise && promise.then ) {
				promise.then( options => {
					if ( options ) {
						this.options = options;
					}
				} );
			}

		}

	},
	computed: {
		filteredOptions() {
			if ( ! this.query ) {
				return this.options;
			} else {
				return this.options.filter( option => {
					return option.label.includes( this.query ) || option.value.includes( this.query );
				});
			}
		},
		selectedOptions() {
			return this.options.filter( option => {
				return oneOf( option.value, this.currentValues );
			});
		}
	},
	methods: {
		handleFocus ( event ) {
			this.inFocus = true;
			this.$emit( 'on-focus', event );
		},
		onClickOutside ( event ) {

			this.inFocus = false;
			this.query   = '';

			this.$emit( 'on-blur', event );
		},
		handleInput() {
			this.$emit( 'input', this.currentValues );
			this.$emit( 'on-change', event );
		},
		handleResultClick( value ) {

			if ( oneOf( value, this.currentValues ) ) {
				this.currentValues.splice( this.currentValues.indexOf( value ), 1 );
			} else {
				this.storeCurrentValues( value );
			}

			this.$emit( 'input', this.currentValues );
			this.$emit( 'on-change', this.currentValues );

			this.inFocus = false;
			this.query   = '';

		},
		storeCurrentValues( value ) {

			if ( this.multiple ) {

				if ( oneOf( value, this.currentValues ) ) {
					return;
				}

				if ( 'object' === typeof value ) {
					if ( '[object Array]' === Object.prototype.toString.call( value ) ) {
						this.currentValues.concat( value );
					} else {
						this.currentValues.push( value );
					}
				} else {
					this.currentValues.push( value );
				}

			} else {

				if ( 'object' === typeof value ) {
					if ( '[object Array]' === Object.prototype.toString.call( value ) ) {
						this.currentValues = value;
					} else {
						this.currentValues = [ value ];
					}
				} else {
					this.currentValues = [ value ];
				}

			}

		},
		setOptions( options ) {
			this.options = options;
		},
		isOptionSelected( option ) {

			if ( ! this.currentValues ) {
				return false;
			}

			return oneOf( option.value, this.currentValues );

		},
	},
};

export default FilterableSelect;
