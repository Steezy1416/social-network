# Social-Network

## Overview

This application is a social network API that allows users to create, delete, edit their thoughts and allow them to react to other users thoughts.

### My goals are...

* Be able to do CRUD operations with the data
* Format the date when requests are made
* Delete all of a users thoughts when the user gets deleted
* Allow the user to make a friends list
* Become more familiar with a noSql Database

---

## Preview

![preview](https://user-images.githubusercontent.com/105886307/206821989-791a6d65-cefc-421d-8841-758e54949fa9.png)

### Video demonstration

To view a video demonstration you can go [here](https://drive.google.com/file/d/1QmbIjyrRfCN2o_3RoF9RDUlaaw92FMPS/view)

---

## How do I access this application?

To acces this application you want to...

* Install Node.Js
* Install Insomnia

</br>

After everything is downloaded, you want to download the zip file of this repository and copy paste the contents into your desired folder.

When you have your folder ready open your terminal and change into the directory where you saved the application. Then type "npm i" to install the dependencies needed for the application

```
npm i
```

Once the dependencies are installed you can start the server with "npm start"

```
npm start
```

Now you are ready to open Insomnia and play around!

---

## Types of routes

First of to use this application I recommend to be organized. I recommend creating the Thoughts and User folders in Insomnia with a list of different types of requests like shown in the preview so you can keep track of everything.

</br>


### User Routes

</br>

```
http://localhost:3001/api/users
```
This route is used to ...

* Get all users
* Create a user

</br>

```
http://localhost:3001/api/users/<userId>
```
This route is used to...

* Get user by Id
* Update a user
* Delete a user

</br>

```
http://localhost:3001/api/users/<userId>/friends/<friendId>
```
This route is used to...

* Add a friend
* Remove a friend

</br>

___

### Thought Routes

</br>

```
http://localhost:3001/api/thoughts
```
This route is used to...

* Get all thoughts
* Create a new thought

</br>

```
http://localhost:3001/api/thoughts/<thoughtId>
```
This route is used to...

* Get a thought by Id
* Update a thought
* Delete a thought

</br>

```
http://localhost:3001/api/thoughts/<thoughtId>/reactions
```
This route is used to...

* Add a reaction to a thought by thoughtId

</br>

```
http://localhost:3001/api/thoughts/<thoughtId>/reactions/<reactionId>
```

This route is used to...

* Delete a thought by thoughtId and reactionId
