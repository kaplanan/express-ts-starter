'use strict'

import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import TestClass from '../../src/shared/TestClass'

const { expect } = chai
chai.should()
chai.use(chaiAsPromised)

const testClass = new TestClass()

describe('TestClass', () => {
    it('should be the entered value', (done) => {
        testClass.mutateProp('newnew')
        expect(testClass.testProp).to.equal('newnew')
        done()
    })
})