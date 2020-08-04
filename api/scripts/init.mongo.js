/* global db print */
/* eslint no-restricted-globals: "off" */


db.issues.remove({});

const issuesDb = [
  {
    id: 11,
    status: 'New',
    owner: 'Bryant',
    effort: 5,
    created: new Date('2018-08-15'),
    due: undefined,
    title: 'Error in console when clicking Add',
    description: `Steps to recreate the problem: 
      \n1. Refresh the browser. 
      \n2. Select 'New' in the filter'
      \n3. Refresh the browser again. Note the warning in the console: 
        \n    Warning: Hash history cannot PUSH the same path; a new entry
              will not be added to the history stack
      \n4. Click on 'Add'.
      \n5. There is an error in console, and add doesn't work.`
  },
  {
    id: 21,
    status: 'Assigned',
    owner: 'Stephanie',
    effort: 3,
    created: new Date('2020-06-01'),
    due: new Date('2020-07-04'),
    title: 'Put gum in the Cd tray of the computer',
    description: `There needs to be a full replacement and upgrade of the CD drive. Ensure there is also DVD/RW capability on the drive`
  },
  {
    id: 31,
    status: 'Assigned',
    owner: 'Stephanie',
    effort: 6,
    created: new Date('2020-06-02'),
    due: new Date('2020-07-04'),
    title: 'Printer is out of ink',
    description: `When printing, ink is not applied appropriately in weight or depth to be considered a printed document in the sense of its applicability to being used as a physical form of media.`
  },
];

db.issues.insertMany(issuesDb);
const count = db.issues.count();
print('Insert', count, 'issues');

db.counters.remove({ _id: 'issues' });
db.counters.insert({ _id: 'issues', current: count });

db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });







