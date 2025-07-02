import React from "react";
import ProductDetail from "./components/ProductDetail";
import VideoPlayer from "./components/VideoPlayer";
import StepTutorial from "./components/StepTutorial";
import PromoBanner from "./components/PromoBanner";
import Reviews from "./components/Reviews";
import './index.css';
import FAQSection from "./components/FAQ";
import FSlider from "./components/FSlider";
import FeatureHighlights from "./components/FeatureHighlights";

const App = () => {
  return (
    <div className="p-6">
      <ProductDetail />
      <VideoPlayer />
      <StepTutorial />
      <PromoBanner />
      < Reviews />
      <FAQSection />
      <FSlider />
      <FeatureHighlights />
    </div>
  );
};

export default App;
