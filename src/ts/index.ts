var $:any;

var tabTemplates = [
    { file: "diario.html", tag: "#tabDiario" }
]

$.when($.ready).then(function() {
    loadTemplates();
});

function carregarTemplate(template:any, dst:any, data:any) {
    var tmpl = $.templates(template);
    var html = tmpl.render(data); // Render template using data - as HTML string
    $(dst).html(html); // Insert HTML string into DOM
}

function loadTemplates() {
    var service = new RegistroService();
    var data = {
        refeicaoSelecionada: service.refeicaoDeAgora,
        refeicoes: service.getTodasAsRefeicoesBase()
    }
    for (var i in tabTemplates) {
        var template = tabTemplates[i];

        $.get("templates/" + template.file, function(value:string) {
            carregarTemplate(value, template.tag, data);
        });
    }
}