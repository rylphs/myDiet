var moment:any;

class Refeicao {
    _nome:string;
    _horaInicio:any;
    _horaFim:any;
    _icon:any;
    _horario:Date = moment();

    constructor(nome:any, horaInicio:any, horaFim:any, icon:any) {
        this._nome = nome;
        this._horaInicio = horaInicio;
        this._horaFim = horaFim;
        this._icon = icon;
    }

    get nome() {
        return this._nome;
    }

    get horaInicio() {
        return this._horaInicio;
    }

    set horaInicio(hora) {
        this._horaInicio = hora;
    }

    get horaFim() {
        return this._horaFim;
    }

    set horaFim(hora) {
        this._horaFim = hora;
    }

    get icon() {
        return this._icon;
    }

    set icon(ico) {
        this._icon = ico;
    }

    set horario(horario:Date){
        this._horario = horario;
    }

    get horario(){
        return this._horario;
    }

    static forNow() {
        var now = new Date();
        let refeicoes = new RefeicoesService().getTodasRefeicoes();
        for (let i in refeicoes) {
            var refeicao = refeicoes[i];
            if (now.getHours() > refeicao.horaInicio &&
                now.getHours() <= refeicao.horaFim) return refeicao;
        }
        return null;
    }
}