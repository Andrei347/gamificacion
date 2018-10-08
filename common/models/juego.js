'use strict';

module.exports = function(Juego) {
Juego.prototype.getNombre = function(callback) {
  callback(null, this.nombre);
};
};
