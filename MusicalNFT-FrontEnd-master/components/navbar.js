import React from 'react';

const Navbar = () => {
  return (
    <div>
        
        <nav className="nav flex flex-wrap items-center justify-between lg:px-36 px-3 mt-8">
  <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    {/* <svg className="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 716 895">
      <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
      <path className="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
      <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
    </svg> */}
    <a href='#' className="font-semibold text-xl text-white tracking-tight">MUSICALNFT</a>
  </div>

  <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
  <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span className="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul className="menu  md:border-none flex justify-end list-reset m-0 w-full md:w-auto p-4 mt-4 bg-[#121314]  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 ">
  <li className='m-auto'>
          <a href="/generate" className="block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >BUILD SONG</a>
        </li>
        <li  className='m-auto'>
        <a href="#" className="block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >BUY MNFT</a>
        </li>
        <li className='m-auto'>
        <a href="#" className="block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >ABOUT</a>
        </li>
        <li className='m-auto'>
        <a href="#" className="block  py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" >CONNECT WALLET</a>
        </li>
        {/* <ul className="flex flex-row p-2 mt-4   md:flex-row md:space-x-4 md:mt-0 md:text-lg md:font-medium   ">

        <li className='md:mr-0 mr-4 hover:scale-110 transition duration-300 ease-in-out'>
       <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"/></svg>
        </a>
        </li>
        <li className='md:mr-0 mr-4  hover:scale-110 transition duration-300 ease-in-out'> <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="white" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"/></svg></a>
        </li>
        <li className='md:mr-0 mr-4 hover:scale-110 transition duration-300 ease-in-out'> <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="white" d="M8 6a6 6 0 1 1 0 12A6 6 0 0 1 8 6Zm9 1c1.5 0 2.5 2.239 2.5 5s-1 5-2.5 5s-2.5-2.239-2.5-5s1-5 2.5-5Zm4 .5c.38 0 .712.827.88 2.246l.047.443l.019.235l.03.494l.01.259l.012.541L22 12l-.002.282l-.012.541l-.01.26l-.03.493l-.02.235l-.045.443c-.169 1.42-.5 2.246-.881 2.246c-.38 0-.712-.827-.88-2.246l-.047-.443a16.683 16.683 0 0 1-.019-.235l-.03-.494a20.863 20.863 0 0 1-.01-.259l-.012-.541v-.564l.012-.541l.01-.26l.03-.493l.02-.235l.045-.443c.169-1.42.5-2.246.881-2.246Z"/></g></svg></a>
        </li>
        </ul> */}
    
  </ul>
</nav>


    </div>
  );
}

export default Navbar;
