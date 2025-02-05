//Types of Documnets
//Creating a collection EmpRecords
db.createCollection('EmpRecords')
//Inserting many records at a time
db.EmpRecords.insertMany
([{
Id:12,
Name:"Dhawan",
Email:"Dhawan@gmail.com",
Salary:35000,
Month:"Jan",
Date:"1-02-2025"
},
{
Id:12,
Name:"Dhawan",
Email:"Dhawan@gmail.com",
Salary:35000,
Month:"Feb",
Date:"1-03-2025"
},

{
Id:12,
Name:"Dhawan",
Email:"Dhawan@gmail.com",
Salary:35000,
Month:"March",
Date:"1-04-2025"
}
])



//Inserting a record
db.EmpRecords.insertOne(
{
Id:151,
Name:"Dhawan Rawat",
Salary:{Jansalary:10000,fbSalary:10000,MarchSalary:100000}
})


db.EmpRecords.insertOne(
  {
  Id:157,
  Name:"Dhawan Rawat",
  Subject:["C#","SQL","CORE"]
  })


  db.EmpRecords.find({Id:157})
  
  //$pop for removing first item subject
db.EmpRecords.update({Id:157},
  {$pop:{Subject:-1}}
)

//$pop for removing last item of  subject
db.EmpRecords.update({Id:157},
  {$pop:{Subject:1}}
)


//update salary
db.EmpRecords.updateOne({Id:151},
{
$set:
{
"Salary.Jansalary":10001,
"Salary.fbSalary":10002,
"Salary.MarchSalary":10003,
}
})

//Sum of three month salary
db.EmpRecords.aggregate({$match:{Id:151}},
{
  $project:
  {
  EmpSalary:{$add:["$Salary.Jansalary","$Salary.fbSalary","$Salary.MarchSalary"]
  }
}
}
)

//Use of max for finding max salary
db.EmpRecords.aggregate({$match:{Id:151}},
  {
    $project:
    {
    EmpSalary:{$max:["$Salary.Jansalary","$Salary.fbSalary","$Salary.MarchSalary"]
    }
  }
  }
  )
  
//use of min for finding min salary
  db.EmpRecords.aggregate({$match:{Id:151}},
    {
      $project:
      {
      EmpSalary:{$min:["$Salary.Jansalary","$Salary.fbSalary","$Salary.MarchSalary"]
      }
    }
    }
    )
      
  

//Inserting records for Salary query
db.EmpRecords.insertMany
([{
Id:31,
Name:"Dhawan",
Email:"Dhawan@gmail.com",
Salary:350000000,
Month:"Jan",
Date:"1-02-2025"
},
{
Id:51,
Name:"Pawan",
Email:"Dhawan@gmail.com",
Salary:350000,
Month:"Feb",
Date:"1-03-2025"
},

{
Id:71,
Name:"Bawan",
Email:"Dhawan@gmail.com",
Salary:3500000,
Month:"March",
Date:"1-04-2025"
}
])


//for first highest salary
db.EmpRecords.find({}).sort({Salary:-1}).limit(1) 

// for second highest salary
db.EmpRecords.find({}).sort({Salary:-1}).skip(1).limit(1) 

//for nth skip(n-1)
db.EmpRecords.find({}).sort({Salary:-1}).skip(2).limit(1)



//Inserting records
db.EmpRecords.insertOne 
({
Id:3,
Name:{FirstName:"Dhawan",LastName:"Rawat"},
FirstName:"Dhawan",
LastName:"Rawat",
Contact:"8787787878",
Email:"dhawan.rawat@gmail.com",
Department:"Testing",
Salary:35000,
Address:{Location1:"Delhi",Location2:"Gurugram",Location3:"Noida"},
Location :"Delhi",
DOJ:"07-12-2024"
})


//***********Update*********//

//UpdateOne
db.EmpRecords.updateOne({
  Id:3},
  {
  $set:{Salary:750000}
  }
  )
//UpdtaeMany
db.EmpRecords.updateMany({
  Department:"Testing"},
  {
  $set:{Salary:7500000}
  }
  )

  //Replacing One dcoument
  db.EmpRecords.replaceOne({Id:12},
  {Id:12,
    Name:"Dhawan",
    Email:"Dhawan@gmail.com",
    Salary:350000,
    Month:"Jan",
    Date:"1-02-2025"}
  )

//**********  Delete********** */
//Delete  one records
db.EmpRecords.deleteOne({Id:12})

//Delete multiple records
db.EmpRecords.deleteMany({Id:12})

//Use of FindandModify--First it will find in second run it will update
db.EmpRecords.findAndModify({query:{Id:12},update :{$inc:{Salary:3000}}})

//use of findOneAndDelete
db.EmpRecords.findOneAndDelete({query:{Id:12}})

//use of findOneAndUpdate
db.EmpRecords.findOneAndUpdate({Name:"Dhawan"},{$inc:{Salary:5000}})

//**********************Use of logical operators********

//use of $and 
db.EmpRecords.find({$and:[{Id:12},{Name:"Dhawan"}]})
db.EmpRecords.findOne({$and:[{Id:12},{Name:"Dhawan"}]})

//use of $OR
db.EmpRecords.find({$or:[{Id:12},{Name:"Dhawan"}]})
db.EmpRecords.findOne({$or:[{Id:12},{Name:"Dhawan"}]})

//us of Not
db.EmpRecords.find({Id:{$not:{$in:[12,2]}}})
db.EmpRecords.findOne({Id:{$not:{$in:[12,2]}}})


//use of NOR it must be an array
db.EmpRecords.findOne({$nor:[{Id:{$in:[12,2]}}]})


/****************Arithmetic operator******/
//Use of add
db.EmpRecords.aggregate([
  {$match:
  {
  Id:12
}},
{
$project:
{
EmployeeSalary :{$add:["$Salary","$Salary"]
}}
}
])


//use of $subtract
db.EmpRecords.aggregate([
{$match:
  {
Id:35
}},
{
$project:
{
EmployeeSalary :{$subtract:["$Salary","$Salary"]
}}
}
])

//us eof multiply
db.EmpRecords.aggregate([
  {$match:
  {
  Id:12
}},
{
$project:
{
EmployeeSalary :{$multiply:["$Salary","$Salary"]
}}
}
])


//Divide
db.EmpRecords.aggregate([
  {$match:
  {
  Id:35
}},
{
$project:
{
EmployeeSalary :{$divide:["$Salary","$Salary"]
}}
}
])

