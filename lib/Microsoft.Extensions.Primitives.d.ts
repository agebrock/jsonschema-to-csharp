// Generated for: Microsoft.Extensions.Primitives 1.1.1.0
// Generated by: Microsoft.JavaScript.NodeApi.Generator 0.4.0.0
/* eslint-disable */


interface IDisposable {
	dispose(): void;
}

declare module 'node-api-dotnet' {

	export namespace Microsoft.Extensions.Primitives {
		export class CancellationChangeToken implements Microsoft.Extensions.Primitives.IChangeToken {
			constructor(cancellationToken: AbortSignal);

			readonly ActiveChangeCallbacks: boolean;

			readonly HasChanged: boolean;

			RegisterChangeCallback(
				callback: (arg1: unknown) => void,
				state: unknown,
			): IDisposable;
		}
	}

	export namespace Microsoft.Extensions.Primitives {
		export namespace ChangeToken {
			export function OnChange(
				changeTokenProducer: () => Microsoft.Extensions.Primitives.IChangeToken,
				changeTokenConsumer: () => void,
			): IDisposable;

			export function OnChange<TState>(
				changeTokenProducer: () => Microsoft.Extensions.Primitives.IChangeToken,
				changeTokenConsumer: (arg1: TState) => void,
				state: TState,
			): IDisposable;
		}
	}

	export namespace Microsoft.Extensions.Primitives {
		export interface IChangeToken {
			readonly HasChanged: boolean;

			readonly ActiveChangeCallbacks: boolean;

			RegisterChangeCallback(
				callback: (arg1: unknown) => void,
				state: unknown,
			): IDisposable;
		}
	}

	export namespace Microsoft.Extensions.Primitives {
		export class InplaceStringBuilder {
			constructor(capacity: number);

			Capacity: number;

			Append(s: string): void;

			Append(c: unknown): void;

			ToString(): string;

			Equals(obj: unknown | undefined): boolean;

			GetHashCode(): number;
		}
	}

	export namespace Microsoft.Extensions.Primitives {
		export class StringSegment {
			constructor(buffer: string);

			constructor(
				buffer: string,
				offset: number,
				length: number,
			);

			readonly Buffer: string;

			readonly Offset: number;

			readonly Length: number;

			readonly Value: string;

			readonly HasValue: boolean;

			Equals(obj: unknown): boolean;

			Equals(other: Microsoft.Extensions.Primitives.StringSegment): boolean;

			Equals(
				other: Microsoft.Extensions.Primitives.StringSegment,
				comparisonType: unknown,
			): boolean;

			Equals(text: string): boolean;

			Equals(
				text: string,
				comparisonType: unknown,
			): boolean;

			GetHashCode(): number;

			StartsWith(
				text: string,
				comparisonType: unknown,
			): boolean;

			EndsWith(
				text: string,
				comparisonType: unknown,
			): boolean;

			Substring(
				offset: number,
				length: number,
			): string;

			Subsegment(
				offset: number,
				length: number,
			): Microsoft.Extensions.Primitives.StringSegment;

			IndexOf(
				c: unknown,
				start: number,
				count: number,
			): number;

			IndexOf(
				c: unknown,
				start: number,
			): number;

			IndexOf(c: unknown): number;

			Trim(): Microsoft.Extensions.Primitives.StringSegment;

			TrimStart(): Microsoft.Extensions.Primitives.StringSegment;

			TrimEnd(): Microsoft.Extensions.Primitives.StringSegment;

			ToString(): string;
		}
	}

	export namespace Microsoft.Extensions.Primitives {
		export class StringTokenizer {
			constructor(
				value: string,
				separators: unknown[],
			);

			GetEnumerator(): Microsoft.Extensions.Primitives.StringTokenizer.Enumerator;

			Equals(obj: unknown | undefined): boolean;

			GetHashCode(): number;

			ToString(): string | undefined;
		}
	}

	export namespace Microsoft.Extensions.Primitives.StringTokenizer {
		export class Enumerator implements
			IDisposable {
			constructor(tokenizer: Microsoft.Extensions.Primitives.StringTokenizer);

			Current: Microsoft.Extensions.Primitives.StringSegment;

			dispose(): void;

			MoveNext(): boolean;

			Reset(): void;

			Equals(obj: unknown | undefined): boolean;

			GetHashCode(): number;

			ToString(): string | undefined;
		}
	}

	export namespace Microsoft.Extensions.Primitives {
		export class StringValues {
			constructor(value: string);

			constructor(values: string[]);

			readonly Count: number;

			ToString(): string;

			ToArray(): string[];

			GetEnumerator(): Microsoft.Extensions.Primitives.StringValues.Enumerator;

			static IsNullOrEmpty(value: Microsoft.Extensions.Primitives.StringValues): boolean;

			static Concat(
				values1: Microsoft.Extensions.Primitives.StringValues,
				values2: Microsoft.Extensions.Primitives.StringValues,
			): Microsoft.Extensions.Primitives.StringValues;

			static Equals(
				left: Microsoft.Extensions.Primitives.StringValues,
				right: Microsoft.Extensions.Primitives.StringValues,
			): boolean;

			Equals(other: Microsoft.Extensions.Primitives.StringValues): boolean;

			static Equals(
				left: string,
				right: Microsoft.Extensions.Primitives.StringValues,
			): boolean;

			static Equals(
				left: Microsoft.Extensions.Primitives.StringValues,
				right: string,
			): boolean;

			Equals(other: string): boolean;

			static Equals(
				left: string[],
				right: Microsoft.Extensions.Primitives.StringValues,
			): boolean;

			static Equals(
				left: Microsoft.Extensions.Primitives.StringValues,
				right: string[],
			): boolean;

			Equals(other: string[]): boolean;

			Equals(obj: unknown): boolean;

			GetHashCode(): number;
		}
	}

	export namespace Microsoft.Extensions.Primitives.StringValues {
		export class Enumerator {
			constructor(values: Microsoft.Extensions.Primitives.StringValues);

			readonly Current: string;

			MoveNext(): boolean;

			Equals(obj: unknown | undefined): boolean;

			GetHashCode(): number;

			ToString(): string | undefined;
		}
	}
}

declare module 'Microsoft.Extensions.Primitives' {
	export * from 'node-api-dotnet';
}
