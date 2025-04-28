'use client';

import React from 'react';
import Link from 'next/link';

// FAQ items
const faqItems = [
  {
    question: "What's included in the free basic plan?",
    answer: "The free basic plan includes a simple breakup letter with basic customization options and limited service recommendations. It's a good starting point if you're just looking for a simple way to end a relationship."
  },
  {
    question: "How is the Standard plan different from the Basic plan?",
    answer: "The Standard plan ($19.99) includes a fully personalized breakup letter with complete customization options, the ability to add gift options like flowers or chocolates, and comprehensive service recommendations tailored to your specific situation."
  },
  {
    question: "What additional benefits does the Premium plan offer?",
    answer: "The Premium plan ($49.99) includes everything in the Standard plan plus professional review of your letter by a licensed social worker or therapist, priority service connections, and ongoing support throughout your transition."
  },
  {
    question: "Can I upgrade my plan after starting with the Basic option?",
    answer: "Yes! You can upgrade from Basic to Standard or Premium at any point in the process. Your information will be saved and transferred to your upgraded plan."
  },
  {
    question: "Are the gift options (flowers, chocolates) included in the plan price?",
    answer: "No, gift options are available as add-ons with the Standard and Premium plans. The prices for these items are shown during the checkout process and are in addition to the plan price."
  },
  {
    question: "How does the professional review work in the Premium plan?",
    answer: "With the Premium plan, your letter will be reviewed by a licensed social worker or therapist who will provide feedback and suggestions to ensure your message is communicated effectively and compassionately."
  }
];

// Feature comparison data
const featureComparison = [
  {
    feature: "Breakup Letter Creation",
    basic: "Simple template",
    standard: "Fully personalized",
    premium: "Fully personalized"
  },
  {
    feature: "Customization Options",
    basic: "Limited",
    standard: "Complete",
    premium: "Complete"
  },
  {
    feature: "Gift Options",
    basic: "Not available",
    standard: "Available (additional cost)",
    premium: "Available (additional cost)"
  },
  {
    feature: "Service Recommendations",
    basic: "Limited",
    standard: "Comprehensive",
    premium: "Comprehensive + Priority"
  },
  {
    feature: "Professional Review",
    basic: "Not available",
    standard: "Not available",
    premium: "Included"
  },
  {
    feature: "Delivery Options",
    basic: "Email only",
    standard: "Email, PDF, or Print",
    premium: "Email, PDF, or Print"
  },
  {
    feature: "Ongoing Support",
    basic: "Not included",
    standard: "Not included",
    premium: "Included"
  }
];

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Pricing Plans</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Choose the plan that best fits your needs and situation.
      </p>
      
      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Free Plan */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-2">Basic</h3>
          <p className="text-purple-600 text-4xl font-bold mb-6">Free</p>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Simple breakup letter</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Basic customization</span>
            </li>
            <li className="flex items-start text-gray-400">
              <span className="text-gray-300 mr-2">✕</span>
              <span>No gift options</span>
            </li>
            <li className="flex items-start text-gray-400">
              <span className="text-gray-300 mr-2">✕</span>
              <span>Limited service recommendations</span>
            </li>
            <li className="flex items-start text-gray-400">
              <span className="text-gray-300 mr-2">✕</span>
              <span>No professional review</span>
            </li>
          </ul>
          <Link href="/intake" className="block text-center bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors">
            Get Started
          </Link>
        </div>
        
        {/* Standard Plan */}
        <div className="bg-white p-8 rounded-xl shadow-md relative transform scale-105 z-10">
          <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-1 rounded-t-xl">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2 mt-4">Standard</h3>
          <p className="text-purple-600 text-4xl font-bold mb-6">$19.99</p>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Personalized breakup letter</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Full customization</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Gift options available</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Full service recommendations</span>
            </li>
            <li className="flex items-start text-gray-400">
              <span className="text-gray-300 mr-2">✕</span>
              <span>No professional review</span>
            </li>
          </ul>
          <Link href="/intake" className="block text-center bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Choose Standard
          </Link>
        </div>
        
        {/* Premium Plan */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-2">Premium</h3>
          <p className="text-purple-600 text-4xl font-bold mb-6">$49.99</p>
          <ul className="mb-8 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Everything in Standard</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Professional review</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Priority service connections</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Ongoing support</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Multiple revisions</span>
            </li>
          </ul>
          <Link href="/intake" className="block text-center bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors">
            Choose Premium
          </Link>
        </div>
      </div>
      
      {/* Feature Comparison */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Feature Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">Basic</th>
                <th className="p-4 text-center font-semibold">Standard</th>
                <th className="p-4 text-center font-semibold">Premium</th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-4 border-t">{item.feature}</td>
                  <td className="p-4 border-t text-center">
                    {item.basic === 'Not available' ? (
                      <span className="text-red-500">✕</span>
                    ) : item.basic === 'Included' || item.basic === 'Complete' ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      item.basic
                    )}
                  </td>
                  <td className="p-4 border-t text-center">
                    {item.standard === 'Not available' ? (
                      <span className="text-red-500">✕</span>
                    ) : item.standard === 'Included' || item.standard === 'Complete' ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      item.standard
                    )}
                  </td>
                  <td className="p-4 border-t text-center">
                    {item.premium === 'Not available' ? (
                      <span className="text-red-500">✕</span>
                    ) : item.premium === 'Included' || item.premium === 'Complete' ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      item.premium
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Move Forward?</h2>
        <p className="text-xl mb-6">
          Choose the plan that's right for you and take the first step toward a healthier future.
        </p>
        <Link href="/intake" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg inline-block">
          Get Started Now
        </Link>
      </div>
    </div>
  );
}
