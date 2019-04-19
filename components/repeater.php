<div class="cx-vui-repeater">
	<div class="cx-vui-repeater__items">
		<slot></slot>
	</div>
	<div class="cx-vui-repeater__actions">
		<cx-vui-button
			:button-style="buttonStyle"
			:size="buttonSize"
			@click="handleClick"
		><span slot="label">{{ buttonLabel }}</span></cx-vui-button>
	</div>
</div>
