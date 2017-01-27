import { Aungular2NodeAuthPage } from './app.po';

describe('aungular2-node-auth App', function() {
  let page: Aungular2NodeAuthPage;

  beforeEach(() => {
    page = new Aungular2NodeAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
