import React from 'react'
import { AppContainer } from '../components/layout'
import { NavLink} from "react-router-dom";
import * as Routes from '../routes';
import logo1 from "../images/logo.png"
import help_reg from "../images/helop_reg.png";
import help_log from "../images/help_log.png";
import help_main from "../images/help_main.png";
import help_q from "../images/help_q.png";
import help_info from "../images/help_info.png";
import help_table from "../images/help_table.png";
import help_i_owe from "../images/help_i_iow.png";
const Help = () => {
  return (
    <AppContainer>
        <a className="to-top" href="#top"><span>To Top</span></a>
        <NavLink id="top" exact to = {Routes.LANDING}><img src={logo1} width="74" height="68" alt="logo" /> </NavLink>
          <div  className="nav_wrapper">
            <a href="#1">Getting Started with IOU</a>
            <a href="#2">Creating an Event</a>
            <a href="#3">Editing Profile Settings</a>
            <a href="#4">Frequently Asked Questions</a>
          </div>
          
          <article id="1">
            <h1>Getting Started with IOU</h1>


            <h2>What is IOU?</h2>
            <p>IOU is an expense splitting web application designed for ease and simplicity. With IOU, you can create events with your friends, add expenses, and determine how much money is owed in the blink of an eye. </p>


            <div className="crt" id="reg">
              <h2>Registering for an IOU Account</h2>
              <p>To use IOU, you need to register for an IOU account. If you already have an IOU account, see <a href="#lg">Logging Into Your IOU Account.</a> </p>
              <h4>To register for an IOU account</h4>
              <div className="help_exp">
                <ol>
                  <li>Navigate to the Register Page.</li>
                  <li>Enter your first name into the First Name text box</li>
                  <li>Enter your last name into the Last Name text box. </li>
                  <li>Enter your email address into the Email text box.</li>
                  <li>Enter a password into the Password text box. This will be the password you will use to log into IOU. </li>
                  <li>Enter your password into the Repeat Password text box.</li>
                  <li>Select the Create Account button. The Log in Page displays, and your account is now created. </li>
                </ol>
                <img className="sm" src={help_reg} alt="registration form"/>
              </div>
            </div>

            <div className="crt"  id="lg">
              <h2>Logging Into Your IOU Account</h2>
              <p>If you already have an IOU account, you can log in to your account from the Register or Log in pages. If you do not yet have an IOU account, see <a href="#reg">Registering For an IOU Account</a>.</p>
              <div className="help_exp">
                <ol>
                  <li>Navigate to the Register Page</li>
                  <li>Select Log in. The Log in Page displays. </li>
                  <li>In the Email text box, enter the email address associated with your IOU account. </li>
                  <li>In the Password text box, enter your IOU account password. </li>
                  <li>Select Log in. The Home Page displays.</li>
                </ol>
                <img className="sm"  src={help_log} alt="login form"/>
              </div>
            </div>

            <div className="crt"  id="1_4">
              <h2>The Home Page Overview </h2>
              <p>When you first log in to IOU, the Home Page displays. From the Home Page, you can: </p>
              <div className="help_exp">
                <ul className="list_ex">
                  <li>View your created events </li>
                  <li>Access your Event Pages</li>
                  <li>Create a new event</li>
                  <li>Access the Profile menu</li>
                  <li>Access the Help Page</li>
                  <li>To return to the Home Page from an Event Page, select either the IOU logo or the back button. </li>
                </ul>
                <img className="xl"  src={help_main} alt="screenshot home page"/>
              </div>
            </div>

            <div className="crt"  id="1_5">
              <h2>Accessing Online Help</h2>
              <div className="help_info">
                <p>You can access IOU’s Help Page from within the application. To access the Help Page, simply select the question mark icon. The Help Page displays.</p>

                <img className="xl" src={help_q} alt="screenshot home page"/>
              </div>
            </div>

            </article>
            <article id="2">
              <h1>Creating an Event</h1>

              <div className="crt" >
                <h2>What is an Event?</h2>
                <p>You can track expenses with a group of other IOU users by using an event. An IOU event organizes all of the group events into expenses you owe other group members and the expenses that group members owe you (see About the Event Page). </p>
                <p>You can add any number of group members to an event and create completely unique names for each event. This means that you can create events for multiple activities and trips, such as:</p>
                <ul className="list_ex">
                  <li>Tracking travel expenses when on a group vacation</li>
                  <li>Monitoring rent payments between roommates</li>
                  <li>Splitting receipt costs from a dinner out</li>
                  <li>Recording party expenses between friends</li>
                </ul>
                <h3>About the Event Page</h3>
                <p>All of the event specifics are recorded in the Event Page. The Event Page lists:</p>
                <div className="help_exp">
                  <ul className="list_ex">
                    <li>The name of the event</li>
                    <li>The date the event was created</li>
                    <li>All expenses occurring within the group for the event</li>
                    <li>All of the dues you owe other group members</li>
                    <li>All of the dues group members owe you</li>
                  </ul>
                  <img className="xl"  src={help_info}  alt="screenshot event's detail page"/>
                </div>
                <div className="help_info">
                <p>You can review the various expense categories using the three category tabs. The tab that is currently in use is coloured purple with white text.</p>
                <img className="table xl" src={help_table}  alt="table"/>
                </div>
                

              </div>

              <div className="crt" id="ce">
                <h2>Creating a New Event</h2>
                <p>All pre-existing events are listed on the Home Page in chronological order from most recent to oldest. You can create a new event from the Home Page.</p>
                <p className="note"><strong>Note: </strong>You will automatically be added to an event that you create.</p>
                <h4>To create a new event</h4>
                <p>All of the event specifics are recorded in the Event Page. The Event Page lists:</p>
                <ol>
                  <li>Navigate to the Home Page.</li>
                  <li>Select Create a new event. The Create Event Page displays.</li>
                  <li>Enter the name of your event in the Title text box.</li>
                  <li>Select the Add member text box. A dropdown menu of all IOU users displays.</li>
                  <li>Select the group member from the listed IOU members. The member will now be added to the event.</li>
                  <li>Repeat steps 4 and 5 to add any other group members of the event.</li>
                  <li>Select Create Event. The event has now been created and the Event Page displays. </li>
                
                </ol>
                <h3>Adding Expenses to an Event</h3>
                <p>You can add an unlimited number of expenses to an event. Expenses can be used to track what you owe other members of your event group and what they owe you. </p>
                <p className="note"><strong>Note: </strong>When a new expense is added to an event, the associated member’s dues owed will adjust to account for the new expense. Therefore, there will not be multiple expenses listed for the same member.</p>
                <h4>To add an expense to an event</h4>
                <ol>
                  <li>Navigate to the Event Page of the event you would like to add an expense to.</li>
                  <li>Select Add Expense. The Add Expense Page displays.</li>
                  <li>Enter the name of the expense in the Title text box.</li>
                  <li>Enter the total value of the expense due in the Amount text box.</li>
                  <li>Select Add Expense. The expense has been added to the event and the Event Page displays</li>
                
                </ol>
                <p className="note"><strong>Note: </strong>The member who adds the expense to the event is the member who is owed the dues. The expense will appear in the creator’s “Owed to me” tab and will divide equally among the other event members. The divided expense will appear in the other event member’s I owe tab.</p>

              </div>

              
            <div className="crt" >
              <h2>Determining What You Owe</h2>
              <p>You can review what you owe other group members of an event on the Event Page. The dues you owe other group members are listed in the I owe tab. </p>
              <h4>To determine what you owe to a member of your group</h4>
              <div className="help_exp">
                <ol>
                  <li>Navigate to the Home Page. </li>
                  <li>Select the event you want to review. The Event Page displays.</li>
                  <li>Select I owe. The I owe tab displays.</li>
                  <li>Review the list of expenses for the name of the member you are looking for. The amount you owe this member is listed in the same row as their name.</li>
                  <li>Access the Help Page</li>
                  <li>To return to the Home Page from an Event Page, select either the IOU logo or the back button. </li>
                </ol>
                <img className="xl" src={help_i_owe} alt="screenshot home page"/>
              </div>
            </div>

            <div className="crt" >
              <h2>Determining What is Owed to You</h2>
              <p>You can review what other members of an event owe you on the Event Page. The dues other members owe you are listed in the “Owed to me” category tab.</p>
              <h4>To determine what another member owes you</h4>
              <div>
                <ol>
                  <li>Navigate to the Home Page. </li>
                  <li>Select the event you want to review. The Event Page displays.</li>
                  <li>Select Owed to me. The Owed to me Page displays. </li>
                  <li>Review the list of expenses for the name of the member you are looking for. The amount the member owes you is listed in the same row as their name.</li>
                </ol>
                <p className="note"><strong>Note: </strong>If you are not owed any dues for the event you have opened, the words “No one owes you yet” will display instead of a list of expenses</p>
              </div>
            </div>

            </article>

            <article id="3">
              <h1>Editing Profile Settings</h1>
              <div>
              <div className="crt">
              <h2>About Your Profile </h2>
                <p>Every IOU member has a unique profile that allows them to track their personal events and expenses. Your profile contains information on your name, email address, and account password. IOU creates a unique member icon for you when you create an account. This icon will be used to represent you in the events you are added to. If you do not have an IOU account, see <a href="#reg">Registering For an IOU Account</a>. </p>
                <p className="note"><strong>Note: </strong>You cannot access the Home Page or Event Page if you do not have a personal profile. Likewise, you cannot add members to an event if they do not have an IOU profile. </p>
              </div>
              
                <div className="crt" >
                  <h3>Changing Your Profile Name</h3>
                  <p>You can change the name of your profile by editing your profile information. The name you use for your profile is used by other IOU users when they are adding you to an event. </p>
                  <p className="note"><strong>Note: </strong>IOU does not check if the name of your account is the same as your legal name. However, IOU recommends using your full name or a common nickname so that other IOU users can easily find your profile when creating events. </p>
                  <h4>To change your profile name</h4>
                  <div className="list_help">
                    <div>1- Select the profile menu. A dropdown menu displays.</div>
                    <div>2- Select Edit profile. The Edit profile Page displays.</div>
                    <div>3- Type the new first name in the First Name text box.</div>
                    <div>4- Type the new last name in the Last Name text box.</div>
                    <div className="note"><strong>Note: </strong>Your new last name must contain at least two letters. </div>
                    <div>5- Select Update Profile. Your profile name has been updated and the Log in Page displays.</div>
                    <div>6- Log in to your IOU account (see <a href="#lg">Logging in to Your IOU Account</a>) to see the changes.</div>
                  </div>
                </div>
                

                <div className="crt">
                  <h3>Updating Your Email Address</h3>
                  <p>You can log in to your IOU account by using your email and password. If you change your email address or want to link your IOU account to a different email, you can update your email address by editing your profile information. </p>
                  <h4>To update your email address</h4>

                  <div className="list_help">
                    <div>- Select the profile menu. A dropdown menu displays</div>
                    <div>- Select Edit profile. The Edit profile Page displays.</div>
                    <div className="note"><strong>Note: </strong>Your current first name, last name, and email address will autofill the associated text boxes. </div>
                    <div>- Type in your new email address in the Email text box.</div>
                    <div>- Select Update Profile. Your email address has updates and the Log in Page displays.</div>
                    <div>- Log in to your IOU account (see <a href="#lg">Logging in to Your IOU Account</a>) to see the changes. </div>
                    <div className="note"><strong>Note: </strong>You will need to use the updated email address to log in to your IOU account. The previous email address will no longer work.</div>
                  </div>
                </div>

                <div className="crt">
                  <h3>Resetting Your Password</h3>
                  <p>You need to enter your email address and personal password every time you want to log in to your IOU account. You can easily change your password in the profile menu. </p>
                  <p className="note"><strong>Note: </strong>You will need to log in to your account if you want to change your password. </p>

                  <h4>To reset your password</h4>

                  <div className="list_help">
                    <div>1. Select the profile menu. A dropdown menu displays.</div>
                    <div>2. Select Reset password. The Reset password Page displays.</div>
                    <div>3. Type your new password in the New password text box.</div>
                    <div className="note"><strong>Note: </strong>Your password must contain 6 to 12 characters. Passwords with a combination of letters, numbers, and symbols are recommended for increased security protection of your account. Do not share your password with others.  </div>
                    
                    <div>4. Type in the same new password in the Repeat new password text box.</div>
                    <div className="note"><strong>Note: </strong>The text boxes are case sensitive. Make sure that you type in the password exactly. Otherwise, you will not be able to reset your password. </div>
                    <div>5. Select Reset Password. Your password has been reset and the Log in Page displays.</div>
                    <div>6. Log in to your IOU account (see <a href="#lg">Logging in to Your IOU Account</a>) to see the changes.</div>
                    <div className="note"><strong>Note: </strong>You will need to use the updated password to log in to your IOU account. The previous password will no longer work.</div>
                  </div>
                </div>

                <div className ="crt">
                  <h2>Signing Out of Your Account </h2>
                  <p>You can sign out of your account when you are done reviewing content and making changes. IOU recommends signing out of your account after each use to best protect your personal information </p>
                  <h4>To sign out of your account</h4>
                  <ol>
                    <li>Select the profile menu. A dropdown menu displays.</li>
                    <li>Select Logout. You are signed out and the Log in Page displays.</li>
                  </ol>
                </div>

              </div>
            </article>

            <article id="4">
              <h1>Frequently Asked Questions</h1>

              <div className="crt">
                <h3>Can I use IOU on my mobile device? </h3>
                <p>Yes! IOU can be used from both desktop and mobile devices. </p>
              </div>

              <div className="crt">
                <h3>How do I add members to an event? </h3>
                <p>Members must be added to an event when the event is created. Once created, you cannot add additional members to the event. For information about creating an event and adding members, see <a href="#ce">Creating a New Event</a>. </p>
              </div>

              <div className="crt">
                <h3>How do I remove members from an event? </h3>
                <p>Once an event is created, there is no way to remove members from it. You should create a new event and exclude any members you do not wish to be part of the event. For information about creating events, see <a href="#ce">Creating a New Event</a>. </p>
              </div>

              <div className="crt">
                <h3>I forgot my password. What should I do? </h3>
                <p>The current version of IOU does not have password recovery functionality. If you forget your password, you cannot recover your account. Therefore, when you create your account it’s important to write your password down somewhere memorable and secure. </p>
              </div>

              <div className="crt">
                <h3>My friend doesn’t have an IOU account. Can I add them to an event?</h3>
                <p>In order to be added to an event, you must have a registered IOU account. For information about registering for an IOU account, see <a href="#reg">Registering For an IOU Account</a>. For information about adding members to an event, see <a href="#ce">Creating a New Event</a>. </p>
              </div>

              <div className="crt">
                <h3>What if someone doesn’t pay me? </h3>
                <p>IOU does not verify that payments are made between members. You and the other members of the group are responsible for facilitating payments.</p>
              </div>

              <div className="crt">
                <h3>Can I delete an expense?</h3>
                <p>Once expenses are added to an event, you cannot remove them. </p>
              </div>

              <div className="crt">
                <h3>How are expenses split? </h3>
                <p>When a member adds an expense to an event, that expense is divided evenly amongst all of the members. The values in the I owe and Owed to me tabs update accordingly. </p>
              </div>
            </article>
    </AppContainer>
  )
}

export default Help;