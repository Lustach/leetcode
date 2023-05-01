function isValid(s) {
    var stack = [];
    var parentheses = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (parentheses[char]) {
            stack.push(char);
        }
        else {
            var lastOpenParen = stack.pop();
            if (parentheses[lastOpenParen] !== char)
                return false;
        }
    }
    return stack.length === 0;
}
