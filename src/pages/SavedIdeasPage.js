import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mockup data for saved ideas (in a real app, this would come from localStorage or a database)
const mockSavedIdeas = [
  {
    title: "10 Sustainable Fashion Brands That Are Changing the Industry",
    description: "Explore innovative brands that are leading the way in sustainable and ethical fashion practices.",
    keywords: ["sustainable fashion", "ethical brands", "eco-friendly clothing"],
    contentType: "blog",
    savedAt: "2025-06-19T14:30:00Z"
  },
  {
    title: "How to Style One Piece 10 Different Ways | Sustainable Fashion Hacks",
    description: "Creative styling ideas to maximize your wardrobe and reduce consumption.",
    keywords: ["fashion styling", "wardrobe hacks", "outfit ideas"],
    contentType: "video",
    savedAt: "2025-06-18T09:15:00Z"
  },
  {
    title: "3 simple ways to make your wardrobe more sustainable without breaking the bank 👗 #SwipeForTips",
    description: "Carousel post with practical tips for sustainable fashion on a budget.",
    keywords: ["fashion tips", "sustainable budget", "wardrobe advice"],
    contentType: "social",
    savedAt: "2025-06-17T16:45:00Z"
  }
];

const SavedIdeasPage = () => {
  const [savedIdeas, setSavedIdeas] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // In a real app, we would fetch saved ideas from localStorage or a database
    // For this demo, we'll use mock data
    setSavedIdeas(mockSavedIdeas);
  }, []);

  const handleRemoveIdea = (index) => {
    const updatedIdeas = [...savedIdeas];
    updatedIdeas.splice(index, 1);
    setSavedIdeas(updatedIdeas);
    // In a real app, we would also update localStorage or a database
  };

  const filteredIdeas = savedIdeas
    .filter(idea => {
      if (activeFilter === 'all') return true;
      return idea.contentType === activeFilter;
    })
    .filter(idea => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        idea.title.toLowerCase().includes(searchLower) ||
        idea.description.toLowerCase().includes(searchLower) ||
        idea.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
      );
    });

  const contentTypeIcons = {
    blog: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    video: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    social: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Saved Ideas</h1>
        <Link
          to="/generator"
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300"
        >
          Generate New Ideas
        </Link>
      </div>

      {savedIdeas.length > 0 ? (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    activeFilter === 'all'
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Ideas
                </button>
                <button
                  onClick={() => setActiveFilter('blog')}
                  className={`px-3 py-1 rounded-md text-sm font-medium flex items-center ${
                    activeFilter === 'blog'
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{contentTypeIcons.blog}</span>
                  Blog Posts
                </button>
                <button
                  onClick={() => setActiveFilter('video')}
                  className={`px-3 py-1 rounded-md text-sm font-medium flex items-center ${
                    activeFilter === 'video'
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{contentTypeIcons.video}</span>
                  Videos
                </button>
                <button
                  onClick={() => setActiveFilter('social')}
                  className={`px-3 py-1 rounded-md text-sm font-medium flex items-center ${
                    activeFilter === 'social'
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{contentTypeIcons.social}</span>
                  Social Media
                </button>
                <button
                  onClick={() => setActiveFilter('email')}
                  className={`px-3 py-1 rounded-md text-sm font-medium flex items-center ${
                    activeFilter === 'email'
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{contentTypeIcons.email}</span>
                  Emails
                </button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search saved ideas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filteredIdeas.length > 0 ? (
              filteredIdeas.map((idea, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-md mr-3 ${
                        idea.contentType === 'blog' ? 'bg-blue-100 text-blue-600' :
                        idea.contentType === 'video' ? 'bg-red-100 text-red-600' :
                        idea.contentType === 'social' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {contentTypeIcons[idea.contentType]}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{idea.title}</h3>
                        <p className="text-gray-500 text-sm">Saved on {formatDate(idea.savedAt)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveIdea(index)}
                      className="text-gray-400 hover:text-red-500 transition duration-300"
                      aria-label="Remove idea"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{idea.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {idea.keywords.map((keyword, keyIndex) => (
                      <span 
                        key={keyIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 mb-4">No ideas match your filters or search terms.</p>
                <button
                  onClick={() => { setActiveFilter('all'); setSearchTerm(''); }}
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No saved ideas yet</h2>
          <p className="text-gray-500 mb-6">
            Generate some content ideas and save them to view them here.
          </p>
          <Link
            to="/generator"
            className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition duration-300"
          >
            Generate Ideas Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default SavedIdeasPage;