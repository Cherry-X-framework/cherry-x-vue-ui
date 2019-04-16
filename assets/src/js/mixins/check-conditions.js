export const checkConditions = {
	methods: {
		isVisible() {

			if ( ! this.conditions.length ) {
				return true
			} else {

				let conditionsMet = [];
				let operator = 'AND';
				let conditionsLength = this.conditions.length;

				for ( var i = 0; i < this.conditions.length; i++) {

					if ( this.conditions[ i ].operator ) {
						operator = this.conditions[ i ].operator;
						conditionsLength--;
						continue;
					}

					switch ( this.conditions[ i ].compare ) {
						case 'equal':

							if ( this.conditions[ i ].var === this.conditions[ i ].value ) {
								conditionsMet.push( this.conditions[ i ].value );
							}

							break;
						case 'not_equal':

							if ( this.conditions[ i ].var !== this.conditions[ i ].value ) {
								conditionsMet.push( this.conditions[ i ].value );
							}

							break;
					}
				};

				switch ( operator ) {
					case 'AND':
						return conditionsMet.length === conditionsLength;
					case 'OR':
						if ( conditionsMet.length ) {
							return true;
						} else {
							return false;
						}
				}

			}

		},
	}
}
