const faker = require('faker')

const create_database = () => {
  const database = {
    users: [],
  }

  for (let i = 0; i < 10; i++) {
    database.users.push({
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
    })
  }

  return {
    users: database.users,
  }
}

module.exports = create_database
