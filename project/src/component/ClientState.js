export default {
  defaults: {
    LoggedBool: localStorage.getItem("TOKEN") ? true : false,
  },
  resolvers: {
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
  },
};