//use of $abs positive value
db.EmpRecords.aggregate([
  {$match:
  {
  Id:35
}},
{
$project:
{
EmployeeSalary :{$abs:{$add:["$Salary","$Salary"]//add,multiply,divide
}}}
}
])



//use of floor for decimal value
db.EmpRecords.aggregate([
  {$match:
  {
  Id:37
}},
{
$project:
{
EmployeeSalary :{$floor:{$add:["$Salary","$Salary"]//add,multiply,divide
}}}
}
])


//

//FirstName
db.EmpRecords.find({FirstName:"Dhawan"})

//Department
db.EmpRecords.find({Department:"Testing"})

//use of $in
db.EmpRecords.find({Id:{$in:[1,2]}})

//use of $nin
db.EmpRecords.find({Id:{$nin:[1]}})



//Inserting document an Array type
db.ArrayType.insertOne(
{
  id: 1,
  Name: "Hem",
  Location: "Delhi",
  No: 8595738051,
  Likes: 10,
  Views: 500,
  Content: [
    "Mongodb",
    ".netCore",
    "SQL",
    "Script"
  ],
  Usercomments: [
    {
      user: "User1",
      message: "12345678910",
      dateCreated: 
      {
        "$date": "2011-02-19T20:45:00Z"
      },
      like: 22
    },
    {
      user: "User11",
      message: "Sunday Ko",
      dateCreated: 
      {
        $date: "2011-02-25T02:15:00Z"
      },
      like: 5
    }
  ],
  comments: [
    "What are you doing",
    "I am at office location",
    "Nice DP",
    "Lovely",
    "Amazing DP",
    "Looking Awsome,can you please share your contact no",
    "Awwwwwwwwwwwwwww",
    "HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
  ],
  Hobbies: [
    "Sports",
    "Cooking",
    "Singing",
    "Writing",
    "Listening",
    "Exploring",
    "Boating",
    "Plantation",
    "Painting",
    "Swimming",
    "Traveling",
    "Photography",
    "Crafting"
  ],
  Address: [{Location1:"Delhi",Location2:"US",}],
  Holidays: [
    "Ambience",
    "Masuri",
    "US",
    "Canada",
    "ATTA",
    "GIP",
    "Tea Hotel at Tankpur",
    "Uttarakhand",
    "Dehradun",
    "Haldwani",
    "Parks and Gardens",
    "Historical Sites",
    "WATER PARK",
    "Tea",
    "Shopping",
    "Movies"
  ]
})



//Inserting a document
db.ArrayType.insertOne
({
  id:1,
  Name: "Hem",
  Location: "Delhi",
  No: 8595738051,
  Likes:10,
  Views:500,
  Content:["Mongodb",".netCore","SQL","Script"],
   Usercomments: 
    [	
       {
          user:'User1',
          message: 'Dehradun',
          dateCreated: new Date(2011,1,20,2,15),
          like: 0 
       },
       {
          user:'User11',
          message: 'Masuri',
          dateCreated: new Date(2011,1,25,7,45),
          like: 5
       }
    ],
  comments: [
    "What are you doing",
    "I am at office location",
    "Nice DP",
    "Lovely",
    "Amazing DP",
    "Looking Awsome,can you please share your contact no",
    "Awwwwwwwwwwwwwww",
    "HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
  ],
  Hobbies: [
    "Sports",
    "Cooking",
    "Singing",
    "Writing",
    "Listening",
    "Exploring",
    "Boating",
    "Plantation",
    "Painting",
    "Swimming",
    "Traveling",
    "Photography",
    "Crafting"
  ],
  Address: [{Location1:"Delhi",Location2:"US",}],
  Holidays: [
    "Ambience",
    "Masuri",
    "US",8
    "Canada",
    "ATTA",
    "GIP",
    "Tea Hotel at Tankpur",
    "Uttarakhand",
    "Dehradun",
    "Haldwani",
    "Parks and Gardens",
    "Historical Sites",
    "WATER PARK",
    "Tea",
    "Shopping",
    "Movies"
  ]
})

//Finding Id
db.ArrayType.find({id:1})

//use of $pop for removig the first item
db.ArrayType.updateMany({id:1},
{$pop:{Content:-1}}
)

//use of $pop for removig the last item item

db.ArrayType.updateMany({id:1},
  {$pop:{Content:1}}
  )

//Finding User
db.ArrayType.find({"Usercomments.user":'User11'})
//Finding Tags
db.ArrayType.find({Content:"Mongodb"})

//Updating likes
db.ArrayType.updateOne({id:1},
{$set:{ likes: 150}}
)

//Increase the likes by 10,20,30,40.....................
db.ArrayType.updateOne({_id:ObjectId('6720b2e037fe32dc5b28712a')},
{$inc :{Likes:20}}
)
//Adding a new  array Comment section
db.ArrayType.updateOne({_id:ObjectId('6720b68b2d80cdbb113fab3f')},
    {
        $push:{
     Usercomment: 
    [	
       {
          user:'user3',
          message: 'Dont worry',
          dateCreated: new Date(2011,1,25,7,45),
          like: 5
       }
    ]}
    }
)

//Find document with greater than or less than likes
db.ArrayType.find({Likes:{$gt:5}})
db.ArrayType.find({Likes:{$lt:11}})

//Find comments based on likes
db.ArrayType.find({"Usercomments.user":{$gt:2}})
db.ArrayType.find({"Usercomments.user":{$lt:10}})

//Updating a specific comments like
db.ArrayType.updateOne
({_id:ObjectId('6720b68b2d80cdbb113fab3f'),"Usercomments.user":"User1"},

    {$set :{"Usercomments.$.like":22}}
)


db.ArrayType.find({_id:ObjectId('6720b68b2d80cdbb113fab3f')})


//Removing a comment
db.ArrayType.updateOne({_id:ObjectId('6720b68b2d80cdbb113fab3f')},

    {$pull :{Usercomments :{user:'User1'}}}
)

//Delete a specific record
db.ArrayType.deleteOne({_id:ObjectId('6720b68b2d80cdbb113fab3f')})

//Finding selected records
db.ArrayType.find({_id:ObjectId('6720b68b2d80cdbb113fab3f')},
    {comments:1,_id:0}
)

//Select all comments

db.ArrayType.find({},
    {comments:1,_id:0}
)

//Selecting User and Message
db.ArrayType.find({_id:ObjectId('6720b68b2d80cdbb113fab3f')},
    {"Usercomments.user":1,"Usercomments.message":1,_id:0}
)

