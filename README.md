# Welcome SOP25 project

## Project info

**URL**: https://ras-bmsit.github.io/sop25  (YET TO BE PUBLISHED)

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project? in github pages
```sh
# Step 1: install github pages
npm i gh=pages --save-dev

# Step 2:Add Homapage to Package.json file
"homepage": "https://ras-bmsit.github.io/sop25",

# Step 3:Add scripts to the same Package.json file
"predeploy": "npm run build",
"deploy": "gh-pages -d build"


# Step 4: 
git init

# Step 5:
git remote add origin https://gtihub.com/ras-bmsit/sop25.git

```





