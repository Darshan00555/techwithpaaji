import React from "react";

export const metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Paaji Connect - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
    const lastUpdated = "February 25, 2026";

    return (
        <main className="min-h-screen bg-[#FDFBF7] py-20 px-6 sm:px-10 lg:px-20">
            <div className="mx-auto max-w-4xl text-[#0B2E2F]">
                <h1 className="font-playfair text-4xl font-bold sm:text-5xl mb-6">
                    Privacy Policy
                </h1>
                <p className="text-sm text-[#0B2E2F]/70 mb-10">
                    Last Updated: {lastUpdated}
                </p>

                <section className="space-y-8 text-lg text-[#0B2E2F]/80 leading-relaxed">
                    {/* Introduction */}
                    <div>
                        <p>
                            Welcome to <strong>Paaji Connect</strong> (https://techwithpaaji.in).
                            Your privacy is of utmost importance to us. This Privacy Policy outlines the types of personal information that is received and collected by Paaji Connect and how it is used.
                        </p>
                    </div>

                    {/* Data Collection */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            1. Information We Collect
                        </h2>
                        <p className="mb-2">
                            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a contact form, and in connection with other activities, services, features or resources we make available on our Site. We collect the following information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Data:</strong> Name, Email Address, and Phone Number (when submitted via our Contact or Booking forms).</li>
                            <li><strong>Non-Personal Data:</strong> Browser name, the type of computer, and technical information about Users' means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</li>
                        </ul>
                    </div>

                    {/* Cookies and AdSense */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            2. Cookies and Third-Party Advertising (Google AdSense)
                        </h2>
                        <p className="mb-2">
                            Our site may use "cookies" to enhance User experience. We use Google AdSense and other third-party services which may use cookies to serve ads based on a user's prior visits to our website or other websites.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
                            <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-[#E76F51] underline hover:text-[#d45b3e]">Ads Settings</a>.</li>
                        </ul>
                    </div>

                    {/* Third-Party Links */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            3. Third-Party Links
                        </h2>
                        <p>
                            Our website may contain links to other websites. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.
                        </p>
                    </div>

                    {/* Data Security */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            4. How We Protect Your Information
                        </h2>
                        <p>
                            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
                        </p>
                    </div>

                    {/* User Rights */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            5. Your Rights Over Your Data
                        </h2>
                        <p>
                            You have the right to access, update, or delete your personal information that we hold. If you wish to request the deletion of your data or a copy of the data you have provided to us through our contact forms, please contact us at the email provided below.
                        </p>
                    </div>

                    {/* Policy Updates */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            6. Changes to this Privacy Policy
                        </h2>
                        <p>
                            Paaji Connect has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="font-playfair text-2xl font-bold text-[#0B2E2F] mb-4">
                            7. Contact Us
                        </h2>
                        <p className="mb-2">
                            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#0B2E2F]/10">
                            <p><strong>Paaji Connect</strong></p>
                            <p>Email: <a href="mailto:darshan.ntg@gmail.com" className="text-[#E76F51] hover:underline">darshan.ntg@gmail.com</a></p>
                            <p>Phone: +91 97738 17031</p>
                            <p>Location: India</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
