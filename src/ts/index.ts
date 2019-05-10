var $:any;

var tabTemplates = [
    { file: "diario.html", tag: "#tabDiario" }/*,
    { file: "refeicoes.html", tag: "#tabRefeicoes" }*/
]

$.when($.ready).then(function() {
    
    
    loadTemplates();

    var service:any = new RegistroService();

    setRefeicaoSelecionada(service.refeicaoDeAgora.id);
   
    
    var data = {
        refeicaoSelecionada: service.refeicaoDeAgora,
        refeicoes: service.getTodasAsRefeicoesBase()
    }
    $.get("templates/refeicoes.html", function(value:string) {
        carregarTemplate(value, "#tabRefeicoes", data);
        $(".hora").timepicki();
    });

    // $.get("teste.html", function(value:string) {
    //     carregarTemplate(value, "#tabAlimentos", {});
    // });
});

function carregarTemplate(template:any, dst:any, data:any) {
    var tmpl = $.templates(template);
    var html = tmpl.link(dst, data); // Render template using data - as HTML string
    //$(dst).html(html); // Insert HTML string into DOM
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



    function selecionarRefeicao(event:any) {
        var id = $(event.currentTarget).data("index");
        setRefeicaoSelecionada(id);
    }

    function setRefeicaoSelecionada(id:any) {
        var service:any = new RegistroService();
        var refeicao = service.getRefeicaoBase(Number(id));
        $("#iconRefeicaoSelecionada").removeClass();
        $("#iconRefeicaoSelecionada").addClass("icon " + refeicao.icon);
        $("#refeicaoSelecionada ").html(refeicao.nome);
    }

    