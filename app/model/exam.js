module.exports = app => {
  const mongoose = app.mongoose
  const ExamSchema = new mongoose.Schema({
    no: { type: String, required: true },
    name: { type: String, required: true },
    grade: { type: Number, required: true },
    course: { type: String, required: true },
    status:{ type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
  })
  return mongoose.model('Exam', ExamSchema)
}
