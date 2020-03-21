var genericSpawner = require('generic.spawner');

module.exports = {

  spawnUpgrader: function(spawn){
    var harvesterDesign = Memory.CreepDesign.harvester;
    var name = 'upgrader';

    if (genericSpawner.isNameValid(name,spawn)) {
      genericSpawner.spawnCreep(spawn,harvesterDesign,name);
    }
  }
};
