module.exports = {

  isNameValid: function(name, spawner){
    var spawnResult =
    spawner.spawnCreep([MOVE], name + Game.time.toString(), {
      dryRun: true
    });

    if (spawnResult == 0) {
      return true;
    }else{
      return false;
    }
  },

  spawnCreep:function(spawner, design, name){
    var creepName = name + Game.time.toString();

    if (this.isNameValid(creepName,spawner)) {
      var spawnResult =
      spawner.spawnCreep(design, creepName , {
        memory: {role: name}
      });
    }
    console.log('trying to spawn resulted in code: ' + spawnResult);
  }
};
