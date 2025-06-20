import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Mockup of AI-generated ideas (this would come from API in real implementation)
const mockIdeas = {
  blog: [
    {
      title: "10 Sustainable Fashion Brands That Are Changing the Industry",
      description: "Explore innovative brands that are leading the way in sustainable and ethical fashion practices.",
      keywords: ["sustainable fashion", "ethical brands", "eco-friendly clothing"]
    },
    {
      title: "How to Build a Capsule Wardrobe That Lasts for Years",
      description: "A step-by-step guide to creating a minimalist, sustainable wardrobe that reduces waste and saves money.",
      keywords: ["capsule wardrobe", "minimalist fashion", "sustainable lifestyle"]
    },
    {
      title: "The Environmental Impact of Fast Fashion: What Consumers Need to Know",
      description: "An in-depth look at how fast fashion affects the environment and what consumers can do to make a difference.",
      keywords: ["fast fashion", "environmental impact", "ethical consumption"]
    },
    {
      title: "Sustainable Materials in Fashion: A Guide to Eco-Friendly Fabrics",
      description: "Learn about innovative sustainable materials that are revolutionizing the fashion industry.",
      keywords: ["sustainable materials", "eco-friendly fabrics", "textile innovation"]
    },
    {
      title: "Thrifting 101: How to Find Hidden Gems at Second-Hand Stores",
      description: "Tips and tricks for finding high-quality, stylish pieces while thrift shopping.",
      keywords: ["thrifting", "second-hand fashion", "vintage shopping"]
    }
  ],
  video: [
    {
      title: "I Tried 7 Sustainable Fashion Brands: Here's My Honest Review",
      description: "A video review of popular sustainable fashion brands, comparing quality, price, and ethical practices.",
      keywords: ["sustainable fashion review", "ethical brand comparison", "honest review"]
    },
    {
      title: "How to Style One Piece 10 Different Ways | Sustainable Fashion Hacks",
      description: "Creative styling ideas to maximize your wardrobe and reduce consumption.",
      keywords: ["fashion styling", "wardrobe hacks", "outfit ideas"]
    },
    {
      title: "Inside a Sustainable Fashion Factory: The Making of Ethical Clothing",
      description: "A behind-the-scenes look at how sustainable clothing is made from start to finish.",
      keywords: ["fashion manufacturing", "ethical production", "behind the scenes"]
    },
    {
      title: "30-Day Sustainable Fashion Challenge | No New Clothes for a Month",
      description: "Document a month-long challenge of avoiding fast fashion and shopping sustainably.",
      keywords: ["fashion challenge", "no-buy challenge", "sustainable lifestyle"]
    },
    {
      title: "Upcycling Old Clothes: 5 DIY Projects Anyone Can Do",
      description: "Easy tutorials for transforming old clothing items into new, stylish pieces.",
      keywords: ["upcycling", "DIY fashion", "clothing transformation"]
    }
  ],
  social: [
    {
      title: "Did you know that the average American throws away 81 pounds of clothing each year? #SustainableFashion",
      description: "Shocking statistic about clothing waste with a call to action for more sustainable choices.",
      keywords: ["clothing waste", "fashion facts", "sustainability"]
    },
    {
      title: "My weekly #OOTD featuring only thrifted and sustainable pieces! 💚 #SlowFashion",
      description: "Outfit of the day post showcasing sustainable styling and brands.",
      keywords: ["OOTD", "sustainable style", "fashion inspiration"]
    },
    {
      title: "3 simple ways to make your wardrobe more sustainable without breaking the bank 👗 #SwipeForTips",
      description: "Carousel post with practical tips for sustainable fashion on a budget.",
      keywords: ["fashion tips", "sustainable budget", "wardrobe advice"]
    },
    {
      title: "The true cost of that $5 t-shirt... (thread) #FastFashion #EthicalFashion",
      description: "Twitter thread explaining the environmental and human cost of cheap fashion.",
      keywords: ["fast fashion impact", "ethical consumption", "fashion industry"]
    },
    {
      title: "Take the 30 Wears Challenge with me! I'm committed to wearing each new item at least 30 times. Who's in? #30Wears",
      description: "Social challenge encouraging followers to maximize wear of clothing items.",
      keywords: ["fashion challenge", "sustainable habits", "wardrobe management"]
    }
  ],
  email: [
    {
      title: "5 Sustainable Fashion Trends to Watch This Season",
      description: "Newsletter featuring emerging sustainable fashion trends and how to incorporate them.",
      keywords: ["fashion trends", "sustainable style", "seasonal fashion"]
    },
    {
      title: "Your Guide to Building an Ethical Wardrobe: Start with These Essentials",
      description: "Email guide on essential pieces for a sustainable wardrobe foundation.",
      keywords: ["wardrobe essentials", "ethical fashion", "capsule wardrobe"]
    },
    {
      title: "Meet the Makers: The Stories Behind Our Sustainable Collections",
      description: "Spotlight on the artisans and processes behind sustainable fashion items.",
      keywords: ["artisan spotlight", "ethical production", "fashion stories"]
    },
    {
      title: "Exclusive Discount: Our Eco-Friendly Summer Collection Has Arrived!",
      description: "Promotional email for a new sustainable fashion collection with subscriber discount.",
      keywords: ["fashion promotion", "eco-friendly collection", "summer style"]
    },
    {
      title: "How to Care for Your Sustainable Garments: Expert Tips for Longevity",
      description: "Educational email on proper care techniques for sustainable clothing items.",
      keywords: ["clothing care", "garment maintenance", "sustainable habits"]
    }
  ]
};

