import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Cors, CorsOptions } from 'aws-cdk-lib/aws-apigateway';
import * as dotenv from "dotenv";
import { Duration } from 'aws-cdk-lib';
dotenv.config()

export class ServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  
    // Create a Lambda function
    const userLambda = new NodejsFunction(this, 'UserLambda', {
      runtime: Runtime.NODEJS_18_X, // Use the appropriate runtime
      entry: process.cwd() + '/lambdas/user.ts', // Update this with the correct file path
      handler: 'user', // Ensure the handler function name is correct
      environment:{
        MONGODB_URL: process.env.MONGODB_URL!,
        GMAIL_USER: process.env.GMAIL_USER!,
        GMAIL_PASS: process.env.GMAIL_PASS!,
      },
      timeout: Duration.minutes(5),
      memorySize: 2048, 
    });

    // Define CORS options for the API Gateway
    const corsPreflightOptions: CorsOptions = {
      allowOrigins: ['*'], // Allow all origins (you can restrict this as needed)
    };

    // Define an API Gateway
    const api = new apigw.RestApi(this, 'UserApi', {
      restApiName: 'User API',
      defaultCorsPreflightOptions: corsPreflightOptions,
    });

    // Create a resource and HTTP method
    const userResource = api.root.addResource('user');

    userResource.addMethod('POST', new apigw.LambdaIntegration(userLambda), {
      apiKeyRequired: false,
    });

    // Output the API endpoint URL
    new cdk.CfnOutput(this, 'UserApiEndpoint', {
      value: api.url,
      description: 'User API Endpoint',
    });
  }
}
