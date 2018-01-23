### Employees
### React on Meteor
* Part of [Meteor and React for Realtime Apps](https://www.udemy.com/meteor-react-tutorial/)
by [Stephen Grider](https://github.com/stephengrider)


&nbsp;
## 01 the employees collection

* Add the *imports* folder. It is shared by both the *client* and the *server*.

* Add the *collections* folder. Create the *employees.js* file.

* Declare and export the *employees* collection.


&nbsp;
## 02 add fake data

* Install *faker* and *lodash*.

```
$ npm install --save faker lodash
```

* Create fake data on the server.


&nbsp;
## 03 the employee-list

* In the *client* side, add the *Components* folder.

* Create the *EmployeeList* component and use it in *App*.


&nbsp;
## 04 publish and subscribe

* Remove auto publishing.

```
C:\Meteor-Employees>meteor remove autopublish
```

* On the server side, define a publication with a cursor, so that *employees* are fetched in twenties.


* Install the mixin dependency.

```
$ npm install --save react-addons-pure-render-mixin
```

* Install the meteor react data tracking package.

```
C:\Meteor-Employees>meteor add react-meteor-data
```

* In *employee_list.js* we can now export a container that subscribes to the *employees* collection, fetches the published portion of data and passes them as props to the *EmployeeList*.
