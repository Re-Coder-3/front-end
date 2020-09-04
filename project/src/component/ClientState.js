import { gql } from "apollo-boost";

const query = gql`
  query url {
    UrlArr @client
  }
`;

export const typeDefs = gql`
  extend type Query {
    LoggedBool: Boolean!
    UrlArr: [String]
  }
`;
export const resolvers = {
  Mutation: {
    loginState: (_, { token }, { cache }) => {
      localStorage.setItem("TOKEN", token);
      cache.writeData({
        data: {
          LoggedBool: true,
        },
      });
      return null;
    },
    addUrl: (_, { url }, { cache }) => {
      const { UrlArr } = cache.readQuery({ query });
      cache.writeData({
        data: {
          UrlArr: [...UrlArr, url],
        },
      });
      console.log(UrlArr);
    },
    removeUrl: (_, { bool }, { cache }) => {
      if (bool) {
        cache.writeData({
          data: {
            UrlArr: [],
          },
        });
      }
    },
  },
};
