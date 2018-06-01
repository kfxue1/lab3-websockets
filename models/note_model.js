import mongoose, { Schema } from 'mongoose';

const NoteModel = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
});

// create model class
const Note = mongoose.model('Note', NoteModel);
export default Note;
