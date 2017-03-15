exports.initDBConnection = function()
{
return dbinit();
};

//----------------------------------------------------------------------------------------------------------
//Generic function for inserting the Documents
exports.insertdata = function(Details)
{
var db = dbinit();
var id;
db.insert(
           Details,
           id, 
           function(err, doc) {
                 if(err) {
                          console.log(err);
                         } else{
          console.log(' Document Saved')
                              }
         });
};

//-----------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------
//Database initialisation which is generic for all the modules
function dbinit()
{   
    var env = "dev"; //To be read from UCD
    if(env === "production")
    {
    var config = require('./constants_prod');
    }else{
    var config = require('./constants');
    };
    var cfenv = require('cfenv');
    var appEnv = cfenv.getAppEnv();
    var cloudant = require('cloudant');
    var dbCredentials = 
    {
     dbName: config.CLOUDANT_DB_NAME
    };
    //When running on Bluemix, this variable will be set to a json object
    //containing all the service credentials of all the bound services
var db;
var id;
var cloudant;
    
    if(process.env.VCAP_SERVICES) {
        var vcapServices = JSON.parse(process.env.VCAP_SERVICES);
        // Pattern match to find the first instance of a Cloudant service in
        // VCAP_SERVICES. If you know your service key, you can access the
        // service credentials directly by using the vcapServices object.
        for(var vcapService in vcapServices){
            if(vcapService.match(/cloudant/i)){
                dbCredentials.host = vcapServices[vcapService][0].credentials.host;
                dbCredentials.port = vcapServices[vcapService][0].credentials.port;
                dbCredentials.user = vcapServices[vcapService][0].credentials.username;
                dbCredentials.password = vcapServices[vcapService][0].credentials.password;
                dbCredentials.url = vcapServices[vcapService][0].credentials.url;
                
                cloudant = require('cloudant')(dbCredentials.url);
                
               db = cloudant.use(dbCredentials.dbName);
                break;
            }
        }
        if(db==null){
            console.warn('Could not find Cloudant credentials in VCAP_SERVICES environment variable - data will be unavailable to the UI');
        }
    } else{
        console.warn('VCAP_SERVICES environment variable not set - data will be unavailable to the UI');
        // For running this app locally you can get your Cloudant credentials 
        // from Bluemix (VCAP_SERVICES in "cf env" output or the Environment 
        // Variables section for an app in the Bluemix console dashboard).
        // Alternately you could point to a local database here instead of a 
        // Bluemix service.
        dbCredentials.host = config.CLOUDANT_HOST;
        dbCredentials.port = config.CLOUDANT_PORT;
        dbCredentials.user = config.CLOUDANT_USERNAME;
        dbCredentials.password = config.CLOUDANT_PASSWORD;
        dbCredentials.url = "https://"+config.CLOUDANT_USERNAME+":"+config.CLOUDANT_PASSWORD+"@"+config.CLOUDANT_USERNAME+".cloudant.com";
       cloudant = require('cloudant')(dbCredentials.url);
                
        db = cloudant.use(dbCredentials.dbName);
            }
            return db;   
        };
//---------------------------------------------------------------------------------------------------------------------------------------------------------