//Searching based on word-Wild card in sql, i---> for incasesensitive
db.ArrayType.find({ Name: { $regex: "Hem", $options: "i" } });

//Searching for Start with Mongo- H% 
db.ArrayType.find({ Name: { $regex: "^H", $options: "i" } });


//Searching for ends with DB- %M
db.ArrayType.find({ Name: { $regex: "M$", $options: "i" } });

db.ArrayType.find()
  

//Increasing the likes inside the array 
db.ArrayType.updateMany(
  {"comments.like":1000},
  { $inc :{"comments.$[elem].like":10}},
  {arrayFilters:[{"elem.like":70}]}
)


//Updating practice
db.ArrayType.updateMany(
{"comments.like":1000},
{$inc:{"comments.$[elem].like":5}},
{arrayFilters:[{"elem.like":1000}]}
)

//Updating user inside array
db.ArrayType.updateMany(
  {"comments.user":"user1"},
  {$set :{"comments.$[elem].user":"user11"}},
  {arrayFilters :[{"elem.user":"user1"}]}
)




//use of $push and $pull
db.ArrayType.updateOne(
  {},
  {$pull:{comments:{like:40}}}
)

//$addTOSet for adding new comments inside Usercomments array-
db.ArrayType.updateMany(
  {_id:ObjectId('6720b68b2d80cdbb113fab3f')},
  { $addToSet: { Usercomments: { Name:"Hem Bisht",User:"User111",Message :"Hello Everything is fine",Like:33,Views:55} } }
)


db.ArrayType.find({_id:ObjectId('6720b68b2d80cdbb113fab3f')})

//Find the details
db.ArrayType.find(
  {Hobbies:"Sports"}
)

//Update the arrytype with the help of $push
db.ArrayType.updateOne(
  {_id:ObjectId('671e9603f27501a5703c44ff')},
  { $push:
    {comments :"HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"}
  }
)

//Use of $set for updating  Usercomments...
db.ArrayType.updateOne (
{"Usercomments.user":"user1"},
{$set :{"Usercomments.$[elem].user":"user11"}},
{arrayFilters :[{"elem.user":"user1"}] }
)

//Deleting comments $pull
db.ArrayType.updateOne(
  {_id:ObjectId('671e9603f27501a5703c44ff')},
  { $pull:
    {comments :"Aayi Nhi..."}
  }
)

// deleting  comments
db.ArrayType.updateOne(
  {comments:"HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"},
  { $pull : {comments :'HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'}}
)

db.ArrayType.find({ comments:'HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'})


//use of $set for updating comments
db.ArrayType.find({comments:"HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"})

db.ArrayType.updateMany(
  {comments:"HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"},
  {$set : {comments:'HMMMMMMMMMMMMMMM'}}
)
db.ArrayType.find({comments:'HMMMMMMMMMMMMMMM'})




 //Inserting an actor profile
 db.Movies.insertOne({
  id:10,
  FirstName:"Sidharth",
  LastName:"Malhotra",
  OtherNames:"Sid",
  Birthday:"16 January",
  DOB:"16-01-1985",
  Age:39,
  Height:"1.85M",
  NativePlace:"Delhi",
  NativeLanguage:"Hindi",
  OtherLanguage:"English",
  Country:"India",
  Movies:["Yodha","Jabriya Jodi","Kapoor&Sons"],
  Song:["Raataan Lambiyaan","Humdard","Banjara","Kabhi tumhe","Ranjha"],
  Awards:[{Name :"Big Star Enterainment Awards",Count:1},
          {Name :"Nickelodeon Kids' Choice Awards India",Count:1},
          {Name :"Iconic Gold Awards",Count:1}
  ],
  FavouritePlace:"Samundar",
  FavouriteMovie:"Andaz Apna Apna",
  FavouriteDialouge:"Pushpa! I hate tears",
  FavouriteActor: "Amitabh Bachchan",
  FavouriteActress:"Madhuri Dixit"
})

//Finding the firstname and age
db.Movies.find({id:10},
  {FirstName:1,Age:1,_id:0})

//Finding the awards details
db.Movies.find({id:10},
  {"Awards.Name":1,FirstName:1,Age:1,_id:0})

//Updating the Movies $push

db.Movies.updateOne({id:10},
  {$push :{Movies:["A Gentleman"]}})

db.Movies.updateOne({id:10},
  {$push :{Movies:"A Gentleman"}})

//Removing the movie
db.Movies.updateOne({id:10},
  {$pull :{Movies:["A Gentleman"]}})

  db.Movies.find({id:10})

 //Finding the movie details and song details
  db.Movies.find({id:10},
  {
  Movies:1,Song:1,Awards:1,_id:0
  })

  //Finding other names
  db.Movies.find({id:10},
    {FirstName:1,
    OtherNames:1,_id:0}
  )

//  Finding the list of movies
  db.Movies.find({Movies:{$exists:true}},
  {
   Movies:1,_id:0
  })






//Creating a collection
db.createCollection('Movies')
db.Movies.insertOne(
{

  id:1,
  Name:"Julm",
  Song:['Meri Gali Mein','Lakho Paaye','Sunna Majburi H'],
  Writer:"Public",
  Producer:"Public",
  Director :"Public",
  Actor:"Public",
  Actress:"Public",
  Likes:100,
  Views:2000000,
  Budget:"1000 Cr",
  IMDBRating:10/10,
  ListofSong:
[
  {Name:'Lakho Paaye',Likes:250,Views:150,comments:'Nice Song'},
  {Name:'Julm ho gya',Likes:100,Views:150,comments:'Nice Song'},
  {Name:'Sunna Majburi h',Likes:100,Views:150,comments:'Nice Song'}
],
Awards :"Oscar",
ReleaseDate:"01-11-2024",
PublicOpinion:[
  {Acting:"Nice",Song:"Awsome",Rating:"10/10",Message:"You should watch Movies"},
  {Acting:"Perfect",Song:"Awsome",Rating:"10/10",Message:"You should watch Movies"},
  {Acting:"Mind Blowing",Song:"Awsome",Rating:"10/10",Message:"You should watch Movies"}
]
})

//*************************************Queries***********************/
//use of $in and $nin
db.Movies.find({Name:"Julm"})
db.Movies.find({NameinCapital:{$in:["JULM"]}})


//Find Movie Title
db.Movies.find({Name:"Julm"})

