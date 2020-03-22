var genericSpawner = require('generic.spawner');

module.exports = {
    defendRoom: function (room) {
        var hostiles = room.find(FIND_HOSTILE_CREEPS);
        if (hostiles.length > 0) {
            var username = hostiles[0].owner.username;
            //Game.notify(`User ${username} spotted in room ${room}`);
            console.log(`User ${username} spotted in room ${room}`);
            var towers = room.find(
                FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_TOWER } });
            towers.forEach(tower => tower.attack(hostiles[0]));
            
            let defenders = _(Game.creeps).filter({ memory: { role: 'defender' }}).value();
            for(let key in defenders){
                if (defenders[key].attack(hostiles[0]) == ERR_NOT_IN_RANGE) {
                    defenders[key].moveTo(hostiles[0], { visualizePathStyle: { stroke: '#ffaa00' } });
                }
            }
        }
    },
    spawnDefender: function (spawn) {
        var defenderDesign = Memory.CreepDesign.defender;
        var name = 'defender';
    
        if (genericSpawner.isNameValid(name, spawn)) {
          genericSpawner.spawnCreep(spawn, defenderDesign, name);
        }
      }
}