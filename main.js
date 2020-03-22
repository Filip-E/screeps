var glados = require('controller.glados')

module.exports.loop = function () {
  for(var i in Memory.creeps) {
    if(!Game.creeps[i]) {
      delete Memory.creeps[i];
    }
  }

  glados.run();
  console.log();
}
