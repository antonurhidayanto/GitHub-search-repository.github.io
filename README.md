
# 🐙 GitHub User Repository Search (React + TypeScript)

This is a **React** app built using **TypeScript** that allows users to search for GitHub users by their username and view their repositories. It uses **Axios** for API calls, **Material-UI** for styling, and **Vite** as the build tool.

## ✨ Features
- 🔍 **Search for GitHub users** by username.
- 📜 **Display a list of users** matching the search query.
- 🔗 **View repositories** of a selected user, along with details such as stars, descriptions, and links.
- 📱 **Mobile-friendly design** for smooth usage across all devices.

## 🛠️ Technologies Used
- **React** (for the front-end framework)
- **TypeScript** (for type safety)
- **Axios** (for API requests)
- **Material-UI** (for UI components and styling)
- **Vite** (for faster development build)

## ⚙️ Installation

### 1. Clone this repository:

```bash
git clone https://github.com/antonurhidayanto/antonurhidayanto.github.io.git
```

### 2. Navigate into the project directory:

```bash
cd github-user-repository-search
```

### 3. Install dependencies:
```bash
npm install
```

### 4. Start the development server:
```bash
npm run dev
```


## 🖥️ How to Use

1. **Search** for a GitHub user by entering their **username** in the search bar.
2. **Select a user** from the list of results.
3. The user's **repositories** will be displayed, with information such as:
   - **Repo Name**
   - **Stars**
   - **Description**
   - **Link to the repo**

## 🏗️ Project Structure

```
github-user-repository-search/
├── public/                  # Public assets (index.html, etc.)
├── src/                     
│   ├── components/          # React components (UserCard, UserSearch)
│   ├── utils/               # Utility functions (API calls)
│   ├── types/               # TypeScript types
│   ├── App.tsx              # Main app component
│   └── index.tsx            # Entry point of the app
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 📱 Mobile View

This application is designed to be fully **responsive**. On smaller devices, the layout adjusts automatically to fit the screen, ensuring a seamless experience whether on a desktop, tablet, or phone.

## 🎨 Demo

Check out the live demo of the app:

[Live Demo](https://antonurhidayanto.github.io/GitHub-search-repository.github.io)

## 🤝 Contributing

Feel free to fork the repository, make your changes, and open a pull request. Contributions are welcome!

### Steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💙 by [Your Name](https://github.com/your-username)
