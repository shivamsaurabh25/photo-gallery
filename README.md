# **Photo Gallery App 📸**  
A modern **React Vite** photo gallery app that allows users to **search, view, and download high-quality images** from Pexels.  

## **🚀 Features**  
- 🌟 **Beautiful UI** with **Glassmorphism** & **Linear Gradient** theme  
- 🌙 **Dark & Light Mode**  
- 🔍 **Search millions of photos** via the **Pexels API**  
- 📥 **Download images with one click**  
- 📸 **Consistent image orientation**  
- 🖼️ **3 images per row layout**  

## **📂 Folder Structure**  

```
📦 photo-gallery  
 ┣ 📜 index.html  
 ┣ 📂 src  
 ┃ ┣ 📂 api  
 ┃ ┃ ┗ 📜 pexels.js  
 ┃ ┣ 📂 components  
 ┃ ┃ ┣ 📜 SearchBar.jsx  
 ┃ ┃ ┣ 📜 MediaGrid.jsx  
 ┃ ┃ ┣ 📜 MediaItem.jsx  
 ┃ ┃ ┗ 📜 ThemeToggle.jsx  
 ┃ ┣ 📂 context  
 ┃ ┃ ┗ 📜 ThemeContext.jsx  
 ┃ ┣ 📂 pages  
 ┃ ┃ ┗ 📜 Home.jsx  
 ┃ ┣ 📜 App.jsx  
 ┃ ┣ 📜 main.jsx  
 ┃ ┗ 📜 index.css  
 ┣ 📜 .env  
 ┣ 📜 package.json  
 ┣ 📜 vite.config.js  
 ┗ 📜 README.md  
```

## **🛠️ Installation & Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/shivamsaurabh25/photo-gallery.git
cd photo-gallery
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Setup Pexels API Key**  
- Create a `.env` file in the root directory.  
- Add your **Pexels API key** like this:  
```sh
VITE_PEXELS_API_KEY=your_api_key_here
```

### **4️⃣ Start the Development Server**  
```sh
npm run dev
```
This will start the app at **http://localhost:5173** 🚀  

## **🎨 Styling**  
The project uses **custom CSS** for a **Glassmorphism UI** with a **linear gradient background**.

## **🔧 Technologies Used**  
- **React Vite** ⚡  
- **Pexels API** 🌍  
- **Axios** for API calls  
- **CSS (Glassmorphism + Gradient UI)** 🎨  

## **📜 License**  
This project is **MIT Licensed**. Feel free to use and modify it. 😊  

---