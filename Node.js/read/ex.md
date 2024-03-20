# node vs express :- the node is main thing and express.js is make to server and how to server is react.expess HELP to react the server.


# node.js  siganl threded chhe to non -blocking su kam use thai chhe?
--> beacasue node.js event loop no use kare chhe.condtion hoy chhe contionly run hota jab tak task complete na ho tab tak.then toi task nai hoy tyare exist thai main threded close thai jase and resorce ne relese kari deise. teni responsibility hoy chhe ke os ne dispatch and worker ne dipatch karva chhe or tamari bija pending funcation playio or aysnc

# event driven: - any action performing like whatapp in any people chat and this people tyeping is see to other people it's called event driven. jyare pn action peform thai tyare temathi respons nikalvo tene event-driven kahevai chhe.


# what is express.js :- packeage, rothing, middleware 
easy and short code to creat server and other.

# why express?
=> http is very difficult to use, express make thai eaiser.

# what is routing:- ruote banavani process ne routing kahevai chhe.
example like :- /profile, /about us, /contact

middleware : it is first use for run program and then other is use. 
syntax :- (variable name).use(funcation(req,res,next){

});
 then will be run is routing 

 other defination is middleware ek isa funcation he jo rout se pahele chalata he.



request and response, next :- request me user li location, ip, device, and data pass to the server ka hota he.response me jo bhi data server se user ko jata he use response kahate he.

THE CODE WILL BE RUN CONTROL IS GOING TO THE MIDDLEARE AND PASS TO THE AND JUMP TO NEXT ROUT/MIDDLEARE WITHOUT NEXT WILL BE NOT A RUN CODE. 

req:- browser mathi je kai aviyu hoy<i class="bi bi-arrow-up-square"></i> tene apane request ma gotye chhiye.

route parameter:- url in ex. :- www.welcome.com/profile:username=raj. ":" it's means param or parameter.

templet engine:- template engine is short name is ejs,pun,handlebar..etc. it's a use for the to high feature of the html and it's similer to the html.

=> jo ek markup style jo ki baad me convert ho jayegi html me.
=> html me chnage nai kar sakate and ejs dynamicl chnage kar sakate ho.

# = = > ejs setup < = =

1. ejs install
.npm i ejs

2. configure ejsa
app.set("view engine","ejs")

3. ek views folder banav.

4. usame ek ejs file banav.

5. send ki jagah render karo:- render karate samay make sure dhayn rakhe k ap view ke inder ki file ka hi name likhe and render funcation me .ejs na likhe.         


# DYNAMIC ROUT :- JO BHI URL ME EK HISSA BAAR BAAR CHNAGE HOTA AND EK HISSA SAME HI RAHETA HE USE LIYE AAP DYMANIC ROUT BANAIYE.

static file:- image, stylesheets and fontEnd ne set karavu it's called static file.
=> create the folder in the views folder image, stylesheets, frontend.

http-method -get, post:- 

error handling

# ==> Express generator <== 
je pela apane folder strature banavata hata and ani inder folder banav hata te banava ni jarur nai pade.
RESONE FOR THAT Express gen. khud folder banavi dei chhe and teni file and html code and totaly is create it's called Express gen...

# ==> step:---

npm i express-generator -g

to create new app anywhere:
open cmd move to desktop 

create new app anywhere :- 
express appname --view=ejs

now use three commands:-
cd appname
npm i 
open it on vs code



# how to stop the port?
 
=====step:
sudo lsof -i :3000
sudo kill [PID]



# ==> mongodb 

database is a store the value and some informations it's called database.

mongodb is non- relational database.

code side         MONGODB SIDE
  ||                  ||
DB SETUP          db formation
  ||                  ||	
MODE              collections
  ||                  ||
SCHEMA             documents

database ma je alag alag spices ma divided kariye like amazone in user data, adamin database, je a spices kariye tene models kahevai chhe.
je code lakhiye tene models kahevai chhe.

je ek bhag(khand) baniyo tene kahevai chhe collections.


scheam(Db) = documents(Db)

ek app ka poora data = db
ek app mein variety of data hota hai par pura data hota hei data ka hi hai, par us data ka sub category kehalaata hai collecions.

colllections matalab ki bole to ek user ka ka data,ek user par baat kare to hua document.

# mongodb SETUP :- 

1. install mongodb

2. install mongoosejs

3. require and setup connections

4. make schema

5. create model and export


# ==> run :- strat mongosh 

create new db = user(name)

use admin
User validation failed: posts.0: Cast to [ObjectId] failed for value "[ 2 ]" (type string) at path "posts.0" because of "CastError"
db.(db documnets).find()

db.createCollections("mydatabase") or 

db.admindata.insertOne({name:"name"....etc})

db.admindata.insertMany([{name:"raj",language:"javascript",active:true},{name:"dabhi",language:"javascript",active:true},{name:"dave",language:"flutter",active:true}]);

==>read only one data: db.admindata.find({ active: true }).pretty().limit(1)
      second method:db.admindata.find({ active: true })\
      skip method:- db.admindata.find({active: true }).pretty().limit(1).skip(1)
      
      
==> update quary:-db.admindata.updateOne({name:"raj"} ,{$set:{language:"backand"}})
                 db.admindata.updateMany({name:"raj"} ,{$set:{language:"backand"}})
                 
