# MongoDB Short Learning Curve 263 2526 56837 727225

## How To Install MongoDB

```bash
sudo apt install mongodb
```

### Package Used To Interract With MongoDB

```bash
npm install mongoose --save
```


### How Do We Connect To MongoDB
- Client makes a request to the server
- Server connects to the DB
- Data is retrieved from the DB and it displays the data(if available) in the browser(Client)

## Basic Commands
### Display The of the current db
```
db
```

### Start the database
```
mongod
```

### Connect to the Database
```
mongo
```

### Show The List of Databases
```
show dbs
```

### Switch to the cstsffb database
```
use cstsffb
```

### Show the list of Database Collections
```
show collections
```

## Creating Stuff

### Insert data into a document
```
insert(data)
```

### Insert A Single Document
```
insertOne(data, differentOptionsYouWant)
```

### Insert Many Documents
```
insertMany(data, differentOptionsYouWant)
```

### Insert Many Documents #2
```
insertMany([{},{},{}])
```

## Reading Data

### Show the data within a collection
```
db.collection.find()
```

### Find All The Matching Documents
```
find(filter, options)
```

### Return the first Document That has the best Match
```
findOne(filter, options)
```

## Updating Data

### Update one document within the collection
```
updateOne(filter,data,options)
```

### Update Many Documents within the collection
```
updateMany(filter,data,options)
```

### Fully replace a document
```
replaceOne(filter, data, options)
```

## Deleting Data

### Delete One Document
```
deleteOne(filter, options)
```

### Delete Many Documents
```
deleteMany(filter, options)
```

## Filtering
### Arguments passed in are to filter collection
```
["key":"value"]
```

### Return A Match That is Equal to The Specific Value I inputed
```
$eq
```

### Return A Match That is Greater than The Specific Value I inputed
```
$gt
```

### Return A Match That is Greater than Or Equal To The Specific Value I inputed
```
$gte
```

### Return A Match if there is any values supplied in the array
```
$["key":{$in: [arrOfValues] } ]
```

### Return A Match That Is less than the value I supplied
```
$lt
```

### Return A Match That is Less than Or Equal To The Specific Value I inputed
```
$lte
```

### Return A Match That Is not equal to the value I supplied
```
$ne
```

### Return A Match That Has NONE OF the value I supplied
```
$nin
```

### And Operator Syntax
```
$and: { [], [] } 
```
