import {pull, push, getUnique, arrayJoin, removeByIndex} from '../array';

test('pull', () => {
    const fromArray = [1, 2];
    const result = pull(fromArray, 3);
    expect(result).toStrictEqual([3, 1, 2]);
    expect(fromArray).toEqual([1, 2]);
});

test('push', () => {
    const fromArray = [1, 2];
    const result = push(fromArray, 3);
    expect(result).toStrictEqual([1, 2, 3]);
    expect(fromArray).toEqual([1, 2]);
});

test('removeByIndex', () => {
    const fromArray = [1, 2, 3];
    const result = removeByIndex(fromArray, 1);
    expect(result).toStrictEqual([1, 3]);
    expect(fromArray).toEqual([1, 2, 3]);
});


test('getUnique', () => {
    expect(getUnique([1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
});


test('arrayJoin', () => {
    const anyString: any = 'uploads.profile';
    expect(arrayJoin(['uploads', 'profile'], '/')).toBe('uploads/profile');
    expect(arrayJoin(anyString, '/')).toBe('');
});
