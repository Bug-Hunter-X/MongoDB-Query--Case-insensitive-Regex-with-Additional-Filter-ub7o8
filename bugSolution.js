```javascript
const query = {
  $and: [
    { field1: { $regex: /pattern/i } },
    { field2: value }
  ]
};

db.collection.find(query).toArray((err, result) => {
  // ...
});
```