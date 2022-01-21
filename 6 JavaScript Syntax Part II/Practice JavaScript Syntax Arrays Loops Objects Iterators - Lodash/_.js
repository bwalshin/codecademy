
const _ = {
// _.clamp()
    clamp(number, lower,upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
            return clampedValue
    },

//.inRange()
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0
        }
        if (start > end) {
            const temp = end;
            end = start;
            start = temp
        }
        const isInRange = (start <= number && number < end)
            return isInRange
    },

//.words()
    words(string) {
        const words = string.split(' ');
            return words
    },
//.pad()
    pad(string, length) {
        if (length <= string.length) {
            return string
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = (length - string.length - startPaddingLength);
        const paddedString =
        ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
            return paddedString
    },
//.has()
    has(object, key) {
        let hasValue = object[key];
        if (hasValue !== undefined) {
            return true
        } else {
            return false
        }
    },
//_.invert()
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            let originalValue = object[key]
            invertedObject[originalValue] = key
        }
        return invertedObject;
    },
//_.findKey()
    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key]
            let predicateReturnValue = value
            if (predicate(value)) {
                return key
            } else {
                return undefined
            }
        }
    },
//_.drop()
    drop(array, num) {
        if (num === undefined) {
            num = 1
            return array.slice(number, array.length);
        }
        let droppedArray = array.slice(num, array.length)
        return droppedArray
    },
//_.dropWhile()
    dropWhile(arr, predicate) {
        const callback = (element, index) => {
            return !predicate(element, index, arr)
        }
        let dropNumber = arr.findIndex(callback);
        let dropedArray = this.drop(arr, dropNumber);
        return dropedArray
    },
//_.chunck()
    chunk(array, size) {
        if (size === undefined) {
            let size = 1
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i+ size) {
            let arrayChunk = array.slice(i, i+= size);
            arrayChunks.push(arrayChunk);
        }
            return arrayChunks;
    }
};



// Do not write or modify code below this line.
module.exports = _;