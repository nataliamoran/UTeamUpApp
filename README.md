# team17

# Instructions 

## Installation

To install on your computer:

1. Go into u_team_up_app folder on terminal.
2. Type "npm install".
3. Type "npm start" or click on index.html to view the website.

## Pre-login Functionality

There are some features of the website, that a guest user
(non-logged-in user), can access. We can search current teams, and can 
view them. If we click on the menu, we see "Login" and "Sign Up". 

## How to Sign Up

Click on Sign Up on the menu, and this will take you to the sign up
page. Here, you can enter your information to sign up. 

## How to Login

To Login as user 1, the username and password are "user" and "user", 
respectively. To Login as user 2, the username and password are "user2" 
and "user2", respectively. To Login as admin, the username and password 
are "admin" and "admin", respectively. Once logged in, you can view user 
and admin functionality by browsing the menu.

## End-user instructions for User (post-Login)

You start at the team-search page, the core functionality of the webapp.
You are a student at a university, and would like to search for team advertisements
and join a team. Once you click join, you can view the team profile, answer the quiz 
questions and click apply to submit you application to the team. 

If you'd like to create your own team, enter University, Course
and Team Description into the input fields and click CREATE. 

If you'd like to view Your Profile, Your Inbox or Your Appointments, click
on the menu, and then click on the respective button. In your Profile, you can also view your
applications (teams you've applied to) and invitations (teams that have invited you). You can
edit your information by clicking on edit profile. 

If you'd like to search for a fellow student/user (perhaps a friend from class),
open menu and click on Search Students, where you can enter the student's information
and then click Search. And you can view student profile, by clicking on the student.  

Once you've made it into a team, you can edit the team profile by clicking on Edit Profile
on the team profile page (which you visited earlier), and edit team information. To see team 
appointments, click Team Calendar. To see team applications, click on Team Applications. 
Here you can also view applications (students who've applied to your team) and invitations 
(students your team has invited). 

If you'd like to Logout, go to Menu and click Logout. 

## End-user instructions for Admin (post-Login)

You start at the team-search page, the core functionality of the webapp.
You are an admin of the webapp, and would like to search for team advertisements
and view team profiles. Once you click join, you can view the team profile and see 
their calendar. 

If you'd like to create a new team, enter University, Course and Team Description 
into the input fields and click CREATE. 

If you'd like to search for students/users, open menu and click on Search Students, where you 
can enter the student's information and then click Search. And you can view student profile, 
by clicking on the student.  

You can edit the team profile by clicking on Edit Profile on the team profile page 
(which you visited earlier), and edit team information.

If you'd like to see the admin dashboard, to view its various functionalities, go to Menu and click
Admin Dashboard. Here, you can view, add and remove Administrators. You can create a student profile. 
You can view, add and remove universities. You can view, add and remove courses. All of this you can do, 
by clicking the respective links at the top of the page.

# Frontend Functionality

## Page structure

In the following sections, we will be defining and using these terms:

1. The page refers to all the content shown in the browser window/tab.
2. The navigator refers to the horizontal bar located on the top of
   the page, together with all content within it.
3. An action refers to a link or button that leads the visitor to
   somewhere *within* the website.
4. A view refers to everything on the page except the navigator.
   There can be only one view at a time in the page, but the view
   may change when the visitor is clicking on an action. View names
   are represented in **bold font**.

## Navigator

There are three main components in the navigator: the back button,
the app title, and the menu.

The back button allows you to go back to a previous view when you
click on it.

The app title shows the name of this web app, and will lead you to
the default view (**team search**) when you click on it.

The menu, when clicked, will show a list of actions, depending on
whether the visitor is logged in or not, and its identity (admin
or normal user).

## Views

### Team Appointments and User Appointments

These views only allows users to access.

In each view, there would be a calendar. The buttons on the top of
the calendar can be used to switch to different months. Below it
there are all the days in this month, and also some days of the
next or last month, if there is space remaining. Each day is
clickable, and will select that day on click. Under the number for
each day there will display events for that day. (Sample events are
all in February.)

The very bottom of the page sits the "add event" form. You can input
the time in H:M format. Once a valid time representation is filled
in, a preview will display on the calendar. The date for the new
event is set to the selected date, and you can select other days in
the calendar if you need to change. Clicking "Add Event" button will
put the event in the calendar formally.

### Message Box

This view only allows users to access.

In this view, there is a list of messages you have received. The
type, sender, title and content of each message will be displayed.
Unread messages will be marked with a light background.

### Team Applications and Invitations

Here you can view applications (students who've applied to your team) and invitations 
(students your team has invited). 

### Admin Dashboard

Here, you can view, add and remove Administrators. You can create a student profile. 
You can view, add and remove universities. You can view, add and remove courses. All of this you can do, 
by clicking the respective links at the top of the page.

### Student Applications and Invitations 

Here, you can view your applications (teams you've applied to) and 
invitations (teams that have invited you). 

### Your Profile

You can view your own information, and edit them by clicking on edit profile. 
In your Profile, you can also view your applications (teams you've applied to) 
and invitations (teams that have invited you). 

### Team Profile

Here, you can view the team name, description, and their quiz questions for application. 
If part of the team, you can edit the team information by clicking of Edit Team Profile. 
You can view Team Calendar and Team Applications, by clicking on the respective button.

### Search Teams

You can search for teams existing on the app, by entering team info. Clicking join on the search
results will take you to the team profile page. 

### Search Students 

You can search for students existing on the app, by entering student info. 

### Student Profile

Similar to Your Profile, but of another student. You cannot view their applications or
do other private operations like editing profile.

### Your Inbox

Your messages. 



