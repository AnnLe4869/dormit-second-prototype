# Path guide for each component

In general, all components are in their own page EXCEPT:

- Cart display will be popup
- Item detail will be popup

With that, we have six(6) main routes: home, search, order, account, auth and checkout. Assuming our URL is `https://localhost`, we have

## Home

This route corresponds to the route `https://localhost/` and components are in `routes/home` directory. This is where we see all the products, deals as well as sections

There is only one subroute

- `/` will show all products, deals and section

## Search

This route corresponds to the route `https://localhost/search` and the components are in `routes/search` directory. This is where we search for products

There is only one subroute

- `/search` will show the results that matched the search dynamically. In case we make some change later, the change would probably use params (like `https://localhost/search?q=cocacola`) instead of new subroutes

## Category

This route corresponds to the route `https://localhost/category` and the components are in `routes/category` directory. This is where we display the products that is in selected category-

There are two(2) main subroutes

- `/category/:categoryName` will show all products that belong to category `categoryName`. For example, `https://localhost/category/fruit` will show all products belong to fruit category
- `/category/` will show all products. There shouldn't any link that lead to this route, but for completeness, just show all products here

## Auth

This route corresponds to the route `https://localhost/auth` and the components are in `routes/auth` directory. This route has all authentication service in it

There are five(5) main subroutes

- `/auth/phone` is the route that prompt user to enter their phone number. There should be a button to continue after user has entered their phone number, a link to email authentication in case user forget their phone number. This method of authentication has high priority
- `/auth/phone/otpcode` is the route that prompt user to enter the OTP code they receive on their phone. There should be a limit on how many times they can try
- `/auth/email` is the route that prompt user to enter their email address
- `/auth/email/otpcode` is the route that prompt user to enter the OTP code they receive on their email. There should be a limit on how many times they can try
- `/auth/signup` is the route that prompt user to enter their name and email address. This is used only after user has been successfully authenticated with phone number and is a new user.

Some notes here. We do not verify whether the phone number or email exist in database or not. All the steps above only verify that the user actually own the phone number/email. Only after user enter the OTP code and the code is correct, we do find the user in database

In case we cannot find the user in database, there are two scenarios: if the user use phone number to authenticate, we create new user and move them to route `/auth/signup`. If they use email to authenticate, we simply say the email is not associated with any account

## Order

This route corresponds to the route `https://localhost/order` and the component are in `routes/order`. This will show all orders that are new and old. This is protected route, means that only authenticated user can access it

There are five(5) main subroutes here

- `/order` will show all orders. This means we can see what is the current order as well as orders that has been finished in the past
- `/order/current` will show all current order
- `/order/current/:orderId` will show the detail of the current order. This includes what items are in the order, the delivery progress and the information on who is the delivery personnel
- `/order/past` will show all completed order
- `/order/past/:orderId` will show the detail of the current order. This includes what items are in the order, the cost summary and the information on who was the delivery personnel

Per specification, we don't have the route to view detail of past order

## Checkout

This route corresponds to the route `https://localhost/checkout` and the component are in `routes/checkout`. This will show the input fields to enter all shipping information as well as what is currently in the cart right now. This is protected route, means that only authenticated user can access it

There are two subroutes here

- `/checkout/address` will display the delivery address and notes field for user to enter. This will be displayed first after user click "Review order" button in the cart view
- `/checkout/order` will display input fields to enter all shipping information as well as what is currently in the cart right now (following after user complete the `/checkout/address`). User when ready can click on the "Place order" button
- `/checkout/payment` will display the input field for user to enter their payment information (like credit card number, Google pay, etc.). User should only see this after complete the previous steps (`/checkout/address` and `/checkout/order` parts)

We will not collect the credit cart information here nor we store credit card information on our database. We use Stripe to handle that. After user decide to place order, we will redirect them to a Stripe checkout session and let Stripe handle payment. If the payment is successful, we will redirect to the order page with the updated detail

## Account

This route corresponds to the route `https://localhost/account` and the component are in `routes/account`. All user's information like name, email, phone number, shipping address, etc. can be found here. User can also modify these information in this page. This is protected route, means that only authenticated user can access it

For now, there are only one subroute here

- `/account` will display all user's information

Because this page is a "separate" entity, in a sense that the functions in this page doesn't interfere with the functionality of the website, meaning we can do all these functions after the page is confirmed working. It has lowest priority currently
