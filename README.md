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

For now, we will have seven(7) basics routes: home, search, category, order, account, auth and checkout. The detail of each route can be found in the dedicated [Guide to path](/doc/PATH_GUIDE.md)

## React component

React component shall be defined in files that are in correct directory according to the page they are in. For example, `Item.js` that display item in the home page should be in the directory `/home`

Another note is that, for consistency, we should have component defined inside its own directory of same name (`Item.js` is in `Item` directory). This is so that if we have CSS file for the component or test file for them, we can put them in same directory

We will have a file of route name that incorporate all those component into one complete design. For example, the route `/home` will have a component `/home/Home.js` that combine all of components that are needed into one file

## Shared components

For the most part, a component is not shared between route. But at the moment, there are two component that are shared between routes

- Bottom navigation: the bottom navigation used to navigate between routes. No explanation here
- Cart: the hovering "Show cart" right above the bottom navigation should be shared between routes (except for the `/auth` route and probably the `/account`). This is, according to the UI design, the only way to access the cart. This component shall do following task: show the current number of items in cart, and when being click on shall pop up a modal that show all the items in cart, the detail quantities and such

The header, although sounds like something that should be shared, isn't actually one as. From the UI design, I see that the header are different between routes and no duplication here

## How to start Firebase for development

- Create a firebase project of your own. Make sure you select free product. Create a web app under it.
- Copy the config file there
- Create a file in `src` directory and name it `firebase.config.js`. Parse this content to the file

        ```js
         const config = {
            apiKey: "AIzaSyB6lM1pWV-\_UbtQ-6b4HcI",
            authDomain: "test-ap8.firebaseapp.com",
            projectId: "test-a8",
            storageBucket: "test-a8.appspot.com",
            messagingSenderId: "259605004643",
            appId: "1:259643:web:6057ad3215c251d38d1356",
            measurementId: "G-33DDZ8",
         };

         export default config;
      ```

  Replace the content inside the `config` part with your own config from your Firebase

- In the `functions` directory, create a file named `.secret.local` and parse these in

        ```bash
         STRIPE_SECRET_KEY=rk_test_51LFbOFBFL4Le4n4LZag4a9VoQs1yhJD2l
         STRIPE_WEBHOOK_SECRET=whsec_05764f2e090
         OTP_SECRET=helloworld1d
         TYPESENSE_API_KEY=bo4cgKwvFtPp2ER
        ```

  The exact value for each key can be provided by the team lead, or you can find one by yourselves

