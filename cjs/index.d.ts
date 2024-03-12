/// <reference path="../lib/index.d.ts" />
/// <reference path="../lib/NJsonSchema.Annotations.d.ts" />
/// <reference path="../lib/Namotion.Reflection.d.ts" />
/// <reference path="../lib/Newtonsoft.Json.d.ts" />
/// <reference path="../lib/NJsonSchema.d.ts" />
/// <reference path="../lib/NJsonSchema.CodeGeneration.d.ts" />
/// <reference path="../lib/NJsonSchema.CodeGeneration.CSharp.d.ts" />
import '../lib/index';
import * as dotnet from 'node-api-dotnet';
import '../lib/NJsonSchema';
import '../lib/NJsonSchema.CodeGeneration.CSharp';
declare const GeneratorOptions: {
    ClassStyle: typeof dotnet.NJsonSchema.CodeGeneration.CSharp.CSharpClassStyle;
    JsonLibrary: typeof dotnet.NJsonSchema.CodeGeneration.CSharp.CSharpJsonLibrary;
};
declare class GeneratorSettings extends dotnet.NJsonSchema.CodeGeneration.CSharp.CSharpGeneratorSettings {
    GeneratePartialClass: boolean;
    constructor();
}
declare function convert(schema: string, className: string, settings?: GeneratorSettings): Promise<string>;
export { convert, GeneratorOptions, GeneratorSettings };
