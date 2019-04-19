const RepeaterItem = {
	name: 'cx-vui-repeater-item',
	template: '#cx-vui-repeater-item',
	props: {
		title: {
			type: String,
		},
		subtitle: {
			type: String,
		},
		collapsed: {
			type: Boolean,
			default: true,
		},
		itemIndex: {
			type: Number,
		},
	},
	data() {
		return {
			fieldData: this.field,
			isCollapsed: this.collapsed,
			showConfirmTip: false,
		};
	},
	methods: {
		handleCopy() {
			this.$emit( 'clone-item', this.itemIndex );
		},
		handleDelete() {
			this.showConfirmTip = true;
		},
		confrimDeletion() {
			this.showConfirmTip = false;
			this.$emit( 'delete-item', this.itemIndex );
		},
		cancelDeletion() {
			this.showConfirmTip = false;
		},
	},
};

export default RepeaterItem;