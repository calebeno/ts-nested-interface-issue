interface TopLevel {
    aProperty: {
        aMethod(): {
            anotherMethod(): string
        }
    };
}

let mockup: TopLevel = {
    aProperty: {
        aMethod: () => {
            return {
                anotherMethod: () => {
                    return 'string';
                },
                woops: () => {  // Why does adding this not cause an error?
                    return 0;
                }
            };
        },
        wrongAgain: () => {  // Why does adding this not cause an error?
            return 0;
        }
    },
    unacceptable: 'string'  // Causes error
};
