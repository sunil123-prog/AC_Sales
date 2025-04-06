import React, { useState } from 'react';
import '../Styles/Services.css'

// Extended FAQ data
const faqs = [
  {
    id: 1,
    question: "How often should I service my AC unit?",
    answer: "It's recommended to service your AC unit at least twice a year, typically during the spring and fall, to ensure optimal performance."
  },
  {
    id: 2,
    question: "What are the signs that my AC needs repair?",
    answer: "Common indicators include unusual noises, weak airflow, warm air blowing from the unit, and unexpected increases in energy bills."
  },
  {
    id: 3,
    question: "Do you offer warranties on spare parts?",
    answer: "Yes, we provide warranties on select spare parts. Please contact us for specific warranty information regarding the part you're interested in."
  },
  {
    id: 4,
    question: "How can I improve the efficiency of my AC unit?",
    answer: "Regular maintenance, such as cleaning or replacing air filters, ensuring the outdoor unit is free from debris, and scheduling professional tune-ups, can significantly improve efficiency."
  },
  {
    id: 5,
    question: "What should I consider when purchasing a new AC unit?",
    answer: "Consider factors like the size of your space, energy efficiency ratings, the unit's cooling capacity, and consult with a professional to determine the best fit for your needs."
  },
  {
    id: 6,
    question: "Is it normal for my AC unit to produce water?",
    answer: "Yes, it's normal for AC units to produce condensation. However, excessive water or leaks may indicate a problem with the drainage system."
  },
  {
    id: 7,
    question: "Can I replace just the outdoor unit without replacing the indoor unit?",
    answer: "It's generally recommended to replace both units simultaneously to ensure compatibility and efficiency, as mismatched units can lead to performance issues."
  },
  {
    id: 8,
    question: "What is the average lifespan of an AC unit?",
    answer: "The average lifespan of an AC unit is between 10 to 15 years, depending on maintenance and usage."
  },
  {
    id: 9,
    question: "Why is my AC unit freezing up?",
    answer: "This can be caused by restricted airflow, low refrigerant levels, or issues with the blower fan. It's best to have a professional diagnose and address the problem."
  },
  {
    id: 10,
    question: "Do you provide emergency AC repair services?",
    answer: "Yes, we offer 24/7 emergency repair services to ensure your comfort during unexpected breakdowns."
  }
  // Add more FAQs as needed
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="faq-toggle-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
