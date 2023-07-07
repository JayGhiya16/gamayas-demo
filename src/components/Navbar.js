import logoImg from '../assets/logo.png';
// function Navbar() {
//     const logo = {
//       width: "182px",
//       height: "55px",
//       margin: "0 0 0 180px"
//     };
  
//     const list = {
//       margin: "0 12px 0 12px"
//     }


//     return (
//       <>
//         <nav style={{position: "absolute", width: "100%"}} className="navbar navbar-expand-lg navbar-dark shadow-5-strong " >
//           <div className="container-fluid  " >
//             <a className="navbar-brand " href="/">
//               <img style={logo} src={logoImg} alt="" />
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div id="navbarNavDropdown" style={{margin: "0 130px 0 0"}}>
//               <ul className="navbar-nav">
//                 <li style={list} className="nav-item">
//                   <a className="nav-link fw-semibold text-white" aria-current="page" href="/">Home</a>
//                 </li>
//                 <li style={list} className="nav-item ">
//                   <a className="nav-link fw-semibold text-white " href="/">About us</a>
//                 </li>
//                 <li style={list} className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle fw-semibold text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Services
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="/webdesign">Website Design Services</a></li>
//                     <li><a className="dropdown-item" href="/WebDevelopment">Website Development Services</a></li>
//                     <li><a className="dropdown-item" href="/ECommerceWebsiteDev">eCommerce Website Development</a></li>
//                     <li><a className="dropdown-item" href="/MobileAppDevelopment">Mobile App Development Company</a></li>
//                     <li><a className="dropdown-item" href="/DigitalMarketing">Digital Marketing</a></li>
//                     <li><a className="dropdown-item" href="/CMSDevelopment">CMS Development</a></li>
//                     <li><a className="dropdown-item" href="/CROServices">CRO Services</a></li>
//                     <li><a className="dropdown-item" href="/OutSourcing">Out Sourcing</a></li>
//                   </ul>
//                 </li>
//                 <li style={list} className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle fw-semibold text-white" href="/reales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Industries
//                   </a>
//                   <ul
//                     class="dropdown-menu"
//                     aria-labelledby="navbarDropdownMenuLink"
//                   >
//                     <li>
//                       <a class="dropdown-item" href="/reales">
//                         Real E-State Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/education">
//                         Education industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/retail">
//                         Retail Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/ecommerce">
//                         Ecommerce Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/itdomain">
//                         IT Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/healthcare">
//                         HealthCare Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/manufactoring">
//                         Manufactoring Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/financial">
//                         Financial Service Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/government">
//                         Government Industry
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li style={list} className="nav-item">
//                   <a className="nav-link fw-semibold text-white" href="/">Portfolio</a>
//                 </li>
//                 <li style={list} className="nav-item">
//                   <a className="nav-link fw-semibold text-white" href="/">Contact Us</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
        
//       </>
//     );
//   }
  
//   export default Navbar;
  

// function Navbar() {

//     return (
//       <>
  
//         <nav
//           class="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-10 mx-5"
//         >
//           <div className='webdesign1' class="container-fluid ">
//             <a class="navbar-brand " href="/">
//               <img style={{width: "182px"}} src={logoImg} alt="" />
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavDropdown"
//               aria-controls="navbarNavDropdown"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon" style={{backgroundColor: "#a2a2a3", borderRadius: "5px"}}></span>
//             </button>
//             <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
//               <ul class="navbar-nav">
//                 <li class="nav-item mx-4">
//                   <a class="nav-link active text-light " aria-current="page" href="/">
//                     Home
//                   </a>
//                 </li>
//                 <li class="nav-item mx-4">
//                   <a class="nav-link text-light" href="/">
//                     About us
//                   </a>
//                 </li>
//                 <li class="nav-item dropdown mx-4">
//                   <a
//                     class="nav-link dropdown-toggle text-light"
//                     href="/webdesign"
//                     id="navbarDropdownMenuLink"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Services
//                   </a>
//                   <ul
//                     class="dropdown-menu"
//                     aria-labelledby="navbarDropdownMenuLink"
//                   >
//                     <li>
//                       <a class="dropdown-item " href="/webdesign">
//                         Website Design Services
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/WebDevelopment">
//                         Website Development Services
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/ECommerceWebsiteDev">
//                         eCommerce Website Development
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/MobileAppDevelopment">
//                         Mobile App Development Company
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/DigitalMarketing">
//                         Digital Marketing
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/CMSDevelopment">
//                         CMS Development
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/CROServices">
//                         CRO Services
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/OutSourcing">
//                         Out Sourcing
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
  
//                 <li class="nav-item dropdown mx-4">
//                   <a
//                     class="nav-link dropdown-toggle text-light"
//                     href="/reales"
//                     id="navbarDropdownMenuLink"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Industries
//                   </a>
//                   <ul
//                     class="dropdown-menu"
//                     aria-labelledby="navbarDropdownMenuLink"
//                   >
//                     <li>
//                       <a class="dropdown-item" href="/reales">
//                         Real E-State Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/education">
//                         Education industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/retail">
//                         Retail Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/ecommerce">
//                         Ecommerce Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/itdomain">
//                         IT Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/healthcare">
//                         HealthCare Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/manufactoring">
//                         Manufactoring Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/finance">
//                         Financial Service Industry
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="/government">
//                         Government Industry
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li class="nav-item mx-4">
//                   <a class="nav-link text-light" href="/">
//                     Contact us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
  
//   export default Navbar;    






function Navbar() {

  return (
    <>

      <nav className  ="navbar navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
        <div className='webdesign1' class="container-fluid ">
          <a class="navbar-brand " href="/">
            <img style={{width: "182px"}} src={logoImg} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" style={{backgroundColor: "#a2a2a3", borderRadius: "5px"}}></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item mx-3">
                <a class="nav-link active text-light " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link text-light" href="/">
                  About us
                </a>
              </li>
              <li class="nav-item dropdown mx-3">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="/webdesign"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item " href="/webdesign">
                      Website Design Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/WebDevelopment">
                      Website Development Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/ECommerceWebsiteDev">
                      eCommerce Website Development
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/MobileAppDevelopment">
                      Mobile App Development Company
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/DigitalMarketing">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/CMSDevelopment">
                      CMS Development
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/CROServices">
                      CRO Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/OutSourcing">
                      Out Sourcing
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown mx-3">
                <a
                  class="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                       <a class="dropdown-item" href="/reales">
                        Real E-State Industry
                       </a>
                     </li>
                     <li>
                       <a class="dropdown-item" href="/education">
                         Education industry
                       </a>
                     </li>
                     <li>
                       <a class="dropdown-item" href="/retail">
                         Retail Industry
                       </a>
                     </li>
                     <li>
                       <a class="dropdown-item" href="/ecommerce">
                         Ecommerce Industry
                       </a>
                     </li>
                     <li>
                       <a class="dropdown-item" href="/itdomain">
                         IT Industry
                       </a>
                     </li>
                     <li>
                       <a class="dropdown-item" href="/healthcare">
                         HealthCare Industry
                       </a>
                     </li>
                     <li>
                       <a class="dropdown-item" href="/manufactoring">
                         Manufactoring Industry
                       </a>
                     </li>
                     <li>
                       <a class="dropdown-item" href="/financial">
                         Financial Service Industry
                       </a>
                     </li>
                     <li>
                       <a class="dropdown-item" href="/government">
                         Government Industry
                       </a>
                     </li>
                </ul>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link text-light" href="/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;