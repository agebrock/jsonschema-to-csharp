// Generated for: Namotion.Reflection 3.1.1.0
// Generated by: Microsoft.JavaScript.NodeApi.Generator 0.4.0.0
/* eslint-disable */


declare module 'node-api-dotnet' {

	export namespace Namotion.Reflection {
		export namespace AttributeExtensions {
			export function GetContextOrTypeAttribute<T>(
				contextualType: Namotion.Reflection.ContextualType,
				inherit: boolean,
			): T;

			export function GetContextOrTypeAttributes<T>(
				contextualType: Namotion.Reflection.ContextualType,
				inherit: boolean,
			): Iterable<T>;

			export function GetContextOrTypeAttributes(
				contextualType: Namotion.Reflection.ContextualType,
				inherit: boolean,
			): Iterable<unknown>;

			export function GetContextAttribute<T>(
				contextualType: Namotion.Reflection.ContextualType,
				inherit: boolean,
			): T;

			export function GetContextAttributes<T>(
				contextualType: Namotion.Reflection.ContextualType,
				inherit: boolean,
			): Iterable<T>;

			export function GetContextAttributes(
				contextualType: Namotion.Reflection.ContextualType,
				inherit: boolean,
			): Iterable<unknown>;

			export function IsContextAttributeDefined<T>(
				contextualType: Namotion.Reflection.ContextualType,
				inherit: boolean,
			): boolean;

			export function GetAttribute<T>(
				info: Namotion.Reflection.ContextualMemberInfo,
				inherit: boolean,
			): T;

			export function GetAttributes<T>(
				info: Namotion.Reflection.ContextualMemberInfo,
				inherit: boolean,
			): Iterable<T>;

			export function GetAttributes(
				info: Namotion.Reflection.ContextualMemberInfo,
				inherit: boolean,
			): Iterable<unknown>;

			export function IsAttributeDefined<T>(
				info: Namotion.Reflection.ContextualMemberInfo,
				inherit: boolean,
			): boolean;

			export function GetAttribute<T>(
				info: Namotion.Reflection.ContextualParameterInfo,
				inherit: boolean,
			): T;

			export function GetAttributes<T>(
				info: Namotion.Reflection.ContextualParameterInfo,
				inherit: boolean,
			): Iterable<T>;

			export function GetAttributes(
				info: Namotion.Reflection.ContextualParameterInfo,
				inherit: boolean,
			): Iterable<unknown>;

			export function IsAttributeDefined<T>(
				info: Namotion.Reflection.ContextualParameterInfo,
				inherit: boolean,
			): boolean;

			export function GetAttribute<T>(
				info: Namotion.Reflection.CachedType,
				inherit: boolean,
			): T;

			export function GetAttributes<T>(
				info: Namotion.Reflection.CachedType,
				inherit: boolean,
			): Iterable<T>;

			export function GetAttributes(
				info: Namotion.Reflection.CachedType,
				inherit: boolean,
			): Iterable<unknown>;

			export function IsAttributeDefined<T>(
				info: Namotion.Reflection.CachedType,
				inherit: boolean,
			): boolean;
		}
	}

	export namespace Namotion.Reflection {
		export class CachedType {
			readonly OriginalType: unknown;

			readonly Name: string;

			readonly TypeInfo: unknown;

			readonly Type: unknown;

			readonly IsNullableType: boolean;

			readonly GenericArguments: Namotion.Reflection.CachedType[];

			readonly OriginalGenericArguments: Namotion.Reflection.CachedType[];

			readonly ElementType?: Namotion.Reflection.CachedType;

			static ClearCache(): void;

			ToString(): string;

			GetCustomAttributes(inherit: boolean): unknown[];

			GetCustomAttributes(
				attributeType: unknown,
				inherit: boolean,
			): unknown[];

			IsDefined(
				attributeType: unknown,
				inherit: boolean,
			): boolean;
		}
	}

