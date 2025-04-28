'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock letter content
const mockLetter = `Dear [Name],

I hope this letter finds you well. After much reflection and soul-searching, I've come to the difficult decision that it's time for us to part ways.

Our time together has meant a great deal to me, and I will always cherish the memories we've created. However, I believe we've grown in different directions, and our life goals no longer align in the way they once did.

I still care about you deeply and want nothing but the best for you. This decision comes from a place of honesty and respect for both of us. I believe we both deserve to find relationships that bring us complete fulfillment and joy.

I hope we can handle this transition with mutual respect and kindness. If you'd like to talk more about this, I'm open to having that conversation when you're ready.

Take care of yourself.

Sincerely,
[Your Name]`;

// Mock gift options
const giftOptions = {
  chocolate: [
    { id: 'choc1', name: 'Premium Chocolate Assortment', price: 24.99, image: 'chocolate-assortment.jpg' },
    { id: 'choc2', name: 'Gourmet Truffles', price: 19.99, image: 'truffles.jpg' }
  ],
  flowers: [
    { id: 'flow1', name: 'Classic Rose Bouquet', price: 39.99, image: 'roses.jpg' },
    { id: 'flow2', name: 'Mixed Flower Arrangement', price: 34.99, image: 'mixed-flowers.jpg' }
  ]
};

// Mock service recommendations
const serviceRecommendations = [
  { 
    id: 'serv1', 
    name: 'Relationship Counseling', 
    description: 'Professional support for processing emotions and finding closure.',
    availability: 'Worldwide',
    price: 'Varies'
  },
  { 
    id: 'serv2', 
    name: 'Moving Services', 
    description: 'Professional help with relocating your belongings.',
    availability: 'NY/NJ area only',
    price: 'Starts at $199'
  },
  { 
    id: 'serv3', 
    name: 'Legal Consultation', 
    description: 'Expert advice on legal matters related to separation.',
    availability: 'Worldwide (virtual)',
    price: 'Starts at $99'
  }
];

export default function LetterPage() {
  const [letterContent, setLetterContent] = useState(mockLetter);
  const [selectedGifts, setSelectedGifts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  
  // Toggle editing mode
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  
  // Handle letter content changes
  const handleLetterChange = (e) => {
    setLetterContent(e.target.value);
  };
  
  // Toggle gift selection
  const toggleGiftSelection = (gift) => {
    if (selectedGifts.find(g => g.id === gift.id)) {
      setSelectedGifts(selectedGifts.filter(g => g.id !== gift.id));
    } else {
      setSelectedGifts([...selectedGifts, gift]);
    }
  };
  
  // Calculate total price
  const calculateTotal = () => {
    const basePrice = 19.99; // Standard package price
    const giftsTotal = selectedGifts.reduce((total, gift) => total + gift.price, 0);
    return (basePrice + giftsTotal).toFixed(2);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Breakup Letter</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Letter Section */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Personalized Letter</h2>
              <button 
                onClick={toggleEditing}
                className="bg-white text-purple-600 px-3 py-1 rounded-md text-sm"
              >
                {isEditing ? 'Save Changes' : 'Edit Letter'}
              </button>
            </div>
            
            <div className="p-6">
              {isEditing ? (
                <textarea
                  value={letterContent}
                  onChange={handleLetterChange}
                  className="w-full h-96 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              ) : (
                <div className="bg-gray-50 p-6 rounded-md whitespace-pre-line">
                  {letterContent}
                </div>
              )}
            </div>
            
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">Standard Package</span>
                  <p className="font-semibold">$19.99</p>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Download Letter
                </button>
              </div>
            </div>
          </div>
          
          {/* Service Recommendations */}
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <h2 className="text-xl font-semibold">Recommended Services</h2>
            </div>
            
            <div className="p-6">
              <p className="mb-4 text-gray-600">
                Based on your situation, we recommend the following services to help you through this transition:
              </p>
              
              <div className="space-y-4">
                {serviceRecommendations.map(service => (
                  <div key={service.id} className="border rounded-md p-4">
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-gray-600 mb-2">{service.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className={service.availability.includes('Worldwide') ? 'text-green-600' : 'text-amber-600'}>
                        Availability: {service.availability}
                      </span>
                      <span>
                        {service.price}
                      </span>
                    </div>
                    <button className="mt-2 bg-gray-100 text-purple-600 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Gift Options Section */}
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <h2 className="text-xl font-semibold">Add a Gift</h2>
            </div>
            
            <div className="p-6">
              <p className="mb-4 text-gray-600">
                Add a thoughtful gift to accompany your letter:
              </p>
              
              <h3 className="font-semibold mb-2">Chocolates</h3>
              <div className="space-y-3 mb-6">
                {giftOptions.chocolate.map(gift => (
                  <div 
                    key={gift.id} 
                    className={`border rounded-md p-3 cursor-pointer ${
                      selectedGifts.find(g => g.id === gift.id) ? 'border-purple-600 bg-purple-50' : ''
                    }`}
                    onClick={() => toggleGiftSelection(gift)}
                  >
                    <div className="flex justify-between">
                      <span>{gift.name}</span>
                      <span className="font-semibold">${gift.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="font-semibold mb-2">Flowers</h3>
              <div className="space-y-3 mb-6">
                {giftOptions.flowers.map(gift => (
                  <div 
                    key={gift.id} 
                    className={`border rounded-md p-3 cursor-pointer ${
                      selectedGifts.find(g => g.id === gift.id) ? 'border-purple-600 bg-purple-50' : ''
                    }`}
                    onClick={() => toggleGiftSelection(gift)}
                  >
                    <div className="flex justify-between">
                      <span>{gift.name}</span>
                      <span className="font-semibold">${gift.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <div className="flex justify-between mb-2">
                  <span>Letter Package:</span>
                  <span>$19.99</span>
                </div>
                {selectedGifts.map(gift => (
                  <div key={gift.id} className="flex justify-between mb-2">
                    <span>{gift.name}:</span>
                    <span>${gift.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2 font-semibold flex justify-between">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <h2 className="text-xl font-semibold">Delivery Options</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-3">
                <div className="border rounded-md p-3 cursor-pointer border-purple-600 bg-purple-50">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-full mr-2"></div>
                    <span>Email delivery (Free)</span>
                  </div>
                </div>
                
                <div className="border rounded-md p-3 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-gray-300 rounded-full mr-2"></div>
                    <span>Printed & mailed (+$9.99)</span>
                  </div>
                </div>
                
                <div className="border rounded-md p-3 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-gray-300 rounded-full mr-2"></div>
                    <span>Download as PDF (Free)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/" className="text-purple-600 border border-purple-600 px-4 py-2 rounded-md hover:bg-purple-50 transition-colors inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