==> delete: db.admindata.delete({language : "FULLSTACK"})
            db.admindata.delete({})
   
# ===>How to Install MongoDB Compass on Ubuntu 22.04 LTS

1.wget https://downloads.mongodb.com/compass/mongodb-compass_1.30.1_amd64.deb

2.cd Downloads

3.sudo apt install ./mongodb-compass_*_amd64.deb

4.MongoDB-compass

                 

client me hoti he cookies. and use for save the data in forntend
server par hota he session and use for save the data in backend means server per data save thai chhe 



# ============> jwt 

==>hmac:hash meassage authentication code
==>web token,jsonwebtoken:-javascript object notation web-token authentication one type of data tracker for user login and all the activity to store the database.secure data transmit JSON format.je pn kam thai te server ni secreat key ni sathe thai chhe.
User validation failed: posts.0: Cast to [ObjectId] failed for value "[ 2 ]" (type string) at path "posts.0" because of "CastError"

SESSION is reffrence token  id to check usake hisab se action perform karo.
JWT actully all the value conation karata se jisako seesion refrence karat he. and all the value is it's self hoti he.

1.header: in this kya type nu chhe, kyo algorithm chhe te hoy chhe.most common use HS256 OR HMAC
2.payload: real infromation for the user. IT'S LIKE CIAM BASE AUTHENTICATION. ISAME PASSWORD NAHI DAL SAKTE.
3.signature: IT'S A VERY SERCURE. it's oly change the id only server 
data and url is transmit base 64 


jab request moakiye tyare te header jase tya thi server pase jase tya te pyload or header nikal kar server je sercrete key chhe tene add kari base-64 encode kare tenathi te alogorithm thi sigature  nikale jo header ma hatu and je singature niaki tene teni je pelethi server ma hati teni jode compare karase and jo bane same hase to token valid chhe other invlid hase.
jwt jyare pn use karo tyare encytion toke hovu joiye.


# ===> COOKIES<=====

cookies setup 
res.cookie("name",value)

cookies reading
res.cookies.name

cookies clear
res.clearcookies("name")

===> Flash <===
install connect-flash
make sure you setup express-session
makesure you put connect flash in a app.use function
kisi bhi route mein app use chalane ka try karein

Flash msg he allow karata he ki app ek file abanaya huva route me jo bhi data he usako app dusare route me use kar skate ho.


APP CONNECT FLASH KO USE NAHI KAR SKTE BINA EXPRESS SESSION	

# ===>"session is the store the data form the backend.

# Authentication And Authoraition:-

# step:-
1. install these packages:- npm i passport,passport-local,passport-local-mongoose,mongoose,express-session
2. write app.js code frist in app.js file and write it after view engine and before logger
3. setup users.js properly.
4. in index.js try register first and other code as well

# ==> DATA ASSOCIATE 

EK model se doosre model ke data ko jod dena id ke through,matalab ek user post banayega hi, jab poist banayega to o user dawaara banyega,to hum kya karate hai jab do aise data apas me closely related hote hai hum dono ko jod dete he, ki ek model ki bani id ko dusare model ke data se dedete hai aur is model ke data ki id pichhle model ke data ko dedete hai.
User validation failed: posts.0: Cast to [ObjectId] failed for value "[ 2 ]" (type string) at path "posts.0" because of "CastError"
INSTAGRAM IN HAR EK USER NI UNIQUE ID HOY CHHE. AND USER PASE POST NI ID HOY CHHE
HAR EK POST NI EK ID HOY JE USER PASE AND FIND KARVA HELP KARE CHHE.

LIKE TO SWAP THE ID USER ID ==> POST.
POST ==> USER ID.	


# ===> PINTEREST
	
Passport-Local-Mongoose Plugin: It applies the passport-local-mongoose plugin to the schema. This plugin simplifies building username and password login with Passport.js for Mongoose models.

talwilindcss


The .register method used in this code is provided by the passport-local-mongoose plugin. This plugin extends the functionality of Mongoose models to handle user authentication and registration with Passport.js in Node.js applications.

Here's what the .register method does:

User Registration: It takes a new user object (in this case, userData) and a password as arguments. It hashes the password and saves the user data, including the hashed password, to the MongoDB database. This method simplifies the process of user registration by automatically handling password hashing and database interaction.

Promise-based: The .register method returns a promise that resolves when the user registration is successful and rejects if an error occurs during the registration process.

Usage: In the provided code, userModel.register(userData, req.body.password) is used to register a new user with the provided user data (username, full name, email) and password submitted through the registration form.

Error Handling: If an error occurs during the registration process (e.g., if the username or email is already in use), the promise is rejected, and the .catch block is executed to handle the error. In the error handling block, an error message is logged to the console, and a flash message is stored using req.flash to indicate the registration error. Finally, the user is redirected back to the homepage ("/") to display the error message or handle the error further.

## what is different between operational error and programming error.

==> operational error is run time error.programming error is a complier time error.
==> Programmer errors occur when mistakes are made during the development process.These errors can be caused by a lack of understanding of the programming language or platform being used, a lack of attention to detail, or a lack of testing. 



            
    






	 
