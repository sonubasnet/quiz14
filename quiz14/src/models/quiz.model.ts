import {Entity, model, property} from '@loopback/repository';

@model()
export class Quiz extends Entity {

  constructor(data?: Partial<Quiz>) {
    super(data);
  }
}

export interface QuizRelations {
  // describe navigational properties here
}
export class Product extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;
}

export type QuizWithRelations = Quiz & QuizRelations;
