'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorSettings = exports.GeneratorOptions = exports.convert = void 0;
require("../lib/index");
const dotnet = require("node-api-dotnet");
require("../lib/NJsonSchema");
require("../lib/NJsonSchema.CodeGeneration.CSharp");
const CSharp = dotnet.NJsonSchema.CodeGeneration.CSharp;
const ClassStyle = CSharp.CSharpClassStyle;
const JsonLibrary = CSharp.CSharpJsonLibrary;
const JsonSchema = dotnet.NJsonSchema.JsonSchema;
const CSharpGenerator = dotnet.NJsonSchema.CodeGeneration.CSharp.CSharpGenerator;
const GeneratorOptions = { ClassStyle, JsonLibrary };
exports.GeneratorOptions = GeneratorOptions;
class RewriteClass {
    constructor(content, settings) {
        this._content = content;
        this._settings = settings;
        this._usings = [];
    }
    RemoveComments() {
        if (!this._settings.GeneratePartialClass) {
            this._content = this._content.replace("public partial class", "public class");
        }
    }
    CleanNewLines() {
        const lines = this._content.split("\n");
        let lastEmpty = false;
        let newLines = [];
        lines.forEach((line, index) => {
            let checkLine = line.trim();
            if (checkLine === "" && !lastEmpty) {
                lastEmpty = true;
                return newLines.push(line);
            }
            if (checkLine === "" && lastEmpty) {
                return;
            }
            if (checkLine.startsWith("///")) {
                lastEmpty = false;
                return newLines.push(line);
            }
            if (checkLine.startsWith("//")) {
                return;
            }
            if (checkLine !== "") {
                lastEmpty = false;
                return newLines.push(line);
            }
        });
        this._content = newLines.join("\n");
    }
    RemoveString(str) {
        this._content = this._content.replaceAll(str, "");
    }
    AddUsing(usingName) {
        this._usings.push(usingName);
    }
    ToCode() {
        const shortestUsingsFirst = this._usings.slice().sort((a, b) => a.length - b.length);
        const longestUsingsFirst = this._usings.slice().sort((a, b) => b.length - a.length);
        let usings = "";
        longestUsingsFirst.forEach(usingName => {
            this.RemoveString(usingName + ".");
        });
        shortestUsingsFirst.forEach(usingName => {
            usings += `using ${usingName};\r\n`;
        });
        this.RemoveComments();
        this.CleanNewLines();
        return usings + this._content;
    }
}
class GeneratorSettings extends dotnet.NJsonSchema.CodeGeneration.CSharp.CSharpGeneratorSettings {
    constructor() {
        super();
        this.GeneratePartialClass = false;
        let settings = this;
        settings.Namespace = "Dotnet.Node";
        settings.ClassStyle = GeneratorOptions.ClassStyle.Poco;
        settings.JsonLibrary = GeneratorOptions.JsonLibrary.SystemTextJson;
        settings.GenerateNativeRecords = false;
        settings.GenerateJsonMethods = false;
        settings.GenerateDataAnnotations = false;
        settings.PropertySetterAccessModifier = "";
        settings.RequiredPropertiesMustBeDefined = true;
        settings.GenerateDefaultValues = true;
        settings.AnyType = "object";
        settings.DateType = "System.DateTimeOffset";
        settings.DateTimeType = "System.DateTimeOffset";
        settings.TimeType = "System.TimeSpan";
        settings.TimeSpanType = "System.TimeSpan";
        settings.NumberType = "double";
        settings.NumberFloatType = "float";
        settings.NumberDoubleType = "double";
        settings.NumberDecimalType = "decimal";
        settings.ArrayType = "System.Collections.Generic.ICollection";
        settings.ArrayInstanceType = "System.Collections.ObjectModel.Collection";
        settings.ArrayBaseType = "System.Collections.ObjectModel.Collection";
        settings.DictionaryType = "System.Collections.Generic.IDictionary";
        settings.DictionaryInstanceType = "System.Collections.Generic.Dictionary";
        settings.DictionaryBaseType = "System.Collections.Generic.Dictionary";
        settings.RequiredPropertiesMustBeDefined = true;
        settings.EnforceFlagEnums = false;
        settings.InlineNamedArrays = false;
        settings.InlineNamedDictionaries = false;
        settings.InlineNamedTuples = true;
    }
}
exports.GeneratorSettings = GeneratorSettings;
async function convert(schema, className, settings) {
    if (!settings)
        settings = new GeneratorSettings();
    var jsonSchema = await JsonSchema.FromJsonAsync(schema);
    // Generate C# class code
    var generator = new CSharpGenerator(jsonSchema, settings);
    let csharpCode = generator.GenerateFile(jsonSchema, className);
    var rewriteClass = new RewriteClass(csharpCode, settings);
    rewriteClass.AddUsing("System");
    rewriteClass.AddUsing("System.Collections.Generic");
    rewriteClass.RemoveString("[System.CodeDom.Compiler.GeneratedCode(\"NJsonSchema\", \"11.0.0.0 (Newtonsoft.Json v13.0.0.0)\")]");
    rewriteClass.AddUsing("System.Runtime.Serialization");
    if (settings.JsonLibrary == GeneratorOptions.JsonLibrary.NewtonsoftJson) {
        rewriteClass.AddUsing("Newtonsoft.Json");
        rewriteClass.AddUsing("Converters = Newtonsoft.Json.Converters");
    }
    else {
        rewriteClass.AddUsing("System.Text.Json.Serialization");
        rewriteClass.AddUsing("System.Text");
    }
    // Print the generated C# code
    return rewriteClass.ToCode();
}
exports.convert = convert;
