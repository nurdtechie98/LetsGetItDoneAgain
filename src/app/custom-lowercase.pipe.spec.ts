import { CustomLowercasePipe } from './custom-lowercase.pipe';
import { LowerCasePipe } from '@angular/common';

describe('CustomLowercasePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomLowercasePipe(new LowerCasePipe());
    expect(pipe).toBeTruthy();
  });
});
