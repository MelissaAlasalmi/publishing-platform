/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const User = function(this: any, data) {
  this.data = data;
};

User.prototype.register = function(data) {
  console.log("registered with:", data);
};

export default User;