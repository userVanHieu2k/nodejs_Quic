'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456', //plain text
      firstName: 'Hieu',
      lastName: 'Nguyen',
      address: 'Nam Tu Liem, Ha Noi',
      phoneNumber: '094848484',
      gender: 1,
      Image: "SH",
      roleId: 'R1',
      positionId: 's',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
