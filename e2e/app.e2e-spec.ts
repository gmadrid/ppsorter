import { PpsorterPage } from './app.po';

describe('ppsorter App', function() {
  let page: PpsorterPage;

  beforeEach(() => {
    page = new PpsorterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
