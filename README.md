

## Pantry is a free service that provides perishable data storage for small projects. Here we are considering PAntry as a memory were we are storing multiple buckets (till 100). Then we are creating buckets and performing crud operations on the bucket i.e we are creating, updating, fetchng and deleting data permanently

createPantry API-- here we have creating pantry in this api. we are not asked to create api but we are doing so because we needed to fetch pantries and also we needed pantry unique id for execution of rest of the apis.

getPantry-- here we are fetching all the pantries that we have created

createBucket-- here we are creating buckets which have a dynamic schema. buckets are having pantryId in their body so as we can fetch the 
buckets through those ids


updateBucket--here we are updating the dynamic property of buckets. multiple keys can be updated .

fetchBucket--here we are fetching the buckets

deleteBucket-- here we are deleting the bucket permanently i.e the buckets are permanently deleted from the database.




