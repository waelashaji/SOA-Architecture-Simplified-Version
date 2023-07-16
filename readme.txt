# importing JavaScript files
I have to import all JavaSript files at once in index.html
cons
- Global variable access
- Bulk file import
- script loading order errors
- duplicate declaration names errors

# Module bundiling limitations
Can't require js files and group them in one index.js file 
cons
- Complexity and maintenance overhead

# Classes Limitations
Can't properly interact with classes or objects
cons
- Limited OOP
- Complexity and maintenance overhead


note: We can create a seperate domains folder where each domain contains business logic, services
specific entities related to the domain. In this case the interaction will take place between the 
controller and the domain