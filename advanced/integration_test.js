// JavaScript 中嵌入 YAML 流程
import { runYAMLSuite } from '../utils/test_helpers.js';

class IntegrationTest {
  async runFullTestCycle() {
    // 1. 先用JS准备环境
    await this.setupTestEnvironment();
    
    // 2. 运行YAML定义的基础流程
    await runYAMLSuite('./suites/basic_flows.yaml');
    
    // 3. 用JS进行深度验证
    await this.validateBusinessRules();
    
    // 4. 再次运行YAML流程验证稳定性  
    await runYAMLSuite('./suites/cla_signing.yaml');
  }
}