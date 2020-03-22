var resourceController = require('controller.resource');
var defenseController = require('controller.defense');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports = {
  run: function () {
    console.log('run glados');
    const harvestersAmount = 10;
    const currentHarvesterAmount = _(Memory.creeps).filter({ role: 'harvester' }).size();
    const upgradersAmount = 10;
    const currentupgradersAmount = _(Memory.creeps).filter({ role: 'harvester' }).size();
    const buildersAmount = 10;
    const currentBuildersAmount = _(Memory.creeps).filter({ role: 'harvester' }).size();

    // TODO: come back at a later date
    // var creepsByRole = _.groupBy(Game.creeps, creep.memory.role);
    // _.forEach(creepsByRole, function(creep){
    //   console.log(creep.name + ':' + creep.memory.role);
    // });

    // spawn creeps
    for (const i in Game.spawns) {
      if (currentHarvesterAmount < harvestersAmount) {
        resourceController.spawnHarvester(Game.spawns[i]);
      } else if (currentupgradersAmount < upgradersAmount) {
        resourceController.spawnUpgrader(Game.spawns[i]);
      } else if (currentBuildersAmount < buildersAmount) {
        resourceController.spawnBuilder(Game.spawns[i]);
      }
    }

    var sources = creep.room.find(FIND_SOURCES_ACTIVE);
    var sourceCounter = 0;
    // run creeps
    for (var name in Game.creeps) {
      var creep = Game.creeps[name];

      if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep, sources[sourceCounter]);
        if (sourceCounter == sources.length - 1) {
          sourceCounter = 0;
        } else {
          sourceCounter += 1;
        }
      }
      if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep);
      }
      if (creep.memory.role == 'builder') {
        roleBuilder.run(creep);
      }
    }

    // run defense
    for (const roomName in Game.rooms) {
      var room = Game.rooms[roomName];
      defenseController.defendRoom(room);
    }
  }
};


/*
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1', {
    memory: {role: 'harvester'}
});
*/