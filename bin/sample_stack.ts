#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SampleStackStack } from '../lib/sample_stack-stack';

const app = new cdk.App();
new SampleStackStack(app, 'SampleStackStack');
