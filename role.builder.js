var roleBuilder = {

	/** @param {Creep} creep **/
	run: function (creep, source) {

		if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.building = false;
			creep.say('🔄 harvest');
		}
		if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
			creep.memory.building = true;
			creep.say('🚧 build');
		}

		if (creep.memory.building) {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if (targets.length > 0) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
				}
			} else {
				// find structure with lowest hits
				// TODO: define 'at least repair x amount'
				var structuresToRepair = _(creep.room.find(FIND_MY_STRUCTURES)).sortBy(
					[function (s) {
						if(s.hits != s.hitsMax){
							return s.hits;
						}
					}]
				);
				// temp logging
				var logString = '';
				for(let structure in structuresToRepair){
					logString += '(structure: ' + structure.id +'| type:' + structure.structureType + 'hits: ' + structure.hits + ')';
				}

				// repair
				if (structuresToRepair.length > 0) {
					if (creep.repair(structuresToRepair[0]) ==  ERR_NOT_IN_RANGE) {
						creep.moveTo(structuresToRepair[0], { visualizePathStyle: { stroke: '#ffffff' } });
					}	
				}else{
					console.log('nothing to repair');
				}
				
			}
		}
		else {
			creep.say('⚡ assigned to source: ' + source.id);
			var sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources, { visualizePathStyle: { stroke: '#ffaa00' } });
			}
		}
	}
};

module.exports = roleBuilder;