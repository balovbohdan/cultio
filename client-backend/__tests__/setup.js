global.console.error = jest.fn();

expect.extend({
    toBeType(received, arg) {
        const initialType = typeof received;

        const type = initialType === 'object'
            ? Array.isArray(received)
                ? 'array'
                : initialType
            : initialType;

        return {
            pass: type === arg,
            message: () => `Expected '${received}' to be type '${arg}'`
        };
    }
});