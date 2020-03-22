var genericSpawner = require('generic.spawner');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports = {

  runCreeps: function () {
    var sourceCounter = 0;

    for (var name in Game.creeps) {
      var creep = Game.creeps[name];
      var sources = creep.room.find(FIND_SOURCES_ACTIVE);

      if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep, sources[sourceCounter]);
      } else if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep, sources[sourceCounter]);
      } else if (creep.memory.role == 'builder') {
        roleBuilder.run(creep, sources[sourceCounter]);
      }

      if (sourceCounter == sources.length - 1) {
        sourceCounter = 0;
      } else {
        sourceCounter += 1;
      }
    }
  },
  spawnHarvester: function (spawn) {
    var harvesterDesign = Memory.CreepDesign.harvester;
    var name = 'harvester';

    if (genericSpawner.isNameValid(name, spawn)) {
      genericSpawner.spawnCreep(spawn, harvesterDesign, name);
    }
  },
  spawnUpgrader: function (spawn) {
    var harvesterDesign = Memory.CreepDesign.harvester;
    var name = 'upgrader';

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
  }
};

// creep designs:
// harvester: [WORK,CARRY,MOVE]