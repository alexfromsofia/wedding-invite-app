const { model, Schema } = require('mongoose');

const guestSchema = new Schema(
  {
    alias: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    customText: {
      type: String,
      trim: true,
    },
    received: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const guestEnums = [
  'alias',
  'name',
  'received',
  'completed',
  'confirmed',
  'customText',
];

const Guest = model('Guest', guestSchema);

module.exports = {
  Guest,
  guestEnums,
};
