import { LessonPage } from './app.po';

describe('lesson App', () => {
  let page: LessonPage;

  beforeEach(() => {
    page = new LessonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
