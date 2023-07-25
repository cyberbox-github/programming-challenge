# Blog App

## version

1.0.0

## Author

Andrus Wen

# Node Version

Node v18.16.0

# App Design

First of all, here Nextjs is used for SSG and SSR. \
To implement authentication, I chose `NextAuth.js` and `Google Provider` of it to implement auth flow and by checking the token, `Add/Edit Post` functionality is limited to unauthorized users. \
For the styling, I chose `styled-components` since it is one of the great ways to implement styling in Next.js. \
To show the state management, I chose `Context API` since I need to share the post detail between `Post List` page and `Post Detail` page. \
The most important one is to mock the server and It is done successfully by `Next/API`. First of all, in order to persist the posts and comments, I set JSON file as database and by W/R to the file, I mocked all the api endpoints. The detailed explanation is added to each function in `/pages/api` folder.
The second hard one is to enact the notification system. I think the best solution is to use Websocket so I installed `Socket.io` on both `Next/API` and the components.
For the fully responsive, I considered the mobile as well as desktop designs. You can check by yourself with the chrome dev tool.

## App test

To run e2e test, you have to run `yarn dev` first and then you can run `yarn cypress:open`. \
I just made one e2e test file for SSG in this application as an example.

For the visual reference, I added a video recording to my PR. \
Hope it will be a great help.

## Installation

- Run `yarn` or `npm i`
- Run `yarn dev` or `npm dev` for the local environment

## Set environment variables

Please check `.env.template` file and add `.env.local` file for your local test.

# Tech Stacks

UI/SSR/SSG: ReactJS/NextJS

Authentication: NextAuth GoogleProvider

Realtime Notification: Socket.io

Styling: Styled components

DB: JSON mock database file

State Management: Context API

Form Management: react-hook-form and yup resolver

API Endpoints: Next/API

# Duration:

About 7 hours
