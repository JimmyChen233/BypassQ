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


