/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoHabitacionService } from './tipo-habitacion.service';

describe('Service: TipoHabitacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoHabitacionService]
    });
  });

  it('should ...', inject([TipoHabitacionService], (service: TipoHabitacionService) => {
    expect(service).toBeTruthy();
  }));
});
