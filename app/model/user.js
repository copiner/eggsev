module.exports = app => {
  const mongoose = app.mongoose
  const UserSchema = new mongoose.Schema({
    no: { type: String, required: true },
    name: { type: String, required: true },
    course: { type: String, required: true },
    grade:{ type: Number, required: true },
    limit:{ type: Number, required: true },
    status:{ type: Boolean, required: true },
    supOut:{ type: [String] },
    subOut:{ type: [String] },
    createdAt: { type: Date, default: Date.now }
  })
  return mongoose.model('User', UserSchema)
}
