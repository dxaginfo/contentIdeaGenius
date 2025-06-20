import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      title: 'Topic Research',
      description: 'Analyze popular and trending topics in your niche to generate content that resonates with your audience.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: 'Keyword Optimization',
      description: 'Generate content ideas optimized for SEO to improve your visibility in search engine results.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      ),
    },
    {
      title: 'Trending Analysis',
      description: 'Identify what's trending in your industry or niche to create timely and relevant content.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Content Calendar Planning',
      description: 'Schedule and organize your content ideas to maintain a consistent publishing schedule.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Never Run Out of Content Ideas Again
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            ContentIdeaGenius uses AI to generate fresh, engaging content ideas for your blog posts, videos, and social media platforms.
          </p>
          <Link
            to="/generator"
            className="inline-block bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Generate Ideas Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features that Power Your Content Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Supercharge Your Content Creation?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Join thousands of content creators who use ContentIdeaGenius to generate engaging content ideas and stay ahead of the competition.
          </p>
          <Link
            to="/generator"
            className="inline-block bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary-700 transition duration-300"
          >
            Start Generating Ideas
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;