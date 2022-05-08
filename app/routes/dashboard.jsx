import { Outlet, Link, NavLink } from "@remix-run/react";
import { CashIcon, CreditCardIcon, DesktopComputerIcon, TicketIcon, BookmarkIcon, UserCircleIcon, HomeIcon } from "@heroicons/react/outline";

export default function Dashboard() {
    // function toggleDD(myDropMenu) {
    //     document.getElementById(myDropMenu).classList.toggle("invisible");
    // }
    // function filterDD(myDropMenu, myDropMenuSearch) {
    //     var input, filter, ul, li, a, i;
    //     input = document.getElementById(myDropMenuSearch);
    //     filter = input.value.toUpperCase();
    //     div = document.getElementById(myDropMenu);
    //     a = div.getElementsByTagName("a");
    //     for (i = 0; i < a.length; i++) {
    //         if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
    //             a[i].style.display = "";
    //         } else {
    //             a[i].style.display = "none";
    //         }
    //     }
    // }
    // Close the dropdown menu if the user clicks outside of it
    // window.onclick = function(event) {
    //     if (!event.target.matches('.drop-button') && !event.target.matches('.drop-search')) {
    //         var dropdowns = document.getElementsByClassName("dropdownlist");
    //         for (var i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (!openDropdown.classList.contains('invisible')) {
    //                 openDropdown.classList.add('invisible');
    //             }
    //         }
    //     }
    // }
    const dashboardLinks = [
        {
            name: 'Home',
            path: '/dashboard',
            icon: HomeIcon
        },
        {
            name: 'Buy Airtime',
            path: '/dashboard/airtime',
            icon: CashIcon 
        },
        {
            name: 'Pay Electricity',
            path: '/dashboard/electricity',
            icon: CreditCardIcon 
        },
        {
            name: 'Pay Television',
            path: '/dashboard/television',
            icon: DesktopComputerIcon 
        },
        {
            name: 'Pay Water Bills',
            path: '/dashboard/water-bills',
            icon: TicketIcon 
        },
        {
            name: 'History',
            path: '/dashboard/history',
            icon: BookmarkIcon 
        }
    ];
    // console.log(dashboardLinks)
    return (
        
        <>
            <header>
                <nav aria-label="menu nav" className="bg-gradient-to-r from-[#D0D8F4] to-[#EAEBEC] pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0 flex justify-between">
                    <div>
                        <div className="h-16 w-40">
                            <Link to="/">
                            <img src="/new-logo.png" alt="Digipay logo" height='100%' width="100%" className=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                            <a href="#" aria-label="Home">
                                <span className="text-xl pl-2"><i className="em em-grinning" /></span>
                            </a>
                        </div>
                        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                                {/* <li className="flex-1 md:flex-none md:mr-3">
                                    <a className="inline-block py-2 px-4 text-black no-underline" href="#">Active</a>
                                </li>
                                <li className="flex-1 md:flex-none md:mr-3">
                                    <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                                </li> */}
                                <li className="flex-1 md:flex-none md:mr-3">
                                    <div className="relative inline-block">
                                        <button
                                             onClick="toggleDD('myDropdown')" 
                                             className="drop-button text-black py-2 px-2 flex items-center"
                                        >
                                             <span className="pr-2">
                                                 <UserCircleIcon className="h-7 w-7 text-black" />
                                            </span> Hi, User <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
                                        <div id="myDropdown" className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                                            <input type="text" className="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" onkeyup="filterDD('myDropdown','myInput')" />
                                            <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw" /> Profile</a>
                                            <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw" /> Settings</a>
                                            <div className="border border-gray-800" />
                                            <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw" /> Log Out</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> 
            </header>
            <main>
                <div className="flex flex-col md:flex-row">
                    <nav aria-label="alternative nav" className="pt-6">
                        <div className="bg-gradient-to-r from-[#D0D8F4] to-[#EAEBEC] shadow-xl h-20 bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-56 content-center fixed">
                            <div className="md:mt-12 md:w-56 md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                                <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                                    {
                                        dashboardLinks.map((dashboardLink, index) => (
                                            <li className="mr-3 flex-1 py-1 md:py-3 pl-1 align-middle text-black no-underline border-b-2 border-gray-300 hover:text-gray-500" key={index}>
                                        <NavLink 
                                            end
                                            to={dashboardLink.path} 
                                            className={({ isActive })=> isActive ? 'text-orange-600' : ''}>
                                            <span className="pb-1 md:pb-0 text-xs md:text-base flex">
                                                {<dashboardLink.icon className="h-7 w-7" />}{" "} <span className="ml-2">{dashboardLink.name}</span> 
                                            </span>
                                        </NavLink>
                                    </li>
                                        ))
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            </main>
            {/* <Outlet /> */}
            </>
        
    )
}


