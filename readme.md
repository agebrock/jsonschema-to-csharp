
# JSON Schema to C# Class Converter for Node.js

Convert JSON Schemas into C# classes seamlessly within your Node.js applications, leveraging the power of a C# library supporting all features.

## Overview

Transforming JSON Schemas into C# classes has never been easier! With the JSON Schema to C# Class Converter for Node.js, you can effortlessly bridge the gap between JSON data structures and C# objects. Say goodbye to manual translation and hello to automated, error-free conversion.

## Features

- **Seamless Integration**: Integrate the converter effortlessly into your Node.js projects, enabling smooth interoperability between JSON Schemas and C# classes.
- **Full Feature Support**: Enjoy support for all JSON Schema features, including complex data types, validation rules, and more, ensuring accurate translation into C# classes.
- **Flexible Configuration**: Customize the generation process using a variety of options, such as namespace, data annotations, default values, and more, to meet your specific requirements.
- **Native Record Support**: Generate C# classes as native records for enhanced readability and conciseness, leveraging the latest language features.
- **Autocomplete Support**: TypeScript-based library provides autocomplete support for C# classes in your favorite editor, enhancing developer productivity.

## Installation

To install the library, simply use npm:

```bash
npm install @agebrock/jsonschema-to-csharp
```

## Examples

### Using Newtonsoft.Json

```javascript
'use strict';

const { convert, GeneratorOptions, GeneratorSettings } = require("@agebrock/jsonschema-to-csharp");

// Example usage
const schema = '{"type": "object", "properties": {"name": {"type": "string"}, "age": {"type": "number"}}}';
const className = 'Person';
const settings = new GeneratorSettings();
settings.Namespace = "TestNamespace";
settings.JsonLibrary = GeneratorOptions.JsonLibrary.NewtonsoftJson;
settings.ClassStyle = GeneratorOptions.ClassStyle.Poco;

convert(schema, className, settings).then(console.log);
```

Results to the following output:

```csharp
using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Converters = Newtonsoft.Json.Converters;

namespace TestNamespace
{
    #pragma warning disable // Disable all warnings

    public class Person
    {
        [JsonProperty("name", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public string Name { get; set; }

        [JsonProperty("age", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
        public double Age { get; set; }

        private IDictionary<string, object> _additionalProperties;

        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties ?? (_additionalProperties = new Dictionary<string, object>()); }
            set { _additionalProperties = value; }
        }

    }
}
```

### Using System.Text.Json (POCO)

```javascript
'use strict';

const { convert, GeneratorOptions, GeneratorSettings } = require("@agebrock/jsonschema-to-csharp");

// Example usage
const schema = '{"type": "object", "properties": {"name": {"type": "string"}, "age": {"type": "number"}}}';
const className = 'Person';
const settings = new GeneratorSettings();
settings.Namespace = "TestNamespace";
settings.JsonLibrary = GeneratorOptions.JsonLibrary.SystemTextJson;
settings.ClassStyle = GeneratorOptions.ClassStyle.Poco;

convert(schema, className, settings).then(console.log);
```

Results to the following output:

```csharp
using System;
using System.Text;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace TestNamespace
{
    #pragma warning disable // Disable all warnings

    public class Person
    {

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("age")]
        public double Age { get; set; }

        private IDictionary<string, object> _additionalProperties;

        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties ?? (_additionalProperties = new Dictionary<string, object>()); }
            set { _additionalProperties = value; }
        }

    }
}
```


### Using System.Text.Json (Native Records)

```javascript
'use strict';

const { convert, GeneratorOptions, GeneratorSettings } = require("@agebrock/jsonschema-to-csharp");

// Example usage
const schema = '{"type": "object", "properties": {"name": {"type": "string"}, "age": {"type": "number"}}}';
const className = 'Person';
const settings = new GeneratorSettings();
settings.Namespace = "TestNamespace";
settings.JsonLibrary = GeneratorOptions.JsonLibrary.SystemTextJson;
settings.ClassStyle = GeneratorOptions.ClassStyle.Record;
settings.GenerateNativeRecords = true;

convert(schema, className, settings).then(console.log);
```

Results to the following output:

```csharp
using System;
using System.Text;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace TestNamespace
{
    #pragma warning disable // Disable all warnings

    public class Person
    {
        [JsonConstructor]

        public Person(double @age, string @name)

        {

            this.Name = @name;

            this.Age = @age;

        }
        [JsonPropertyName("name")]
        public string Name { get; }

        [JsonPropertyName("age")]
        public double Age { get; }

        private IDictionary<string, object> _additionalProperties;

        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties ?? (_additionalProperties = new Dictionary<string, object>()); }
            set { _additionalProperties = value; }
        }

    }
}
```

## License

This project is licensed under the Apache-2.0 License.