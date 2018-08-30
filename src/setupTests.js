import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fs from 'fs';
import rimraf from 'rimraf'

configure({ adapter: new Adapter() });
let alreadyRun = false;

global.beforeEach(()=> {
  if (alreadyRun) return
  alreadyRun = true
  rimraf.sync('/tmp/parts')
  fs.mkdirSync('/tmp/parts')
})
