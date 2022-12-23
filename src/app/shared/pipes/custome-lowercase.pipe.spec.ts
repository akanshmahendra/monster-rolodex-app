import { CustomeLowercasePipe } from './custome-lowercase.pipe';

describe('CustomeLowercasePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomeLowercasePipe();
    expect(pipe).toBeTruthy();
  });
});
