var resourceController = require('controller.resource');
var defenseController = require('controller.defense');

// TODO -> maintance
// TODO -> auto job switching

module.exports = {
  run: function () {
    console.log('run glados');
    const harvestersAmount = 4;
    const currentHarvesterAmount = _(Memory.creeps).filter({ role: 'harvester' }).size();
    const upgradersAmount = 10;
    const currentupgradersAmount = _(Memory.creeps).filter({ role: 'harvester' }).size();
    const buildersAmount = 2;
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


    // run creeps
    resourceController.runCreeps();

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