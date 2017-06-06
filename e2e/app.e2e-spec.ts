import { SmithdevIoPage } from './app.po';

describe('smithdev-io App', () => {
  let page: SmithdevIoPage;

  beforeEach(() => {
    page = new SmithdevIoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
