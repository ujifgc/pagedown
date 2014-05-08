// Usage:
//
// var myConverter = new Markdown.Editor(myConverter, null, { strings: Markdown.local.zh_CN });

(function () {
    Markdown.local = Markdown.local || {};
    Markdown.local.zh_CN = {
        bold: "加粗 <strong> Ctrl+B",
        boldexample: "加粗文本",

        italic: "斜体 <em> Ctrl+I",
        italicexample: "斜体文本",

        link: "链接 <a> Ctrl+L",
        linkdescription: "超链接说明",
        linkdialog: "<p><b>插入超链接</b></p><p>http://example.com/ \"标题(可选)\"</p>",

        quote: "引用 <blockquote> Ctrl+Q",
        quoteexample: "引用",

        code: "代码片段<pre><code> Ctrl+K",
        codeexample: "你的代码片段",

        image: "插入图片 <img> Ctrl+G",
        imagedescription: "图片说明",
        imagedialog: "<p><b>插入图片</b></p><p>http://example.com/images/diagram.jpg \"标题(可选)\"<br><br><a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>免费图片空间?</a></p>",

        olist: "有序列表 <ol> Ctrl+O",
        ulist: "无序列表<ul> Ctrl+U",
        litem: "列表项",

        heading: "标题 <h1>/<h2> Ctrl+H",
        headingexample: "标题",

        hr: "水平分割线 <hr> Ctrl+R",

        undo: "撤销 - Ctrl+Z",
        redo: "重做 - Ctrl+Y",
        redomac: "重做 - Ctrl+Shift+Z",

        help: "帮助"
    };
})();