---

# React File Upload Component

A simple and efficient React-based file upload component with a progress bar, allowing users to upload files while visually tracking the progress.

## 🌟 Features

- File selection and upload with progress visualization.
- Smooth progress bar animations.
- Cancel or reset file uploads easily.
- Handles asynchronous file uploads with error management.
- Built using modern React and Axios for HTTP requests.

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tejayy/React-FileUpload-Component.git
   cd React-FileUpload-Component
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## 🚀 Usage

1. **File Selection**: Click the upload area to select a file or drag and drop the file into the upload component.
2. **File Upload**: Once the file is selected, click the "Upload" button to begin uploading.
3. **Progress Visualization**: Observe the upload progress via the animated progress bar.
4. **Completion**: After the upload completes, a success message or visual indicator will be shown.

## 🛠️ Configuration

### Backend Setup

Ensure you have a backend server running to handle file uploads. By default, the app uses the endpoint:

```plaintext
http://localhost:8000/api/upload
```

Modify this URL in the `handleUpload` function inside the code if your backend API differs.

### Update the API URL
To configure the API endpoint, update the `axios.post` call in your React component:

```javascript
const response = await axios.post("http://your-backend-url/api/upload", formData, {
  onUploadProgress: (progressEvent) => {
    const percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    setProgress(percentCompleted);
  },
});
```

## ✨ Customization

You can customize the component styling by editing the CSS classes in `src/styles.css`. For example:

- **Button Styling**: Modify `.file-btn` for the file selection button.
- **Progress Bar**: Update `.progress-bg` and `.progress` for progress bar appearance.
- **Colors and Animations**: Adjust colors, transitions, and hover effects.

## 📂 Project Structure

```
React-FileUpload-Component/
├── public/                 # Public assets
├── src/
│   ├── components/         # React components
│   │   ├── FileUpload.jsx  # Main file upload component
│   │   └── ProgressBar.jsx # Progress bar component
│   ├── styles/             # CSS styling
│   ├── App.js              # Entry point component
│   └── index.js            # React DOM rendering
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## 📸 Screenshots

### File Selection
![File Selection Example](https://via.placeholder.com/800x400?text=File+Selection+Area)

### Upload in Progress
![Upload Progress Example](https://via.placeholder.com/800x400?text=Upload+Progress+Bar)

### Successful Upload
![Upload Success Example](https://via.placeholder.com/800x400?text=Upload+Complete)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. Fork this repository.
2. Create a branch for your feature (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a pull request.

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it.

## 💬 Acknowledgements

Thanks to everyone who contributed to creating reusable and user-friendly file upload components for React.

---

Let me know if you'd like to tweak any part of this! 😊
