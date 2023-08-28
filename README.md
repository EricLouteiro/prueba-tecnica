## Backend Test developed in NestJs Framework

### You could try this service at this URL [Render.com](https://prueba-tecnica-ericlouteiro.onrender.com)

If you wish to run the proyect locally, you can run docker compose up -d, this command will retrieve the proyect image wich is in ericlouteiro/ Docker registry, or you could build it executing the command docker build -t elouteiro/prueba-tecnica:latest . and then run docker compose up -d

# Content

You can find the code of first part of the test at src/helpers/testHelper.ts

### Here is the available endpoints:

### /api/test1:

Payload

**{**
**inputData: (){}[]**
**}**

### /api/test2:

Payload

**{**
**arrData: [ [1,2,3], [4,5,6], [7,8,9] ]**
**}**

# Module Transaction:

You have to login whit an user and password to operate this module

Send token authorization in Headers like this:

**token: token.genetaded.afterlogin\***

## Endpoints:

### POST /api/transaction with payload:

**{
**amount: number Required**,
**description: string, Optional\*\*
**currency: string Optional**
\*\*}

### GET /api/transaction :

Retrieve all active transactions for the User

### GET /api/transaction/:id :

Retrieve transaction by ID specified in Params

### PATCH /api/transaction/:id with payload:

**{**
**description: string;**
**}**
Update transaction by specified ID

### DELETE /api/transaction/:id :

Update transaction by specified ID changing status to False

# Module Auth

## Endpoints:

### POST /api/auth with payload:

**{**
**email: string _Existing email_,**
**password: string Required\*\***
**}**

### POST /api/register with payload:

{
name: string **required**
email: string **required**
password: string **required**
}

# Module User:

## Endpoints:

### POST /api/user with payload:

**{**
**name: string required\*\***
**email: string required\*\***
**password: string required\*\***
**}**
This method creates a user

### GET /api/user :

Retrieve all active Users

### GET /api/user/:id :

Retrieve user by especified Id

### PATCH /api/user/:id with payload:

**{**
**name: string _Optional_;**
**email?: string _Optional_;**
**password?: string _Optional_;**
**}**
Update User by specified ID

### DELETE /api/user/:id :

Update user by specified ID changing status to False
