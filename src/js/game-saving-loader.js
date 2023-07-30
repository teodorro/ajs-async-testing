import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
  static async load() {
    const binData = await read();
    const jsonData = await json(binData);
    return new Promise((resolve) => {
      const gsJson = JSON.parse(jsonData);
      const gameSaving = new GameSaving(
        gsJson.id,
        gsJson.created,
        gsJson.userInfo.id,
        gsJson.userInfo.name,
        gsJson.userInfo.level,
        gsJson.userInfo.points,
      );
      resolve(gameSaving);
    }).catch((error) => {
      console.log(error);
    });
  }
}
