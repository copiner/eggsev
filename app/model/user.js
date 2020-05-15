module.exports = app => {
  const mongoose = app.mongoose
  const UserSchema = new mongoose.Schema({
    realName: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now }
  })
  return mongoose.model('User', UserSchema)
}
