import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerColumn">
          <p className="footerLink">About Us</p>
          <p className="footerLink">Student Discount</p>
          <p className="footerLink">Coupons</p>
        </div>
        <div className="footerColumn">
          <p className="footerLink">Contact Us</p>
          <p className="footerLink">Customer Service</p>
        </div>
        <div className="footerColumn">
          <p className="footerLink">FAQ</p>
          <p className="footerLink">Order Status</p>
        </div>
        <div className="footerColumn">
          <p className="footerLink">Call Us: +123 456789</p>
          <p className="footerLink">Hours: Monday-Friday 10:00-21:00</p>
        </div>
      </div>
    </footer>
  );
}
