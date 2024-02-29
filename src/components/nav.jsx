import React from 'react';
import arrowDown from '../assets/icon-arrow-down.svg';
import arrowUp from '../assets/icon-arrow-up.svg'
import iconCalendar from '../assets/icon-calendar.svg'
import iconCloseMenu from '../assets/icon-close-menu.svg'
import iconMenu from '../assets/icon-menu.svg'
import iconPlanning from '../assets/icon-planning.svg'
import iconReminder from '../assets/icon-reminders.svg'
import iconTodo from '../assets/icon-todo.svg'

const Nav = () => {
    return (
        <nav>
            <div>
                <ul>
                    <span id="Logo">snap</span>
                    <li id='Features'><a href="#">Features </a><img src={arrowDown} alt="arrow" />
                        <div id='DropdownContent'>
                            <a><img src={iconTodo} alt="todo" /><span>Todo List</span></a>
                            <a><img src={iconCalendar} alt="calendar" />Calendar</a>
                            <a><img src={iconReminder} alt="reminder" />Reminder</a>
                            <a><img src={iconPlanning} alt="planning" />Planning</a>
                        </div>
                    </li>

                    <li><a href="#">Company  </a> <img src={arrowDown} alt="down" />
                        <div id='DropdownCompany'>
                            <a href="#">History</a>
                            <a href="#">Our Team</a>
                            <a href="#">Blog</a>
                        </div>
                    </li>
                    <li><a href="#">Careers  </a></li>
                    <li><a href="#">About  </a></li>
                </ul>
            </div>
            <div>
                <ul className='login'>
                    <li><a href="#">Login</a></li>
                    <li id='Register'><a href="#" >Register</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;

