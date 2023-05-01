function isValid(s: string): boolean {
    const stack: string[] = [];
    const parentheses = { 
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (parentheses[char]) {
            stack.push(char);
        } else {
            const lastOpenParen = stack.pop();
            if (parentheses[lastOpenParen] !== char) return false;
        }
    }
    return stack.length === 0;
}