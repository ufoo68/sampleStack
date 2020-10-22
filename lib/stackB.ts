import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway'

interface StackBProps extends cdk.StackProps {
  handler: lambda.Function
}

export class StackB extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: StackBProps) {
    super(scope, id, props)

    new apigateway.LambdaRestApi(this, `${id}Endpoint`, {
      handler: props.handler,
    })
  }
}