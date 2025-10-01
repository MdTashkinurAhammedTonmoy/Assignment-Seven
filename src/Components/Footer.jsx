import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="bg-black text-white">
        <div className="flex p-20  justify-between mt-11">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">CS — Ticket System</h3>
            <p className="text-[16px] text-[#A1A1AA]">
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry. Lorem <br />
              Ipsum has been the industry's standard <br /> dummy text ever
              since the 1500s, when an <br /> unknown printer took a galley of
              type and <br />
              scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[20px] font-bold">Company</h3>
            <div className="text-[16px] text-[#A1A1AA] space-y-4">
              <p>About Us</p>
              <p>Our Mission</p>
              <p>Contact Saled</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[20px] font-bold">Services</h3>
            <div className="text-[16px] text-[#A1A1AA] space-y-4">
              <p>Products & Services</p>
              <p>Customer Stories</p>
              <p>Download Apps</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[20px] font-bold">Information</h3>
            <div className="text-[16px] text-[#A1A1AA] space-y-4">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Join Us</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[20px] font-bold">Social Links</h3>
            <div className="text-[16px] text-[#A1A1AA] space-y-4">
              <p>
                <i className="fa-brands fa-square-x-twitter"></i> @CS — Ticket
                System
              </p>
              <p>
                <i className="fa-brands fa-linkedin"></i> @CS — Ticket System
              </p>
              <p>
                <i className="fa-brands fa-facebook"></i> @CS — Ticket System
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i> support@cst.com
              </p>
            </div>
          </div>
        </div>
        <div className="text-[16px] mx-20 text-center text-[#FAFAFA] py-8 border-t-1 border-[#E5E7EB50]">
          <h2>© 2025 CS — Ticket System. All rights reserved.</h2>
        </div>
      </div>
    );
  }
}

export default Footer;
