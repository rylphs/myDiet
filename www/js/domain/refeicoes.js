class Refeicao {
    constructor(nome, horaInicio, horaFim, icon) {
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

    static forNow() {
        var now = new Date();
        let refeicoes = getTodasRefeicoes();
        for (let i in refeicoes) {
            var refeicao = refeicoes[i];
            if (now.getHours() > refeicao.horaInicio &&
                now.getHours() <= refeicao.horaFim) return refeicao;
        }
        return null;
    }
}

function getTodasRefeicoes() {
    return [
        new Refeicao("Café", 4, 9, "ion-coffee"),
        new Refeicao("Colação", 9, 11, "ion-ios-nutrition"),
        new Refeicao("Almoço", 11, 14, "ion-android-restaurant"),
        new Refeicao("Lanche", 14, 17, "ion-pizza"),
        new Refeicao("Janta", 17, 21, "ion-wineglass"),
        new Refeicao("Ceia", 21, 4, "ion-ios-cloudy-night"),
    ];
}