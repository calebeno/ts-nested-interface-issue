interface TopLevel {
    aProperty: {
        aMethod(): {
            anotherMethod(): string
        }
    };
}

let mockUp: TopLevel = {
    aProperty: {
        aMethod: () => {
            return {
                anotherMethod: () => {
                    return 'string';
                },
                woops: () => {  // This should cause an error, not defined in the interface
                    return 0;
                }
            };
        },
        wrongAgain: () => {  // Causes error as expected
            return 0;
        }
    },
    shouldNotBeHere: 'string'  // This should cause an error, not defined in the interface
};
