var tabTemplates = [
    { file: "diario.html", tag: "#tabDiario" }
]

$.when($.ready).then(function() {
    loadTemplates();
});

function carregarTemplate(template, dst, data) {
    var tmpl = $.templates(template);
    var html = tmpl.render(data); // Render template using data - as HTML string
    $(dst).html(html); // Insert HTML string into DOM
}

function loadTemplates() {
    for (var i in tabTemplates) {
        var template = tabTemplates[i];

        $.get("templates/" + template.file, function(value) {
            $(template.tag).html(value);
        });
    }
}