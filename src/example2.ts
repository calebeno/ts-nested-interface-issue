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
                    return 0; // This should cause an error, not returning a string
                },
                woops: () => {  // Causes error as expected
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
