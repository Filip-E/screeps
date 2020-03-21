var resourceController = require('controller.resource');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports = {
  run: function(){
    console.log('run glados');
    // spawn creeps
    for (const i in Game.spawns) {

      //resourceController.spawnUpgrader(Game.spawns[i]);
    }

    // run creeps
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
  }
};
