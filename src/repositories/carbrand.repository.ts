import {DefaultCrudRepository} from '@loopback/repository';
import {Carbrand, CarbrandRelations} from '../models';
import {CarimgdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CarbrandRepository extends DefaultCrudRepository<
  Carbrand,
  typeof Carbrand.prototype.id,
  CarbrandRelations
> {
  constructor(
    @inject('datasources.carimgdb') dataSource: CarimgdbDataSource,
  ) {
    super(Carbrand, dataSource);
  }
}