- Install all extensions locally. At the moment, we only have one extension [Firebase Trigger mail](https://firebase.google.com/products/extensions/firebase-firestore-send-email), and we use this extension for only one feature. This means, you can either remove the extension (by removing it from `firebase.json` - but make sure to put it back when you commit code to codebase), or you can install the extension locally and just enter some dummy data to the prompt. We just want the extension to start without error when the emulator start

- Start the emulator

Make sure you don't track the file `firebase.config.js` and `.secret.local` with Git

## How to start Firebase for production

- Create a firebase project and then install the [Firebase Trigger mail](https://firebase.google.com/products/extensions/firebase-firestore-send-email). Follow all instructions there

- For [Firebase Trigger mail](https://firebase.google.com/products/extensions/firebase-firestore-send-email), we have to set up a SMTP connection URI and SMTP password. I am using Sendgrid because it's free and easiest to set up. The overall setup would look like this

  ```bash
     DEFAULT_FROM=no-reply@dormitdelivery.com
     LOCATION=us-west2
     MAIL_COLLECTION=emails
     SMTP_CONNECTION_URI=smtps://apikey@smtp.sendgrid.net:465
     SMTP_PASSWORD=SG.v3wmh4HvTf6GKNNi5qsXKA.Nd1LUtQdIqDQcxjG1NuJI
  ```

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

## Set up emulator for local development

- If you just want to have some data to work with and don't cart about extension (like extension is not necessary for your need), you can run `firebase emulators:start --import=./data-generator/data`. What this does is it import data from `/data-generator/data` to your emulator and you have data to work with. If you need the extension, do the following steps
- Install extension. This will prompt you to enter information. For now, just save all info in local. You don't have to do `npm run build` because it seems like when you install they automatically compile to normal Javascript file. Make sure you enter the correct information
- Go to where the extension is and install all necessary libraries with `npm install` (**IMPORTANT**). I don't know why they didn't do that automatically. For example, the extension, after running `firebase emulator:start` is located at `C:/User/name/.cache/firebase/extension`
- Stop the emulator and run it again. You should have the extension run without error (not mean they will work)

Now for each extension above. Trigger Email should work, but Stripe Payment need some change. Remember we need to have the Webhook setup. Stripe Payment uses HTTPS call to listen to Stripe event (like payment created, checkout created, etc.), mean that we need to have the HTTPS call URL. See [Instrument your app for HTTPS functions emulation](https://firebase.google.com/docs/emulator-suite/connect_functions#instrument_your_app_for_https_functions_emulation). Your URL should look something like this `http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents`. You can get this URL by looking at the initialized messages as such

```bash
firestore: Firestore Emulator logging to firestore-debug.log
i  hosting: Serving hosting files from: build
+  hosting: Local server: http://localhost:5000
i  ui: Emulator UI logging to ui-debug.log
i  functions: Watching "D:\Coding\Job\dormit\second-prototype\functions" for Cloud Functions...
+  functions[us-central1-checkout]: firestore function initialized.
+  functions[us-central1-sendCodeViaEmail]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/sendCodeViaEmail).
+  functions[us-central1-verifyOtpCode]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/verifyOtpCode).
+  functions[us-central1-updateEmail]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/updateEmail).
+  functions[us-central1-updateShipping]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/updateShipping).
+  functions[us-central1-updateUserProfile]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/updateUserProfile).
i  functions: Watching "C:\Users\asada\.cache\firebase\extensions\firebase\firestore-send-email@0.1.19\functions" for Cloud Functions...
+  functions[us-west2-ext-firestore-send-email-processQueue]: firestore function initialized.
i  functions: Watching "C:\Users\asada\.cache\firebase\extensions\stripe\firestore-stripe-payments@0.2.7\functions" for Cloud Functions...
+  functions[us-west2-ext-firestore-stripe-payments-createCustomer]: auth function initialized.
+  functions[us-west2-ext-firestore-stripe-payments-createCheckoutSession]: firestore function initialized.
+  functions[us-west2-ext-firestore-stripe-payments-createPortalLink]: http function initialized (http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-createPortalLink).
+  functions[us-west2-ext-firestore-stripe-payments-handleWebhookEvents]: http function initialized (http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents).
```

After that, you have to use local Stripe CLI to test out webhook. Because we work on local, we have to find a way for Stripe to connect to our machine. See [Is it possible to set localhost as a Stripe webhook URL?](https://stackoverflow.com/questions/15357356/is-it-possible-to-set-localhost-as-a-stripe-webhook-url/58073355#58073355) and watch the video [Laravel Stripe Checkout tutorial](https://www.youtube.com/watch?v=b4Jz9UPAyI0&t=1140s) on what the process would look like

One more thing. Because this is run on local, you can modify the extension as you want. Just don't forget to recompile them. And don't worry if you go to the extension site (usually at `http://localhost:4000/extensions`) and see that some fields in configuration are empty. They are secret fields and usually remained empty like that, though in reality the emulator already has info from your above configuration (either local file or remote Google Safe)

If you did everything correctly, when you perform checkout or sign up, this is what you should see

```bash
stripe listen --forward-to http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents
> Ready! You are using Stripe API Version [2020-08-27]. Your webhook signing secret is whsec_05764f2e03350dcede056065965787869f5a5ddffe300e2b6790c3917e9dccae (^C to quit)
2022-07-29 06:48:52   --> customer.created [evt_1LQtYeBFL4Le4n4L6tPdkEye]
2022-07-29 06:48:53  <--  [200] POST http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents [evt_1LQtYeBFL4Le4n4L6tPdkEye]
2022-07-29 06:54:22   --> customer.created [evt_1LQtdyBFL4Le4n4LVboDDxKQ]
2022-07-29 06:54:22  <--  [200] POST http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents [evt_1LQtdyBFL4Le4n4LVboDDxKQ]
2022-07-29 06:54:23   --> payment_intent.created [evt_3LQtdzBFL4Le4n4L07rARS9D]
2022-07-29 06:54:23  <--  [200] POST http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents [evt_3LQtdzBFL4Le4n4L07rARS9D]
2022-07-29 06:54:56   --> customer.updated [evt_1LQteWBFL4Le4n4L2ODl9KwP]
2022-07-29 06:54:56   --> payment_intent.succeeded [evt_3LQtdzBFL4Le4n4L0LDr4sII]
2022-07-29 06:54:56   --> checkout.session.completed [evt_1LQteWBFL4Le4n4LbIuuz5gQ]
2022-07-29 06:54:56   --> charge.succeeded [evt_3LQtdzBFL4Le4n4L0TXpwGva]
2022-07-29 06:54:56  <--  [200] POST http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents [evt_1LQteWBFL4Le4n4L2ODl9KwP]
2022-07-29 06:54:57  <--  [200] POST http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents [evt_3LQtdzBFL4Le4n4L0LDr4sII]
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

8. The cloud function doesn't send custom token. What happened?

   Probably [this one](https://stackoverflow.com/questions/54066947/cant-create-a-custom-token-in-firebase-cloud-functions-because-the-service-acco). You want to edit the one with "App Engine default service account"

9. For Emulator, I cannot install the extension. I keep getting error `firebase ref does not have a version extension`

   Probably because you didn't specify the version of the extension when you install it. Some extension doesn't require the version to be specified but some extension does require. You typically just use the latest version found in the extension page and install like this

   ```bash
   firebase ext:install stripe/firestore-stripe-payments@0.2.7
   ```

10. When I run `firebase emulators:start`, I getting error like `The Cloud Functions emulator requires the module "firebase-admin" to be installed`

    First thing you should do is to update your `firebase-tools` to the latest version. If this still not works, you may have to install all dependencies that the extension needed by yourselves. Extension is just cloud function and they have dependencies. You can view where the extension is installed when you install the extension or when you run `firebase emulators:start`

    In Windows, the extension is installed at `~/.cache/firebase/extensions`. For example, my Stripe payment extension is installed at `C:\Users\my-username\.cache\firebase\extensions\stripe\firestore-stripe-payments@0.2.7`. When you go to the extension installed location, navigate to the `functions` directory inside them (all extensions should have that directory - this is where Cloud functions is located). Once there, you run `npm install` to install all dependencies needed. If the extension use TypeScript, you will need to compile them down to Javascript, but most likely you don't need to because extension will automatically compile when you run `npm install`. You can read their `package.json` to see how this works

11. I don't see any secret config when I go to `http://localhost:4000/extensions`. I only see config that is not secret

    Emulator will not display the secret in `.secret.local` and will leave the field blank (yes, blank, not even filled). This is, in my opinion, a very bad UI because it confuses people into thinking that something is wrong and the Emulator didn't get the secret file. In reality, the Emulator did get the secrets

12. I cannot setup the Webhooks secret for Stripe

    Because you develop in local environment, you cannot set up Webhooks endpoint (how can you put `localhost:5001` as endpoint?). With this, you must use Stripe CLI to "tunnel" the event happen on Stripe to your local machine. See [Test a webhooks integration with the Stripe CLI](https://stripe.com/docs/webhooks/test) and watch the video [Laravel Stripe Checkout tutorial](https://www.youtube.com/watch?v=b4Jz9UPAyI0&t=1140s) to see how it is in action.

    Don't quit the CLI because if you do so, it will stop the tunneling. You need to keep it open

    In particular, if you are using Stripe payment extension, you probably want to run this for tunneling

    ```bash
    # for log in to stripe via CLI
    stripe login
    # for tunneling
    stripe listen --forward-to http://localhost:5001/test-app-8c148/us-west2/ext-firestore-stripe-payments-handleWebhookEvents
    ```

13. I keep getting 404 message when I use tunneling

    You may have incorrect endpoint. Make sure you check that

    - You use correct protocol. In local development you probably use `http` and not `https`. They won't mix together
    - The function you call is deployed. You can check whether your function is deployed (in emulator) or not by checking the message when you run `firebase emulators:start`. For example, let's say you have function named `myFunc` and the message you get when start emulator is such

      ```bash
      # some message above
      functions[us-central1-checkout]: firestore function initialized.
      +  functions[us-central1-sendCodeViaEmail]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/sendCodeViaEmail).
      +  functions[us-central1-verifyOtpCode]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/verifyOtpCode).
      +  functions[us-central1-updateEmail]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/updateEmail).
      +  functions[us-central1-updateShipping]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/updateShipping).
      +  functions[us-central1-updateUserProfile]: http function initialized (http://localhost:5001/test-app-8c148/us-central1/updateUserProfile).
      # and some message below
      ```

      And you don't see your function `myFunc` there. It means something is wrong with your `myFunc` and it wasn't get deployed to Emulator

    - You use correct format for endpoint. By that I mean, when [using Emulator](https://firebase.google.com/docs/emulator-suite/connect_functions#instrument_your_app_for_https_functions_emulation), the endpoint will look like `https://localhost:5001/test-app-01b2/us-central1/helloWorld` whereas [in production](https://firebase.google.com/docs/functions/http-events#invoke_an_http_function) (when you deploy your cloud function to firebase) it will be of format `https://us-central1-test-app-01b2.cloudfunctions.net/helloWorld`

14. I cannot config Stripe to show the shipping address part even when I already created a document in `products` collection of ID `shipping_countries` per extension instruction

    You may have to remove the config `STRIPE_CONFIG_COLLECTION` in the config file (if you are using Emulator) or the "Stripe configuration collection" if you are using real life server. The reason is because in the extension coding we have

    ```ts
    const shippingCountries: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] =
      collect_shipping_address
        ? (
            await admin
              .firestore()
              .collection(
                config.stripeConfigCollectionPath ||
                  config.productsCollectionPath
              )
              .doc("shipping_countries")
              .get()
          ).data()?.["allowed_countries"] ?? []
        : [];
    ```

    This means if you have the config for `STRIPE_CONFIG_COLLECTION`, it will overwrite the config location for `PRODUCTS_COLLECTION` config and make it unable to retrieve the information about the shipping
