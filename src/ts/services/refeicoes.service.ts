class RefeicoesService {
    public getTodasRefeicoes():any {
        return [
            new Refeicao("Café", 4, 9, "ion-coffee"),
            new Refeicao("Colação", 9, 11, "ion-ios-nutrition"),
            new Refeicao("Almoço", 11, 14, "ion-android-restaurant"),
            new Refeicao("Lanche", 14, 17, "ion-pizza"),
            new Refeicao("Jantar", 17, 21, "ion-wineglass"),
            new Refeicao("Ceia", 21, 4, "ion-ios-cloudy-night"),
        ];
    }
}