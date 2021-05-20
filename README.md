# MongoDB Short Learning Curve 263 2526 56837 727225

## How To Install MongoDB

```bash
root@omarbelkady:~$ sudo apt install mongodb
```

### Package Used To Interract With MongoDB

```bash
root@omarbelkady:~$ npm install mongoose --save
```


### Important Concept:
- MongoDB stores docs(aka rows) in what are called collections(table)
- MongoDB stores data records as Binary Documents. BSON is the binary(fav lev of program for @alanngo) repr of JSON docs.



### BSON Data Types

| Type      | Alias |
| ----------- | -----------|
| Double      | double     |
| String   | string        |
| Object   | object        |
| Array   | array          |
| ObjectId   | objectId    |
| Boolean   | bool         |
| Date   | date            |
| Null   | null            |
| Regular Expression   | regex        |
| Javascript   | javascript            |
| 32 Bit Integer   | Int            |
| 64 Bit Integer      | long        |
| Decimal128       | decimal|
| Min and Max Key      | minKey maxKey        |

### How Do We Connect To MongoDB
- Client makes a request to the server
- Server connects to the DB
- Data is retrieved from the DB and it displays the data(if available) in the browser(Client)

## Basic Commands
### Display The Name of the current db
```
root@omarbelkady:~$ db
```

### Get The Name #2:
```bash
root@omarbelkady:~$ db.getName();
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
show dbs;
```

### Switch to the cstsffb database
```
use cstsffb
```

### Create a collection
```
db.createCollection("76lanc6", {YOUR_OPTIONS_GO_HERE});
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

### Insert a student into a collection a js object with a js extension
```
db.DBNAME.insert(JSONObJECTYouWANTTOADD);
```


### Insert Many student into the collection a js object with a js extension
```
db.DBNAME.insertMany(JSONObJECTYouWANTTOADD);
```

### Insert A Single Document
```
insertOne(data, differentOptionsYouWant);
```

### Insert Many Documents
```
insertMany(data, differentOptionsYouWant);
```

### Insert Many Documents #2
```
insertMany([{},{},{}])
```

## Reading Data

### Show the data within a collection 
- find takes two arguments the query criteria and the projection
- limit to 7 students
- age and name can be referred to as the columns in SQL 
```
db.collectionNAME.find(
  { age: { $gt: 21} },
  { name: 1, address: 1},
).limit(7).pretty();
```

```
db.collectionNAME.find({fname: "Omar"}).pretty();
```

### Return Specific Fields of Omar
```
db.collectionNAME.find({fname: "Omar"}, {fname: 1,  lname: 1, gender: 1}).pretty();
```

### Exclude Specific Fields of Omar
```
db.collectionNAME.find({fname: "Omar"}, {fname: 1,  lname: 1, likesJava: 0}).pretty();
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

### Update A Documents within the collection
```
db.collectionNAME.update([_id: ObjectId("qZvCf/4+AcPdqHoNMkrrXbsz66H3NOMkzbDzF+Uv9HI=")]);
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

### Delete A Database
```bash
root@omarbelkady:~$ db.dropDatabase();
```

### Delete A Database Num2
```bash
root@omarbelkady:~$ db.DBNAME.drop();
```

### Delete A Database Num2
```bash
root@omarbelkady:~$ db.animals.drop();
```



## Help With DB Command
```bash
root@omarbelkady:~$ db.help();
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
