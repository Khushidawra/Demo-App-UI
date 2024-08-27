# DemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Angular CLI](https://angular.io/cli) (You can install it globally using `npm install -g @angular/cli`)
- ## Getting Started

### Clone the Repository

bash
git clone https://github.com/Khushidawra/Demo-App.git
cd Demo-App

## Install Dependencies
npm install

## Configuration
You have to configure the application by modifying the src/environments/environment.ts and src/environments/environment.prod i.e. apiURL = the BE URL which you will get on running BE environment i.e. 'https://localhost:7118/api/Registration/' (port number can be changed)

## Development Server
To run the development server and open the application in your browser, use:
bash
ng serve

## Code Structure

- **Landing Page**: Contains the `HeaderComponent`.
- **Public Pages**:
  - **About Us**: A page that provides information about the application or organization.
  - **Our Story**: A page detailing the history or background of the application or organization.
- **Login**: `LoginComponent` for user authentication.
- **Register**: `RegisterComponent` for new user registration.
- **Private Pages** (Visible after Login):
  - **Profile**: `ProfileComponent` where users can view and edit their personal information.
  - **Home**: `HomeComponent` providing content available only to logged-in users.
- **Auth Guards**: Used to prevent access to private pages without proper authentication.
- **Routing**: Proper routing has been implemented to navigate between components and pages.
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
