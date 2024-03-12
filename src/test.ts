'use strict';
import { convert, GeneratorOptions, GeneratorSettings } from './index';
const schema = {
    "title": "FullyAnnotatedForm",
    "description": "ExampleClass.FullyAnnotatedForm",
    "type": "object",
    "properties": {
        "Name": {
            "title": "Street Address",
            "description": "The street address. For example, 1600 Amphitheatre Pkwy.",
            "type": "string",
            "maxLength": 100,
            "pattern": "^[a-zA-Z''-'\\s]{1,40}$"
        },
        "PhoneNumber": {
            "type": "string",
            "format": "phone"
        },
        "Zone": {
            "type": "string",
            "enum": [
                "Residential",
                "Commercial",
                "Industrial"
            ]
        },
        "Email": {
            "type": [
                "string",
                "null"
            ],
            "format": "email"
        },
        "DateTime": {
            "type": [
                "string",
                "null"
            ],
            "format": "date-time"
        },
        "Time": {
            "type": [
                "string",
                "null"
            ],
            "format": "time"
        }
    },
    "required": [
        "Name",
        "PhoneNumber",
        "Zone",
        "Email",
        "DateTime",
        "Time"
    ]
};
const settings = new GeneratorSettings();
settings.Namespace = "TestNamespace";
settings.JsonLibrary = GeneratorOptions.JsonLibrary.SystemTextJson;
settings.ClassStyle = GeneratorOptions.ClassStyle.Record;
settings.GenerateNativeRecords = true;
//console.log(convert(schema, "MyClass", settings));
convert(JSON.stringify(schema), "MyClass", settings).then(console.log);
