# How to Host Your Project for Free

**Since you don't have `git` or `npm` installed, you must upload your files manually to GitHub first.**

## Step 1: Create a GitHub Repository

1.  Log in to [GitHub.com](https://github.com).
2.  Click the **+** icon in the top-right corner and select **"New repository"**.
3.  Repository name: `inclusive-simulation` (or any name you like).
4.  Make sure it is **Public**.
5.  Click **Create repository**.
6.  **Copy the URL** of your new repository from the address bar (e.g., `https://github.com/yourusername/inclusive-simulation`).

## Step 2: Upload Your Files

1.  On your new repository page, look for the link that says **"uploading an existing file"**.
2.  **Drag and drop ALL the files** from your `inclusive-simulation` folder into the browser window.
    *   *Make sure you include `package.json`, `vite.config.js`, `vercel.json`, and the `src` folder.*
3.  Wait for the files to finish uploading.
4.  Scroll down to the "Commit changes" box.
5.  Type "Initial commit" and click the green **Commit changes** button.
    *   *This will take a moment to process.*

## Step 3: Deploy on Vercel

1.  Go to [vercel.com/new](https://vercel.com/new).
2.  You should see your new repository `inclusive-simulation` listed under "Import Git Repository".
3.  Click **Import**.
4.  (If it asks for a URL, paste the URL you copied in Step 1).
5.  Leave the settings as **Framework Preset: Vite**.
6.  Click **Deploy**.

**Why this works:** Vercel will take your code from GitHub, install the missing tools (like npm) in the cloud, build your website, and host it for you.
