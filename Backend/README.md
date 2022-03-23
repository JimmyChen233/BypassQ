# Set up networks 

**Create a VPC**
![image](https://user-images.githubusercontent.com/57895489/148778127-9678341c-4e00-4cdb-b28a-d077f9b05bdd.png)
**Create Subnets**

Subdivide this vpc to 4 subnets, and designate two of those as public subnets where our load balancer will be run and two of those as private subnets where our tasks will be run.

![ap-southeast-2 console aws amazon com_vpc_home_region=ap-southeast-2 (1)](https://user-images.githubusercontent.com/57895489/148779658-f4909faa-45fc-4b89-89d8-2d4c8ce2c152.png)

![image](https://user-images.githubusercontent.com/57895489/148780096-e4dee2ac-6a98-4248-a1c9-f42b69c6ea10.png)

![image](https://user-images.githubusercontent.com/57895489/148780662-4efe9989-2d70-4823-8a92-5c601619b2d6.png)


![image](https://user-images.githubusercontent.com/57895489/148780343-328605a5-1513-434b-9a14-bb9362453652.png)

The subnets should look like this:

![image](https://user-images.githubusercontent.com/57895489/148781044-a5b9a400-3ccb-460b-bab3-90a71a0797f2.png)

**Create internet gateways**

To make public subnets actually public, we need to attach an internet gateway.

First we create an internet gateway

![image](https://user-images.githubusercontent.com/57895489/148781524-8c25d30d-d18d-4184-9429-9e2ca8a71a27.png)

Then we attach it to vpc

![image](https://user-images.githubusercontent.com/57895489/148781944-9c8a1151-dcd8-4242-97d5-0f905c65a39a.png)

![image](https://user-images.githubusercontent.com/57895489/148782180-b9d75931-3ca3-4c85-a4d9-a9452eb0d3a5.png)

![image](https://user-images.githubusercontent.com/57895489/148782282-8196f489-4aaa-4b05-a5a5-2a1fc54daabc.png)


Then we create a route table and attach it to public subnets.

![image](https://user-images.githubusercontent.com/57895489/148782822-07d61999-6bfe-4ef6-87f1-bda3ed92316f.png)

![image](https://user-images.githubusercontent.com/57895489/148782893-351b8603-0b59-42a1-8129-ffbeff717c30.png)

Edit subnet association

![image](https://user-images.githubusercontent.com/57895489/148784334-9b3b76f5-c6de-4a88-b679-5b359e6483fc.png)

Now this route table has only local route, and we want to add route that points to internet gateways.

![image](https://user-images.githubusercontent.com/57895489/148783360-0b9c2b20-aa99-4302-a438-c7c7c261b40b.png)

![image](https://user-images.githubusercontent.com/57895489/148783575-baf5b6cf-c366-435b-82d3-8f510f31c342.png)

Then we create a route table for private subnets

![image](https://user-images.githubusercontent.com/57895489/148783857-984a88dc-f141-4f8b-8c99-819e8a681007.png)


Edit subnet association

![image](https://user-images.githubusercontent.com/57895489/148783986-a5d5fca8-d9c8-434e-84ae-343d6275c958.png)

![image](https://user-images.githubusercontent.com/57895489/148784079-aed349da-9a1a-41e5-907f-1668eaccfc61.png)


# ECS Cluster

![image](https://user-images.githubusercontent.com/57895489/148789442-ba499264-23eb-46fb-934d-5727dc8e6e6a.png)

![image](https://user-images.githubusercontent.com/57895489/148789522-e0e42541-a9a2-4632-8b33-768b1c390a36.png)

![image](https://user-images.githubusercontent.com/57895489/148790092-12fd55b8-6ab5-4753-8074-cbfa78bcf8d2.png)

**Create task definition**

![image](https://user-images.githubusercontent.com/57895489/148790253-2d068af3-5860-4fb8-b898-626285ee14b1.png)

![image](https://user-images.githubusercontent.com/57895489/148790316-bc21221c-fbb7-4b79-96c1-4449d40d71cd.png)

![image](https://user-images.githubusercontent.com/57895489/148791359-9a71e700-dea9-472b-9224-3f101aea056c.png)

![image](https://user-images.githubusercontent.com/57895489/148791617-ebd7355c-4c05-4730-a246-481dee9decd3.png)

![image](https://user-images.githubusercontent.com/57895489/148791723-e47ea743-6cd4-4b06-bb94-948b16fd5479.png)

**Create Service**

![image](https://user-images.githubusercontent.com/57895489/148791863-455ee5d8-2aa9-4189-b760-5f08d212e305.png)

![image](https://user-images.githubusercontent.com/57895489/148791924-e77847e3-9c4a-4aea-8003-b0c2746cd9a9.png)

![image](https://user-images.githubusercontent.com/57895489/148792208-b22fa061-218b-462b-ab49-a8861c14d178.png)

![image](https://user-images.githubusercontent.com/57895489/148792552-aee02cf5-9023-4b73-a233-e5c9b76f1d6d.png)

![image](https://user-images.githubusercontent.com/57895489/148792647-4ab3c01e-f2e1-4870-bc65-443b5bf82169.png)

Then go to create a load balancer

![image](https://user-images.githubusercontent.com/57895489/148792789-e3c12df8-fd47-4aaa-b818-114ce415db83.png)

choose application load balancer

![image](https://user-images.githubusercontent.com/57895489/148792874-42614407-423e-4a1b-95bb-c8b840859872.png)

![image](https://user-images.githubusercontent.com/57895489/148793169-9806adac-49b0-49bd-aebe-036d49fa3078.png)

![image](https://user-images.githubusercontent.com/57895489/148793238-4a2eec6d-2397-4b3a-ab87-f8638efe6d85.png)

create new security group

![image](https://user-images.githubusercontent.com/57895489/148793480-49b55edf-058b-425b-82ae-c0f81a94a687.png)

![image](https://user-images.githubusercontent.com/57895489/148793746-7fbaf4bb-e723-43e4-bf02-8188948b7240.png)

add inbound rules

![image](https://user-images.githubusercontent.com/57895489/148794046-5569a527-598a-423e-94ba-ba169ed3929f.png)

then create

![image](https://user-images.githubusercontent.com/57895489/148794305-822b6871-f984-4bd4-ac45-614a28f107c9.png)

create target group

![image](https://user-images.githubusercontent.com/57895489/148794453-f3d8f450-416f-4535-8c14-41387d001602.png)

![image](https://user-images.githubusercontent.com/57895489/148795935-edc6729c-8908-4b3e-8b1a-c5158d511510.png)

![image](https://user-images.githubusercontent.com/57895489/148795998-a0ac6115-d925-46da-88f7-154cc3e0f87e.png)

![image](https://user-images.githubusercontent.com/57895489/148796216-637c51e8-869a-4624-8047-717f0a9ee659.png)

then create load balancer

**Go back to ECS page**

add to load balancer

![image](https://user-images.githubusercontent.com/57895489/148797073-4dc17e49-534b-4fc5-ad49-c780752fc147.png)

![image](https://user-images.githubusercontent.com/57895489/148798777-13e90f26-e91f-4feb-95f3-1ca28b1787e2.png)

unselect service discovery, then next step, next step, and create.

![image](https://user-images.githubusercontent.com/57895489/148799690-468bb295-bbe4-4f61-ae36-be8a638968c5.png)

![image](https://user-images.githubusercontent.com/57895489/148799744-41948741-0112-43e9-8155-7fbf92af7782.png)

This is because in our task, we need to run npm install, but the private subnet has no internet accessibility.
We don't want to have our tasks in a public subnet that everybody  can access, so we have to add a NAT gateway to our subnet.

![image](https://user-images.githubusercontent.com/57895489/148800532-7e39a5c8-aa07-4c49-a5c6-f4bd733f4704.png)

![image](https://user-images.githubusercontent.com/57895489/148801077-a2b76523-b2f1-4fcd-ab16-946853d28559.png)

then create

**change private route**

Go to route tables, select our private route, and edit routes

![image](https://user-images.githubusercontent.com/57895489/148802222-04b0c2c3-d5ec-41a1-9e3e-b0774ffbbe06.png)

![image](https://user-images.githubusercontent.com/57895489/148802561-80d3c15c-6255-4e48-b1ca-51b935a82c69.png)

and save changes.

Remember that we have allocated a security group to this service. We have to make sure that security group has an inbound rule from thwe security group attached to the elastic load balancer. At the moment we only setup the HTTP access from anywhere but thats not enough. 

Update sercive.

![image](https://user-images.githubusercontent.com/57895489/148803661-fb1b36d3-8d43-4977-9844-d299221d5a32.png)

![image](https://user-images.githubusercontent.com/57895489/148804146-bcfaa97b-7f64-4d1a-9fc5-8bd4a8091184.png)

![image](https://user-images.githubusercontent.com/57895489/148804189-49551fd7-a785-4c1a-a5a0-1a2bd90f8e07.png)

![image](https://user-images.githubusercontent.com/57895489/148804673-af541f20-ade3-4929-bfe2-e7faf4598801.png)
the source  security group is myalbsg
![image](https://user-images.githubusercontent.com/57895489/148804804-07295a7b-70f9-46ca-9130-743d0dbaf5be.png)
the save rules.

**Go back to load balancer**

click listeners

![image](https://user-images.githubusercontent.com/57895489/148806017-317d0467-8c7a-4c60-b73c-05c81af1a0ab.png)

check targets

![image](https://user-images.githubusercontent.com/57895489/148806111-1fd69bc1-dcc8-4027-95f3-1fbcf74cf676.png)

Now they are all healthy. Lets go to load balancer again. Copy DNS name.

![image](https://user-images.githubusercontent.com/57895489/148806314-b45bca60-1488-456a-8f7b-477ce49d842b.png)

![image](https://user-images.githubusercontent.com/57895489/148806458-c25d2942-773b-4f07-b358-1f4f9e5fb2d8.png)
