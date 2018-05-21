import { AppAngularMaterialLoaderModule } from './app-angular-material-loader.module';

describe('AppAngularMaterialLoaderModule', () => {
  let appAngularMaterialLoaderModule: AppAngularMaterialLoaderModule;

  beforeEach(() => {
    appAngularMaterialLoaderModule = new AppAngularMaterialLoaderModule();
  });

  it('should create an instance', () => {
    expect(appAngularMaterialLoaderModule).toBeTruthy();
  });
});
