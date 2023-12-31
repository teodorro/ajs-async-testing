import GameSavingLoader from '../game-saving-loader';

beforeEach(() => {
  jest.resetAllMocks();
});

test('GameSavingLoader ok', async () => {
  const res = await GameSavingLoader.load();
  // eslint-disable-next-line no-return-await
  expect(res.id).toBe(9);
  expect(res.userInfo.name).toBe('Hitman');
});
