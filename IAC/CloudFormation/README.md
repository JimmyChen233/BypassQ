# AWS_Cloudformation_FrontEnd

_IaC for React app Front End_

**Prerequisite**

1. aws cli installed and login.

2. Clone the repository 
  ```git clone git@github.com:SpyralC/AWS_Cloudformation_FrontEnd.git```
  
3. Register a domain in Route 53. This will create a hosted zone automatically when your registration of doamin is succeeded. We will use that hosted zone in this tutorial. Note that this default hosted zone has exactly the same name servers as our domain. If you create another hosted zone, it will be allocated to random name servers. Name servers for a hosted zone are fixed when generated. Some DNS providers can take 24–48 hours to propagate DNS records.  This can lead to more time spent on acm validation.

Copy your hosted zone id.
![image](https://user-images.githubusercontent.com/57895489/150567797-e4ce1972-2820-49d2-9117-f09ba47101e7.png)


**Cloudformation**

change directory to IaC
```
cd AWS_Cloudformation_FrontEnd/IaC
```
#Step 1: Create S3 Buckets

In file _s3.yml_, customise parameters default values. You should always check parameters before creating a stack. 
![image](https://user-images.githubusercontent.com/57895489/150568433-c71ef335-24fb-4429-955b-12a54f25bd55.png)

run command ```aws cloudformation create-stack --stack-name s3 --template-body file://$PWD/s3.yml```

If you want to delete a stack later, use ```aws cloudformation delete-stack --stack-name s3 ```
Note: stack name must be unique.
![image](https://user-images.githubusercontent.com/57895489/150569354-f5a09b15-0b0e-4814-806f-779775d016cb.png)

In file _r53.yml_, place the hosted zone id with yours.
![image](https://user-images.githubusercontent.com/57895489/150569939-d8a7c8ab-3508-41df-8038-18df17f27b8c.png)

#Step 2: Add A Records to Hosted Zone

We will create three A Records in this stack.

![image](https://user-images.githubusercontent.com/57895489/150570440-5f86412f-7355-4d6d-8319-9cc69016b91e.png)
Here we determinate a route that alias to AWS S3 weisite endpoint. Since the region is fixed to ap-southeast-2(Sydney) in this tutorial, you can get the applicable value using the AWS CLI command ```get-domain-names```, or find the regional hosted zone id here: _https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints_

For our alb record, I just import values from my previus back-end IaC stack. Of course you can do it manually.
![image](https://user-images.githubusercontent.com/57895489/150574060-31e44065-72ce-493a-a9b9-73f021c6b53e.png)

I add _dualstack._ prefix in my domain name because it allows clients to connect from both IPv4 and IPv6. 
![image](https://user-images.githubusercontent.com/57895489/150574682-09a37008-460e-403e-9e7e-1a3456cc2dc5.png)

run ```aws cloudformation create-stack --stack-name r53 --template-body file://$PWD/r53.yml```

#Step 3: Request a certificate in AWS Certificate Manager

We need to create a certificate in us-east-1 manually first to create a stack with CloudFront. But I would like to have my certificate to be deployed from within the same CloudFormation template with my other ymls. 

Here is a try

```aws --region us-east-1 cloudformation create-stack --stack-name acm --template-body file://$PWD/acm.yml```

It will request a public certificate with three domains, and create three CNAME Records automatically. But the stack is in us-east-1, and our main stacks are in sydney. Since we only need this certificate, we can copy the certificate ARN manually. (Still ugly, but this is the easiest wasy) Or we can use a custom resource to pass the arn to a lambda function that outputs to an SSM parameter that can be read by the main template and output. See: _https://github.com/aws-cloudformation/cloudformation-coverage-roadmap/issues/523_

#Step 4: Create a distribution in CloudFront

```aws cloudformation create-stack --stack-name cloudfront --template-body file://$PWD/cloudfront.yml ```

Cache policy can be found here:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html

#Step 5: Update records in Route 53

To be continued ...
