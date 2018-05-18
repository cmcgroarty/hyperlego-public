import { DJRequestModule } from './djrequest.module';

describe('DJRequestModule', () => {
  let djrequestModule: DJRequestModule;

  beforeEach(() => {
    djrequestModule = new DJRequestModule();
  });

  it('should create an instance', () => {
    expect(djrequestModule).toBeTruthy();
  });
});
