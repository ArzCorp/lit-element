export class Validations {
	static isEmail(email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	}
}
