# Super Mall Web Application

## 🚀 Overview
A web portal that allows merchants in rural areas to manage shop offers, product info, and floor/category mapping. Built using HTML, CSS, JS, and Firebase.

## 🔧 Features
- Secure Login & Registration (Firebase Auth)
- Create, Edit, View Shops
- Manage Offers per Shop
- Manage Categories and Floors
- Add/View/Compare Products
- Category/Floor/Product-based Filtering

## 🔩 Technologies Used
- HTML, CSS, JavaScript
- Firebase Auth & Firestore

## 📂 Modules
- Login & Register
- Dashboard
- Shop Management
- Offer Management
- Product Comparison
- Category & Floor Filter

## ⚙️ Project Setup
1. Clone the repo
2. Add your Firebase config in `js/firebase-config.js`
3. Open `index.html` or `login.html` using Live Server or browser

## 📊 Firestore Structure

### `shops` Collection:
- name, owner, category, floor

### `offers` Collection:
- shopId, title, description, validTill

### `products` Collection:
- shopId, name, category, price, features

## 📋 Test Cases
- ✅ User registers, logs in, redirected to dashboard
- ✅ User creates a shop, sees it listed
- ✅ User adds offer/product → appears immediately
- ✅ Filter products by category or shop

## 📈 Architecture
See [`system-architecture.png`](system-architecture.png)

## 📄 LLD
See [`LLD.md`](LLD.md)

## 📑 Report
See [`REPORT.md`](REPORT.md)

## 📌 Firebase Setup Required
- Firestore enabled
- Email/Password Auth enabled

---

## 🔐 Logging
Logging is done via `console.log()` or `alert()` in all CRUD actions for simplicity. Can be extended with custom logging service.

## 📡 Hosting ()
Live demo on:
- https://firnas-jahabar4.github.io/super-mall-web-app/
