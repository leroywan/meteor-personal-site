export function toggle(state = "inactive", action) {
	switch (action.type) {
		case 'TOGGLE':
			if (state == "inactive"){
				return "active"
			} else {
				return "inactive"
			}
		default:
			return state;
	}
}