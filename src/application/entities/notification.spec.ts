import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('It should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New content'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
