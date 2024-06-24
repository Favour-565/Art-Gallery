// import * as cdk from 'aws-cdk-lib';
// import * as ses from 'aws-cdk-lib/aws-ses';
// import { Construct } from 'constructs';

// export class SesStack extends cdk.Stack {
//   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);

//     // Create an SES identity (e.g., a verified email address)
//     // new ses.CfnEmailIdentity(this, 'SesIdentity', {
//     //   emailIdentity: 'ajiriosiobe@gmail.com', // Replace with your verified email address
//     // });

//     const emailTemplate = new ses.CfnTemplate(this, 'EmailTemplate', {
//         template: {
//             subjectPart: 'Hello, {{name}}!',
//             htmlPart: '<p>Hello, {{name}}!</p>',
//             textPart: 'Hello, {{name}}!', 
//         }
//     });

//     // Define an email template or any other SES configurations
//     // ...
//   }
// }
