// Generated for: TimeZoneConverter 6.0.1.0
// Generated by: Microsoft.JavaScript.NodeApi.Generator 0.4.0.0
/* eslint-disable */


declare module 'node-api-dotnet' {

	export namespace TimeZoneConverter {
		export enum LinkResolution {
			Default = 0,

			Canonical = 1,

			Original = 2,
		}
	}

	export namespace TimeZoneConverter {
		export namespace TZConvert {
			export const KnownIanaTimeZoneNames: Iterable<string> & { length: number };

			export const KnownWindowsTimeZoneIds: Iterable<string> & { length: number };

			export const KnownRailsTimeZoneNames: Iterable<string> & { length: number };

			export function GetIanaTimeZoneNamesByTerritory(fullList?: boolean): ReadonlyMap<string, Iterable<string> & { length: number }>;

			export function IanaToWindows(ianaTimeZoneName: string): string;

			export function TryIanaToWindows(ianaTimeZoneName: string): string | undefined;

			export function WindowsToIana(
				windowsTimeZoneId: string,
				territoryCode?: string,
			): string;

			export function WindowsToIana(
				windowsTimeZoneId: string,
				linkResolutionMode: TimeZoneConverter.LinkResolution,
			): string;

			export function WindowsToIana(
				windowsTimeZoneId: string,
				territoryCode: string,
				linkResolutionMode: TimeZoneConverter.LinkResolution,
			): string;

			export function TryWindowsToIana(windowsTimeZoneId: string): string | undefined;

			export function TryWindowsToIana(
				windowsTimeZoneId: string,
				linkResolutionMode: TimeZoneConverter.LinkResolution,
			): TimeZoneConverter.LinkResolution | undefined;

			export function TryWindowsToIana(
				windowsTimeZoneId: string,
				territoryCode: string,
			): string | undefined;

			export function TryWindowsToIana(
				windowsTimeZoneId: string,
				territoryCode: string,
				linkResolutionMode: TimeZoneConverter.LinkResolution,
			): TimeZoneConverter.LinkResolution | undefined;

			export function GetTimeZoneInfo(windowsOrIanaTimeZoneId: string): unknown;

			export function TryGetTimeZoneInfo(windowsOrIanaTimeZoneId: string): unknown | undefined;

			export function IanaToRails(ianaTimeZoneName: string): string[];

			export function TryIanaToRails(ianaTimeZoneName: string): string[] | undefined;

			export function RailsToIana(railsTimeZoneName: string): string;

			export function TryRailsToIana(railsTimeZoneName: string): string | undefined;

			export function RailsToWindows(railsTimeZoneName: string): string;

			export function TryRailsToWindows(railsTimeZoneName: string): string | undefined;

			export function WindowsToRails(
				windowsTimeZoneId: string,
				territoryCode?: string,
			): string[];

			export function TryWindowsToRails(windowsTimeZoneId: string): string[] | undefined;

			export function TryWindowsToRails(
				windowsTimeZoneId: string,
				territoryCode: string,
			): string[] | undefined;
		}
	}
}

declare module 'TimeZoneConverter' {
	export * from 'node-api-dotnet';
}
