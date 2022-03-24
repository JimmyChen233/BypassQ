# AWS-Frontend

# Step 1: Register domain in Route 53

![image](https://user-images.githubusercontent.com/57895489/159733899-eb3a6b19-bfe8-4c5f-ac19-d534fa637712.png)

_For example: bypassq.link_

![image](https://user-images.githubusercontent.com/57895489/159734238-c95716be-18bf-4a9f-9971-4473ed77469b.png)

Fill in details and register the domain

# Step 2: Create S3 buckets

a) Please ensure names of S3 buckets are exactly the same with your domain (bypassq.link) and subdomain (www.bypassq.link)

b) Select a region for your app (ap-southeast-2 is using for this tutorial)

c) Enable the Bucket Versioning

d) Remain the rest and create the bucket

# Step 3: Change properties and permissions of S3 buckets

For the domain bucket (bypassq.link):

Under the properties page, find the section Static website hosting and click Edit

![image](https://user-images.githubusercontent.com/57895489/159734663-3065f1df-58cc-410c-ab27-56a48e1e3c2a.png)

Under the permissions page, find the section Cross-origin resource sharing (CORS) and click Edit

Attach CORS policy for the domain bucket

```
[
    {
        "AllowedHeaders": [],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]
```

AllowedMethods: please check with the developer

AllowedOrigins: the best practice should be "https://Your-Bucket-Name"

For the subdomain bucket (www.bypassq.link):

Under the properties page, find the section Static website hosting and click Edit

![image](https://user-images.githubusercontent.com/57895489/159735260-19181c39-c110-4643-8630-8e6c70f3d90d.png)

Please note that we do not need to edit Block public access (bucket settings) if we use Cloudfront

#  Step 4: Create hosted zone

![image](https://user-images.githubusercontent.com/57895489/159735609-e9bd17ef-f1d5-4cce-a7c1-1a87406a4c97.png)

Click into the Hosted zone just created and choose Create record.

(Switch to wizard if you have a different UI) Choose Simple routing, and choose Next.

![image](https://user-images.githubusercontent.com/57895489/159735684-2ce2271c-4f7d-4c08-826f-e354a79ecd58.png)

Choose Define simple record.

In Record name, accept the default value, which is the name of your hosted zone and your domain.

In Value/Route traffic to, choose Alias to S3 website endpoint.

Choose the Region and the S3 bucket.

For Evaluate target health, choose Yes.

![image](https://user-images.githubusercontent.com/57895489/159735736-106790f9-61da-4d21-8dc1-c59095530171.png)

To add an alias record for your subdomain

![image](https://user-images.githubusercontent.com/57895489/159735816-21251d30-000b-4769-9641-55f8bec526ff.png)

On the Configure records page, choose Create records.

# Step 5: Request a certificate in AWS Certificate Manager

Please ensure the region is us-east-1 before doing anything

![image](https://user-images.githubusercontent.com/57895489/159735979-b44fac5c-d7c8-4e3e-bb8f-98e917ee3a67.png)

![image](https://user-images.githubusercontent.com/57895489/159736027-006d1e51-c81f-487d-b836-b5e28856da58.png)

![image](https://user-images.githubusercontent.com/57895489/159735856-432d12fa-43f5-4c94-8abf-6702717c3337.png)

DNS Validation

![image](https://user-images.githubusercontent.com/57895489/159736059-a483c229-b184-45e9-867d-1b2679d68926.png)

Please confirm all nameservers in Hosted Zone and Registered Domain are identical

![image](https://user-images.githubusercontent.com/57895489/159736109-226043eb-bde0-465f-92eb-916e7b743838.png)

Your new certificate might continue to display a status of Pending validation for up to 30 minutes

After the verification is successful, you will see that the status of your certificate becomes Issued, and there are 3 more records in the Hosted Zone of Route 53.

# Step 6： Create a distribution in CloudFront

![image](https://user-images.githubusercontent.com/57895489/159743862-e1904488-b3a0-4521-b720-55673e50c0d9.png)
![image](https://user-images.githubusercontent.com/57895489/159743954-9888eee8-936e-4d64-8f3c-b5c92bc399b4.png)
![image](https://user-images.githubusercontent.com/57895489/159744008-92066457-7514-4ca5-bae5-4c7a5e18f472.png)
![image](https://user-images.githubusercontent.com/57895489/159744054-d61fb3b9-9790-4cd8-a48f-69ff01f865d0.png)
![image](https://user-images.githubusercontent.com/57895489/159744073-7d8ac579-560b-49e3-ad0e-38303e98b187.png)


# Step 7: Update records in Route 53

Under Records, select the type A record of your domain and subdomain.

Domain: bypassq.link
![image](https://user-images.githubusercontent.com/57895489/159744323-2bbfd7c6-a0d5-41f6-9fad-b167c1f46720.png)

Subdomain: www.bypassq.link
![image](https://user-images.githubusercontent.com/57895489/159744388-c70a8f24-ca48-4125-bf99-d234c14a3c0b.png)

# Step 8: Confirm the S3 bucket policy

Substitute YOUR_DOMAIN_BUCKET and YOUR_OAI
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "1",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity YOUR_OAI"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR_DOMAIN_BUCKET/*"
        }
    ]
}
```

# References:

1. https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html#website-hosting-custom-domain-walkthrough-domain-registry
2. https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html
3. https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-cloudfront-walkthrough.html

