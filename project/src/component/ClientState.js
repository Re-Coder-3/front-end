import { gql } from "apollo-boost";

// export default {
//   defaults: {
//     LoggedBool: localStorage.getItem("TOKEN") ? true : false,
//   },
//   resolvers: {
//     Mutation: {
//       loginState: (_, { token }, { cache }) => {
//         localStorage.setItem("TOKEN", token);
//         cache.writeData({
//           data: {
//             LoggedBool: true,
//           },
//         });
//         return null;
//       },
//     },
//   },
// };

// export const defaults = {
//   LoggedBool: localStorage.getItem("TOKEN") ? true : false,
// };
export const typeDefs = gql`
  extend type Query {
    LoggedBool: Boolean!
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
  },
};
