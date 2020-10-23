import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";

const AccountSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    roles: {
      type: [String],
      required: true
    },
    provider: {
      type: String
    },
    accessToken: {
      type: String
    },
    refreshToken: {
      type: String
    },
    active: {
      type: Boolean
    }
  },
  { timestamps: true }
);

AccountSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

AccountSchema.pre('save', function (next) {
  if (this.isNew && !this.isModified('password')) return next();

  try {
    this.password = bcrypt.hashSync(this.password, 10);
    return next();
  } catch (err) {
    return next(err);
  }
});

export default mongoose.model("Account", AccountSchema);
