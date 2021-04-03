import GameSavingLoader from '../app';

test('testing the loading methode', async () => {
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const result = await GameSavingLoader.load();
  expect(result).toBe(expected);
});
