'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock service categories and providers
const serviceCategories = [
  {
    id: 'emotional',
    name: 'Emotional Support',
    description: 'Professional help for processing emotions and finding closure.',
    availability: 'Worldwide',
    icon: '❤️',
    providers: [
      {
        id: 'em1',
        name: 'Dr. Sarah Johnson',
        title: 'Relationship Therapist',
        description: 'Specializes in helping individuals navigate breakups and find emotional closure.',
        rating: 4.9,
        reviewCount: 127,
        availability: 'Virtual sessions worldwide',
        price: '$120/hour',
        featured: true
      },
      {
        id: 'em2',
        name: 'Michael Chen, LMFT',
        title: 'Licensed Marriage & Family Therapist',
        description: 'Helps clients process relationship grief and build resilience after separation.',
        rating: 4.8,
        reviewCount: 93,
        availability: 'Virtual sessions worldwide',
        price: '$95/hour'
      },
      {
        id: 'em3',
        name: 'Breakup Support Group',
        title: 'Weekly Online Group Sessions',
        description: 'Facilitated discussions with others going through similar experiences.',
        rating: 4.7,
        reviewCount: 215,
        availability: 'Virtual sessions worldwide',
        price: '$30/session'
      }
    ]
  },
  {
    id: 'legal',
    name: 'Legal Services',
    description: 'Expert advice on legal matters related to separation and divorce.',
    availability: 'Worldwide (Virtual) / NY & NJ (In-person)',
    icon: '⚖️',
    providers: [
      {
        id: 'lg1',
        name: 'Amanda Rodriguez, Esq.',
        title: 'Family Law Attorney',
        description: 'Specializes in divorce, custody arrangements, and separation agreements.',
        rating: 4.8,
        reviewCount: 86,
        availability: 'Virtual consultations worldwide, In-person in NYC',
        price: 'Initial consultation: $150',
        featured: true
      },
      {
        id: 'lg2',
        name: 'Legal Document Service',
        title: 'Divorce & Separation Paperwork',
        description: 'Assistance with preparing and filing necessary legal documents.',
        rating: 4.6,
        reviewCount: 142,
        availability: 'Available worldwide',
        price: 'Starting at $299'
      }
    ]
  },
  {
    id: 'moving',
    name: 'Moving Services',
    description: 'Professional help with relocating your belongings quickly and safely.',
    availability: 'NY & NJ area only',
    icon: '📦',
    providers: [
      {
        id: 'mv1',
        name: 'QuickMove NYC',
        title: 'Same-Day Moving Service',
        description: 'Rapid response moving team for urgent relocation needs in NYC and surrounding areas.',
        rating: 4.7,
        reviewCount: 203,
        availability: 'NYC, NJ (Jersey City, Hoboken, Newark)',
        price: 'Starting at $199',
        featured: true
      },
      {
        id: 'mv2',
        name: 'Safe Transition Movers',
        title: 'Discreet & Secure Moving',
        description: 'Specialized in sensitive moving situations requiring privacy and security.',
        rating: 4.9,
        reviewCount: 78,
        availability: 'All NY & NJ areas',
        price: 'Starting at $299'
      }
    ]
  },
  {
    id: 'security',
    name: 'Security Services',
    description: 'Professional assistance for situations requiring additional safety measures.',
    availability: 'NY & NJ area only',
    icon: '🔒',
    providers: [
      {
        id: 'sc1',
        name: 'Guardian Escort Services',
        title: 'Personal Security Accompaniment',
        description: 'Professional security personnel to accompany you during property retrieval or difficult meetings.',
        rating: 4.9,
        reviewCount: 56,
        availability: 'NYC, Long Island, Northern NJ',
        price: '$75/hour (2-hour minimum)',
        featured: true
      },
      {
        id: 'sc2',
        name: 'Safe Transition Consulting',
        title: 'Security Assessment & Planning',
        description: 'Professional assessment of security needs and development of safety plans.',
        rating: 4.8,
        reviewCount: 42,
        availability: 'All NY & NJ areas',
        price: '$150 for initial consultation'
      }
    ]
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('emotional');
  
  // Get the active category data
  const activeCategoryData = serviceCategories.find(cat => cat.id === activeCategory) || serviceCategories[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Support Services</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        KindlyLeave connects you with the support you need during relationship transitions.
      </p>
      
      {/* Service Availability Notice */}
      <div className="bg-purple-50 p-4 rounded-lg mb-8">
        <p className="text-center text-purple-800">
          <span className="font-semibold">Note:</span> Emotional support and legal consultations are available <span className="font-semibold">worldwide</span> through virtual sessions. 
          Moving and security services are currently only available in the <span className="font-semibold">New York metropolitan area and New Jersey</span>.
        </p>
      </div>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {serviceCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Category Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
            {activeCategoryData.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{activeCategoryData.name}</h2>
            <p className="text-gray-600">{activeCategoryData.description}</p>
            <p className={`text-sm mt-1 ${
              activeCategoryData.availability.includes('Worldwide') ? 'text-green-600' : 'text-amber-600'
            }`}>
              <span className="font-medium">Availability:</span> {activeCategoryData.availability}
            </p>
          </div>
        </div>
      </div>
      
      {/* Service Providers */}
      <div className="grid md:grid-cols-2 gap-6">
        {activeCategoryData.providers.map(provider => (
          <div 
            key={provider.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              provider.featured ? 'border-2 border-purple-400' : ''
            }`}
          >
            {provider.featured && (
              <div className="bg-purple-600 text-white text-center py-1 text-sm font-medium">
                Highly Recommended
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold">{provider.name}</h3>
              <p className="text-purple-600 font-medium">{provider.title}</p>
              
              <div className="flex items-center mt-2 mb-3">
                <div className="flex text-amber-400">
                  {'★'.repeat(Math.floor(provider.rating))}
                  {'☆'.repeat(5 - Math.floor(provider.rating))}
                </div>
                <span className="ml-2 text-gray-600">{provider.rating} ({provider.reviewCount} reviews)</span>
              </div>
              
              <p className="text-gray-600 mb-4">{provider.description}</p>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Availability:</span>
                  <span className={`${
                    provider.availability.includes('Worldwide') || provider.availability.includes('Virtual') 
                      ? 'text-green-600' 
                      : 'text-amber-600'
                  }`}>
                    {provider.availability}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium">{provider.price}</span>
                </div>
              </div>
              
              <div className="mt-6 flex gap-2">
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                  Connect Now
                </button>
                <button className="flex-1 border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* How It Works */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">How Our Service Connections Work</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Share Your Needs</h3>
            <p className="text-gray-600">
              Through our intake process, we understand your specific situation and requirements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
            <p className="text-gray-600">
              Our system recommends the most appropriate service providers for your needs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Connect Directly</h3>
            <p className="text-gray-600">
              Reach out to your matched providers with our streamlined connection process.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get the Support You Need?</h2>
        <p className="text-gray-600 mb-6">
          Start with our intake process to get personalized service recommendations.
        </p>
        <Link href="/intake" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full inline-block">
          Start Now
        </Link>
      </div>
    </div>
  );
}
