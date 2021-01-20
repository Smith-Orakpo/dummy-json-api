const faker = require('faker')

const create_database = () => {
  const database = {
    users: [],
    posts: [],
  }

  for (let i = 0; i < 10; i++) {
    database.users.push({
      id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
    })

    database.posts.push({
      id: i,
      userId: i,
      title: faker.name.title(),
      desc: faker.lorem.words(30),
    })
  }

  return {
    users: database.users,
    posts: database.posts,
  }
}

module.exports = create_database
