
const getUser = async (ctx) => {
  const userId = ctx.state.user.id;
  ctx.body = { id: userId, name: 'user', email: 'user@test.com' };
};

export default {
  getUser,
};
