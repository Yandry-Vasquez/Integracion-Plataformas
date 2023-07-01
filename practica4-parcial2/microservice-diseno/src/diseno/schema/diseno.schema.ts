import * as mongoose from 'mongoose';

export const DisenoSchema = new mongoose.Schema(
  {
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    experiencia: { type: String, required: true },

  },
  { timestamps: true },
);

DisenoSchema.index({ nombre: 1 }, { unique: true });
DisenoSchema.index({ identificacion: 1 }, { unique: true });
