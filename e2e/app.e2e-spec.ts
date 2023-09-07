import { MfTemplatePage } from './app.po';

describe('Mf App', function() {
  let page: MfTemplatePage;

  beforeEach(() => {
    page = new MfTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
