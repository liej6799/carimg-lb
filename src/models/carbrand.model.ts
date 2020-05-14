import {Entity, model, property} from '@loopback/repository';

@model()
export class Carbrand extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  country?: string;


  constructor(data?: Partial<Carbrand>) {
    super(data);
  }
}

export interface CarbrandRelations {
  // describe navigational properties here
}

export type CarbrandWithRelations = Carbrand & CarbrandRelations;
