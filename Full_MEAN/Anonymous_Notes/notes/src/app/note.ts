export class Note {
  content: {
    type: String;
    required: [true, 'A note must contain content'];
    minlength: 3;
  };
}
