import { ShoppingCart, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import React from 'react';

const About = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Vin2Grow</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Our Story</h3>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Vin2Grow started as a small online boutique with a vision to provide high-quality products at affordable prices. 
            What began as a passion project quickly grew into a trusted e-commerce platform serving customers worldwide.
          </p>
          <p className="text-gray-600">
            Our journey has been defined by our commitment to customer satisfaction, product excellence, and continuous innovation. 
            Today, we proudly offer a diverse range of products across multiple categories, all carefully selected to meet our rigorous standards.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-purple-700">Our Mission</h3>
          <p className="text-gray-600">
            At Vin2Grow, our mission is to transform the online shopping experience by offering curated, high-quality products 
            that enhance our customers' lives. We believe in transparent business practices, sustainable sourcing, 
            and creating lasting relationships with our community of shoppers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-4">
            <div className="bg-purple-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
              <ShieldCheck className="h-8 w-8 text-purple-700" />
            </div>
            <h4 className="font-bold mb-2">Quality Assurance</h4>
            <p className="text-gray-600 text-sm">Every product undergoes rigorous quality checks before making it to our platform.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-purple-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
              <Truck className="h-8 w-8 text-purple-700" />
            </div>
            <h4 className="font-bold mb-2">Fast Delivery</h4>
            <p className="text-gray-600 text-sm">We partner with reliable logistics providers to ensure timely delivery of your orders.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="bg-purple-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
              <CreditCard className="h-8 w-8 text-purple-700" />
            </div>
            <h4 className="font-bold mb-2">Secure Payments</h4>
            <p className="text-gray-600 text-sm">Shop with confidence knowing all transactions are protected with advanced encryption.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;