module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

    app.models.Juego.create([{
	nombre:'Futbol',
	descripcion:'Dar patadas a una pelota',
	grupal:true
    }, {
    	nombre:'Baloncesto',
	descripcion:'Encestar una pelota',
	grupal:false
    }, {
      	nombre:'Ajedrez',
	descripcion:'Juego tactico',
	grupal:true
    }],
	function(err, juego) { if (err) throw err;
       console.log('Models created: \n', juego);
    });

  });
};
