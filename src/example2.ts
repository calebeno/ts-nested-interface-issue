interface FirstLevel {
    aProperty: SecondLevel;
}

interface SecondLevel {
    aMethod(): ThirdLevel;
}

interface ThirdLevel {
    anotherMethod(): string;
}

let mockUpTwo: FirstLevel = {
    aProperty: {
        aMethod: (): ThirdLevel => {
            return {
                anotherMethod: () => {
                    return 'string';
                },
                woops: () => {  // Causes error as expected
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
