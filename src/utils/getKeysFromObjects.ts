export function getKeysFromObjectArray(inputArray: any[]) {
  const collectedKeys: string[] = [];

  for (const obj of inputArray) {
    const currentKeys = Object.keys(obj);
    const uniqueKeys = currentKeys.filter(
      (key) => !collectedKeys.includes(key)
    );

    collectedKeys.push(...uniqueKeys);
  }

  return collectedKeys;
}
