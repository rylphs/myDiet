class DB {
    private db?:IDBDatabase;
    private dbName = "myDiet";
    private databaseVersion = 1;  

    public open(){
        return new Promise<IDBDatabase>((resolve, reject)=>{
            if(this.db != null) resolve(this.db);
            else {
                var openRequest = window.indexedDB.open(this.dbName, this.databaseVersion);
                openRequest.onerror = (event) => {
                    console.error(openRequest.error);
                    reject(openRequest.error);
                };

                openRequest.onsuccess = (event) => {
                    this.db = openRequest.result;
                    resolve(this.db);
                };

                openRequest.onupgradeneeded = this.createDB;
            }
        });
    }

    private createDB(event:any){
        var db = event.target.result;
        db.onerror = function () {
            console.error(db.errorCode);
        };
        var store = db.createObjectStore('tiposRefeicao', { keyPath: 'name' });
    }
}