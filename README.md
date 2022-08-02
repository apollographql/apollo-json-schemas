# Apollo Schemas

Repository of Apollo [JSON Schemas](https://json-schema.org/) for use with https://www.schemastore.org/.

## Development

Use the following directory layout:

```
/
├─ meta-schema.json       // static
├─ <product>/             
│  ├─ meta-schema.json    // generated
│  ├─ schemas/            
│  │  ├─ <version>.json
```

Where:
* `<product>` - is the name of the product.
* `<version>.json` - is a schema for a version of the product.

Adding new schemas in the appropriate location will cause the `meta-schema.json` for that project to be updated.