//Finding a particular details Song
db.Movies.find({Name:'Julm'},{ListofSong:1,ReleaseDate:1,PublicOpinion:1,_id:0})

//Finding the song
db.Movies.find({Name:"Julm"},{Name:1,Song:1,_id:0})

//Inserting field 
db.Movies.updateOne({Name:'Julm'},
  {$push :{IMDBRating:"10/10"}}
)

//Movie name start with J
db.Movies.find({Name:{$regex :"^J",$options:"i"}})

////Movie name End with M
db.Movies.find({Name:{$regex:"m$",$options:"i"}})

//Movie name with one word wihout $option
db.Movies.find({Name:{$regex :"Julm"}})

//Updating the fieldname

db.Movies.updateOne ({id:1},
  {$rename:{Name:"MovieName"}}
)

//Update Movie Name
db.Movies.updateOne({id:1},
  {$set:{Name:"JULM"}}
)

db.Movies.updateOne ({id:1},
  {$rename:{Name:"NameinCapital"}}
)

//Update Song adding a new Song
db.Movies.updateOne({id:1},
{
$push :{Song:'Halwa h'}
})
//Removing a song from List of song
db.Movies.updateOne({id:1},
  {$pull :{Song:'Halwa h'}}
)

//update Likes field
db.Movies.updateOne({id:1},
{$inc:{Likes:1000}}
)
//Updating the Song Likes
db.Movies.updateOne ({id:1,"ListofSong.Name":"Meri Gali Mein"},
  {$inc :{"ListofSong.$.Likes":1000}}
)
//Updating Views
db.Movies.updateOne({id:1},
  {$set :{Views:300000}})

  //Updating Rating in Public opinio field
  db.Movies.updateOne({id:1},
    {$set :{"PublicOpinion.0.Rating":"11/11"}})

  //Updating multiple field

  db.Movies.updateOne ({id:1},
    {$set :{
      Budget:"17000cr",
      ReleaseDate:"2-11-2024"
    }}
  )

//Array adding opinion
db.Movies.updateOne({id:1},
  {$push :{PublicOpinion :{Acting:"Nice",Song:"Awsome",Rating:"10/10",Message:"Dont miss it"}}}
)

//Inserting an actor profile
db.Movies.insertOne({
  id:10,
  FirstName:"Sidharth",
  LastName:"Malhotra",
  Spouse:"Kiara Advani",
  OtherNames:"Sid",
  Birthday:"16 January",
  DOB:"16-01-1985",
  Age:39,
  Height:"1.85M",
  NativePlace:"Delhi",
  NativeLanguage:"Hindi",
  OtherLanguage:"English",
  Country:"India",
  FirstMovie:"Student of the Year",
  Movies:["Student of the Year","Yodha","Shershah","Jabriya Jodi","Kapoor&Sons"],
  Song:["Raataan Lambiyaan","Humdard","Banjara","Kabhi tumhe","Ranjha"],
  Awards:[{Name :"Big Star Enterainment Awards",Count:1},
          {Name :"Nickelodeon Kids' Choice Awards India",Count:1},
          {Name :"Iconic Gold Awards",Count:1}
  ],
  FavouritePlace:"Samundar",
  FavouriteMovie:"Andaz Apna Apna",
  FavouriteDialouge:"Pushpa! I hate tears",
  FavouriteActor: "Amitabh Bachchan",
  FavouriteActress:"Madhuri Dixit"
})



//Finding the firstname and age
db.Movies.find({id:10},
  {FirstName:1,Age:1,_id:0})

//Finding the awards details
db.Movies.find({id:10},
  {"Awards.Name":1,FirstName:1,Age:1,_id:0})

//Updating the Movies $push

db.Movies.updateOne({id:10},
  {$push :{Movies:["A Gentleman"]}})

db.Movies.updateOne({id:10},
  {$push :{Movies:"A Gentleman"}})

//Removing the movie
db.Movies.updateOne({id:10},
  {$pull :{Movies:["A Gentleman"]}})

  db.Movies.find({id:10})

 //Finding the movie details and song details
  db.Movies.find({id:10},
  {
  Movies:1,Song:1,Awards:1,_id:0
  })

  //Finding other names
  db.Movies.find({id:10},
    {FirstName:1,
    OtherNames:1,_id:0}
  )

//  Finding the list of movies
  db.Movies.find({Movies:{$exists:true}},
  {
   Movies:1,_id:0
  })


//Single Level

use('Managers');
  db.createCollection('SingleLevel');

db.SingleLevel.insertMany([
{
  "name": "John",
  "age": 111,
  "email": "john.doe@example.com"
},
{
"name": "Joh",
  "age": 111,
  "email": "joh.doe@example.com"},
  {
    "name": "Jo",
      "age": 112,
      "email": "jo.doe@example.com"},
      {
        "name": "Jn",
          "age": 113,
          "email": "jn.do@examle.com"},
          {
            "name": "Jh",
              "age": 114,
              "email": "jh.doe@xample.com"},
              {
                "name": "Jnh",
                  "age": 115,
                  "email": "jnh.doe@example.com"},
                  {
                    "name": "Jp",
                      "age": 116,
                      "email": "john.doe@example.com"},
{
                      "name": "J",
                      "age": 117,
                      "email": "j.doe@example.com"}

])
 
//Query for updating
db.SingleLevel.updateOne(
  {name:"J"},
  {$set: {name:"JJ"}}
)

//query for finding
db.SingleLevel.find({age:{$gt:100}})

//find

db.SingleLevel.find({name:"JJ"})

db.SingleLevel.updateOne({name:"JJ"},
{$set:{name:"JJJ"}}
)


//Nested Documnets

use('Managers');
db.createCollection('NestedType');

db.NestedType.insertMany([
{
  "name": "J",
  "age": 30,
  "contact": {
    "email": "j.doe@example.com",
    "phone": "555-1231"
  }},

  {
    "name": "Jo",
    "age": 31,
    "contact": {
      "email": "jo.doe@example.com",
      "phone": "555-1232"
    }},
{
  "name": "Joh",
  "age": 32,
  "contact": {
    "email": "joh.doe@example.com",
    "phone": "555-1233"
  }
},
{
  "name": "John",
  "age": 33,
  "contact": {
    "email": "john",
    "phone": "555-1234"
  }
},


{
  "name": "Johnn",
  "age": 34,
  "contact": {
    "email": "johnn.doe@example.com",
    "phone": "555-1235"
  }
},


{
  "name": "Johnm",
  "age": 35,
  "contact": {
    "email": "johnnn.doe@example.com",
    "phone": "555-1235"
  }
}

])

