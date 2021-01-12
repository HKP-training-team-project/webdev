# webdev
# HKP 2021 Winter Internship Training - Team Project: Webdev

## Functionalities of the App

1. User Service:
     - Users: **Create/sign-up** for an account 
     - Users: **Log-in** to a pre-created account 
     - Administrators: Are able to **log-in** with a predefined username and password (a user should be able to be recognized as an administrator) 

2. Item Service:
     - Administrators: **Upload/remove** items to/from the store. Each item consists of a **price**, a **description**, and a **picture**.  
     **(Optional)** Item Categories: Each item has an additional field (a category).  
     **(Optional)** Multiple Picture Upload: Administrators can upload multiple pictures  
     - Users: View all items in the store  
     **(Optional)** Item Categories: Users can filter items by their category  
     **(Optional)** Multiple Picture Upload: Pictures gradually slide in a carousel on the app as the user views the item  

3. Cart Service:
   - Users: Click on items and **add** them to the cart 
   - Users: **View** all items in the cart 
   - Users: **Checkout** cart (no payment processing; checking out should **simply empty the cart**, **update item quantities**, and **redirect the user to the shopping page**) 
