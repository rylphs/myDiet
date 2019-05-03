var moment:any;

class DiaDaSemana {
    private dow:any;

    constructor(private _day: number){
        this.dow = moment().weekday(_day)
    }

    get day(){
        return this.dow.locale('pt-br').format('dddd'); 
    }

    valueOf():any{
        return this.day;
    }

    public static get DOMINGO(){
        return new DiaDaSemana(0);
    }

    public static get SEGUNDA(){
        return new DiaDaSemana(1);
    }

    public static get TERCA(){
        return new DiaDaSemana(2);
    }

    public static get QUARTA(){
        return new DiaDaSemana(3);
    }

    public static get QUINTA(){
        return new DiaDaSemana(4);
    }

    public static get SEXTA(){
        return new DiaDaSemana(5);
    }

    public static get SABADO(){
        return new DiaDaSemana(6);
    }


}