const ResultsPage = () => {
  const location = useLocation();
  const [savedIdeas, setSavedIdeas] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const formData = location.state?.formData || {
    topic: 'sustainable fashion',
    contentType: 'blog',
    industry: 'Fashion',
    targetAudience: 'Environmentally conscious consumers',
    tone: 'informative',
    count: 5
  };

  useEffect(() => {
    // In a real implementation, we would fetch ideas from an API based on formData
    // For this demo, we'll use mock data
    setIdeas(mockIdeas[formData.contentType] || []);
  }, [formData]);

  const handleSaveIdea = (idea) => {
    if (!savedIdeas.some(savedIdea => savedIdea.title === idea.title)) {
      setSavedIdeas([...savedIdeas, idea]);
      // In a real app, we would save this to localStorage or a database
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Generated Content Ideas</h1>
        <Link
          to="/generator"
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300"
        >
          Generate More
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Request</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <span className="block text-gray-500 text-sm">Topic:</span>
            <span className="font-medium">{formData.topic}</span>
          </div>
          <div>
            <span className="block text-gray-500 text-sm">Content Type:</span>
            <span className="font-medium">
              {formData.contentType === 'blog' && 'Blog Post'}
              {formData.contentType === 'video' && 'Video Content'}
              {formData.contentType === 'social' && 'Social Media'}
              {formData.contentType === 'email' && 'Email Newsletter'}
            </span>
          </div>
          {formData.industry && (
            <div>
              <span className="block text-gray-500 text-sm">Industry:</span>
              <span className="font-medium">{formData.industry}</span>
            </div>
          )}
          {formData.targetAudience && (
            <div>
              <span className="block text-gray-500 text-sm">Target Audience:</span>
              <span className="font-medium">{formData.targetAudience}</span>
            </div>
          )}
          <div>
            <span className="block text-gray-500 text-sm">Tone:</span>
            <span className="font-medium">
              {formData.tone.charAt(0).toUpperCase() + formData.tone.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {ideas.length} Content Ideas for You
        </h2>
        
        <div className="space-y-4">
          {ideas.map((idea, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
              <p className="text-gray-600 mb-4">{idea.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {idea.keywords.map((keyword, keyIndex) => (
                  <span 
                    key={keyIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => handleSaveIdea(idea)}
                  disabled={savedIdeas.some(saved => saved.title === idea.title)}
                  className={`flex items-center px-4 py-2 rounded-md text-sm transition duration-300 ${
                    savedIdeas.some(saved => saved.title === idea.title)
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  {savedIdeas.some(saved => saved.title === idea.title) ? 'Saved' : 'Save Idea'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;