//Queries

db.NestedType.find({age :{$gt:20}},{contact:{phone:"555-1235"}}).count()
db.NestedType.find({age :35}).count()
db.NestedType.find({age :{$lte:30}}).count()


//Array Documnets

use('Managers');
db.createCollection('ArrayType');
db.ArrayType.insertMany([
{
  "name": "J",
  "hobbies": ["gaming", "traveling"],
  "addresses": [
    { "type": "home", "city": "New York" },
    { "type": "work", "city": "San Francisco" }
  ]
},
{
  "name": "Jo",
  "hobbies": [ "gaming"],
  "addresses": [
    { "type": "home", "city": "Texas" },
    { "type": "work", "city": "San Francisco" }
  ]
},

{
  "name": "Joh",
  "hobbies": ["traveling"],
  "addresses": [
    { "type": "home", "city": "California" },
    { "type": "work", "city": "San Francisco" }
  ]
},

{
  "name": "Joh",
  "hobbies": ["gaming", "traveling"],
  "addresses": [
    { "type": "home", "city": "Ohio" },
    { "type": "work", "city": "San Francisco" }
  ]
},

{
  "name": "John",
  "hobbies": ["traveling"],
  "addresses": [
    { "type": "home", "city": "New jersy" },
    { "type": "work", "city": "San Francisco" }
  ]
},
])


//queries

db.ArrayType.find({name:"John"},{addresses:{type:"home",city:"New jersy"}}).count();

db.ArrayType.find({ _id: ObjectId("66df80f01e6943370dd33977") })


db.ArrayType.find().sort({ _id: 1 })


db.ArrayType.find().count()

//Compound Documents

use('Managers');

  db.createCollection('CompoundType');

db.CompoundType.insertMany(
[
{
  "name": "Jo",
  "age": 31,
  "contact": {
    "email": "j.doe@example.com",
    "phone": "555-1231"
  },
  "hobbies": ["gaming"],
  "addresses": [
    { "type": "home", "city": "New York" },
    { "type": "work", "city": "San Francisco" }
  ]
},


{
  "name": "Jo",
  "age": 31,
  "contact": {
    "email": "jo.doe@example.com",
    "phone": "555-1232"
  },
  "hobbies": ["gaming","traveling"],
  "addresses": [
    { "type": "home", "city": "Texas" },
    { "type": "work", "city": "San Francisco" }
  ]
},

{
  "name": "Joh",
  "age": 32,
  "contact": {
    "email": "joh.doe@example.com",
    "phone": "555-1233"
  },
  "hobbies": ["gaming"],
  "addresses": [
    { "type": "home", "city": "California" },
    { "type": "work", "city": "San Francisco" }
  ]
},

{
  "name": "John",
  "age": 33,
  "contact": {
    "email": "john.doe@example.com",
    "phone": "555-1234"
  },
  "hobbies": ["reading", "gaming"],
  "addresses": [
    { "type": "home", "city": "New jersy" },
    { "type": "work", "city": "San Francisco" }
  ]
},



{
  "name": "Johnn",
  "age": 34,
  "contact": {
    "email": "john.doe@example.com",
    "phone": "555-1235"
  },
  "hobbies": ["traveling"],
  "addresses": [
    { "type": "home", "city": "New York" },
    { "type": "work", "city": "San Francisco" }
  ]
},


{
  "name": "Johnnn",
  "age": 35,
  "contact": {
    "email": "johnn.doe@example.com",
    "phone": "555-12355"
  },
  "hobbies": ["gaming","traveling"],
  "addresses": [
    { "type": "home", "city": "New York" },
    { "type": "work", "city": "San Francisco" }
  ]
},
])


//Deleting the Gaming in hobbies field
db.CompoundType.find()

db.CompoundType.updateOne({_id:ObjectId('66de84bc206a957434630342')},
  {$pull :{"hobbies":"gaming"}}
)


//Find documents by address city:
db.CompoundType.find({"addresses.city":"San Francisco"})

//Find documents by gaming
db.CompoundType.find({hobbies:"gaming"})

//Count documents by a specific criterion:
db.CompoundType.countDocuments({ hobbies: "traveling" })

db.CompoundType.find({ name: "John", "addresses.city": "New York" })
//Use of distinct
db.CompoundType.distinct("addresses.city")

// Find documents with the name "Jo" but only return the name and age fields.


db.CompoundType.find({name:"John"},{name:1, age:1,_id:0})


db.CompoundType.find({ name: "John" }, { name: 1, age: 1, _id: 0,"contact.phone":1 ,hobbies:1,})


//Query: Group documents by the "name" field and count how many documents exist for each name.
db.CompoundType.aggregate([
  { $group: { _id: "$name", count: { $sum: 1 } } }
])


db.CompoundType.find()


//Find all documents where one of the hobbies is "traveling" and one of the cities is "Texas".

db.CompoundType.find({ hobbies: "traveling", "addresses.city": "Texas" })

//Perform a text search on the "name" and "contact.email" fields.
db.CompoundType.createIndex({ name: "text", "contact.email": "text" })

db.CompoundType.find({ $text: { $search: "Jo" }})

// Find documents where any of the addresses is in "New York":
db.CompoundType.find({ "addresses.city": "New York" })

//****************Mxd Type of documents******************************
use('Managers');
  db.createCollection('MixedType');

db.MixedType.insertOne(
{
  "name": "John Doe",
  "age": 30,
  "profile": {
    "status": "active",
    "settings": {
      "theme": "dark",
      "notifications": ["email", "sms"]
    }
  }
})



db.CompoundType.insertMany([
{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "address": {
    "street": "456 Market St",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94104",
    "country": "USA"
  },
  "orders": [
    {
      "product": {
        "name": "Smartphone",
        "category": "Electronics",
        "brand": "BrandX"
      },
      "quantity": 1,
      "price": 699.99,
      "orderDate": ISODate("2023-09-10T10:00:00Z"),
      "status": "Shipped"
    },
    {
      "product": {
        "name": "Headphones",
        "category": "Accessories",
        
      },
      "quantity": 2,
      "price": 129.99,
      "orderDate": ISODate("2023-09-12T14:30:00Z"),
      "status": "Delivered"
    }
  ]
}])


