## HNG Internship (Backend Track)
## (Stage Two Task)


# API SERVER WITH CRUD CAPABILITIES

REST API capable of CRUD operations on a "person" resource, interfacing with MongoDB.   Host your entire project on GitHub, and provide a well-structured documentation in the repository that outlines request/response formats, setup instructions, and sample API usage.


## Table of Contents

- [Project Title](#project-title)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Demo](#demo)
- [Modelling Diagrams](#modelling-diagrams)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tests](#tests)
- [Deployment](#deployment)
- [Project Instruction](#project-instruction)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)


## Description

API dynamically handles parameters, such as adding or retrieving a person by name. Accompanied the development with UML diagrams to represent project's system's design and database structure. Equipped with endpoints to:
- `CREATE`: Adding a new person.  =>`/api`
- `READ`: Fetching details of a person.  => `/api/user_id`
- `UPDATE`: Modifying details of an existing person => `/api/user_id`
- `DELETE`: Removing a person => `/api/user_id`

Project's UML diagram is readily available [here](URL "draw.io") or you can go to [Modelling Diagrams](#modelling-diagrams)


## Demo

A live version of the API server is hosted on [Render](https://render.com/ "https://render.com/") with the live URL [https://raim-hng-backend-task2.onrender.com](https://raim-hng-backend-task2.onrender.com)

Using the endpoints as stated above, CRUD operations can be carried out on this URL, interfacing with the MongoDB database. To see directions on the usage of this API server, go to [Usage](#usage).


## Modelling Diagrams

- `E-R (Entit-Relationship) Diagram`

Here is the E-R diagram for modeling the database structure, focusing on entities, their attributes, and the relationships between them. Although there exists only one entity within the current database structure, this could be updated as the API functionality improves.

![E-R diagram](/assets/diagrams/E-R.png)

This diagram is readily available [here](https://drive.google.com/file/d/1oTfv7w-sZ4U8xVuWnlzegkqM9Ptg4HD7/view?usp=sharing "Google Drive")

- `UML (Unified Modelling Language) Diagram`

Here is the Behavioral UML activity diagram for visualizing the system's dynamic behavior and interaction with itself, when called, and also with other entities. This diagram is in relation to the CRUD activities, and how they are being processed.

![UML diagram](/assets/diagrams/UML.png)

This diagram is readily available [here](https://drive.google.com/file/d/1WzTjISn89XyjcjkWIQQmY8g2woWXYAnc/view?usp=sharing "Google Drive")


## Installation

To run this program on your local machine,

- Clone this git repository
```bash
git clone https://github.com/raim-io/hng_backend-task2.git
```
- Move into project's working directory
```bash
cd hng_backend-task2
```
- Create a new `.env` within this directory with the PORT and MONGO_URI environmental variables
```.env
PORT=your-port-value
MONGO_URI=your-mongo_uri-connection-string

# PORT value can be 3000, 5000, or whichever port you decide

# MONGO_URI value can be generated from your mongoDB dashbord
# it is readily available when you click on the connect button within your cluster.

# for more information about mongo uri connection string
# visit https://www.mongodb.com/docs/manual/reference/connection-string/
```
- Install project's dependencies
```bash
npm install
```
- Start API server
```bash
npm start
```


## Usage

### `CREATE A PERSON`:

from the API route:

```http
https://raim-hng-backend-task2.onrender.com/api
```

the request body:

```json
{
	"name": "Mark Essien"
}
```

the response will be in the json format:

```json
{
	  "_id": "65002087b24a70dc60ac6eaf",
	  "name": "Mark Essien",
	  "createdAt": "2023-09-12T08:25:43.734Z",
	  "updatedAt": "2023-09-12T08:25:43.734Z",
	  "__v": 0
}
```

Here is a screenshot of postman test for this operation

![Create a person](/assets/postman-test/create-person.png)

This user gets created in our mongoDB collection

![Mongodb collection](/assets/postman-test/mongodb-create.png)

### `READ A PERSON`:

from the API route:

```http
https://raim-hng-backend-task2.onrender.com/api/user_id
```

the request body:

```json
{
	"id": "65002087b24a70dc60ac6eaf"
}
```

the response will be in the json format:

```json
{
    "_id": "65002087b24a70dc60ac6eaf",
    "name": "Mark Essien",
    "createdAt": "2023-09-12T08:25:43.734Z",
    "updatedAt": "2023-09-12T08:25:43.734Z",
    "__v": 0
}
```

Here is a screenshot of postman test for this operation

![Read a person](/assets/postman-test/read-person.png)

### `UPDATE A PERSON`:

from the API route:

```http
https://raim-hng-backend-task2.onrender.com/api/user_id
```

the request body:

```json
{
	"id": "65002087b24a70dc60ac6eaf",
  "name": "Essien Mark"
}
```

the response will be in the json format:
```json
{
    "_id": "65002087b24a70dc60ac6eaf",
    "name": "Essien Mark",
    "createdAt": "2023-09-12T08:25:43.734Z",
    "updatedAt": "2023-09-12T08:35:08.261Z",
    "__v": 0
}
```

Here is a screenshot of postman test for this operation

![Update a person](/assets/postman-test/update-person.png)

### `DELETE A PERSON`:

from the API route:

```http
https://raim-hng-backend-task2.onrender.com/api/user_id
```

the request body:

```json
{
	"id": "65002087b24a70dc60ac6eaf"
}
```

the response will be in the json format:

```json
{
    "_id": "65002087b24a70dc60ac6eaf",
    "name": "Essien Mark",
    "createdAt": "2023-09-12T08:25:43.734Z",
    "updatedAt": "2023-09-12T08:35:08.261Z",
    "__v": 0
}
```

Here is a screenshot of postman test for this operation

![Delete a person](/assets/postman-test/delete-person.png)

To handle errors, and validate success, the program makes a few logs on the deployed server console. Below is the logs on the Render deployment console for the above CRUD operations:

![Render logs for CRUD](/assets/deployment/logs.png)


## Features

C - R - U - D


## Deployment

A live version of this API server has been deployed on [Render](https://render.com/ "https://render.com/") with the live URL [https://raim-hng-backend-task2.onrender.com](https://raim-hng-backend-task2.onrender.com)

Using the endpoints as stated above, CRUD operations can be carried out on this URL, interfacing with the MongoDB database. To see directions on the usage of this API server, go to [Usage](#usage).

Here, is a breakdown of the deployment process with visuals:

- Go to [Render official website](https://render.com/ "https://render.com/") and get started for free. Create an account using any method you are comfortable with (but preferrably signup with GitHub for ease of authentication). After signing up, you will be redirected to your Render user dashboard.

![Render Website](/assets/deployment/render-site.png)

Then, follow the steps below to successfully deploy API server on render

- `Step 1`

Click on the `new +` button to create a new deployment. From the drop down list, select the `Web Service` option. You will be redirected to a `Create new web service` page.

![Create new deployment](/assets/deployment/2.png)

- `Step 2`

Select the `Build and deploy from a Git repository` option and click on the `next` button. You'll be redirected to the page where you connect your web service to a git repository.

![Build and deploy from a Git repository](/assets/deployment/3.png)

- `Step 3`

Under the `Public Git repository` section, input the http URL of the git repository within which the project exists, and then click on the `next` button. You'll be redirected to a page where you configure your deployment.

![Public Git repository](/assets/deployment/4.png)

- `Step 4`
Fill the form fields with the appropriate values. These fields include:
	- Name: `preferred-name-for-web-service`
	- Region: `preferred-region-for-web-service`
	- Branch: `master` / `preferred-branch-for-web-service`
	- Runtime: `Node`
	- Build Command: `$ npm install`
	- Start Command: `$ npm start`

![Deployment configuration](/assets/deployment/5.png)

- `Step 5`

Select the instance type of your choice. Possibly the free version for trials.

![Deployment configuration](/assets/deployment/6.png)

- `Step 6`

Click on the `advanced` button to view more configuration options. Here, we handle project's environmental variables (PORT and MONGO_URI). You can either `Add Environmental Variables` button option or the `Add Secret File` button option. For this deployment, we select the `Add Secret File` button option which pops up a form to create a secret file.

![Advanced deployment configuration](/assets/deployment/7.png)

- `Step 7`

Within the new form, type the filename in the `Filename` field (for this project we are creating the `.env` secret file, which does not exist in the project's GitHub repository). Then, copy and paste the contents / secret variables (PORT and MONGO_URI) into the `File Contents` field of the form. Go ahead to click on the `Save` button to save our new `.env` secret file.

![Create .env secret file](/assets/deployment/8.png)

Now, you'll be redirected to the project deployment page, where you can select the `Logs` tab to view the project deployment logs

![Depolyment logs](/assets/deployment/9.png)

Congratulations, you have successfully deployed this API server on Render...


----------------------------------
__________________________________


## Project Instruction

### Description
You are to build a simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice. Your API should dynamically handle parameters, such as adding or retrieving a person by name. Accompany the development with UML diagrams to represent your system's design and database structure.  Host your entire project on GitHub, and provide a well-structured documentation in the repository that outlines request/response formats, setup instructions, and sample API usage.
Task Breakdown: Develop a REST API with Basic CRUD Operation
Objective: Build a simple REST API capable of CRUD operations on a resource, say, a "person". The chosen programming language should interface with any chosen database of your choice.

1. REST API Development:
Develop an API with endpoints for:
- `CREATE`: Adding a new person.  =>`/api`
- `READ`: Fetching details of a person.  => `/api/user_id`
- `UPDATE`: Modifying details of an existing person => `/api/user_id`
- `DELETE`: Removing a person => `/api/user_id`
Ensure all interactions with the database are secure and free from common vulnerabilities (e.g., SQL injections).
2. Database Modelling: (Bonus)
- `UML Diagram:` Design and present a UML (Unified Modeling Language) diagram that represents the structure and relationships of your API's classes and models.
3. Testing:
Using tools like Postman or (scripts written in Python using the requests library) that tests each CRUD operation in your API.
This  should:
- Add a new person (e.g., "Mark Essien").
- Fetch details of a person
- Modify the details of an existing person.
- Remove a person
4. Dynamic Parameter Handling:
Your API should be flexible enough to handle dynamic input. If we provide a name (or other details), your backend should be able to process operations using that name.
Example: If we pass "Mark Essien", we should be able to perform all CRUD operations on "Mark Essien".
Add `validation` – field should only be strings; integers or any other data type should not be allowed.
5. GitHub Repository:
Create a GitHub repository for this project.
Ensure the repository contains:
A detailed README.md file explaining how to set up, run, and use the API.
The source code for the API.
UML diagrams (or links to view them).
6. Documentation:
Provide a documentation file (e.g., DOCUMENTATION.md in your GitHub repo) that outlines:
Standard formats for requests and responses for each endpoint.
Sample usage of the API, including example requests and expected responses.
Any known limitations or assumptions made during development.
Instructions for setting up and deploying the API locally or on a server.
7. Hosting
Using the same Server used in the Stage One task (or another server, if possible), modify it accordingly to  host your endpoint with a URL like this https://theirdomain.com/api
Test extensively with various testing tools to make sure it is accessible before submitting

### Acceptance Criteria
- `Functional REST API`: The API should successfully perform all CRUD operations.
- `Modelling Diagrams`: Clear and accurate UML and E-R diagrams should be provided.
- `Effective Testing Script`: The script should successfully test all the CRUD operations without manual intervention.
- `Dynamic Parameter Handling`: The API should correctly handle and respond to different parameters provided.
- `GitHub Repository`: Repository should be well-organized, contain all necessary files, and be publicly accessible.
- `Detailed Documentation`: Documentation should provide clear guidance on how to use the API, including setup, request/response formats, and sample usage.


## Acknowledgements

[HNG - Zuri](https://www.zuri.team/ "https://www.zuri.team/")


## Contact

[Email](mailto:raim.tobi@gmail.com "raim.tobi@gmail.com")

[LinkedIn](https://www.linkedin.com/in/raheem-isaac/ "Raheem Oluwatobiloba Isaac")

[Twitter](https://twitter.com/raim_io "raim_io")

[GitHub](https://github.com/raim-io "raim-io")
