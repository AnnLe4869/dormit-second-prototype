# DormIt second prototype

## Warning

When you develop the app please be very careful about the infinite loop. When infinite loop happens you may risk reaching the daily read limit of Firebase because you keep re-render some components and those components in turn keep fetching the resource. I cannot find a way to limit the read limit per seconds for Firebase, so please aware of the situation

One way I find to keep track of the infinite loop that pose risks of infinite fetching data is to look at the `Network` tab in the Developer Tools (if you are using Chrome you can access with shortcut `Ctrl+Shift+I`). If you see a lot of tab popping up nonstop then stop the app immediately or close the browser

**Edit**: I made some change to the code so it should detect whether you have infinite `useEffect` run. Still, good coding practice is never too much

## Overall structure

This project use **React** as front-end framework and rely entirely on client-side rendering. It uses **Firebase** to handle back-end logic, thus has little to no need to create a dedicated server

This project use React ContextAPI to handle states across components and pages. In consideration of future development and the current team level, I decide to use the Redux approach, meaning components can access app's states and change them by calling certain hooks, and these custom hooks will handle all the logic from changing app state to update Firestore database. This approach, I believe, can reduce the complexity of the app in the long run and make collaboration between developers a bit easier

This project handle pages using `react-router`. Nothing special here, and the route structure shall be discussed in later section

## Context structure

For the context structure, I have a file name `types.ts` that list out how the overall app states would look like. The very top states are, in no particular order, `products` which store the details of all products including the deals and category, `alert` which store the notification to display to user, and `user` to store user's info as well as cart and order information

- `products` context is defined in `product-context.js` file
- `alert` context is defined in `alert-context.js`
- `user` context is defined in `user-context.js`

These contexts are combined into one in the `app-context.js`. If you look closely in `app-context.js`, you will see another layer of context, namely `AppContext`. This is used to pass the `firestore` reference and `authentication` around the application. This is the way to access the firestore database in latest version of firebase