db.CompoundType.insertMany([
  {
    "name": "Alice Smith",
    "email": "alice@example.com",
    "address": {
      "street": "456 Market St",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94104",
      "country": "USA"
    },
    "orders": [
      {
        "product": {
          "name": "Smartphone",
          "category": "Electronics",
          "brand": "BrandX"
        },
        "quantity": 1,
        "price": 699.99,
        "orderDate": ISODate("2023-09-10T10:00:00Z"),
        "status": "Shipped"
      },
      {
        "product": {
          "name": "Headphones",
          "category": "Accessories",
          
        },
        "quantity": 2,
        "price": 129.99,
        "orderDate": ISODate("2023-09-12T14:30:00Z"),
        "status": "Delivered"
      }
    ]
  },
  {
    "name": "Hem Bisht",
    "email": "hem.bisht20@gmail.com",
    "address": {
      "street": "B",
      "city": "New Delhi",
      "state": "Delhi",
      "zip": "110092",
      "country": "India"
    },
    "orders": [
      {
        "product": {
          "name": "Smartphone",
          "category": "Electronics",
          "brand": "Sony"
        },
        "quantity": 1,
        "price": 699.99,
        "orderDate": ISODate("2024-09-12T10:00:00Z"),
        "status": "Shipped"
      },
      {
        "product": {
          "name": "Headphones",
          "category": "Accessories",
          "Brand" :"Hello"
        },
        "quantity": 2,
        "price": 129.99,
        "orderDate": ISODate("2024-09-12T14:30:00Z"),
        "status": "Delivered"
      }
    ]
  }
])
  

//Retrieve all orders for a specific user
db.CompoundType.find({ name: "Hem Bisht" }, { orders: 1 })


//Find all users who have placed an order for a specific product 
db.CompoundType.find({"orders.product.name":"Headphones"})

//Query for product status 
db.CompoundType.distinct("orders.status")

db.CompoundType.find(
  { "orders.status": "Delivered" },
  { name: 1, "orders.$": 1 }
).pretty();

db.CompoundType.insertMany([
  {
    "name": "Alice Smith",
    "email": "alice@example.com",
    "address": {
      "street": "456 Market St",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94104",
      "country": "USA"
    },
    "orders": [
      {
        "product": {
          "name": "Smartphone",
          "category": "Electronics",
          "brand": "BrandX"
        },
        "quantity": 1,
        "price": 699.99,
        "orderDate": ISODate("2023-09-10T10:00:00Z"),
        "status": "Shipped"
      },
      {
        "product": {
          "name": "Headphones",
          "category": "Accessories",
          
        },
        "quantity": 2,
        "price": 129.99,
        "orderDate": ISODate("2023-09-12T14:30:00Z"),
        "status": "Delivered"
      }
    ]
  }
])

  db.CompoundType.insertMany([
    {
      "name": "Hem Bisht",
      "email": "hem.bisht20@gmail.com",
      "address": {
        "street": "B",
        "city": "New Delhi",
        "state": "Delhi",
        "zip": "110092",
        "country": "India"
      },
      "orders": [
        {
          "product": {
            "name": "Smartphone",
            "category": "Electronics",
            "brand": "Sony"
          },
          "quantity": 1,
          "price": 699.99,
          "orderDate": ISODate("2024-09-12 T10:00:00Z"),
          "status": "Shipped"
        },
        {
          "product": {
            "name": "Headphones",
            "category": "Accessories",
            "Brand" :"Hello"
          },
          "quantity": 2,
          "price": 129.99,
          "orderDate": ISODate("2024-09-12T14:30:00Z"),
          "status": "Delivered"
        }
      ]
    }])
  






//Updating the specific field inside the array
db.CompoundType.updateOne(
  { _id: ObjectId("66e0e03c12facb9a419fdae0") },
  {
    $set: {
      "orders.$[elem].product.brand": "Boat" // Update the brand name in the orders array
    }
  },
  {
    arrayFilters: [{ "elem.product.brand": "Sony" }] // Filter to target the specific brand name in the array
  }
);


db.CompoundType.distinct("orders.product.brand")
db.CompoundType.find({ _id: ObjectId("66e0e03c12facb9a419fdae0") })



//Queries
db.CompoundType.find({"orders.product.name":"Headphones"})

db.CompoundType.find({name:"Alice Smith","orders.product.name":"Headphones"})


db.CompoundType.find
({
  "orders.quantity":2
})

//Date queries
db.CompoundType.find({"orders.orderDate":{$gt:ISODate("2023-09-12T14:30:00Z")}})

db.CompoundType.find({"orders.orderDate":{$lt:ISODate("2023-09-12T14:30:00Z")}})

db.CompoundType.find({"orders.orderDate":{$gte:ISODate("2023-09-12T14:30:00Z")}})
  
db.CompoundType.find({"orders.orderDate":{$lte:ISODate("2023-09-12T14:30:00Z")}})

db.CompoundType.find({"orders.orderDate":{$gte:ISODate("2023-09-12T14:30:00Z"),$lte:ISODate("2023-09-12T14:30:00Z")}})

//Querying with Array Filters
//i. Find Users with More Than One Order:
db.CompoundType.find({"orders.1":{$exists:true}})


//who ordered the same product more than once.
db.CompoundType.find({
  "orders": {
    $elemMatch: { 
      "product.name": "Headphones", 
      "quantity": { $gt: 1 } 
    }
  }
})


//You can query and return specific fields from the document.
db.CompoundType.find(
  { name: "Alice Smith" },
  { email: 1, address: 1, _id: 0 }
);


//You can query and return only the orders array.
db.CompoundType.find(
  { email: "alice@example.com"},
  { orders: 1, _id: 0 }
);

//****************** */ Updating Complex Documents*****************************
//You can update the document by adding a new order to the orders array.

db.CompoundType.updateOne
(
  {email: "alice@example.com"},
  {$push :
  {
  orders:  
  {
orderid:ObjectId(),
product:
{
name:"Tablet",
category:"Electronics",
Company:"Boat"
},
quantity:1,
price:1111,
orderDate:Date(),
status:"Processing"
  }
  }
}
);

db.CompoundType.find({"orders.product.Company":"Boat"})

db.CompoundType.find({"orders.status":"Processing"})

db.CompoundType.find({"orders.orderid":"66e0fa9aabef63a14454073f"})


db.CompoundType.findOne({
  "orders.orderid": ObjectId("66e10279df5a41fd4e667bdc")
});

//Updating the status of specific order
db.CompoundType.updateOne(
  {
    "orders.orderid":ObjectId("66e10279df5a41fd4e667bdc"
)},
  { $set: { "orders.$.status":"Delivered" } }
)


