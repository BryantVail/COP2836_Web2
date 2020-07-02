
db.issues.remove({});

const issuesDb = [
  {
    id: 11,
    status: "New",
    owner: "Bryant",
    effort: 5,
    created: new Date("2018-08-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 21,
    status: "Assigned",
    owner: "Stephanie",
    effort: 3,
    created: new Date("2020-06-01"),
    due: new Date("2020-07-04"),
    title: "Put gum in the Cd tray of the computer",
  },
  {
    id: 31,
    status: "Assigned",
    owner: "Stephanie",
    effort: 6,
    created: new Date("2020-06-02"),
    due: new Date("2020-07-04"),
    title: "Printer is out of ink",
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







