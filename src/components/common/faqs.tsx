'use client'
import React from "react";
import { Button } from "./Button"
import { Typography } from "./Typography"
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { faqs } from "@/data/faqsData";
export default function Faqs() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className="container mx-auto py-12 px-4">
            <div className="flex flex-col md:flex-row  gap-6">
                <div className="w-full md:w-1/2 items-start md:items-center"data-aos="zoom-out-right" data-aos-duration="800">
                    <Typography variant="h1" className="text-xl md:text-4xl mb-4">Frequently Asked Questions</Typography>
                    <Typography variant="body1" className="mb-8 text-justify">As a leading exam preparation platform, we are dedicated to providing comprehensive study resources and expert guidance to help students achieve their CPA, CMA, ACCA, and EA goals.</Typography>
                    <div className="flex items-center space-x-4">
                        <Button variant="filled" href="/faq">
                            More Questions
                        </Button>
                        <Button variant="text" href="/contact">
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 items-start md:items-center"data-aos="zoom-out-left" data-aos-duration="800">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b py-4">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggle(index)}
                            >
                                <Typography variant="h1" className="text-[17px] leading-tight">
                                    {faq.question}
                                </Typography>
                                {openIndex === index ? (
                                    <MinusIcon size={18} weight="bold" />
                                ) : (
                                    <PlusIcon size={18} weight="bold" />
                                )}
                            </div>
                            {openIndex === index && (
                                <Typography variant="body1" className="mt-2 text-sm">{faq.answer}</Typography>
                            )}
                        </div>
                    ))}</div>
            </div>
        </section>
    )
}