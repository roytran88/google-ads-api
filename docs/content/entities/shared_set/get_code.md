---
title: Get SharedSet
order: 2.1
type: get_code
entity: SharedSet
---

```javascript
// Getting the entity
let result = await customer.sharedSets.get('customers/9262111890/sharedSets/1802068178')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/sharedSets/1802068178',
  id: 1802068178,
  member_count: 0,
  name: 'My shared set',
  reference_count: 0,
  status: 3,
  type: 2,
})
```
