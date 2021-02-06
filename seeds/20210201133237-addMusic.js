module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('music', [{
      name: 'kaise hua',
      genre: 'romantic',
      singer: 'arijit',
      writer: 'safwan',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
