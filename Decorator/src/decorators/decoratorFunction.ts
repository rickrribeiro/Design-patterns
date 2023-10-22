export function multiplier(value: number){
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        // console.log(`target: ${JSON.stringify(target)}`)
        // console.log(`key: ${key}`)
        // console.log(`descriptor: ${JSON.stringify(descriptor)}`)
        descriptor.value = function(...args: any[]) {
            console.log(`multiplying by ${value}`);
            console.log(`args: ${JSON.stringify(args)}`)
            const result = originalMethod.apply(this, args);
            const result2 = originalMethod.apply(this, [2,2]);
            console.log(`Result: ${result}`);
            console.log(`Result2: ${result2}`);
            return result*value;
        };

        return descriptor;
    };
}

export function Operation( operation: any){
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        // console.log(`target: ${JSON.stringify(target)}`)
        // console.log(`key: ${key}`)
        // console.log(`descriptor: ${JSON.stringify(descriptor)}`)
        descriptor.value = function(...args: any[]) {
            console.log(`args: ${JSON.stringify(args)}`)
            const result = originalMethod.apply(this, args);
            const operationO = new operation()
            return operationO.calc(args[0], args[1])
        };

        return descriptor;
    };
}