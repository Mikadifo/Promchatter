'use client';
import faqs from './../../assets/data/faqs.js';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

//TODO: search bar

const FAQs = () => {
    return (
        <div className="mx-64 my-32">
            <h3 className="text-blue font-bold text-3xl text-center font-raleway mb-16">
                Frequent Asked Questions
            </h3>
            <div className="grid gap-12">
                {faqs.map((faq) => (
                    <QuestionCard key={faq.id} question={faq} />
                ))}
            </div>
            <p className="font-bold mt-16 font-lato text-lg text-black">
                You still have questions?
                <span className="font-normal"> Email us to: </span>
                <a
                    href="mailto:faqs.promchatter.com"
                    className="font-normal text-orange hover:underline"
                >
                    faqs.promchatter.com
                </a>
            </p>
        </div>
    );
};

const QuestionCard = ({ question }) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <button
            onClick={() => setExpanded(!isExpanded)}
            className="w-full border-b hover:border-blue/100 border-blue/50 block pb-4"
        >
            <span className="flex items-center">
                {!isExpanded ? (
                    <AiOutlinePlus className="text-green mr-6" size={28} />
                ) : (
                    <AiOutlineMinus className="text-green mr-6" size={28} />
                )}
                <h4 className="font-lato text-2xl font-normal text-black">
                    {question.title}
                </h4>
            </span>
            {isExpanded && (
                <p className="font-lato text-black text-lg text-start ml-12 mt-2">
                    {question.answer}
                </p>
            )}
        </button>
    );
};

export default FAQs;
