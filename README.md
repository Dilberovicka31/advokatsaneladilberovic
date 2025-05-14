# Advokat Sanela Dilberović - Official Website

A modern, professional business website for **Advokat Sanela Dilberović**, built with **React** and **Material UI**. This site showcases legal services, provides a biography, an interactive contact form, and embedded Google Maps, optimized for both desktop and mobile use.

🌐 **Live Site**: [https://advokatsaneladilberovic.netlify.app/](https://advokatsaneladilberovic.netlify.app/)

---
### 📱 Mobile Layout
![Mobile Preview](./public/screenshots/mobile_screen.png)

### 💻 Desktop Layout
![Desktop Preview](./public/screenshots/large_screen.png)

---

## 🌟 Features

- ✅ Responsive design for all screen sizes
- ✅ Transparent header that updates on scroll
- ✅ Hero image with layered text and branding
- ✅ Biography and legal services with modal details
- ✅ Contact form with validation using **EmailJS**
- ✅ Google Maps location embed
- ✅ Mobile menu with smooth drawer transitions
- ✅ Scroll-to-top button and animated footer
- ✅ Elegant styling using gold, white, and deep purple
- ✅ Custom legal disclaimer and copyright

---

## 🚀 Technologies Used

- **React** (Vite)
- **Material UI** (MUI)
- **EmailJS** (client-side email sending)
- **Google Maps Embed**
- **Responsive design** with MUI’s `Box`, `Grid`, and `useMediaQuery`

---

## 📁 Project Structure
```
src/
├── assets/ # Images (logo, hero, profile)
├── components/ # All reusable components (Header, Hero, Kontakt, etc.)
├── theme.js # Custom Material UI theme (dark purple, gold, white)
├── App.jsx # Main layout
└── main.jsx # Entry point
```

---

## ✉️ Contact Form Integration (EmailJS)

The form sends messages directly to the lawyer’s email using EmailJS:

- Validates:
  - Name field (required)
  - Email address (valid format)
  - Phone number (required and numeric)
  - Message field (required)
- Shows localized error messages (Bosnian)
- Displays success/failure feedback
- Fully responsive and styled to match theme

To configure EmailJS:
1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and template
3. Update the `service ID`, `template ID`, and `public key` in `Kontakt.jsx`

---

## 📍 Location

**Kalajdžića 2, Mostar 88 104, Bosnia and Herzegovina**  
Displayed with a live Google Maps iframe

---

## ⚖️ Legal Disclaimer

> Informacije dostupne na ovoj stranici služe isključivo u informativne svrhe i ne predstavljaju pravni savjet. Za specifične pravne slučajeve obavezno se konsultujte sa advokatom.

---

## 👩‍💻 Developer Credit

Designed and developed by **Mija Dilberović**  
Focused on accessibility, usability, and elegance.

---
## 📦 Getting Started Locally

```bash
git clone https://github.com/Dilberovicka31/advokatsaneladilberovic
cd advokatsaneladilberovic
npm install
npm run dev
```


## 📄 License

This website was designed and developed specifically for Advokat Sanela Dilberović.  
All content, including text, images, and code, is protected by copyright and may not be copied, reused, or distributed without prior written permission.

You may view and reference the code for **educational or personal portfolio** purposes only.  
Commercial use or replication of any part of this project without express consent is strictly prohibited.

© 2025 Sanela Dilberović & Mija Dilberović. All rights reserved.





