'use strict'

class TestClass {

    public testProp: string = 'Default value'

    constructor () {}

    mutateProp (newVal: string = 'value changed but not provided'): void {
        this.testProp = newVal
    }
}

export default TestClass