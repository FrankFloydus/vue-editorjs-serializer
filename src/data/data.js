export default {
  "time": 1591692604707,
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "Editor.js",
        "level": 2,
      },
    },
    {
      "type": "paragraph",
      "data": {
        "text":
          "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
      },
    },
    {
      "type": "header",
      "data": {
        "text": "Key features",
        "level": 3,
      },
    },
    {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": [
          "It is a block-styled editor",
          "It returns clean data output in JSON",
          "Designed to be extendable and pluggable with a simple API",
        ],
      },
    },
    {
      "type": "header",
      "data": {
        "text": "What does it mean «block-styled editor»",
        "level": 3,
      },
    },
    {
      "type": "paragraph",
      "data": {
        "text":
          'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
      },
    },
    {
      "type": "paragraph",
      "data": {
        "text":
          'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
      },
    },
    {
      "type": "header",
      "data": {
        "text": "What does it mean clean data output",
        "level": 3,
      },
    },
    {
      "type": "paragraph",
      "data": {
        "text":
          "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
      },
    },
    {
      "type": "table",
      "data": {
        "content": [
          ["1", "5"],
          ["2", "6"],
          ["3", "7"],
          ["4", "8"],
        ],
      },
    },
    {
      "type": "linkTool",
      "data": {
        "link": "https://laravel.com/",
        "meta": {
          "url": "https://laravel.com/",
          "domain": "laravel.com/",
          "title": "Laravel - The PHP Framework For Web Artisans",
          "description": "",
          "image": {
            "url": "",
          },
        },
      },
    },
    {
      "type": "image",
      "data": {
        "file": {
          "url": "/upload/temporary/o_436d32025a0d4f517ab0b1f88d43d435.jpg",
          "width": 293,
          "height": 260,
        },
        "caption": "Magento",
        "withBorder": false,
        "stretched": false,
        "withBackground": false,
      },
    },
  ],
  "version": "2.18.0",
};
