import { Schema, model } from 'mongoose';
import { Student } from './student.interface';

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  gender: ['male', 'female'],
  email: { type: String, required: true },
  avatar: String,
});
