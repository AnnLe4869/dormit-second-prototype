# Data generator for Stripe

This is used to interact with products in Stripe. To start, create a file named `.env` and put in there your Stripe API key in name `STRIPE_API`. For example

```bash
STRIPE_API=sk_test_51LFbOFBFLY95yUsEBR7uRAi2GuL1yxywBxFz6RYppzzLonFMoHn8JxaeOgze
```

Then you can use the program. All functions are written in `app.js`. You can choose which function to use. You can

- Get all products
- Update the quantity fields of all products
- Create many products with tax id, quantity and category
