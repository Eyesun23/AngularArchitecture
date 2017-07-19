import { LayoutAngularPage } from './app.po';

describe('layout-angular App', () => {
  let page: LayoutAngularPage;

  beforeEach(() => {
    page = new LayoutAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
