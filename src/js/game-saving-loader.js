import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
  static async load() {
    try {
      const binData = await read();
      const jsonData = await json(binData);
      const gsJson = JSON.parse(jsonData);
      const gameSaving = new GameSaving(
        gsJson.id,
        gsJson.created,
        gsJson.userInfo.id,
        gsJson.userInfo.name,
        gsJson.userInfo.level,
        gsJson.userInfo.points,
      );
      return gameSaving;
    } catch (error) {
      return 'error saving game';
    }
  }
}
