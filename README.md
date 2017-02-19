
# Senior Enrichment Project

## Getting started

1. Fork and clone this repo
2. *Set the name of your project in `package.json`*. The skeleton intentionally ships with an invalid name.
3. `npm install`
4. Start the build process with: `npm run build-watch`
5. In another terminal, start your app with `npm start`
6. If you navigate to the URL you should see some UI already :) [We already have some connection code to get you started]

## Requirements

### The Premise

You are the CTO of the Margaret Hamilton Interplanetary Academy of JavaScript. Create a RESTful web platform that allows you to manage your students and campuses.

### The tools

Use at least sequelize, express, react, and redux when creating this app. You can incorporate any additional libraries or tools you wish.

### DB Design

- Students
  * have profile info (e.g. name and email)
  * must be assigned to a campus

- Campuses
  * have info such as a name and image
  * can have many students assigned (may have none)

### Views and Functionality

- Navigation: as a user I...
  * will land on **Home** by default
  * can navigate to **Campuses** from **Home**
  * can navigate to **Students** from **Home**
  * can navigate to view a **Single Campus** from **Campuses**
  * can navigate to view a **Single Student** from **Students**
  * can navigate to view a **Single Student** from **Campuses** (for any student at that campus)
  * can navigate to view that student's **Single Campus** from **Single Student**

- Views: as a user I...
  * see a list of all campuses on the **Campuses** view
  * see a list of all students on the **Students** view
  * see details about a campus on the **Single Campus** view, including that campus's students
  * see details about a student on the **Single Student** view, including that student's campus

- Actions: as a user I...
  * can create a campus
  * can edit a campus's info, including adding/removing a student to/from that campus
  * can delete a campus
  * can create a student
  * can edit a student's info, including the campus that student is assigned to
  * can delete a student

### Routes

```
GET
- all campuses
- a campus by id
- all students
- a student by id
```

```
POST
- new campus
- new student
```

```
PUT
- updated student info for one student
- updated campus info for one campus
```

```
DELETE
- a campus
- a student
```

## Evaluation

- Code modularity/readability (25%)
- Models (25%)
- Routes (25%)
- Frontend logic and functionality (25%)
- Design + Bonus features (up to 10 Extra Credit points)

# Hi, I'm bones

I'm a happy little skeleton. You can clone me to use as a starter on your projects!
I have React, Redux, Sequelize, and Express all just rattling around in here ready
to go.

## I need node >= 6.7.0

If you don't have it, I'll complain and tell you how to install it.

## 1. Make me into something!

Create a git repo however you want to. You can fork me on Github, but you can only do
that once (so weird!). You can also create a Github repo and clone it, or just do
`git init` in an empty directory on your machine.

After you have a repo on your machine:

```
git remote add bones https://github.com/FullstackAcademy/bones.git
git fetch bones
git merge bones/master
```

And then you'll have me! If I change—which I probably will—you can get the most recent
version by doing this again:

```
git fetch bones
git merge bones/master
```

## 2. I need a name.

I don't have a name. I think I used to have one, but it turned to dust right along with my
heart and liver and pituitary gland and all that stuff.

Anyway, I'll need one. Give me a name in `package.json`.

## 3. Start my dusty heart

Short and sweet:

```
npm install
npm run build-watch
npm start
```

`npm start` doesn't build, so watch out for that. The reason it doesn't build is because you
probably want to watch the build and run me in separate terminals. Otherwise, build errors get
all mixed in with HTTP request logging.

## My anatomy

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts. (Right now it has *one* script that creates a useful symlink.)

## Conventions

I use `require` and `module.exports` in `.js` files.

I use `import` and `export` in `.jsx` files, unless `require` makes for cleaner code.

I use two spaces, no semi-colons, and trailing commas where possible. I'll
have a linter someday soon.

## Quick Heroku deployment

1. Set up the Heroku command line tools
2. `heroku login`
3. Add a git remote for heroku:
  - **If you're creating a new app...**
    1. `heroku create` or `heroku create your-app-name` if you have a name in mind.
    2. `heroku addons:create heroku-postgresql:hobby-dev` to add postgres
    3. `npm run deploy-heroku`. This will create a new branch and compile and commit your
       frontend JS to it, then push that branch to Heroku.
    4. `heroku run db/seed` to seed the database

  - **If you already have a Heroku app...**
    1.  `heroku git:remote your-app-name` You'll need to be a collaborator on the app.

Afterwards,
  - *To deploy:* `npm run deploy-heroku`
  - *To re-seed:* `npm run db/seed`  
