
/**
 * 文本中的每個單詞以大寫字母開頭
 * ex: helloWorld -> HelloWorld
 *
 * @param str 需要轉換的字串
 */
export function toCapitalize(str: string): string {
    return str.replace(/\b(\w)/g, $1 => $1.toUpperCase());
}


/**
 * 大寫底線轉小駝峰
 * ex: Hello_World -> helloWorld
 *
 * @param str 需要轉換的字串
 */
export function upperLineToLowerCase(str: string): string {
    return str.toLowerCase().replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}


/**
 * 語言代碼格式轉換
 * ex: en-us -> en-US
 *
 * @param localeCode 需要轉換的字串lowerLocaleToISOCode
 */
export function lowerLocaleToISOCode(localeCode: string) {
    const result = localeCode.replace(/\-(.*)/g, $1 => $1.toUpperCase());
    return result.replace(/(.*)+\-/g, $1 => $1.toLowerCase());
}



/**
 * 小駝峰轉大寫底線
 * ex: helloWorld -> HELLO_WORLD
 *
 * @param str 需要轉換的字串
 */
export function lowerCaseToUpLineCase(str: string): string {
    return str.replace(/([A-Z])/g,'_$1').toUpperCase();
}




/**
 * 依需求位數補0
 * ex: 69 -> 0069
 *
 * @param val 需要轉換得字串|數字
 * @param length 補滿長度
 */
export function paddingLeft(val: string|number, length: number): string {
    const replaceStr = String(val);
    if (replaceStr.length < length) {
        return paddingLeft(`0${replaceStr}`, length);
    }
    return replaceStr;
}


/**
 * 字串分割 (發生例外錯誤回傳 空陣列)
 *
 * @param str
 * @param separator
 */
export function stringSplit(str: string, separator: string): string[]{

    try {
        return str.split(separator);
    } catch (err) {}

    return [];
}



/**
 * Json Decode
 * ex: {'name':'jack"} -> {
 *     name: 'jack'
 * }
 *
 * @param jsonString
 */
export function decodeToJson<T = unknown>(jsonString: string): T|undefined{
    try {
        const obj = JSON.parse(jsonString);
        if (obj && typeof obj === 'object' && obj !== null) {
            return obj;
        }
    } catch (err) {}

    return undefined;
}

