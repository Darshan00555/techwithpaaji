import React from "react";

export const metadata = {
    title: "Terms and Conditions",
    description: "Terms and Conditions for Paaji Connect - Read our service scope, limitations, and user agreements.",
};

export default function TermsAndConditions() {
    const lastUpdated = "February 25, 2026";

    return (
        <main className="min-h-screen bg-[#FDFBF7] py-20 px-6 sm:px-10 lg:px-20">
            <div className="mx-auto max-w-4xl text-[#0B2E2F]">
                <h1 className="font-playfair text-4xl font-bold sm:text-5xl mb-6">
                    Terms & Conditions
                </h1>
                <p className="text-sm text-[#0B2E2F]/70 mb-10">
                    Last Updated: {lastUpdated}
                </p>

                <section className="space-y-8 text-lg text-[#0B2E2F]/80 leading-relaxed">
                    {/* Introduction */}
                    <div>
                        <p>
                            These Terms and Conditions govern your use of the website located at <strong>https://techwithpaaji.in</strong> and the services provided by <strong>Paaji Connect</strong>.
                            By accessing our website or booking our services, you agree to comply with and be bound by the following terms.
                        </p>
                    </div>

                    {/* Service Scope */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            1. Scope of Services & Limitations
                        </h2>
                        <p className="mb-2">
                            Paaji Connect provides <strong>Relationship Coaching, Breakup Recovery Coaching, Communication Coaching, and Relationship Reset Programs</strong>.
                        </p>
                        <p>
                            Please note that our coaching services are for educational and structural guidance purposes only. We are relationship coaches, not licensed psychiatrists or medical professionals. Our services are not a substitute for clinical psychological therapy, medical diagnosis, or psychiatric intervention. If you are experiencing severe mental illness, clinical depression, or abuse, we strongly advise seeking licensed medical help.
                        </p>
                    </div>

                    {/* Results Disclaimer */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            2. No Guarantee of Results
                        </h2>
                        <p>
                            Human relationships are inherently complex and rely entirely on the actions and willingness of the individuals involved. As such, <strong>Paaji Connect makes no guarantees regarding the outcome or results</strong> of our coaching services. Your success in rebuilding a relationship or recovering from a breakup depends entirely on your own effort, the cooperation of your partner (if applicable), and your specific circumstances. Results will vary for every individual.
                        </p>
                    </div>

                    {/* Payments and Refunds */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            3. Payment & Refund Policy
                        </h2>
                        <p>
                            All payments for coaching sessions must be made upfront prior to the scheduled session. Due to the time and specialized expertise provided during the coaching process, <strong>all sales and session fees are final and non-refundable</strong> once the session has commenced or occurred. Rescheduling requires a minimum of 24-hours notice.
                        </p>
                    </div>

                    {/* Intellectual Property */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            4. Intellectual Property & Copyright
                        </h2>
                        <p>
                            All content on this website, including but not limited to the blog posts, articles, text, graphics, logos, and digital downloads, is the exclusive intellectual property of <strong>Paaji Connect</strong> and is protected by international copyright laws. You may not reproduce, distribute, or copy our blog content or coaching materials without explicit written permission from us.
                        </p>
                    </div>

                    {/* Governing Law */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            5. Governing Law
                        </h2>
                        <p>
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            6. Contact for Disputes & Inquiries
                        </h2>
                        <p className="mb-2">
                            If you have any questions or disputes regarding these Terms & Conditions, please contact us immediately at:
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#0B2E2F]/10">
                            <p>Email: <a href="mailto:darshan.ntg@gmail.com" className="text-[#E76F51] hover:underline">darshan.ntg@gmail.com</a></p>
                            <p>Phone: +91 97738 17031</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