In each of those context files there are two parts that may go through changes in the future (change mean we will add some more code, not change the fundamental structure): a reducer (one function with "Reducer" in its name) and several custom hooks. The reducer job is to actually make change to the context. We do so by calling special function called `dispatch` and pass inside it the necessary information. The detail on how to use those function, read more on these [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively) and [How to optimize your context value](https://kentcdodds.com/blog/how-to-optimize-your-context-value). One big note here is that these reducer function **MUST HAVE NO SIDE-EFFECT**

As for the custom hooks, it is used to make the bridge between the context and React component: component use these custom hooks to access and make change to the context. We will do the `dispatch` inside these custom hooks and not inside the React component. We also perform our logic like get data from firestore or update database or authenticate user from these hooks. This help decouple the logic from our component and make future development easier

## Route structure

For now, we will have six(6) basics routes: home, search, order, account, auth and checkout

- `/` is the home page. This is where we see all the products and deals
- `/search` is the search page. We will show the search bar here. The result search will be sub-route of this route. The category list also be sub-route of this one
- `/auth` is the authentication page. Think of them as the log in and sign up page. When user's want to sign in or when we need to redirect user to authenticate, this is the page
- `/order` is the order page. We list out all order, including the current orders and old order. The current order tracking will be sub-route of this one. This is protected route and only show to users who are authenticated
- `/checkout` is for the checkout. After user put stuff to cart and go to checkout, this is what wait them. All the delivery address, adjust item's quantity, remove item, payment setup will be handle in the sub-route of this. Protected route and only show to those who are authenticated
- `/account` is for anything that are related to user's profile. Detail on profile and change the profile are handled in this route or its sub-route. Protected route

## React component

React component shall be defined in files that are in correct directory according to the page they are in. For example, `Item.js` that display item in the home page should be in the directory `/home`

Another note is that, for consistency, we should have component defined inside its own directory of same name (`Item.js` is in `Item` directory). This is so that if we have CSS file for the component or test file for them, we can put them in same directory

We will have a file of route name that incorporate all those component into one complete design. For example, the route `/home` will have a component `/home/Home.js` that combine all of components that are needed into one file

## Shared components

For the most part, a component is not shared between route. But at the moment, there are two component that are shared between routes

- Bottom navigation: the bottom navigation used to navigate between routes. No explanation here
- Cart: the hovering "Show cart" right above the bottom navigation should be shared between routes (except for the `/auth` route and probably the `/account`). This is, according to the UI design, the only way to access the cart. This component shall do following task: show the current number of items in cart, and when being click on shall pop up a modal that show all the items in cart, the detail quantities and such

The header, although sounds like something that should be shared, isn't actually one as. From the UI design, I see that the header are different between routes and no duplication here

## How to start Firebase

After you cloned the project down to your computer, follow these steps to set up your firebase

- Create a firebase project and then install the [Firebase Stripe Extension](https://firebase.google.com/products/extensions/stripe-firestore-stripe-payments) and [Firebase Trigger mail](https://firebase.google.com/products/extensions/firebase-firestore-send-email). Follow all instructions there

- For the [Firebase Stripe Extension](https://firebase.google.com/products/extensions/stripe-firestore-stripe-payments), you should choose option "Sync" for the "Sync new users to Stripe customers and Cloud Firestore". After you install the extension, don't forget to setup Stripe Webhook as instructed by the extension (see the section Configure Stripe webhooks or [POSTINSTALL instruction](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md))

- For [Firebase Trigger mail](https://firebase.google.com/products/extensions/firebase-firestore-send-email), we have to set up a SMTP connection URI

- Create a local secret named `STRIPE_API_KEY` and `OTP_SECRET` by running

  ```bash
  firebase functions:secrets:set STRIPE_API_KEY
  # you will be prompted to enter the key
  firebase functions:secrets:set OTP_SECRET
  # same as above, you will be prompted to enter the key
  ```

  Make sure the key you parse in here have sufficient permissions to write to products (in the `STRIPE_API_KEY` key). For more information about managing API key, see [Store and access sensitive configuration information](https://firebase.google.com/docs/functions/config-env#secret-manager)

- Upload the custom cloud functions by running

  ```bash
  firebase deploy --only functions
  ```

- Upload the security rules

  ```bash
  firebase deploy --only firestore:rules
  ```

## Setting up Stripe

- Create an account and activate it
- Set up the billing so that we can have the checkout page to enter card info
- Create product in the Product page. All products must have **quantity** in the metadata
- Set up tax

## FAQ

1. How to use the firebase?

   Read the [Get started with Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart) and [Get Started with Firebase Authentication on Websites](https://firebase.google.com/docs/auth/web/start). Remember to use the Web version 9

   For this app, replace the detail in `firebase.config.js` with the correct setup and you should be good to go

2. How do I contribute to the application

   You can fork the project and then do pull request. Ideally, you would want to create a new branch, do some change on it and do pull request on those. Talk or message with the leads for more information

3. Should I use this library X to do Y?

   Please talk or message with the leads before you decide to install a library. This is front-end, and unlike back-end, we are very sensitive to how much "weight" does the app have. If the application is too heavy, it will make the page sluggish and the user will leave the website. A good rule-of-thumb to decide a library is to think: can I do this without the library and how much work do I have to do; how much weight the library will add into the project; how much the library is used comparing to the size of it

4. Why do you store info of cart in `Context` and in `localStorage`? Would this make it redundant?

   This is to store the data of cart when user is not authenticated. Data stored in `Context` will be lost the moment we close the tab or refresh the page. To ensure the app working properly, always make data about cart in the `Context` and `localStorage` in sync with each other

5. I cannot deploy the cloud function/security rules

   This can happen because you miss some steps along the way. However, there is one strange bug I encountered while working with Firebase: I was denied of deploying because I didn't authenticated despite the fact that I already verified that I did sign in. To fix this, you just sign out (by running `firebase logout`) then sign back in again (`firebase login`)

6. Why the app use so much read?

   There are many reasons for this to happen. Before jumping to conclusion, make sure that this is the actual problem and high read count is consistent. Sometimes, right after some deployment the read count can spike. For example, I encountered some read count spikes right after I deployed cloud function. The read count normalizes after a bit

7. I got some error related to tax

   Watch this video [How to fix tax_behavior missing for prices error](https://www.youtube.com/watch?v=KfaqrxEO8Y4)
