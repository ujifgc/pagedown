// Usage:
//
// var myConverter = new Markdown.Editor(myConverter, null, { strings: Markdown.local.fr });

(function () {
        Markdown.local = Markdown.local || {};
        Markdown.local.it = {
        bold: "Grassetto <strong> Ctrl+B",
        boldexample: "testo in grassetto",

        italic: "Italico <em> Ctrl+I",
        italicexample: "testo in italico",

        link: "Link <a> Ctrl+L",
        linkdescription: "description de l'hyperlien",
        linkdialog: "<p><b>Inserire un link</b></p><p>http://example.com/ \"titolo opzionale\"</p>",

        quote: "Citazione <blockquote> Ctrl+Q",
        quoteexample: "Citazione",

        code: "Snippet di codice <pre><code> Ctrl+K",
        codeexample: "il vostro snippet di codice",

        image: "Immagine <img> Ctrl+G",
        imagedescription: "descrizione dell'immagine",
        imagedialog: "<p><b>Inserire un'immagine</b></p><p>http://example.com/images/diagram.jpg \"titolo opzionale\"<br><br><a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>Cerchi un hosting di immagini gratuito?</a></p>",

        olist: "Lista ordinata <ol> Ctrl+O",
        ulist: "Lista non ordinata <ul> Ctrl+U",
        litem: "Elemento della lista",

        heading: "Titolo <h1>/<h2> Ctrl+H",
        headingexample: "Titolo",

        hr: "Linea orizzontale <hr> Ctrl+R",

        undo: "Annulla - Ctrl+Z",
        redo: "Ripristina - Ctrl+Y",
        redomac: "Ripristina - Ctrl+Shift+Z",

        help: "Aiuto sul Markdown"
    };
})();
