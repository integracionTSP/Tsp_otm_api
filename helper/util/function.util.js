const persistenceExtract = require('../../dao/persistence/extractQuery/extraerQuery.persistence')
const dbConnection = require('../../config/database/conexiondb');




  var queryResult;

 function getQuery(queryName){
 
  const pool =  dbConnection();

   

  return new Promise((resolve,reject)=>{
    resultado= pool.query(persistenceExtract.queryExtract, [queryName], (error,results)=>{
 
      if (error) {
          console.log("Error en function.util.js =>  getQuery");
          console.log(error);
          
      } else {
          if (results.rows.length > 0) {
              result = results.rows[0].consulta; 
              result = result.replace(/"/g,"'");
              resultado = result
              nombre = results.rows[0].nombre
          } else {
              result = "";
          
           }
       }
       console.log('query devuelto ',resultado);
       resolve(resultado)
   
   })

  })
  

 };





 module.exports = {

  getQuery:async (queryName) => {
    queryResult = await getQuery(queryName);
    return queryResult;
  }
 }
