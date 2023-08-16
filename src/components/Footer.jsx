import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-3 text-white">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            commodo faucibus tortor, nec sodales ipsum ornare quis. Mauris sit
            amet mi nec massa luctus aliquet ac vel risus. Orci varius.
          </p>
          <div className="flex md:w-[75%] my-6 justify-between">
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between">
          <div >
            <h6 className="font-medium text-gray-400">
              Solutionns
            </h6>
            <ul>
              <li className="my-2 text-sm">Analytics</li>
              <li className="my-2 text-sm">Marketing</li>
              <li className="my-2 text-sm">Commerce</li>
              <li className="my-2 text-sm">Insights</li>
            </ul>
          </div>
          <div >
            <h6 className="font-medium text-gray-400">
              Support
            </h6>
            <ul>
              <li className="my-2 text-sm">Pricing</li>
              <li className="my-2 text-sm">Documentation</li>
              <li className="my-2 text-sm">Guides</li>
              <li className="my-2 text-sm">API Status</li>
            </ul>
          </div>
          <div >
            <h6 className="font-medium text-gray-400">
              Company
            </h6>
            <ul>
              <li className="my-2 text-sm">About</li>
              <li className="my-2 text-sm">Blog</li>
              <li className="my-2 text-sm">Jobs</li>
              <li className="my-2 text-sm">Press</li>
            </ul>
          </div>
          <div >
            <h6 className="font-medium text-gray-400">
              Legal
            </h6>
            <ul>
              <li className="my-2 text-sm">Claim</li>
              <li className="my-2 text-sm">Policy</li>
              <li className="my-2 text-sm">Terams</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
