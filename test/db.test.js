describe("DBTest", function() {
    it("should open the db and create objects", function(done) {

        var dbManager = new DB('tiposRefeicao', 'nome');
        dbManager.open().then(function(db) {

            var refeicoes = db.transaction('tiposRefeicao', 'readonly').objectStore('tiposRefeicao');
            var count = refeicoes.count();

            count.onsuccess = function() {
                expect(count.result).toBeGreaterThanOrEqual(0);
                done();
            }
        });
    });

    it("insert data", function(done) {

        var dbManager = new DB('tiposRefeicao', 'nome');

        dbManager.save({ nome: "ref1" })
            .then(() => dbManager.save({ nome: "ref2" }))
            .then(() => dbManager.get("ref1"))
            .then((value) => {
                expect(value.nome).toEqual("ref1");
                return dbManager.get("ref2")
            })
            .then((event) => {
                expect(event.nome).toEqual("ref2");
                done();
            });
    });
});