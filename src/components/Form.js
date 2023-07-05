import React from 'react'

export default function Form() {
  return (
    <>
    <form>
    <div className="form-group">
        <label htmlFor="InputName1">Full Name</label>
        <input type="text" className="form-control" id="InputName1"  placeholder="Enter Full Name"/>
    </div>
    <div className="form-group">
        <label htmlFor="InputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone .</small>
    </div>
    <div className="form-group">
        <label htmlFor="InputPhone1">Phone Number</label>
        <input type="tel" name="phone" pattern="[0-9]{10}" className="form-control" id="InputPhoneNumber1" placeholder="Phone Number"/>
    </div>
    <div class="form-group">
        <label htmlFor="exampleFormControlTextarea1">Message</label>
        <textarea className="form-control" id="Message1" rows="3"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}


{/* <div className="col-lg-4 col-12">
            <div className="form-box">
               <form method="post" role="form" className="php-email-form swing" id="contact-form11" novalidate="novalidate">
                  <p className="slider-cont text-dark">Let’s Hear Out Your Plan!</p>
                  <div className="form-row">
                     <div className="col-lg-12 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                     </div>
                     <div className="col-lg-12 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                     </div>
                     <div className="col-lg-12 form-group">
                        <input type="text" className="form-control" name="phone" id="Phone" placeholder="Phone" data-rule="minlen:4" data-msg="Please enter at least 8 chars of Phone"/>
                     </div>
                     <div className="col-lg-12 form-group">
                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                     </div>
                     <input type="hidden" name="function" value="e-Commerce Web Development form - Let’s Hear Out Your Plan!"/>
                  </div>
                  <div className="text-center"><button onclick="ga('send', 'event', ' ecommerce web-development-services Let’s Hear Out Your Plan ', 'Submit');" type="submit">Submit</button></div>
                  <div id="msg_pop2"></div>
               </form>
            </div>
         </div> */}
