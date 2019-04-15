<div :class="[ 'cx-vui-collapse', 'cx-vui-collapse--' + this.state ]">
	<div
		class="cx-vui-collapse__heading"
		@click="switchState"
	>
		<span :class="[ 'dashicons', this.iconArrow ]"></span>
		<slot name="title"></slot>
	</div>
	<div class="cx-vui-collapse__content">
		<slot name="content"></slot>
	</div>
</div>