import GameSavingLoader from '../game-saving-loader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('GameSavingLoader error', async () => {
  read.mockReturnValue(new ArrayBuffer(0));
  const res = await GameSavingLoader.load();
  // eslint-disable-next-line no-return-await
  expect(res).toBe('error saving game');
});
