module.exports = (sequelize, Sequelize) => {
  
  const Grupo = sequelize.define("grupo", {
    nombre: {
      type: Sequelize.STRING
    },
    curso: {
      type: Sequelize.STRING
    },

    integrantes: {
      type: Sequelize.INTEGER
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Grupo;
  


};


 
