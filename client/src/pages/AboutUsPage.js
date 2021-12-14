import React from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';


function AboutUsPage(props) {
  return (
    <div>
      <Navigation />

      <p>As a task oriented person I feel that there are not many</p>
      <p>organizational tools that can help me achieve tasks </p>
      <p>properly and I end up having to use more than one, by </p>
      <p>creating this I get to add the best of those tools and a bit</p>
      more to this app.

      <Footer />
    </div>
  );
}

export default AboutUsPage;