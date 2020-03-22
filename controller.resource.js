var genericSpawner = require('generic.spawner');

module.exports = {

  spawnUpgrader: function (spawn) {
    var harvesterDesign = Memory.CreepDesign.harvester;
    var name = 'upgrader';

    if (genericSpawner.isNameValid(name, spawn)) {
      genericSpawner.spawnCreep(spawn, harvesterDesign, name);
    }
  }, 
  spawnHarvester: function (spawn) {
    var harvesterDesign = Memory.CreepDesign.harvester;
    var name = 'harvester';

    if (genericSpawner.isNameValid(name, spawn)) {
      genericSpawner.spawnCreep(spawn, harvesterDesign, name);
    }
  }, 
  spawnBuilder: function (spawn) {
    var harvesterDesign = Memory.CreepDesign.harvester;
    var name = 'builder';

    if (genericSpawner.isNameValid(name, spawn)) {
      genericSpawner.spawnCreep(spawn, harvesterDesign, name);
    }
  },
};

// creep designs:
// harvester: [WORK,CARRY,MOVE]