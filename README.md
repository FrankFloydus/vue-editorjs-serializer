# vue-editorjs-serializer

A VueJS component to serialize [Editor.js](https://editorjs.io/) JSON output.
It provides basic serialization of native blocks:

- Header
- Paragraph
- Image
- List
- Raw HTML
- Code
- Blockquote
- Links
- Tables

No css styles are provided, only basic html templates to wrap blocks.

## Usage

```
<vue-editor-serializer />
```

#### Still not published on npm. I will do it later. For now you can use the source files as is, if you need to use this component.

### Props

| name  | type    | value                     |
| ----- | ------- | ------------------------- |
| json  | Object  | EditorJS Json Input       |
| debug | Boolean | Console log the JSON data |
