/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import validator from "validator";

const User = function(this: any, data) {
  this.username = data.username.trim().toLowerCase();
  this.email = data.email.trim().toLowerCase();
  this.password = data.password;
  this.errors = [];
};

User.prototype.validate = function() {
  if (!this.username || this.username === "") { 
    this.errors.push("Username is required");
  }
  if (!validator.isAlphanumeric(this.username)) { 
    this.errors.push("Username can only contain letters and numbers");
  }
  if (this.username.length > 0 && this.username.length < 3) { 
    this.errors.push("Username must be at least 3 characters long");
  }
  if (!this.email || this.email === "") { 
    this.errors.push("Email address is required");
  }
  if (!validator.isEmail(this.email)) { 
    this.errors.push("Email address is invalid");
  }
  if (!this.password || this.password === "") { 
    this.errors.push("Password is required");
  }
  if (this.password.length > 0 && this.password.length < 12) { 
    this.errors.push("Password must be at least 12 characters long");
  }
};

User.prototype.register = function(data) {
  this.validate();
  console.log("input data:", data);
};

export default User;