	export namespace Namotion.Reflection {
		export class ContextualAccessorInfo {
			readonly AccessorType: Namotion.Reflection.ContextualType;

			readonly Nullability: Namotion.Reflection.Nullability;

			readonly MemberInfo: unknown;

			readonly Name: string;

			GetValue(obj: unknown | undefined): unknown | undefined;

			SetValue(
				obj: unknown | undefined,
				value: unknown | undefined,
			): void;

			ToString(): string;

			GetCustomAttributes(
				attributeType: unknown,
				inherit: boolean,
			): unknown[];

			GetCustomAttributes(inherit: boolean): unknown[];

			IsDefined(
				attributeType: unknown,
				inherit: boolean,
			): boolean;
		}
	}

	export namespace Namotion.Reflection {
		export class ContextualFieldInfo {
			readonly FieldInfo: unknown;

			readonly MemberInfo: unknown;

			readonly AccessorType: Namotion.Reflection.ContextualType;

			FieldType: Namotion.Reflection.ContextualType;

			readonly Name: string;

			readonly Nullability: Namotion.Reflection.Nullability;

			GetValue(obj: unknown | undefined): unknown | undefined;

			SetValue(
				obj: unknown | undefined,
				value: unknown | undefined,
			): void;

			GetCustomAttributes(
				attributeType: unknown,
				inherit: boolean,
			): unknown[];

			GetCustomAttributes(inherit: boolean): unknown[];

			IsDefined(
				attributeType: unknown,
				inherit: boolean,
			): boolean;

			ToString(): string;
		}
	}

	export namespace Namotion.Reflection {
		export class ContextualMemberInfo {
			readonly MemberInfo: unknown;

			readonly Name: string;

			ToString(): string;

			GetCustomAttributes(
				attributeType: unknown,
				inherit: boolean,
			): unknown[];

			GetCustomAttributes(inherit: boolean): unknown[];

			IsDefined(
				attributeType: unknown,
				inherit: boolean,
			): boolean;
		}
	}

	export namespace Namotion.Reflection {
		export class ContextualMethodInfo {
			readonly MethodInfo: unknown;

			readonly Name: string;

			readonly Parameters: Namotion.Reflection.ContextualParameterInfo[];

			readonly ReturnParameter: Namotion.Reflection.ContextualParameterInfo;

			readonly MemberInfo: unknown;

			ToString(): string;

			GetCustomAttributes(
				attributeType: unknown,
				inherit: boolean,
			): unknown[];

			GetCustomAttributes(inherit: boolean): unknown[];

			IsDefined(
				attributeType: unknown,
				inherit: boolean,
			): boolean;
		}
	}

	export namespace Namotion.Reflection {
		export class ContextualParameterInfo {
			readonly ParameterInfo: unknown;

			readonly ParameterType: Namotion.Reflection.ContextualType;

			readonly Nullability: Namotion.Reflection.Nullability;

			readonly Name: string;

			ToString(): string;

			GetCustomAttributes(
				attributeType: unknown,
				inherit: boolean,
			): unknown[];

			GetCustomAttributes(inherit: boolean): unknown[];

			IsDefined(
				attributeType: unknown,
				inherit: boolean,
			): boolean;
		}
	}

	export namespace Namotion.Reflection {
		export class ContextualPropertyInfo {
			readonly PropertyInfo: unknown;

			readonly AccessorType: Namotion.Reflection.ContextualType;

			PropertyType: Namotion.Reflection.ContextualType;

			readonly Name: string;

			readonly MemberInfo: unknown;

			readonly CanWrite: boolean;

			readonly CanRead: boolean;

			readonly Nullability: Namotion.Reflection.Nullability;

			GetValue(obj: unknown | undefined): unknown | undefined;

			SetValue(
				obj: unknown | undefined,
				value: unknown | undefined,
			): void;

			GetCustomAttributes(
				attributeType: unknown,
				inherit: boolean,
			): unknown[];

			GetCustomAttributes(inherit: boolean): unknown[];

