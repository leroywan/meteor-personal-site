export default function chooseContactMethod(state = "email", action) {
	switch (action.type) {
		case 'EMAIL':
			return 'email';
		case 'MESSAGE':
			return 'message';
		case 'INFO':
			return 'info';
		default:
			return state;
	}
}