// Delete a Specific Order:
db.CompoundType.updateOne(
  { email: "alice@example.com" },
  { $pull: { orders: { orderid: ObjectId("66e10279df5a41fd4e667bdc") } } }
);

db.CompoundType.find({email: "alice@example.com"})

//Aggregate Orders by Product Category:
db.CompoundType.aggregate([
  { $unwind: "$orders" },
  { $group: { 
      _id: "$orders.product.category", 
      totalOrders: { $sum: 1 },
      totalRevenue: { $sum: "$orders.price" }
    }
  }
]);

//Duplicate value with specific field
db.Department.aggregate([
  { $group: { _id: { name: "$name" }, docs: { $push: "$_id" }, duplicateCount: { $sum: 1 } } },
  { $match: { duplicateCount: { $gt: 1 } } }
])

db.Department.find({name:"BISHT"})
db.Department.distinct("_id")

db.Department.updateOne({_id:ObjectId('66d903021342a7ac36ed1026')},
  {$set:{ name:"Hemmm Bisht",email:"hem.bisht28@gmail.com",age:41}}
)

//deleting the specific field
db.CompoundType.updateOne(
  { _id: ObjectId("66e0e03c12facb9a419fdae0") },
  {
    $unset: {
      "orders.$[elem].brand": "" // Remove the "brand" field
    }
  },
  {
    arrayFilters: [{ "elem.brand": "Halwa" }] // Target the specific brand name in the array
  }
);

//Deleting a specific field
db.CompoundType.updateOne(
  { _id: ObjectId("66e0e03c12facb9a419fdae0") },
  {
    $unset: { brand: "" }
  }
);

//Deleting the specific field inside array
db.CompoundType.updateOne(
  { _id: ObjectId("66e0e03c12facb9a419fdae0")},
  [
    {
      $set: {
        orders: {
          $reverseArray: {
            $filter: {
              input: { $reverseArray: "$orders" },
              as: "order",
              cond: { $ne: ["$$order.product.brand", "Halwa"] }
            }
          }
        }
      }
    }
  ]
);

//deleting the duplicate value
db.CompoundType.updateOne(
  { "name": "Alice Smith" },  // Filter to select the document
  {
    $pull: {
      "orders": { "product.name": "Headphones" }  // Criteria to identify and remove the duplicate order
    }
  }
)

//Find 
//Use of distinct
db.CompoundType.distinct("addresses.city")
db.CompoundType.distinct("age")
db.Collectionname.find({ _id: ObjectId("Id") })
db.Manage.find({Month:"Aug"})
db.Manager.find({Month:"Aug"})
db.Manage.find({price:10}).count();
db.Manage.find({price:10,quantity:2})
db.Manager.find({price:10}).count();
db.Manager.find({price:10,quantity:2})

//Count with AND
db.Manage.find({price:10,quantity:2}).count();

//Find with OR
db.Manage.find({
    $or:[
      { price: 10 },
      { quantity: 2 }
    ]
  })

//Count with OR
  db.Manage.find({
    $or: [
      { price: 10 },
      { quantity: 2 }
    ]
  }).count();

//Greater than and less than equal with count
  db.Manage.find({
    "quantity": { $gte: 5, $lte: 10 }
  }).count();

  db.Manage.find({
    "quantity": { $gt: 5, $lt: 10 }
  })

  db.Manage.find({
    "quantity": { $gte: 5, $lte: 10 }
  })

//Query with insert one and many documents
db.Manage.insertOne({ Contact: 12345678910, Text:"Hello"})
db.Manage.insertMany([
    { Contact: 123, Text:"Hello Hello"},
    { Contact: 1234, Text:"Hello Hello Hello"}
   ])

//Update documnets
db.Manage.updateOne(
    { Text: "Hello Hello" },
    { $set: { Text: "Hello" } }
  )  
//Update multiple documents:

db.Manage.updateMany(
  { Text: "Hello" },
  { $set: { Text: "Hello welcome" } }
)
  

//Update One/multiple documents:
db.Manage.updateOne
(
    { Text: "Hello welcome" },
    { $set: { Month: "Aug"}}
  )
  
  db.Manager.updateMany
  (
      { price: 10 },
      { $set: { Month: "Aug"}}
    )

//UpdateManydocumnet
db.Manage.updateMany
(
    { Text: "Hello welcome" },
    { $set: { Month: "Aug"}}
)

//Delete one and many document
db.Manage.deleteOne({ Month: "Aug"})
db.Manage.deleteMany({ Month: "Aug"})

//Aggregation
db.Manage.aggregate([
  { $sort: { "quantity": -1 } } // 1 for ascending, -1 for descending
])



//Index creation
db.Manage.createIndex({ "Item": 1 })

//count documents
db.Manage.countDocuments();
db.Manage.countDocuments({ price: 10 })


//distinct value

db.Manage.distinct("quantity")


/////Query with Manager Database//////////////////


db.Manager.find({
    $or: [
      { price: 10 },
      { quantity: 2 },
      {Month:"Aug"}
    ]
  })


  //Creating Index
  db.Manager.createIndex({price:1})
  db.Manager.find().sort({ price: 1 })
  db.Manager.createIndex({item:1})
  db.Manager.find().sort({item: 1})

  db.Manager.createIndex({price:1,quantity:-1})
  db.Manager.find({ price: 10 }).sort({ quantity: -1 })
  
  
  //Insert One document
  db.Department.insertOne({name:"BISHT",age:34,email:"hem.bisht20@gmail.com"})

  //Insert Many Document
  db.Department.insertMany([{name:"Lalit",age:34,email:"lalit.bisht21@gmail.com"},
    {name:"Halwa",age:34,email:"Halwa.bisht22@gmail.com"},

    {name:"Harry",age:34,email:"Harry.bisht22@gmail.com"},
  ])

//Finding duplicate values
  db.Department.aggregate([
    {
      $group: {
        _id: { age: "$age" }, // Group by all fields except _id
        docs: { $push: "$_id" },
        duplicateCount: { $sum: 1 }
      }
    },
    {
      $match: {
        duplicateCount: { $gt: 1 }
      }
    }
  ])


//Find the exact match
  db.Department.aggregate([
    {
      $group: {
        _id: { name: "$name", email: "$email", age: "$age" }, // Group by all fields except _id
        docs: { $push: "$_id" },
        duplicateCount: { $sum: 1 }
      }
    },
    {
      $match: {
        duplicateCount: { $gt: 1 }
      }
    }
  ]);