			IsDefined(
				attributeType: unknown,
				inherit: boolean,
			): boolean;

			ToString(): string;
		}
	}

	export namespace Namotion.Reflection {
		export class ContextualType {
			readonly Context: unknown;

			readonly Parent?: Namotion.Reflection.ContextualType;

			OriginalNullability: Namotion.Reflection.Nullability;

			readonly GenericArguments: Namotion.Reflection.ContextualType[];

			readonly OriginalGenericArguments: Namotion.Reflection.ContextualType[];

			readonly ElementType?: Namotion.Reflection.ContextualType;

			readonly EnumerableItemType?: Namotion.Reflection.ContextualType;

			readonly BaseType?: Namotion.Reflection.ContextualType;

			readonly Nullability: Namotion.Reflection.Nullability;

			readonly IsValueType: boolean;

			readonly Fields: Namotion.Reflection.ContextualFieldInfo[];

			readonly Properties: Namotion.Reflection.ContextualPropertyInfo[];

			readonly Methods: Namotion.Reflection.ContextualMethodInfo[];

			readonly OriginalType: unknown;

			readonly Name: string;

			readonly TypeInfo: unknown;

			readonly Type: unknown;

			readonly IsNullableType: boolean;

			readonly GenericArguments: Namotion.Reflection.CachedType[];

			readonly OriginalGenericArguments: Namotion.Reflection.CachedType[];

			readonly ElementType?: Namotion.Reflection.CachedType;

			GetProperty(propertyName: string): Namotion.Reflection.ContextualPropertyInfo | undefined;

			GetField(fieldName: string): Namotion.Reflection.ContextualFieldInfo | undefined;

			ToString(): string;

			GetCustomAttributes(inherit: boolean): unknown[];

			GetCustomAttributes(
				attributeType: unknown,
				inherit: boolean,
			): unknown[];

			IsDefined(
				attributeType: unknown,
				inherit: boolean,
			): boolean;
		}
	}

	export namespace Namotion.Reflection {
		export namespace ContextualTypeExtensions {
			export function ToContextualType(type: unknown): Namotion.Reflection.ContextualType;

			export function ToCachedType(type: unknown): Namotion.Reflection.CachedType;

			export function GetContextualAccessors(type: unknown): Iterable<Namotion.Reflection.ContextualAccessorInfo>;

			export function GetContextualProperties(type: unknown): Namotion.Reflection.ContextualPropertyInfo[];

			export function GetContextualFields(type: unknown): Namotion.Reflection.ContextualFieldInfo[];

			export function ToContextualType(
				type: unknown,
				attributes: Iterable<unknown>,
			): Namotion.Reflection.ContextualType;

			export function ToContextualParameter(parameterInfo: unknown): Namotion.Reflection.ContextualParameterInfo;

			export function ToContextualProperty(propertyInfo: unknown): Namotion.Reflection.ContextualPropertyInfo;

			export function ToContextualField(fieldInfo: unknown): Namotion.Reflection.ContextualFieldInfo;

			export function ToContextualAccessor(memberInfo: unknown): Namotion.Reflection.ContextualAccessorInfo;
		}
	}

	export namespace Namotion.Reflection {
		export enum Nullability {
			Unknown = 0,

			NotNullable = 1,

			Nullable = 2,
		}
	}

	export namespace Namotion.Reflection {
		export namespace EnumerableExtensions {
			export function GetAssignableToTypeName<T>(
				objects: Iterable<T>,
				typeName: string,
				typeNameStyle?: Namotion.Reflection.TypeNameStyle,
			): Iterable<T>;

			export function FirstAssignableToTypeNameOrDefault<T>(
				objects: Iterable<T>,
				typeName: string,
				typeNameStyle?: Namotion.Reflection.TypeNameStyle,
			): T;

			export function GetCommonBaseType(types: Iterable<unknown>): unknown;
		}
	}

	export namespace Namotion.Reflection {
		export namespace ObjectExtensions {
			export var DisableNullabilityValidation: boolean;

