# Snomed expression builder

Trasform Snomed expression constraint to MongoDB query

```
    let makeExpression = requiere('snomed-expression-builder');
    let query = makeExpression('* : 246075003 |causative agent| = 387517004 |paracetamol|');

    ...

    db.getCollection('snomed').find(query).then(...);
```

### Thanks to
This package is just an isolation of the query builder with some library updates. 
Thanks to https://github.com/IHTSDO/sct-snapshot-rest-api