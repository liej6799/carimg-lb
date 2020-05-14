import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Carbrand} from '../models';
import {CarbrandRepository} from '../repositories';

export class CarbrandController {
  constructor(
    @repository(CarbrandRepository)
    public carbrandRepository : CarbrandRepository,
  ) {}

  @post('/carbrands', {
    responses: {
      '200': {
        description: 'Carbrand model instance',
        content: {'application/json': {schema: getModelSchemaRef(Carbrand)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carbrand, {
            title: 'NewCarbrand',
            exclude: ['id'],
          }),
        },
      },
    })
    carbrand: Omit<Carbrand, 'id'>,
  ): Promise<Carbrand> {
    return this.carbrandRepository.create(carbrand);
  }

  @get('/carbrands/count', {
    responses: {
      '200': {
        description: 'Carbrand model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Carbrand) where?: Where<Carbrand>,
  ): Promise<Count> {
    return this.carbrandRepository.count(where);
  }

  @get('/carbrands', {
    responses: {
      '200': {
        description: 'Array of Carbrand model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Carbrand, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Carbrand) filter?: Filter<Carbrand>,
  ): Promise<Carbrand[]> {
    return this.carbrandRepository.find(filter);
  }

  @patch('/carbrands', {
    responses: {
      '200': {
        description: 'Carbrand PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carbrand, {partial: true}),
        },
      },
    })
    carbrand: Carbrand,
    @param.where(Carbrand) where?: Where<Carbrand>,
  ): Promise<Count> {
    return this.carbrandRepository.updateAll(carbrand, where);
  }

  @get('/carbrands/{id}', {
    responses: {
      '200': {
        description: 'Carbrand model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Carbrand, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Carbrand, {exclude: 'where'}) filter?: FilterExcludingWhere<Carbrand>
  ): Promise<Carbrand> {
    return this.carbrandRepository.findById(id, filter);
  }

  @patch('/carbrands/{id}', {
    responses: {
      '204': {
        description: 'Carbrand PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carbrand, {partial: true}),
        },
      },
    })
    carbrand: Carbrand,
  ): Promise<void> {
    await this.carbrandRepository.updateById(id, carbrand);
  }

  @put('/carbrands/{id}', {
    responses: {
      '204': {
        description: 'Carbrand PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() carbrand: Carbrand,
  ): Promise<void> {
    await this.carbrandRepository.replaceById(id, carbrand);
  }

  @del('/carbrands/{id}', {
    responses: {
      '204': {
        description: 'Carbrand DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.carbrandRepository.deleteById(id);
  }
}
