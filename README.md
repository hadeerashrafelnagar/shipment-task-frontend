# Shipments (frontend part)

## Table of Contents

1. Description
2. General Functionality
3. App Architecture
4. Tools
5. Instructions
6. Running

## Description

- it represents a shipment website ,could be used by custom users

## General Functionality

- any visitor to the website will only see home page
- after entering username (for now just one custom user)"hadeerashraf" , can create ,delete ,see shipments and journal details for every one

## App Architecture:

**_every folder represent what it includes and same with files_**

1. components folder

   - `ProtectedRoute.js` **_ routes to access shipments , add or delete from them _**

   - shipments components:

   - `Addshipment.js` **_ add new shipment _**
   - `ShipmentDetails.js` **_ show details for specific shipment _**
   - `Shipments.js` **_ show all shipments _**
   - `ShipmentJournalDetails.js` **_ show journal details for specific shipment _**

   - general components:

     - `SignIn.js`
     - `Home.js`
     - `NavBar.js`

2. images folder
3. style folder
4. aos file **_ functions for AOS package _**

## Tools

1. CSS FrameWorks:

- Bootstrap
- Bulma

2. Packages:

- axios
- aos
- react-router-dom@5.1.0
- react-icons
- sweetalert2

## Instructions

- run `npm install` to install all project dependencies.

## Running

- start server with `npm start` / `npm run start` to launch.
- open `http://localhost:3000/` in the browser.
