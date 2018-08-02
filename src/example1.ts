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
                    return 0; // This should cause an error, not returning a string
                },
                woops: () => {  // This should cause an error, not defined in the interface
                    return 0;
                }
            };
        },
        wrongAgain: () => {  // This should cause an error, not defined in the interface
            return 0;
        }
    },
    shouldNotBeHere: 'string'  // Causes error as expected
};
