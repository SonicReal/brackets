module.exports = function check(str, bracketsConfig) {
    const map = {};
    for (const cnf of bracketsConfig) {
        map[cnf[0]] = cnf[0] !== cnf[1] ? cnf[1] : 'same';
    }
    if (str.length === 0) {
        return true;
    }
    if (str.length % 2 === 1) {
        return false;
    }
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        if (map[current]) {
            if (map[current] !== 'same' || stack[stack.length - 1] !== current) {
                stack.push(current);
            } else {
                stack.pop();
            }
            continue;
        }
        if (map[stack[stack.length - 1]] === current) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}
