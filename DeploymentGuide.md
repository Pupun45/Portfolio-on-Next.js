# Portfolio Deployment Guide

This document outlines how to deploy your modern Next.js developer portfolio to Vercel, the recommended hosting platform for Next.js applications.

## Prerequisites
- A GitHub, GitLab, or Bitbucket account.
- A Vercel account (free tier is perfect).
- EmailJS credentials (if you haven't added them to `Contact.tsx` yet).

## Step 1: Push to GitHub
1. Open your terminal in the `portfolio` folder.
2. If you haven't already initialized git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   ```
3. Create a new repository on your GitHub account.
4. Push your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com/) and log in.
2. Click **Add New** > **Project**.
3. Import your newly created GitHub repository.
4. Leave the default settings (Framework Preset: Next.js).
5. Click **Deploy**.

## Step 3: Configure EmailJS (Important!)
To ensure your Contact form works, you must set up EmailJS:
1. Go to [emailjs.com](https://www.emailjs.com/) and create an account.
2. Add a new Email Service (e.g., Gmail) and note the **Service ID**.
3. Create an Email Template and note the **Template ID**. Make sure the variables in the template match (`{{from_name}}`, `{{from_email}}`, `{{message}}`).
4. Find your **Public Key** in your Account Settings.
5. In your project code (`src/components/Contact.tsx`), replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your actual keys.
6. Push these changes to GitHub, and Vercel will automatically redeploy your site with the working contact form.

Your professional developer portfolio is now live!
