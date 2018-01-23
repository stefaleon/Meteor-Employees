import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import _ from 'lodash';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  const numberOfRecords = Employees.find({}).count();
  console.log(numberOfRecords);

  // if there is no data
  if (!numberOfRecords) {
    // make 5000 faker-card and faker-image objects and save them to the db
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name: name,
        email: email,
        phone: phone ,
        avatar: image.avatar()
      });
    });
  }
});
