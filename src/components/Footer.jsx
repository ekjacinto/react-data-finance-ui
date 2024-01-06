import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quos voluptatem animi odit nostrum aliquam ab, repellat magnam dolorum, ipsam ducimus porro illo. Explicabo consequatur, qui est aliquam ut nam.</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare className="hover:cursor-pointer" size={30} />
          <FaInstagram className="hover:cursor-pointer" size={30} />
          <FaTwitterSquare className="hover:cursor-pointer" size={30} />
          <FaGithubSquare className="hover:cursor-pointer" size={30} />
          <FaDribbbleSquare className="hover:cursor-pointer" size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer">Analytics</li>
            <li className="py-2 text-sm hover:cursor-pointer">Marketing</li>
            <li className="py-2 text-sm hover:cursor-pointer">Commerce</li>
            <li className="py-2 text-sm hover:cursor-pointer">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer">Pricing</li>
            <li className="py-2 text-sm hover:cursor-pointer">Documentation</li>
            <li className="py-2 text-sm hover:cursor-pointer">Guides</li>
            <li className="py-2 text-sm hover:cursor-pointer">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer">About</li>
            <li className="py-2 text-sm hover:cursor-pointer">Blog</li>
            <li className="py-2 text-sm hover:cursor-pointer">Jobs</li>
            <li className="py-2 text-sm hover:cursor-pointer">Press</li>
            <li className="py-2 text-sm hover:cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer">Claim</li>
            <li className="py-2 text-sm hover:cursor-pointer">Policy</li>
            <li className="py-2 text-sm hover:cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer