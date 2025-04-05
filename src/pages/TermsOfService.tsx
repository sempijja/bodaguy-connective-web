import React from "react";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/PageTransition";

// Renamed component for clarity
const TermsOfService = () => {
  // Add the last updated date variable, matching the Privacy Policy
  const lastUpdated = "March 31, 2025";

  return (
    <MainLayout>
      <PageTransition>
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Boda Guy Rider Terms And Conditions</h1>
             {/* Display Last Updated Date near the top */}
             <p className="text-gray-600 text-sm mb-6">Last Updated on {lastUpdated}</p>


            {/* --- Content from previous step starts here --- */}

            {/* Introductory Paragraphs (Background) */}
            <p className="text-gray-700 mb-4 font-semibold">
              PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE BODA GUY PLATFORM AND SERVICES.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">BACKGROUND</span><br />
              These Terms of Use, together with the Boda Guy Privacy Policy and any other documents referred to herein, set out the terms under which you, as a Rider, may use the Boda Guy mobile application(s) and platform (“Our Application” or “Platform”). You must read, agree, and accept all the Terms set out in this agreement. You will be required to read and accept these Terms of Use when signing up for a Rider Account. If you do not accept all the terms of this agreement, then Boda Guy is unwilling to allow you to use the Boda Guy platform. By using any of the services, you become a Service Provider (Rider) on the Boda Guy platform and you agree to be bound by the terms and conditions of this agreement with respect to the provision of such services. If you do not agree to be bound by the terms of this agreement, do not use the Boda Guy Application. We may amend these Terms at any time by posting the amended terms on the Boda Guy Application or Website. You may not have access to the Boda Guy Application before accepting these terms. These Terms of Use govern your use of the platform as a Rider; they do not apply to the sale of goods or services by third parties.
            </p>

            {/* Section 1: Definitions and Interpretation */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Definitions and Interpretation</h2>
            <p className="text-gray-700 mb-4">
              In these Terms of Use, unless the context otherwise requires, the following expressions have the following meanings:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
              <li><span className="font-semibold">“Account”</span>: means the account required for a Rider to access and/or use certain areas of Our Application, as detailed in Clause 4.</li>
              <li><span className="font-semibold">“Application” / “Platform”</span>: means the Boda Guy mobile application(s) for Riders and Customers, the Boda Guy website (www.bodaguy.com), and related technological services.</li>
              <li><span className="font-semibold">“Boda Guy” / “We/Us/Our”</span>: means the entity operating the Boda Guy platform.</li>
              <li><span className="font-semibold">“Content”</span>: means any and all text, images, audio, video, scripts, code, software, databases, and any other form of information capable of being stored on a computer that appears on, or forms part of, Our Application.</li>
              <li><span className="font-semibold">“Customer”</span>: means a user requesting or receiving transportation or delivery services via the Boda Guy application(s).</li>
              <li><span className="font-semibold">“Rider”</span>: means an independent Boda Boda rider operating as a two-wheel transportation provider for people or goods using the Boda Guy platform, who has successfully completed the registration and onboarding process and holds an active Account.</li>
              <li><span className="font-semibold">“Services”</span>: means the provision of on-demand motorcycle (boda boda) transportation and logistics/delivery services facilitated through the Boda Guy platform.</li>
              <li><span className="font-semibold">“User”</span>: means any individual using the Boda Guy platform, including Customers and Riders.</li>
              <li><span className="font-semibold">“User Content”</span>: means any content submitted to Our Application by Users including, but not limited to personal information, images, ratings, feedback, and all data.</li>
              <li><span className="font-semibold">“Wallet Balance” / “Earnings Balance”</span>: means the balance of earnings due to a Rider as the result of services provided to Users through the Boda Guy application, displayed within the Rider’s Account.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Information About Us:</span> More information about Boda Guy is available at our website - www.bodaguy.com, or on request by emailing <a href="mailto:bodaguyfreight@gmail.com" className="text-blue-600 underline">bodaguyfreight@gmail.com</a>.
            </p>

            {/* Section 2: Our Application */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Our Application</h2>
             <p className="text-gray-700 mb-4">
               2.1. Any individual seeking to become a Rider must undergo an onboarding process and succeed in passing all necessary requirements, including but not limited to: satisfactory completion of background checks, verification of identity and necessary documentation (e.g., Driving Permit, National ID), verification of vehicle suitability, and potentially completion of training. Only upon successful completion are Riders allowed to access and use Our Application to provide Services.
             </p>
             <p className="text-gray-700 mb-4">
               2.2. We reserve the right to deny access, suspend, deactivate, or preclude anyone from accessing Our Application at any time and for any period, for reasons including but not limited to violation of these Terms, safety concerns, or operational requirements. We will not be liable to you in any way if such access is made unavailable to you at any time.
             </p>
             <p className="text-gray-700 mb-4">
               2.3. It is the responsibility of the Rider to make any and all arrangements necessary (e.g., smartphone, data connection) in order to access Our Application. Any Rider who is unable to access the Application should contact Boda Guy support for guidance.
             </p>
              <p className="text-gray-700 mb-4">
                2.4. Access to Our Application is provided “as is” and on an “as available” basis. We may alter, suspend or discontinue Our Application (or any part of it) at any time and without notice. We will not be liable to you in any way if Our Application (or any part of it) is unavailable at any time and for any period.
             </p>

            {/* Section 3: Relationship and Provision of Services */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Relationship and Provision of Services</h2>
            <p className="text-gray-700 mb-4">
                3.1. Riders operate as independent third-party contractors. The Boda Guy Platform is a technology service that facilitates the connection between Riders and Users seeking transportation or delivery services.
            </p>
             <p className="text-gray-700 mb-4">
               3.2. These Terms and your use of the Platform do not create an employment relationship, partnership, joint venture, or agency relationship between you and Boda Guy. You have no authority to bind Boda Guy and you will not hold yourself out as an employee, agent, or authorized representative of Boda Guy.
             </p>
             <p className="text-gray-700 mb-4">
               3.3. Boda Guy has no responsibility whatsoever for the actions or conduct of any Riders or Users. Boda Guy has no obligation to intervene in disputes between Riders and Users, although we may provide support mechanisms. Responsibility for decisions made regarding providing or accepting transportation/delivery services rests solely with the User and the Rider.
             </p>
             <p className="text-gray-700 mb-4">
               3.4. Boda Guy will not be liable for any damages, direct, incidental, and or consequential, arising out of the use of the Boda Guy platform, including, without limitation, damages arising out of communicating and or meeting with other participants (Users or other Riders) of the Boda Guy platform. Such potential damages include and are not limited to, physical damages, bodily injuries, death, property damage, and emotional distress.
             </p>
             <p className="text-gray-700 mb-4">
               3.5. Riders shall take all reasonable precautions in all actions and interactions with any party they may interact with through the use of the Services. Boda Guy does not control the identity or actions of Users beyond the information provided during registration and use. Riders use the Services at their own risk.
             </p>
             <p className="text-gray-700 mb-4">
               3.6. Riders are required to adhere to the Boda Guy Rider Code of Conduct and safety standards when using the Application and providing Services. The Code of Conduct and standards will be provided during onboarding and may be updated from time to time. It is the Rider's responsibility to be familiar with the latest version.
             </p>
              <p className="text-gray-700 mb-4">
                3.7. The Boda Guy platform provides fare estimates to Users based on factors like distance, time, and demand. Riders agree that the fare applicable for the Services provided is the one calculated and displayed by the Boda Guy Application. Any Rider or User wishing to understand fare calculations or who believes there has been an error should contact Boda Guy support.
             </p>
             <p className="text-gray-700 mb-4">
               3.8. Boda Guy may, at its discretion, offer incentives or promotions to Riders. Boda Guy also reserves the right to make deductions from Rider earnings for reasons outlined in these terms (e.g., fees, adjustments for fare errors, reimbursements for specific costs agreed upon). All incentive programs, sanctions, or deductions will be communicated to Riders. It is the Rider's responsibility to monitor communications (e.g., SMS, in-app notifications) for such updates.
            </p>

            {/* Section 4: Rider Accounts */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Rider Accounts</h2>
              <p className="text-gray-700 mb-4">
                4.1. Upon successful completion of the onboarding process, a Rider will be provided with an Account to access the Boda Guy platform.
              </p>
              <p className="text-gray-700 mb-4">
                4.2. When registering and creating an Account, the information provided must be accurate and complete. If any information changes (e.g., contact details, vehicle information, permit validity), it is the Rider's responsibility to update their Account information promptly. Boda Guy may periodically request updates or verification.
              </p>
              <p className="text-gray-700 mb-4">
                 4.3. It is the Rider's sole responsibility to maintain the confidentiality and security of their Account login details (e.g., password). Any activity occurring under the Rider’s account is deemed the Rider’s responsibility. The Rider shall be liable for any resulting financial loss or consequences due to unauthorized access through their device or credentials.
              </p>
              <p className="text-gray-700 mb-4">
                 4.4. If a Rider believes their Account is being used without permission, they must contact Boda Guy Support immediately. Boda Guy will not be liable for any unauthorized use of any Account before being notified.
              </p>
              <p className="text-gray-700 mb-4">
                4.5. A Rider must not use any other Rider’s Account.
              </p>
              <p className="text-gray-700 mb-4">
                 4.6. Any personal information provided in a Rider's Account will be collected, used, and held in accordance with the Boda Guy Privacy Policy and applicable Ugandan data protection laws.
              </p>
              <p className="text-gray-700 mb-4">
                 4.7. Boda Guy reserves the right to suspend or deactivate a Rider’s account at any time for violations of these Terms, the Code of Conduct, safety issues, legal requirements, or inactivity.
              </p>

            {/* Section 5: Earnings and Payments */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Earnings and Payments</h2>
              <p className="text-gray-700 mb-4">
                5.1. The Boda Guy Application enables Riders to monitor their earnings derived from providing Services facilitated through the Platform. The Earnings Balance due to the Rider will be displayed within the Application.
              </p>
              <p className="text-gray-700 mb-4">
                5.2. Boda Guy offers Riders options for receiving settlement of their Earnings Balance, primarily via Mobile Money transfers to the Rider's registered number. We will endeavor to process payments according to the agreed schedule, but these may be subject to delays outside Our control (e.g., payment system issues).
              </p>
              <p className="text-gray-700 mb-4">
                5.3. Any Rider who believes there is an error in their payment or Earnings Balance should contact Boda Guy Support immediately with full details. We reserve the right to make corrections to future earnings in the event of any overpayment or necessary adjustment.
              </p>
               <p className="text-gray-700 mb-4">
                 5.4. We reserve the right to charge Riders a withdrawal fee or transaction fee associated with processing payments/payouts, which will be communicated in advance.
               </p>
               <p className="text-gray-700 mb-4">
                 5.5. Riders may be offered the opportunity to use their earnings for specific purposes via the platform (e.g., paying platform fees, purchasing services from Boda Guy or approved third parties). In such cases, it is the Rider's responsibility to check and approve all such transactions.
              </p>

            {/* Section 6: Platform Fees / Commission */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Platform Fees / Commission</h2>
             <p className="text-gray-700 mb-4">
                6.1. Boda Guy charges Riders a service fee or commission for using the Platform to connect with Users and provide Services. The applicable fee structure (e.g., percentage commission per trip) will be clearly communicated during onboarding and may be updated from time to time.
              </p>
              <p className="text-gray-700 mb-4">
                6.2. All fees and commission rates are subject to change. Boda Guy management will communicate any changes effectively to Riders in advance. It is the Rider's responsibility to monitor communications for updates.
              </p>

             {/* Section 7: Fare Calculation (Note: Text is brief in source) */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Fare Calculation</h2>
             <p className="text-gray-700 mb-4">
               Fare estimates provided to Users are calculated by the platform based on factors including base fare, distance, time, and dynamic adjustments for demand or external conditions. Riders agree to the fare calculated by the platform for each completed trip.
             </p>

            {/* Section 8: Intellectual Property Rights */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              8.1. With the exception of User Content, all Content included on Our Application and the copyright and other intellectual property rights subsisting in that Content, unless specifically labelled otherwise, belongs to or has been licensed by Boda Guy. All Content is protected by applicable Ugandan and international intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              8.2. You may not reproduce, copy, distribute, sell, rent, sub-license, store, or in any other manner re-use Content from Our Application unless given express written permission to do so by Us.
            </p>
            <p className="text-gray-700 mb-4">
              8.3. As a Rider/User, you may access, view, and use Our Application for its intended purposes. You may download parts for caching or offline viewing where the app functionality permits.
            </p>
             <p className="text-gray-700 mb-4">
               8.4. Our status as the owner and author of the Content on Our Application (or that of identified licensors) must always be acknowledged.
             </p>
             <p className="text-gray-700 mb-4">
               8.5. You may not use any Content saved or downloaded from Our Application for commercial purposes outside the scope of providing Services via the Platform without first obtaining a license from Us (or our licensors).
            </p>

            {/* Section 9: User Content */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. User Content</h2>
            <p className="text-gray-700 mb-4">
               9.1. User Content on Our Platform includes information provided during registration, profile details, feedback, ratings, and any other data submitted by Users (Riders or Customers).
            </p>
             <p className="text-gray-700 mb-4">
                9.2. An Account is required to submit most User Content.
             </p>
              <p className="text-gray-700 mb-4">
                9.3. You agree that you are solely responsible for your User Content. Specifically, you agree, represent, and warrant that you have the right to submit the User Content and that it complies with Our Acceptable Usage Policy (Clause 14) and applicable laws.
             </p>
              <p className="text-gray-700 mb-4">
                 9.4. You agree to be liable to Us and will indemnify Us for any breach of the warranties under sub-Clause 9.3. You will be responsible for any loss or damage suffered by Us as a result of such breach.
             </p>
             <p className="text-gray-700 mb-4">
               9.5. You (or your licensors) retain ownership of your User Content. By submitting User Content, you grant Boda Guy an unconditional, non-exclusive, fully transferable, royalty-free, perpetual, worldwide license to use, store, archive, publish, transmit, adapt, reproduce, distribute, display, and sub-license the User Content for the purposes of operating, improving, and promoting Our Application and Services.
            </p>
            <p className="text-gray-700 mb-4">
                9.6. We may reject, reclassify, or remove any User Content from Our Platform where, in Our sole opinion, it violates Our Acceptable Usage Policy, or if We receive a complaint from a third party.
            </p>

            {/* Section 10: Links to Our Application */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Links to Our Application</h2>
            <p className="text-gray-700 mb-4">
               10.1. You may share links related to the Boda Guy service (e.g., referral links if offered) provided it is done fairly, legally, and does not falsely suggest association or endorsement where none exists. You may not use Boda Guy logos or trademarks without express written permission. Linking should not damage Our reputation.
            </p>
            <p className="text-gray-700 mb-4">
                10.2. Framing or embedding of Our Application on other websites is not permitted without Our express written permission.
            </p>
            <p className="text-gray-700 mb-4">
                10.3. You shall not create links from any site containing material that violates the standards outlined in our Acceptable Use Policy (e.g., explicit, offensive, unlawful, discriminatory, harassing content).
            </p>

            {/* Section 11: Links to Other Sites */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Links to Other Sites</h2>
             <p className="text-gray-700 mb-4">
                Links to third-party sites may be included in our Application (e.g., to payment processors, support resources). Unless expressly stated, these sites are not under Our control. We accept no responsibility for the content or policies of third-party sites. Inclusion of a link does not imply endorsement.
             </p>

             {/* Section 12: Disclaimers */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Disclaimers</h2>
             <p className="text-gray-700 mb-4">
               12.1. Nothing on Our Application constitutes advice on which you should solely rely. It is provided for general information and service facilitation purposes only.
             </p>
             <p className="text-gray-700 mb-4">
                12.2. To the extent permitted by law, we make no representation, warranty, or guarantee that Our Application will meet your requirements, not infringe third-party rights, be compatible with all software/hardware, or be secure.
             </p>
             <p className="text-gray-700 mb-4">
               12.3. We make reasonable efforts to ensure Content on Our Application is complete, accurate, and up-to-date. However, we do not guarantee this (express or implied).
             </p>
             <p className="text-gray-700 mb-4">
                12.4. Boda Guy does not guarantee the availability or acceptance of ride/delivery requests.
             </p>

            {/* Section 13: Our Liability */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Our Liability</h2>
             <p className="text-gray-700 mb-4">
               13.1. To the fullest extent permissible by law, We accept no liability to any Rider for any loss or damage, whether foreseeable or otherwise, in contract, tort (including negligence), for breach of statutory duty, or otherwise, arising out of or in connection with the use of (or inability to use) Our Application or reliance upon any Content included on Our Application. This includes potential loss of earnings or opportunities.
             </p>
             <p className="text-gray-700 mb-4">
                13.2. We exclude all representations, warranties, and guarantees (whether express or implied) that may apply to Our Application or any Content, except where required by law.
             </p>
              <p className="text-gray-700 mb-4">
                13.3. As a Rider using the Platform as an independent contractor, we accept no liability for loss of profits, sales, business, revenue; loss of business opportunity, goodwill, or reputation; loss of anticipated savings; business interruption; or any indirect or consequential loss or damage.
             </p>
             <p className="text-gray-700 mb-4">
               13.4. We exercise reasonable skill and care to ensure Our Application is free from viruses and malware. However, We accept no liability for loss or damage resulting from viruses, malware, DDoS attacks, or other harmful material affecting your hardware, software, or data due to your use of Our Application or linked sites.
             </p>
             <p className="text-gray-700 mb-4">
               13.5. We accept no liability for disruption or non-availability of Our Application resulting from external causes (e.g., ISP failure, network failure, acts of war, legal restrictions).
             </p>
             <p className="text-gray-700 mb-4">
               13.6. Nothing in these Terms excludes or restricts Our liability for death or personal injury resulting from Our negligence, or for fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or restricted by Ugandan law.
            </p>

            {/* Section 14: Acceptable Usage Policy */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Acceptable Usage Policy</h2>
             <p className="text-gray-700 mb-4">
                14.1. You may only use Our Application in a manner that is lawful and complies with this Clause 14.
             </p>
              <p className="text-gray-700 mb-4">
                 14.2. You must ensure compliance with all local, national, or international laws and regulations.
             </p>
              <p className="text-gray-700 mb-4">
                 14.3. You shall not use Our Application in any way, or for any purpose, that is unlawful or fraudulent; or intended to harm any person in any way.
             </p>
             <p className="text-gray-700 mb-4">
                14.4. You must not misuse the platform (e.g., creating fake accounts, manipulating fares, intentionally damaging property, engaging in harassment or unsafe behavior).
             </p>
             <p className="text-gray-700 mb-4">
               14.5. We reserve the right to suspend or terminate your access to Our Application if you materially breach this Clause 14 or any other provisions of these Terms. Actions may include:
            </p>
             <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
               <li>Suspending or terminating your Account;</li>
               <li>Removing User Content you submitted;</li>
               <li>Issuing a written warning;</li>
               <li>Taking legal proceedings for cost reimbursement;</li>
               <li>Taking further legal action;</li>
               <li>Disclosing information to law enforcement as required or deemed necessary;</li>
               <li>Any other actions deemed reasonably appropriate and lawful.</li>
            </ul>
             <p className="text-gray-700 mb-4">
                14.6. We exclude liability for actions taken in response to breaches of these Terms.
            </p>


            {/* Section 15: Changes to these Terms of Use */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. Changes to these Terms of Use</h2>
             <p className="text-gray-700 mb-4">
                15.1. We may alter these Terms of Use at any time. Changes will be highlighted (e.g., notification within the app, updated date on terms).
             </p>
              <p className="text-gray-700 mb-4">
                 15.2. Changes become binding upon your first use of Our Application after implementation. You are advised to check the Terms periodically. Continued use after changes constitutes acceptance.
             </p>

            {/* Section 16: Contacting Us */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">16. Contacting Us</h2>
            <p className="text-gray-700 mb-4">
              To contact Boda Guy, please email Us at{" "}
              <a href="mailto:bodaguyfreight@gmail.com" className="text-blue-600 underline">
                bodaguyfreight@gmail.com
              </a>
              , use the support features within the Application, or visit our contact page at{" "}
              <a href="http://www.bodaguy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                www.bodaguy.com
              </a>.
              Telephone:{" "}
              <a href="tel:0393102562" className="text-blue-600 underline">
                0393102562
              </a>.
            </p>

            {/* Section 17: Communications from Us */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">17. Communications from Us</h2>
             <p className="text-gray-700 mb-4">
                17.1. By signing up for an Account, you agree to receive communications from Boda Guy or its partners. These may relate to service changes, updates to terms, account information, promotions, or operational matters, sent via SMS, in-app notification, or email.
             </p>
              <p className="text-gray-700 mb-4">
                 17.2. You may manage some communication preferences via your account settings or opt-out links where provided (e.g., for marketing messages). Operational messages regarding your account and service usage are generally non-optional. For questions about communications, contact <a href="mailto:bodaguyfreight@gmail.com" className="text-blue-600 underline">bodaguyfreight@gmail.com</a>.
                 {/* Note: Source doc mentioned support@bodaguy.com here, but main contact is bodaguyfreight@gmail.com. Used main contact for consistency. Adjust if needed. */}
             </p>

            {/* Section 18: Law and Jurisdiction */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">18. Law and Jurisdiction</h2>
            <p className="text-gray-700 mb-4">
                18.1. These Terms and Conditions, and the relationship between you (as a Rider) and Us (whether contractual or otherwise), shall be governed by and construed in accordance with the laws of the Republic of Uganda.
            </p>
             <p className="text-gray-700 mb-4">
                18.2. Any dispute, controversy, proceedings, or claim relating to these Terms and Conditions, the relationship between you and Us, or any matters arising therefrom (whether contractual or otherwise) shall be subject to the exclusive jurisdiction of the courts of Uganda.
            </p>


            {/* Display Last Updated Date at the bottom */}
            <div className="mt-12 pt-8 border-t border-gray-300 text-gray-600 text-sm">
              <p>Last Updated on {lastUpdated}</p>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default TermsOfService;