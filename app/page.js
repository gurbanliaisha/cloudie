"use client";

import { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Sample cities for suggestions
  const popularCities = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
    "Austin, TX",
    "Jacksonville, FL",
    "Fort Worth, TX",
    "Columbus, OH",
    "Charlotte, NC",
    "San Francisco, CA",
    "Indianapolis, IN",
    "Seattle, WA",
    "Denver, CO",
    "Washington, DC",
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      const filteredCities = popularCities.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredCities.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Simulate API call
      setTimeout(() => {
        setIsSearching(false);
        alert(`Searching for weather in ${searchQuery}...`);
      }, 1000);
    }
  };

  const handleSuggestionClick = (city) => {
    setSearchQuery(city);
    setShowSuggestions(false);
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen weather-bg-main">
      {/* Enhanced Floating Weather Elements */}
      <div
        className="weather-cloud-enhanced"
        style={{ top: "10%", left: "10%", width: "80px", height: "40px" }}
      ></div>
      <div
        className="weather-cloud-enhanced"
        style={{
          top: "20%",
          right: "15%",
          width: "100px",
          height: "50px",
          animationDelay: "2s",
        }}
      ></div>
      <div
        className="weather-cloud-enhanced"
        style={{
          top: "60%",
          left: "5%",
          width: "60px",
          height: "30px",
          animationDelay: "4s",
        }}
      ></div>
      <div
        className="weather-cloud-enhanced"
        style={{
          top: "70%",
          right: "10%",
          width: "90px",
          height: "45px",
          animationDelay: "1s",
        }}
      ></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold gradient-text">
                  Cloudie
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("map")}
                className="text-blue-700 hover:text-blue-900 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-50/50"
              >
                Map
              </button>
              <button
                onClick={() => scrollToSection("favorites")}
                className="text-blue-700 hover:text-blue-900 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-50/50"
              >
                Favorites
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-blue-700 hover:text-blue-900 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-50/50"
              >
                About
              </button>
            </nav>

            {/* Login/Signup Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-blue-700 hover:text-blue-900 transition-colors duration-200 font-medium">
                Login
              </button>
              <button className="weather-btn-primary px-6 py-2">Sign Up</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200/30">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("map")}
                  className="text-left text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-white/50"
                >
                  Map
                </button>
                <button
                  onClick={() => scrollToSection("favorites")}
                  className="text-left text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-white/50"
                >
                  Favorites
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-white/50"
                >
                  About
                </button>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200/30">
                  <button className="text-left text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium py-2">
                    Login
                  </button>
                  <button className="text-left weather-btn-primary px-4 py-2">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center justify-center relative section-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 fade-in">
            Welcome to <span className="gradient-text">Cloudie</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed fade-in fade-in-delay-1">
            Your ultimate weather companion. Get accurate forecasts, track your
            favorite locations, and stay prepared for any weather condition.
          </p>
          <div className="fade-in fade-in-delay-2">
            <div className="weather-search-container">
              <input
                type="text"
                placeholder="Search for a city to get weather forecast..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                onFocus={() => setShowSuggestions(suggestions.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="weather-search-input"
              />
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="weather-search-button"
              >
                {isSearching ? (
                  <div className="weather-search-loading"></div>
                ) : (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                )}
              </button>

              {showSuggestions && suggestions.length > 0 && (
                <div className="weather-search-suggestions">
                  {suggestions.map((city, index) => (
                    <div
                      key={index}
                      className="weather-suggestion-item"
                      onClick={() => handleSuggestionClick(city)}
                    >
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-4 h-4 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-700">{city}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-600 text-sm">
                Try searching for cities like &quot;New York&quot;,
                &quot;London&quot;, or &quot;Tokyo&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Weather Icons */}
        <div className="absolute top-20 left-10 text-4xl opacity-30 animate-pulse">
          ☀️
        </div>
        <div
          className="absolute top-32 right-20 text-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          ⛅
        </div>
        <div
          className="absolute bottom-40 left-20 text-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          🌤️
        </div>
        <div
          className="absolute bottom-20 right-10 text-4xl opacity-30 animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          🌦️
        </div>
      </section>

      {/* Map Section */}
      <section
        id="map"
        className="py-20 unified-section-1 relative overflow-hidden wave-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 fade-in">
              Interactive Weather Map
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto fade-in fade-in-delay-1">
              Explore weather patterns around the world with our interactive
              map. Get real-time data and detailed forecasts for any location.
            </p>
          </div>
          <div className="soft-gradient-1 rounded-3xl p-12 text-center shadow-xl border border-blue-200/30 fade-in fade-in-delay-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Map Feature Coming Soon
            </h3>
            <p className="text-slate-700">
              Interactive weather visualization will be available here.
            </p>
          </div>
        </div>

        {/* Beautiful Wave Transition */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100/50 via-blue-200/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/50 via-blue-200/30 to-transparent"></div>
      </section>

      {/* Favorites Section */}
      <section
        id="favorites"
        className="py-20 unified-section-2 relative overflow-hidden section-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 fade-in">
              Your Favorite Locations
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto fade-in fade-in-delay-1">
              Save your most important locations and get instant weather
              updates. Never miss important weather changes in your key areas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200/30 hover:scale-105 fade-in"
                style={{ animationDelay: `${item * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Location {item}
                </h3>
                <p className="text-slate-700 mb-4">
                  Save and track weather for your important locations.
                </p>
                <div className="text-3xl font-bold text-blue-600">22°C</div>
                <div className="text-sm text-slate-600">Sunny</div>
              </div>
            ))}
          </div>
        </div>

        {/* Beautiful Wave Transition */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-200/50 via-blue-300/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200/50 via-blue-300/30 to-transparent"></div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 unified-section-3 relative overflow-hidden section-transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 fade-in">
              About Cloudie
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto fade-in fade-in-delay-1">
              We&apos;re passionate about providing accurate, reliable weather
              information to help you make informed decisions about your day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in fade-in-delay-2">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-slate-700 mb-6">
                Cloudie was born from the need for a simple, beautiful, and
                accurate weather app. We believe weather information should be
                accessible, reliable, and easy to understand.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Our team of meteorologists and developers work together to bring
                you the most up-to-date weather data with an intuitive interface
                that makes checking the weather a pleasure.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Real-time data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Accurate forecasts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700">Beautiful design</span>
                </div>
              </div>
            </div>
            <div className="soft-gradient-4 rounded-3xl p-8 shadow-xl border border-blue-300/30 fade-in fade-in-delay-3">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">
                  Cloudie
                </h4>
                <p className="text-slate-700">Your trusted weather companion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beautiful Wave Transition */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-400/30 via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-400/30 via-blue-500/20 to-transparent"></div>
      </section>

      {/* Footer */}
      <footer className="unified-section-1 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold text-slate-800">Cloudie</span>
            </div>
            <p className="text-slate-700 mb-6">
              Your ultimate weather companion
            </p>
            <div className="flex justify-center space-x-6">
              <button className="text-slate-600 hover:text-slate-800 transition-colors duration-200">
                Privacy
              </button>
              <button className="text-slate-600 hover:text-slate-800 transition-colors duration-200">
                Terms
              </button>
              <button className="text-slate-600 hover:text-slate-800 transition-colors duration-200">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Final Weather Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white/20"></div>
        <div
          className="weather-cloud-enhanced"
          style={{
            top: "20%",
            left: "5%",
            width: "60px",
            height: "30px",
            opacity: "0.3",
          }}
        ></div>
        <div
          className="weather-cloud-enhanced"
          style={{
            top: "30%",
            right: "10%",
            width: "80px",
            height: "40px",
            opacity: "0.3",
            animationDelay: "2s",
          }}
        ></div>
      </footer>
    </div>
  );
}
