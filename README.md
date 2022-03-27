[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=454831&assignment_repo_type=GroupAssignmentRepo)
# :wave: is216-project

## 🤓 IS216 - Group 4 - XiaKe
Brian Chua Siong Jie, brian.chua.2020@scis.smu.edu.sg,
Chua Jia Qi Nikki, nikki.chua.2020@scis.smu.edu.sg,  
Heng Wei Shin, wsheng.2019@accountancy.smu.edu.sg,
Esther Wee Hui Ying, esther.wee.2020@scis.smu.edu.sg


## 🤓 Project Overview ##
We created a booking system for SMU students named XiaKe for Student Life related events, specifically regarding the School welfare drives/distributions/workshops and collated all of them into one website. This is because we realised that SMU students currently signing up for these events have to fill up many Google forms and key in the same information repeatedly and we want to reduce this. Thus, SMU students will be able to login via school account to personalise the welfare drives or distributions that are applicable to them. They are only required to fill up our website form only once and will only be required to fill in further details if required by a specific welfare drive / distribution / workshop.

Our architecture diagram is as seen below. We integrated 3 different APIs external to XiaKe into our server, namely PayPal, EmailJS and FullCalendar API through SDK. 

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/architecture%20diagram.jpg?raw=true)

## 🤓 How to Install and Run Our Web Application (for Developers) ##
For Windows 10 OS:

## Paypal ##
1) The developer will have to create a developer account in https://developer.paypal.com/home/ (as seen below)
- click on login to dashboard

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/payPal.jpg?raw=true)

2) Sign in if he has an account or else, sign up for an account
3) After logging in, click on Create App.
4) Fill in the App Name, follow by selecting 'Merchant'. After doing so, a sandbox account (business) will be created for you.

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/paypalstep5.png?raw=true)

5) Afterwards, copy the client ID of the app and replace it here:
``` html 
<script src="https://www.paypal.com/sdk/js?'YOUR-CLIENT-ID'&currency=SGD"></script> 
```
6) Upon creating paypal, they will automatically create 2 default sandbox account for you. One business and one personal.
The personal account will be used as the 'student' and ad for the the business account, we can ignore it for now. Click on the business account that was created together with the App and also the default personal account. Copy paste both the email and the password.

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/paypalstep6.PNG?raw=true)

7) Go to the payment page on local host, login using the sandbox personal email and the password given to make the transaction.

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/loginpaypalsandbox.png?raw=true)
![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/paypalstep7.PNG?raw=true)

8) Next, go to https://www.sandbox.paypal.com/sg/signin

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/paypalstep8.PNG?raw=true)

9) Sign in with the sandbox business account generated in step 4 and the password.

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/paypalstep9.PNG?raw=true)

10) After logging in, you will be able to see the recent activity/transactions.


## EmailJS ##
1) The developer will be required to create a new EmailJS account in https://dashboard.emailjs.com/sign-up (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/emailJS%20signup.png?raw=true)


2) Sign in if he has an account or else, sign up for an account
3) After creating a new account, the developer will need to create add a new email service by clicking on "Email Services" to retrieve the service ID for input into params later. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/emailServices.png?raw=true)

4) After creating a new email service, the developer will need to create a new email template by clicking on "Email Templates" to structure who he wants to send the email to and what is in the content of the email. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/emailTemplate.png?raw=true)
![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/emailTemplate1.png?raw=true)

5) Upon saving, retrieve the template ID of the email to be inputted as params.

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/emailTemplate.png?raw=true)

6) Lastly, go to "Integration" and scroll down to the bottom to retrieve his User ID, which is required in the initiation of the function. 

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/integration.png?raw=true)

7) After he is done, he can replace the "YOUR_USER_ID" portion in 
```javascript 
    (function(){emailjs.init("YOUR_USER_ID");})()
``` 
with his User ID that he retrieved earlier.
8) After this, he will need to replace the serviceID and templateID of 
``` javascript 
    emailjs.send(serviceID, templateID, templateParams); 
``` 
with the serviceID and templateID retrieved earlier for emailJS to send email automatically once it is called.


## FullCalendar ##
1) Download the 'fullcalendar-5.10.1.zip' file from https://fullcalendar.io/docs/initialize-globals (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/fullCalendar.png?raw=true)

2) Unzip the file and edit the file 'background-events.html' under the 'examples' folder 
3) Create a 'getCurrentDate()' function to get current date to be inputted into the calendar.
4) Initialise 'initialDate' to the 'getCurrentDate()' function created in Step 4.
5) Call the Firebase CDN and extract the 'users' database
6) Create a 'format_date' function to format the date as per the requirements of FullCalendar 'Events' param.  
7) Retrieve the current user's username from 'Current' in the Firebase 
8) Retrieve the event name and event date that current user signed up for
9) Populate FullCalendar 'Events' param with the event name and event date using 'calendarFunc()' function.
10) Ensure 'calendarFunc()' function is called upon loading of page to view personlised calendar. 


