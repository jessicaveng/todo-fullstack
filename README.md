TODO App

```
npm install
git checkout -b <branchname>
npm run dev
```

See the breathtaking designs [here](http://localhost:3000/designs/)

Here's a list of steps in case they are useful. You can build in any order you like though ;)

1.  Design a database to store a list of tasks, e.g. task details, priority, completed yes/no
1.  Build the migrations and seed data
1.  Build an API to list, add, update and delete
1.  Write db functions specified in our routes
1.  Link routes in server.js file
1.  Test you API with Postman/Insomnia
1.  Wanted to start with internal API data in global state, so wrote action & api function to retrieve data and then added this to global state with componentDidMount() on app page load
1.  Build React Components from static html
1.  Design Redux Global State (think of it like a JS object)
1.  Build Redux Reducers (the properties or keys of your state design are reducers, the values are hard-code static data as initialState)
1.  Build API Client in the front end
1.  Build Thunk Actions to get task from the API
1.  Build Redux Actions to save task data from the API (remove hard-code initialState)
