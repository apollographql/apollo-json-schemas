const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, '.');
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan root directory: ' + err);
    }

    files.forEach(function (product_directory) {
        if (!product_directory.startsWith(".") && fs.statSync(product_directory).isDirectory()) {

            let schemas = []

            const directoryPath = path.join(__dirname, product_directory, "schemas");
            fs.readdir(directoryPath, function (err, files) {
                if (err) {
                    return console.log('Unable to scan schema directory: ' + err);
                }

                files.forEach(function (schema_file) {

                    let schema = {
                        "allOf": [
                            {
                                "properties": {
                                    "version": {
                                        "const": schema_file.replace(".json", "")
                                    }
                                }
                            },
                            {
                                "$ref": `https://raw.githubusercontent.com/apollographql/apollo-json-schemas/main/${product_directory}/schemas/${schema_file}`
                            }
                        ]
                    };
                    schemas.push(schema);
                });

                let output = {
                    "$id": `https://github.com/apollographql/apollo-json-schemas/tree/main/${product_directory}/meta-schema.json`,
                    "$schema": "https://github.com/apollographql/apollo-json-schemas/tree/main/meta-schema.json",
                    "title": "All router config versions",
                    "type": "object",
                    "oneOf": schemas
                }

                fs.writeFile(path.join(__dirname, product_directory, "meta-schema.json"), JSON.stringify(output, null, 2), function (err) {
                    if (err) {
                        return console.log('Unable to write meta-schema: ' + err);
                    }
                });
            });
        }
    });
});
