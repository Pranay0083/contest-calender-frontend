## Inspiration

As a student passionate about competitive programming, I noticed that many of my peers often miss coding contests simply because they are unaware of them. With contests hosted across various platforms like Codeforces, LeetCode, and CodeChef, keeping track of them can be overwhelming. To solve this problem, I created **Contest Calendar** — a centralized platform to help students and programmers stay updated, set reminders, and never miss an opportunity to compete and learn.

## Future Updates

Here are some exciting features planned for future updates to enhance the user experience:

- **User Progress Tracking**: Integrate user profiles from platforms like Codeforces, LeetCode, and CodeChef to fetch their contest data and maintain a record of their progress over time.
- **Leaderboard**: Introduce a leaderboard where users can compare their rankings based on contest participation, performance, or accumulated points.
- **Custom Contest Feeds**: Allow users to personalize their feed by selecting specific platforms or types of contests they are interested in.
- **Enhanced Notifications**: Expand reminder options to include email and in-app notifications in addition to Telegram bot alerts.
- **Social Sharing**: Enable users to share upcoming contests and their progress with friends directly from the platform.
- **Mobile App**: Develop a mobile version of the application for easier access and on-the-go notifications.

These updates aim to make **Contest Calendar** a comprehensive tool for competitive programmers.

# Contest Calendar

Contest Calendar is a web application that aggregates upcoming coding contests from various competitive programming platforms. It provides users with a centralized place to view, filter, and set reminders for contests. The application includes user authentication, an admin dashboard, and integration with a Telegram bot for notifications.

## Features

- **Contest Listings**: Browse upcoming coding contests from platforms like LeetCode, CodeChef, Codeforces, AtCoder, GeeksforGeeks, and Coding Ninjas.
- **Filtering**: Filter contests based on the platform to find those most relevant to you.
- **User Authentication**: Sign up and log in to access personalized features.
- **Contest Reminders**: Logged-in users can set reminders for contests and receive notifications via the integrated Telegram bot.
- **Admin Dashboard**: Admin users can manage user accounts, including editing and deleting users.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/contest-calendar.git
   ```

2. Navigate to the project directory:
   ```bash
   cd contest-calendar
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```
2. The optimized build will be in the `build` directory.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **React Router DOM**: For routing between pages.
- **React Icons**: Icon library for React.
- **Lucide React**: Additional icons.
- **React Toastify**: For toast notifications.
- **Fetch API**: For making HTTP requests to the backend API.

## API Integration

The application interacts with a backend server hosted at [https://contestcalendarscraper.onrender.com](https://contestcalendarscraper.onrender.com). Key API endpoints include:

### Contests
- `GET /api/contests/getall`: Fetch all contests.
- `POST /api/contests/scrape`: Trigger scraping of contest data.

### Users
- `GET /api/users/getAll`: Retrieve all users (admin only).
- `PUT /api/users/edit/:id`: Edit user information.
- `DELETE /api/users/delete/:id`: Delete a user.

### Authentication
- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/signin`: Log in an existing user.
- `PUT /api/auth/changepassword`: Change user password.

### Notifications
- `POST /api/notification/set/:id`: Set a contest reminder.

## Telegram Bot Integration

To receive contest reminders, users need to register with the Telegram bot **ContestCalenderBot**. After registration, users can set reminders within the app, and notifications will be sent via the bot.

## Folder Structure

- `src/`: Contains the source code.
  - `components/`: Reusable components like Header, Footer, and Notification.
  - `pages/`: Different pages like Home, Admin, Sign Up, and Sign In.
  - `api/`: Functions to interact with the backend API.
  - `constants.js`: Contains constants used across the app.
  - `index.css`: Global CSS styles.
- `App.js`: Main application component.
- `index.js`: Entry point of the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For questions or support, please contact **pranay.vishwakarma7400@gmail.com**.
