'use strict'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import TestClass from '@/shared/TestClass'

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