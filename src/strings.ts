import { isString } from 'whichtype';



export function toLower (x: any) {
	if (isString(x)) {
		return x.toLowerCase();
	}
	return x;
}

export function toUpper (x: any) {
	if (isString(x)) {
		return x.toUpperCase();
	}
	return x;
}
