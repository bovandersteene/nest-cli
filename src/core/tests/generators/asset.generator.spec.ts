import {Generator} from '../../../common/interfaces/generator.interface';
import {AssetEnum} from '../../../common/enums/asset.enum';
import {AssetGenerator} from '../../generators/asset.generator';
import {expect} from 'chai';
import * as sinon from 'sinon';
import {ModuleGenerator} from '../../generators/module.generator';
import {ControllerGenerator} from '../../generators/controller.generator';
import {ComponentGenerator} from '../../generators/component.generator';

describe('AssetGenerator', () => {
  let sandbox: sinon.SinonSandbox;
  beforeEach(() => sandbox = sinon.sandbox.create());
  afterEach(() => sandbox.restore());

  let generator: Generator;
  describe('#generate()', () => {
    let generateStub: sinon.SinonStub;

    it('should use the ModuleGenerator.generate()', done => {
      generator = new AssetGenerator(AssetEnum.MODULE);
      generateStub = sandbox.stub(ModuleGenerator.prototype, 'generate').callsFake(() => Promise.resolve());
      generator.generate('name')
        .then(() => {
          expect(generateStub.calledOnce).to.be.true;
          done();
        })
        .catch(done);
    });

    it('should use the ControllerGenerator.generate()', done => {
      generator = new AssetGenerator(AssetEnum.CONTROLLER);
      generateStub = sandbox.stub(ControllerGenerator.prototype, 'generate').callsFake(() => Promise.resolve());
      generator.generate('name')
        .then(() => {
          expect(generateStub.calledOnce).to.be.true;
          done();
        })
        .catch(done);
    });

    it('should use the ComponentGenerator.generate()', done => {
      generator = new AssetGenerator(AssetEnum.COMPONENT);
      generateStub = sandbox.stub(ComponentGenerator.prototype, 'generate').callsFake(() => Promise.resolve());
      generator.generate('name')
        .then(() => {
          expect(generateStub.calledOnce).to.be.true;
          done();
        })
        .catch(done);
    });
  });
});