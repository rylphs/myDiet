class RefeicaoBase {
    constructor(private _id: number, private _nome: string, 
        private _diaDaSemana: DiaDaSemana,
        private _horaInicio: number, private _horaFim: number, private _icon: String) {
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

    get diaDaSemana(){
        return this._diaDaSemana;
    }

    get id(){
        return this._id;
    }
}