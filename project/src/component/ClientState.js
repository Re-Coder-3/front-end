import { gql } from "apollo-boost";

const query = gql`
  query url {
    UrlArr @client
  }
`;

const infoQuery = gql`
  query info {
    InfoArr @client
  }
`;

export const typeDefs = gql`
  extend type Query {
    LoggedBool: Boolean!
    UrlArr: [String]
    InfoArr: [String]
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
    addInfo: (_, { info }, { cache }) => {
      const { InfoArr } = cache.readQuery({ infoQuery });
      cache.writeData({
        data: {
          InfoArr: [...InfoArr, info],
        },
      });
    },
    removeInfo: (_, { bool }, { cache }) => {
      if (bool) {
        cache.writeData({
          data: {
            InfoArr: [],
          },
        });
      }
    },
  },
};
