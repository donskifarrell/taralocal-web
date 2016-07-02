import { TaralocalWebPage } from './app.po';

describe('taralocal-web App', function() {
  let page: TaralocalWebPage;

  beforeEach(() => {
    page = new TaralocalWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
