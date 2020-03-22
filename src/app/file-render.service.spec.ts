import { TestBed } from '@angular/core/testing';

import { FileRenderService } from './file-render.service';

describe('FileRenderService', () => {
  let service: FileRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
