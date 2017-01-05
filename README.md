# sample-node-api

_Becuase why start from scratch?_

The structure of the app is as follows

```
app/
––– controllers/
–––––– controller1/
––––––––––– method1.js
––––––––––– method2.js
–––––– controller2/
––––––––––– method1.js
––––––––––– method2.js
––– middlware/
–––––– index.js
––– utils/
––– router.js
server.js
```

## Controllers

All files added into the controller folders (`controller1` or `controller2`) are automatically added to the controller-object available in `router.js`. To create a new controller simply add a folder, say `auth` in `app/controllers/` and then add method-files in `auth`.

## Middlewares

All middleware are to be handled in `middleware/index.js` at the current moment there is nu automation of middlewares so to add a middleware you actually need to add it to the `index.js`. 
