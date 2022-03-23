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