//Inserting documents for exact match
  db.Department.insertOne(
    {
    "name": "Hem Bisht",
    "age": 34,
    "email": "hem.bisht20@gmail.com"
  })

  db.Department.find()
  

  db.Invnt.insertMany([
    {
      _id:6,
      item: 'journal',
      instock: [
        { warehouse: 'A', qty: 5 },
        { warehouse: 'C', qty: 15 }
      ]
    },
    {
      _id:7,
      item: 'notebook',
      instock: [{ warehouse: 'C', qty: 5 }]
    },
    {
      _id:8,
      item: 'paper',
      instock: [
        { warehouse: 'A', qty: 60 },
        { warehouse: 'B', qty: 15 }
      ]
    },
    {
      _id:9,
      item: 'planner',
      instock: [
        { warehouse: 'A', qty: 40 },
        { warehouse: 'B', qty: 5 }
      ]
    },
    {
      _id:10,
      item: 'postcard',
      instock: [
        { warehouse: 'B', qty: 15 },
        { warehouse: 'C', qty: 35 }
      ]
    }
  ]);




  db.Invnt.insertMany([
    {
      _id:11,
      item: 'journal',
      status: 'A',
      size: { h: 14, w: 21, uom: 'cm' },
      instock: [{ warehouse: 'A', qty: 5 }]
    },
    {
      _id:12,
      item: 'notebook',
      status: 'A',
      size: { h: 8.5, w: 11, uom: 'in' },
      instock: [{ warehouse: 'C', qty: 5 }]
    },
    {
      _id:13,
      item: 'paper',
      status: 'D',
      size: { h: 8.5, w: 11, uom: 'in' },
      instock: [{ warehouse: 'A', qty: 60 }]
    },
    {
      _id:14,
      item: 'planner',
      status: 'D',
      size: { h: 22.85, w: 30, uom: 'cm' },
      instock: [{ warehouse: 'A', qty: 40 }]
    },
    {
      _id:15,
      item: 'postcard',
      status: 'A',
      size: { h: 10, w: 15.25, uom: 'cm' },
      instock: [
        { warehouse: 'B', qty: 15 },
        { warehouse: 'C', qty: 35 }
      ]
    }
  ]);


  db.Invnt.find({item:'planner'})

  db.Invnt.find({_id:1})

  //Max Value
  db.Invnt.aggregate([
    {
        $group: {
        _id: null, // No grouping by a specific field, so we use `null`
        maxValue: { $max:"$_id" }
      }
    }
  ])


//Minimum value
  db.Invnt.aggregate([
    {
        $group: {
        _id: null, // No grouping by a specific field, so we use `null`
        minValue: { $min:"$_id" }
      }
    }
  ])


  //Minimum value
  db.Invnt.aggregate([
    {
        $group: {
        _id: null, // No grouping by a specific field, so we use `null`
        maxValue: { $max:"$_id" }
      }
    }
  ])


//sum value
db.Invnt.aggregate([
  {
      $group: {
      _id: null, // No grouping by a specific field, so we use `null`
      maxValue: { $sum:"$qty" }
    }
  }
])



  db.Invnt.find().sort({ _id: -1 }).limit(1)


  //Finding value bw dates

  db.Manager.find({
    date: {
      $gte: ISODate("2014-03-01"),
      $lte: ISODate("2016-02-06")
    }
  })
  db.Manager.find({
    date: {
      $gte: ISODate("2014-03-01"),
      $lte: ISODate("2016-02-06")
    }
  }).count()


db.Invnt.find({ size: { h: 14, w: 21, uom: 'cm' } });
db.Invnt.find({ 'size.h': 14 });
db.Invnt.find({ 'size.w': 21 });
db.Invnt.find({ 'size.uom': 'cm' });

//Items with any warehouse having qty greater than 10
db.Invnt.find({ 'instock.qty': { $gt: 10 } });

//Items with any warehouse having qty less than 10
db.Invnt.find({ 'instock.qty': { $lt: 10 } });

//Items in warehouse A with qty greater than 10:
db.Invnt.find({ 'instock.warehouse': 'A', 'instock.qty': { $gt: 10 } });


//Total quantity of items in all warehouses:
db.Invnt.aggregate([
  { $unwind: "$instock" },
  { $group: { _id: "$item", totalQty: { $sum: "$instock.qty" } } }
]);


//Retrieve only the item and instock fields for all documents:
db.Invnt.find({}, { item: 1, instock: 1 });


// The current database 
use('Managers');
db.createCollection('Invnt');

db.Invnt.insertMany([
  {
    _id:1,
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
  },
  {
    _id:2,
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A'
  },
  {
    _id:3,
    item: 'paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D'
  },
  {
    _id:4,
    item: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D'
  },
  {
    _id:5,
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  }
]);

//List of Work new collection
db.createCollection("Worklist")
db.Worklist.insertMany([
{ id:"1",List:"Core"},

{ id:"2",List:"MongoDB"},

{ id:"3",List:"SQL"},

{ id:"4",List:"Linq"},

{ id:"5",List:"Angular"},
])
//Query for finding all the List in the worklist Collection
db.Worklist.distinct("List")

db.Worklist.deleteOne({List:"Core"})

//Finding Duplicate documents with Number of Count
db.Worklist.aggregate([
  { $group: { _id: { List: "$List" }, docs: { $push: "$_id" }, duplicateCount: { $sum: 1 } } },
  { $match: { duplicateCount: { $gt: 1 } } }
])

//Updaating the MondoDB -Mongo DB
db.Worklist.find()
db.Worklist.updateOne({id:"2"},
  {$set :{List:"Mongo DB"}}
)


//Validation for collection
db.createCollection("Department", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "email"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          maximum: 70,
          description: "must be an integer between 18 and 70 and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$",
          description: "must be a valid email address and is required"
        }
      }
    }
  },
  validationLevel: "strict",  // Enforces validation strictly
  validationAction: "error"   // Rejects invalid documents with an error
})


//Validation changing
db.runCommand({
  collMod: "Department",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "email"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          maximum:  111,
          description: "must be an integer between 18 and 111 and is required for considering a citizen as voter"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$",
          description: "must be a valid email address and is required"
        }
      }
    }
  },
  validationLevel: "strict",  // Enforces validation strictly
  validationAction: "error"   // Rejects invalid documents with an error
})
