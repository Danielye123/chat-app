# Chat App

A real-time chat application built with React, React Router DOM, Appwrite, and Vite.

## Description

The Chat App is a web-based application that allows users to engage in real-time messaging with other users. It provides a simple and intuitive interface for sending and receiving messages, creating chat rooms, and joining existing rooms.

Chat:
![image](https://github.com/Danielye123/chat-app/assets/73367368/1044f4b0-14fd-48c2-9c99-fc59ebc15e7e)

Login:
![image](https://github.com/Danielye123/chat-app/assets/73367368/bde61560-b02f-451c-a152-b7b18618b681)

Register:
![image](https://github.com/Danielye123/chat-app/assets/73367368/9ecb6f21-0cf8-41c7-a706-c7e18627b028)


## Features

- Real-time messaging: Users can send and receive messages in real-time without the need to refresh the page.
- User authentication: The app uses Appwrite for user authentication, ensuring secure access to the chat functionality.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/chat-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd chat-app
   ```

3. Install dependencies using your preferred package manager:

   ```shell
   npm install
   ```

4. Configure Appwrite:
   - Sign up for an Appwrite account at [https://appwrite.io](https://appwrite.io) if you don't have one already.
   - Create a new project and note down the project ID and API endpoint.
   - Update the `appwriteConfig.js` (env) file with your project ID and API endpoint.

5. Start the development server:

   ```shell
   npm run dev
   ```

6. Open the app in your browser:

   ```
   http://localhost:3000
   ```

## Technologies Used

- React
- React Router DOM
- Appwrite
- Vite

## Acknowledgements

- [TraversyMedia](https://www.youtube.com/watch?v=t7S0I78sloI&t=36s)
- [Appwrite](https://appwrite.io) - Backend server for user authentication and data storage.
- [React Router DOM](https://reactrouter.com) - Library for declarative routing in React.
- [Vite](https://vitejs.dev) - Next-generation frontend tooling for building React applications.
