<cx-vui-component-wrapper
	:elementId="currentId"
	:label="label"
	:description="description"
	:wrapper-css="wrapperCss"
	:preventWrap="preventWrap"
	v-if="isVisible()"
>
	<div class="cx-vui-checkgroup">
		<div
			v-for="( option, index ) in optionsList"
			:key="name + option.value + index"
			:class="{
				'cx-vui-checkbox': true,
				'cx-vui-checkbox--disabled': disabled,
				'cx-vui-checkbox--checked': isChecked( option.value ),
			}"
			@click="handleInput( $event, option.value )"
		>
			<input
				:class="{
					'cx-vui-checkbox__input': true,
				}"
				:type="inputType"
				:name="name + '[' + option.value + ']'"
				:value="inputValue( option.value )"
				:checked="isChecked( option.value )"
			>
			<div
				:class="{
					'cx-vui-checkbox__check': true,
					'cx-vui-checkbox__check--disabled': disabled,
					'cx-vui-checkbox__check--checked': isChecked( option.value ),
				}">
			</div>
			<div
				:class="{
					'cx-vui-checkbox__label': true,
				}"
				v-html="option.label"
			></div>
		</div>
	</div>
</cx-vui-component-wrapper>