# 📸✨ **FilterFun Camera App**  

Welcome to **FilterFun**, the web app where selfies meet hilarity and creativity! Ever wondered how you’d look in grayscale? Or with a quirky sepia vibe? Or maybe like you're living in a *blurred reality*? Well, now you can find out! 🕶️

This lightweight camera app brings you the joy of capturing moments with filters—because life’s too short for boring photos. Let's dive into the deets. 🚀

---

## 🛠️ **How It's Made**
We rolled up our sleeves and built this beauty using a combo of modern web tech. Here's the backstage magic:  

- **React** 🎨: The front-end powerhouse. All the buttons, components, and the app's soul are made with React.  
- **Next.js (App Router)** 🚦: Speeds up the web app and keeps it snappy like a good photo filter!  
- **TypeScript** 🛡️: Because who doesn’t want type safety and less head-scratching?  
- **Tailwind CSS** 🎨: Our stylish wardrobe for everything from buttons to layouts.  
- **React Webcam** 📷: The star of the show that brings your camera to life.  
- **FileSaver.js** 💾: Saves your masterpieces directly to your device!  

---

## 🎯 **Features (aka Why This App Is Awesome)**

### 🌈 **Filter Fun!**
Transform your reality with filters like:  
- `None`: For the purists.  
- 🖤 `Grayscale`: Get classy and vintage!  
- 🧡 `Sepia`: Feel like you’re in a 1940s movie.  
- 🎭 `Invert`: Enter a parallel universe.  
- 🌫️ `Blur`: Dreamy, hazy vibes.  
- 🎨 `Hue Rotate`: Paint the town...well, colorful.  

### 📷 **Capture Moments**
Click the **"Capture" button** to snap a photo. It’ll save instantly to your device as a glorious PNG. Say cheese! 🧀  

### 🔄 **Switch Cameras**  
Toggle between your device’s **front** and **back** cameras. Selfies or scenic shots? Why not both?  

### 🖱️ **Filter Selector**  
Change your filter with one click! Tap a button, switch your vibe, and let the magic happen.

---

## 🔧 **How It Works**
1. The **React Webcam** component gives you a live preview of your camera feed.  
2. The **Filter Selector** applies CSS filter magic to tweak your video in real time.  
3. When you hit **Capture**, the app grabs a screenshot, converts it to a PNG, and downloads it to your device using **FileSaver.js**.  
4. Flip between front and back cameras with the **Switch Camera** button.  

---

## 🤩 **What’s Inside the Code**
### **Camera Component** 🛠️  
- Manages the **camera feed**, **capture functionality**, and **camera switching**.
- Makes sure you can save your photo using the `dataURItoBlob` magic.  

### **Filter Selector** 🎛️  
- A stylish grid of buttons for toggling filters.  
- Built with **custom React components** and **Tailwind CSS** for that polished look.  

---

## 🚀 **Tech Stack**
| **Tech**          | **Why We Love It**                                                                 |
|--------------------|------------------------------------------------------------------------------------|
| **React**          | Component-based, fast, and just so fun to work with.                              |
| **Next.js**        | Simplified routing and server-side rendering—because speed matters.               |
| **TypeScript**     | Makes sure everything works smoothly and catches bugs before we even see them.    |
| **Tailwind CSS**   | Styling on steroids. Fast, reusable, and beautiful.                               |
| **React Webcam**   | Super simple and powerful webcam integration.                                     |
| **FileSaver.js**   | One-click downloads, because saving your art should be effortless.                |

---

## 🛳️ **How to Run This Beauty**
1. Clone this repo (yes, you can have the code 🎉):  
   ```bash
   git clone <repo-url>
   cd <repo-name>
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the development server:  
   ```bash
   npm run dev
   ```
4. Open your browser and visit:  
   [http://localhost:3000](http://localhost:3000)  

That’s it! You’re ready to snap, filter, and save.  

---

## 🧪 **Future Ideas** (Because we’re ambitious like that)
- Add AR filters. 🦄✨  
- Let users crop and edit their photos. ✂️  
- Create a gallery to store captured images. 🖼️  
- Add more quirky filters like pixelation or glitch effects. 🔮  

---

## 🤔 **Why You’ll Love It**
- **It’s simple**: Open the app, switch filters, click capture. Done.  
- **It’s fun**: Every filter feels like a new world.  
- **It’s free**: Yup, no hidden costs here.  

---

## 🖤 **Made with Love**
This app was crafted with a mix of caffeine ☕, code 💻, and an obsession with making photos cooler.  

If you like it, give it a ⭐ on GitHub. If you don’t...well, try a different filter and let’s talk! 😄  

---

Enjoy snapping! 📸✨