import { TestBed } from '@angular/core/testing';

import { TabelaResolver } from './tabela.resolver';

describe('TabelaResolver', () => {
  let resolver: TabelaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TabelaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