## Firebase ##
1) Sign into 'https://firebase.google.com/' using the developer's Google Account (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/firebase.png?raw=true)

2) The developer will be required to download NodeJS from 'https://nodejs.org/en/', version downloaded will depend on the developer's current OS (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/nodeJS.png?raw=true)

3) Create a Firebase Realtime Database
a. Name the Database as required
b. Under SDK setup and configuration, select 'npm'
c) Run 
```
npm install firebase
``` 
in the Command Prompt, to install Firebase using npm.
d) Initalise Firebase to use the in-built SDK's provided, by running the given code in VSCode.
4) Create following functions:
a) Create user account in Firebase
b) Read the user details in Firebase (passed in from Sign Up page)
c) Update user details in Firebase (passed in from My Account page)


## 🤓 How to Use Our Web Application (for Visitors to our Website) ##
* Provide a step-by-step description of what the user/visitor can/should do upon visiting your website for the first time.
* It would be wonderful if you could include **screenshot images** of web pages to demonstrate what the user/visitor can/should do.

Upon visiting XiaKe's Login Page, if the user has already signed up for an account on XiaKe, the user is able to login into our XiaKe web application by entering their username as well as password and clicking on the login button. 

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/login%20ss.png?raw=true)

If the user has not signed up for an account on XiaKe, the user will have to click on the New User link and they will be redirected to the signup page, where they are required to fill in their email, username, their faculty (either 1 or 2), password and confirm password (as seen below).  

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/signup%20ss.png?raw=true)

Users are also required to click on the generate OTP button where an OTP will be sent to the email (as see below).

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/email%20OTP%20ss.png?raw=true)

Once sign up is successful, a "Back To Login" button will popup, allowing user to be redirected back to the login page (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/redirect%20to%20login%20ss.png?raw=true)

Upon successful login, users will be directed to the Home page where they can view events. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/Home.png?raw=true)

After which, in order to input their details and view personalised events, they would have to click on the side navbar on the right and click on 'My Account' to reach the My Account page. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/sideNav.png?raw=true)

In the My Account page, the user profile section will display their username, date joined as well as number of events that they signed up for. Under the edit details section, the username will automatically be updated to current user's username (non-editable). For greater convenience of using the autofill function for signing up of events, they can choose to save additional details such as their phone number (8 digts), CCA (can select multiple), telegram handle and Matric No (8 digits). They will then be required to click on the save button to save their details (as seen below). 

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/myAccount.png?raw=true)

Once they have finished filling up all their details, they can re-click on the navbar at the top right of the screen and click on 'Home' page to view all the events that they qualify for and XiaKe automatically filters out those that they do not qualify for. Once on 'Home' page, they can sign up for the event they are interested in by clicking on the Sign up now button at the bottom of the event card. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/event.png?raw=true)

Upon clicking the Sign up now button, they will be directed to the signup page for the specific event. The signup page will have 2 default fields i.e. Event Date and Event Timeslot. There are also the additional fields that the Admin previously opted to collect. The fields will be autofilled, if the user has saved their data under the MyAccount page. Otherwise, it will be an empty field for the user to fill up.  (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/signupEvent.png?raw=true)

If the event requires payment, the Paypal button would appear and they will be directed to make payment. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/paymentEvent.png?raw=true)

Upon successfully completing all the required fields, a sign up button will pop up allowing the user to complete signing up for event. (as shown below). After successful signing up of event, the user will be redirected to the Home page, which will show the signup button of that event as disabled.

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/successfulSignUp.png?raw=true)

After that, user can click on the side navbar and navigate to My Account page to see the events that they have registered for under events signed up section. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/myAccount.png?raw=true)

Lastly, they can log out and will be redirected back to the login page. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/login%20ss.png?raw=true)

## Admin ##
For constituent bodies, the XiaKe team will be creating admin accounts allowing them to create events for SMU students to participate. The admin will be able to input general information about the event on the left side as well as insert the event dates and timeslots that SMU students can register for. Once done, the admin can click on the confirm add new event and the new event will be shown to SMU students in their home page. (as shown below)

![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/admin.png?raw=true)
![alt text](https://github.com/is216-supreme/is216-project-group4/blob/main/createEvent.png?raw=true)


## 🤓 FIGMA Link ##
https://www.figma.com/file/2GEj1n9ePAuFRDOwjAXJgm/WAD?node-id=14%3A149

## 🤓 Presentation Link ##
https://youtu.be/jbZKeGwn8_U


## 🤓 Useful Resources ##
* [**Markdown** Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
* [**GOOD** README Example 1](https://github.com/testing-library/cypress-testing-library)
* [**GOOD** README Example 2](https://github.com/typeorm/typeorm)
* [**GOOD** README Example 3](https://github.com/amark/gun)
* [**GOOD** README Example 4](https://github.com/google/leveldb)
