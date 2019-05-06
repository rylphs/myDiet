describe("normalizeData", function() {
    it("opens the db and reate objects", function(done) {

        var dbManager = new DB();
        dbManager.open().then(function(db) {
            var refeicoes = db.transaction('tiposRefeicao', 'readonly').objectStore('tiposRefeicao');
            var count = refeicoes.count();
            count.onsuccess = function() {
                expect(count.result).toEqual(0);
                done();
            }
        });
    });
});