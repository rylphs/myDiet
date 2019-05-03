type Registro = {
    refeicoes: RefeicaoBase[]
}
class RegistroService {
    private registro: Registro = {refeicoes:[]};

    constructor() {
        this.load();
    }

    private load():any{
        this.registro.refeicoes = [
            new RefeicaoBase(1, "Café", DiaDaSemana.DOMINGO, 4, 9, "ion-coffee"),
            new RefeicaoBase(2, "Colação", DiaDaSemana.DOMINGO, 9, 11, "ion-ios-nutrition"),
            new RefeicaoBase(3, "Almoço", DiaDaSemana.DOMINGO, 11, 14, "ion-android-restaurant"),
            new RefeicaoBase(4, "Lanche", DiaDaSemana.DOMINGO, 14, 17, "ion-pizza"),
            new RefeicaoBase(5, "Jantar", DiaDaSemana.DOMINGO, 17, 21, "ion-wineglass"),
            new RefeicaoBase(6, "Ceia", DiaDaSemana.DOMINGO, 21, 4, "ion-ios-cloudy-night"),
        ]
    }

    public getTodasAsRefeicoesBase():any {
        return this.registro.refeicoes;
    }

    public getRefeicaoBase(index:number){
        return this.registro.refeicoes[index-1];
    }

    public get refeicaoDeAgora() {
        var now = new Date();
        return this.registro.refeicoes.find(
            (refeicao) => now.getHours() > refeicao.horaInicio && now.getHours() <= refeicao.horaFim)
    }
}