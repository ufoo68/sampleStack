import * as cdk from '@aws-cdk/core'
import { StackA } from '../lib/stackA'
import { StackB } from '../lib/stackB'

const app = new cdk.App()
const { handler } = new StackA(app, 'StackA')
new StackB(app, 'StackB', { handler })
