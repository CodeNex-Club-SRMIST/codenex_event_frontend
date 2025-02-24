'use client';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { question: "What is Block-The-Chain?", answer: "Block-The-Chain is a flagship event by CodeNex, combining a hackathon, webinar, and networking opportunities." },
  { question: "Is there any registration fee to join Block-The-Chain?", answer: "No, there is no registration fee to participate in Block-The-Chain." },
  { question: "How many team members can be there in Hackathon?", answer: "Teams can have 1-5 members." },
  { question: "Can I participate solo?", answer: "Yes, solo participation is allowed." },
  { question: "I am a beginner and have no expertise. Can I join?", answer: "Absolutely! Block-The-Chain is beginner-friendly and encourages learning and growth." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-2xl p-6 border rounded-xl shadow-lg bg-gray-800">
        
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 py-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-3 outline-none hover:bg-transparent rounded-md transition-all select-none"
            >
              <span className="text-lg sm:text-xl select-none">{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <p className="mt-2 p-3 text-gray-300 text-sm sm:text-base bg-gray-700 rounded-md select-none">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
