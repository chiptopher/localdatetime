export function toValues<T>(dictionary: { [name: string]: T }): T[] {
    const result: T[] = [];
    for (let key in dictionary) {
        result.push(dictionary[key]);
    }
    return result;
}
