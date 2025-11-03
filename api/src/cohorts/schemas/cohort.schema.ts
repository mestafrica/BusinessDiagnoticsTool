import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Program } from '../../programs/schemas/program.schema';

export type CohortDocument = HydratedDocument<Cohort>;

@Schema({ timestamps: true })
export class Cohort {
  @Prop({
    required: true,
    ref: Program.name,
    type: mongoose.Schema.Types.ObjectId,
  })
  program: Program;

  @Prop()
  name: string;
}

export const CohortSchema = SchemaFactory.createForClass(Cohort);
