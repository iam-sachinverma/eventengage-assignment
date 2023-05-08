# Next.js 13 App

This is a sample Next.js 13 app.

## Running the app locally

To run the app locally, follow these steps:

1. Install Node.js 16 or later on your machine if you haven't already done so.

2. Clone this repository to your local machine.

   ```
   git clone https://github.com/iam-sachinverma/eventengage-assignment.git
   ```

3. Change into the project directory.

   ```
   cd nextjs-app
   ```

4. Install the app's dependencies.

   ```
   npm install
   ```

5. Start the development server.

   ```
   npm run dev
   ```

   This will start the development server at `http://localhost:3000`.

6. Open your web browser and navigate to `http://localhost:3000` to view the app.

## Deploying the app to Vercel GUI

To deploy the app to Vercel, follow these steps:

1. First, make sure you have a Vercel account and are logged in.

2. Once you are logged in, navigate to the Vercel dashboard.

3. In the top right corner of the dashboard, you should see a button that says "Import Project". Click on it.

4. You will now see several options for importing a project. Choose the "Import Git Repository" option.

5. Connect your Git repository with Vercel by following the prompts. Make sure you grant Vercel access to your repository.

6. Once your repository is connected, you will see a list of your projects. Select the one you want to deploy.

7. Configure your project's settings as needed. You can choose your deployment branch, set up environment variables, and more.

8. Once you have configured your project, click the "Deploy" button.

Vercel will now build and deploy your project. Once it is finished, you will be able to see your deployed app and its URL.

Congratulations, you have successfully deployed your Next.js app to Vercel!

## Deploying the app to Vercel CLI

To deploy the app to Vercel, follow these steps:

1. Create an account on Vercel if you haven't already done so.

2. Install the Vercel CLI by running the following command:

   ```
   npm install -g vercel
   ```

3. Log in to Vercel by running the following command and following the prompts:

   ```
   vercel login
   ```

4. Change into the project directory.

   ```
   cd nextjs-app
   ```

5. Deploy the app to Vercel by running the following command and following the prompts:

   ```
   vercel deploy
   ```

   This will deploy the app to a unique URL on Vercel, which you can access in your web browser.

That's it! You now know how to run a Next.js 13 app locally and how to deploy it to Vercel.
