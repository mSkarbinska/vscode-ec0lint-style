/**
 * Makes all properties of type `T` optional except for those in `K`.
 */
export type OptionalExcept<T extends Record<never, never>, K extends keyof T> = Pick<T, K> &
	Partial<Pick<T, K>>;

/**
 * Makes all properties of type `T` required except for those in `K`.
 */
export type RequiredExcept<T extends Record<never, never>, K extends keyof T> = Pick<
	T,
	Exclude<keyof T, K>
> &
	Required<Pick<T, K>>;

/**
 * Extracts keys from a type `T` the values of which are type `V`.
 */
export type ExtractKeysOfValueType<T, V> = {
	[K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];
