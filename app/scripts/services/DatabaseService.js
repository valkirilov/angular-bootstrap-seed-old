
AppServices.service('DatabaseService', function() {

    var testDatabase = function(firebaseRef) {
        firebaseRef.set({
            title: "Hello World!",
            author: "Firebase",
            location: {
                city: "Toulouse",
                state: "California",
                zip: 94103
            }
        });
    };

    this.testDatabase = testDatabase;

});
