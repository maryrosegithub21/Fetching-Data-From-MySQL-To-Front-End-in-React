# Fetching-Data-From-MySQL-To-Front-End-in-React

# VehiclesTable Component

The `VehiclesTable` component is a React component that fetches vehicle data from an API and displays it in a table format. It handles loading states, errors, and ensures that the fetched data is in JSON format.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [API](#api)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

To use the `VehiclesTable` component in your project, you need to have Node.js and npm installed. Then, you can install the necessary dependencies and include the component in your project.

1. Clone the repository or download the component file.
2. Navigate to your project directory.
3. Install the required dependencies:

# Installation
npm install
npm cors

# API 
-http://localhost:4000/api/vehicles

The expected response should be in JSON format and include the following fields for each vehicle:

Model: The model and year of the vehicle.
Expected_Output: The expected output for the test case.
Test_Description: A description of the test case.
Error Handling
The component handles errors that may occur during the data fetching process. If an error occurs, an error message will be displayed instead of the table.

If the network response is not ok, an error message will be shown.
If the response is not in JSON format, an error message will be shown.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