			export function HasProperty(
				obj: unknown | undefined,
				propertyName: string,
			): boolean;

			export function TryGetPropertyValue<T>(
				obj: unknown | undefined,
				propertyName: string,
				defaultValue?: T,
			): T;

			export function HasValidNullability(
				obj: unknown,
				checkChildren?: boolean,
			): boolean;

			export function EnsureValidNullability(
				obj: unknown | undefined,
				checkChildren?: boolean,
			): void;

			export function ValidateNullability(
				obj: unknown,
				checkChildren?: boolean,
			): Iterable<string>;
		}
	}

	export namespace Namotion.Reflection {
		export namespace TypeExtensions {
			export function IsAssignableToTypeName(
				type: Namotion.Reflection.CachedType,
				typeName: string,
				typeNameStyle: Namotion.Reflection.TypeNameStyle,
			): boolean;

			export function IsAssignableToTypeName(
				type: unknown,
				typeName: string,
				typeNameStyle: Namotion.Reflection.TypeNameStyle,
			): boolean;

			export function InheritsFromTypeName(
				type: unknown,
				typeName: string,
				typeNameStyle: Namotion.Reflection.TypeNameStyle,
			): boolean;

			export function GetEnumerableItemType(type: unknown): unknown | undefined;

			export function GetDisplayName(type: unknown): string;
		}
	}

	export namespace Namotion.Reflection {
		export enum TypeNameStyle {
			Name = 0,

			FullName = 1,
		}
	}

	export namespace Namotion.Reflection {
		export namespace XmlDocs {
			export function ClearCache(): void;
		}
	}

	export namespace Namotion.Reflection {
		export namespace XmlDocsExtensions {
			export function GetXmlDocsSummary(
				type: Namotion.Reflection.CachedType,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsRemarks(
				type: Namotion.Reflection.CachedType,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsTag(
				type: Namotion.Reflection.CachedType,
				tagName: string,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsSummary(
				member: Namotion.Reflection.ContextualMemberInfo,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsRemarks(
				member: Namotion.Reflection.ContextualMemberInfo,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsTag(
				member: Namotion.Reflection.ContextualMemberInfo,
				tagName: string,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocs(
				parameter: Namotion.Reflection.ContextualParameterInfo,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsSummary(
				type: unknown,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsRemarks(
				type: unknown,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsTag(
				type: unknown,
				tagName: string,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsSummary(
				member: unknown,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsRemarks(
				member: unknown,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsElement(
				member: unknown,
				options?: Namotion.Reflection.XmlDocsOptions,
			): unknown | undefined;

			export function GetXmlDocsElement(
				member: unknown,
				pathToXmlFile: string,
				options?: Namotion.Reflection.XmlDocsOptions,
			): unknown | undefined;

			export function GetXmlDocsTag(
				member: unknown,
				tagName: string,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsRecordPropertySummary(
				member: unknown,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocs(
				parameter: unknown,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsElement(
				parameter: unknown,
				pathToXmlFile: string,
				options?: Namotion.Reflection.XmlDocsOptions,
			): unknown | undefined;

			export function ToXmlDocsContent(
				element: unknown | undefined,
				options?: Namotion.Reflection.XmlDocsOptions,
			): string;

			export function GetXmlDocsPath(
				assembly: unknown | undefined,
				options: Namotion.Reflection.XmlDocsOptions,
			): string | undefined;
		}
	}

	export namespace Namotion.Reflection {
		export enum XmlDocsFormattingMode {
			None = 0,

			Html = 1,

			Markdown = 2,
		}
	}

	export namespace Namotion.Reflection {
		export class XmlDocsOptions {
			constructor();

			static readonly Default: Namotion.Reflection.XmlDocsOptions;

			ResolveExternalXmlDocs: boolean;

			FormattingMode: Namotion.Reflection.XmlDocsFormattingMode;
		}
	}
}

declare module 'Namotion.Reflection' {
	export * from 'node-api-dotnet';
}
