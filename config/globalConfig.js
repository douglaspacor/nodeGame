const config = {
    app: {
        port: process.env.PORT || 2000
    },
    db:{
        connectionString: "mongodb://localhost",
        port: "27017",
        dbName: "gamedb"
    }
};

global.config = config;