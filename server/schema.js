import { makeExecutableSchema } from 'graphql-tools';
import { getGnomes, getGnomeById } from './query';

const typeDefs = `
  type Query { allGnomes(name: String, professions: [String]): [Gnome], gnome(id: ID!): Gnome }
  type Gnome {
    id: ID!,
    name: String,
    thumbnail: String,
    age: Int,
    weight: Float,
    height: Float,
    hair_color: String,
    professions: [String],
    friends: [Gnome],
    createdAt: Int,
  }
`;

const resolvers = {
  Query: { allGnomes: getGnomes, gnome: getGnomeById },
  Gnome: {
    friends: async ({ friends }) => {
      const gnomes = await getGnomes();
      return gnomes.filter(({ name }) => friends.includes(name));
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
