import { EnvironmentVariables } from './env.interface';
import { EnvironmentService } from './env.service';

describe('EnvironmentService', () => {

  describe('root', () => {
    it('should return all environments variables', () => {
      const envVariables: EnvironmentVariables = EnvironmentService.getAll();

      expect(EnvironmentService.getAll()).toBeDefined();
      expect(envVariables).toHaveProperty('node_env');
      expect(envVariables).toHaveProperty('port');
      expect(Object.keys(envVariables).length).toBeGreaterThan(1);
    });

    it('should return an environment variable using the key', () => {
      const envVariable: string = EnvironmentService.getValue('node_env');

      expect(envVariable).toBeDefined();
    });
  });
});
