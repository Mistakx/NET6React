// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

export default function isEmptyObject(obj: Object) {
    let name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
}

