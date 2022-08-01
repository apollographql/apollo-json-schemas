# Apollo Schemas

Repository of Apollo json schemas for use with https://www.schemastore.org/.

## Development

Use the following directory layout:

```
/
├─ meta-schema.json       // static
├─ <product>/             
│  ├─ meta-schmea.json    // generated
│  ├─ schemas/            
│  │  ├─ <version>.json
```

Where:
* &lt;product&gt; - is the name of the product.
* &lt;version&gt;.json - is a schema for a version of the product.

Adding new schemas in the appropriate location will cause the meta-schema.json for that project to be updated.

