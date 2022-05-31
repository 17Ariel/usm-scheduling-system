# Scheduling System

## Prerequisite

Make sure you have [Nodejs](https://nodejs.org/en/download/) and [Mongodb](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.8-signed.msi) install

## Instructions

Download the file via zip folder and navigate to the file

### Install backend dependencies

```
cd usm-scheduling-system
npm install

```

### Setting up env file

Create a .env file then paste this

```
MONGO_DEV=mongodb://localhost:27017/usmdb
JWT_SECRET=1234secret
NODE_ENV=production

```

### Install frontend dependencies

navigate to the frontend directory

```
cd frontend
npm install

```

### Run the project for production

```
npm run build

```

### Preview the project

Open the browser and type localhost:8000
