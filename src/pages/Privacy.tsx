import React from "react";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/PageTransition";

const Privacy = () => {
  // Date from the provided Boda Guy Privacy Policy document [cite: 4]
  const lastUpdated = "March 31, 2025";

  return (
    <MainLayout>
      <PageTransition>
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy for Boda Guy</h1> {/* [cite: 1] */}
            <p className="text-gray-600 text-sm mb-6">Last Updated on {lastUpdated}</p> {/* [cite: 4] */}

            {/* Intro Paragraphs */}
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. We strive to ensure that our use of your personal information or personal data is lawful, reasonable, and relevant to our business activities, with the goal of improving our services and your experience. {/* [cite: 1, 2] */}
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE BODA GUY SERVICES. {/* [cite: 3] */}
            </p>

             {/* Section 1: Aim and Scope of Policy */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Aim and Scope of Policy</h2>
             <p className="text-gray-700 mb-4">
               This privacy notice sets out what personal information we collect from you when you use our platform (which could be our online platform, mobile site, the Boda Guy application(s), or any other electronic platform), how we collect your personal information, why we collect it and how we use it, and related matters. {/* [cite: 4] */}
             </p>
             <p className="text-gray-700 mb-4">
                Please read this privacy notice carefully to understand our views and practices regarding your personal information and how we will treat it (even if you're a long-standing user) and contact us if you need any clarity or assistance, using the contact details set out at the end of this policy. {/* [cite: 5] */}
             </p>
              <p className="text-gray-700 mb-4">
                This privacy notice is applicable to Boda Guy. This privacy notice should be read in conjunction with the standard terms and conditions of use of the Boda Guy application(s) or other Boda Guy systems and must be applied with due consideration and compliance with Uganda’s Data Protection and Privacy Act (2019). {/* [cite: 6] */}
              </p>
               <p className="text-gray-700 mb-4">
                 This policy applies to the processing of personal data in manual and electronic records kept by Boda Guy. {/* [cite: 7] */} It also covers Boda Guy’s response to any data breach and other rights under the Data Protection and Privacy Act (2019), and it is also in line with Boda Guy's Information Security practices designed to guarantee the security of the information and establish measures and controls to ensure the confidentiality, integrity, availability, and privacy of the information. {/* [cite: 8] */}
              </p>
              <p className="text-gray-700 mb-2">
                “<span className="font-semibold">Personal data</span>” is information that relates to an identifiable person who can be directly or indirectly identified from that information, for example, a person’s name, identification number, location, online identifier. {/* [cite: 9] */}
              </p>
              <p className="text-gray-700 mb-2">
                “<span className="font-semibold">Special categories of personal data</span>” is data, which relates to the religious or philosophical beliefs, political opinion, sexual life, financial information, health status or medical records of an individual. {/* [cite: 10] */}
              </p>
              <p className="text-gray-700 mb-2">
                ‘<span className="font-semibold">Personal identifiable information</span>’ is information that can be used uniquely to identify you, such as your name, mailing address, email address, telephone numbers, national identification number (NIN) (for Riders), and payment details (mobile money number, card details). {/* [cite: 11] */} In order to provide you with service, we may require that you provide us with personal identifiable information. {/* [cite: 12] */}
              </p>
              <p className="text-gray-700 mb-4">
                “<span className="font-semibold">Data processing</span>” is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction. {/* [cite: 13] */}
              </p>
              <p className="text-gray-700 mb-4">
                Boda Guy makes a commitment to ensuring that personal data, including special categories of personal data (if applicable), is processed in compliance with the Data Protection and Privacy Act (2019) and all its employees conduct themselves in line with this, and other related policies. {/* [cite: 14] */} Where third parties process personal data on behalf of Boda Guy, Boda Guy will ensure that the third party takes such measures in order to maintain Boda Guy’s commitment to protecting personal data. {/* [cite: 15] */} In line with the Data Protection and Privacy Act (2019), Boda Guy understands that it will be accountable for the processing, management and storage and retention of all personal data held in the form of manual records and on information systems. {/* [cite: 16] */}
              </p>
              <p className="text-gray-700 mb-4">
                Please read this Privacy Policy carefully and ensure that you understand it. {/* [cite: 17] */} By using our Site and/or our application(s), you give your affirmative consent that you have read and accepted all the terms in this Privacy Policy. {/* [cite: 18] */} If you do not accept and agree with this Privacy Policy, you must stop using Our Site/application(s) immediately. {/* [cite: 19] */}
              </p>

            {/* Section 2: Definitions and Interpretation */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Definitions and Interpretation</h2> {/* [cite: 20] */}
            <p className="text-gray-700 mb-4">In this Policy the following terms shall have the following meanings:</p> {/* [cite: 20] */}
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
              <li><span className="font-semibold">“Account”</span> means an account required to access and/or use certain areas and features of Our Site or application(s);</li> {/* [cite: 20] */}
              <li><span className="font-semibold">“Cookie”</span> means a small text file placed on your computer or device by Our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site. {/* [cite: 21] */} Details of the Cookies used by Our Site are set out in Part 13, below; {/* [cite: 22] */}</li>
              <li><span className="font-semibold">“Rider”</span> means an independent Boda Boda rider operating as a two-wheel transportation provider for people or goods using the Boda Guy platform. {/* [cite: 23] */}</li>
              <li><span className="font-semibold">“Customer”</span> means a user requesting or receiving transportation or delivery services via the Boda Guy application(s). {/* [cite: 24] */}</li>
              <li><span className="font-semibold">“Business Partner”</span> means a business entity using the Boda Guy platform for logistics or delivery services. {/* [cite: 25] */}</li>
              <li><span className="font-semibold">“User”</span> means any individual using the Boda Guy platform, including Customers, Riders, and representatives of Business Partners. {/* [cite: 26] */}</li>
              <li><span className="font-semibold">“Site”</span> means our website www.bodaguy.com and/or the Boda Guy mobile applications downloadable from the App store or Google Play store. {/* [cite: 27] */}</li>
            </ul>

            {/* Section 3: Information About Us */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information About Us</h2> {/* [cite: 28] */}
            <p className="text-gray-700 mb-1">
              Our Site and application(s) are operated by Boda Guy and Lyanda Technologies Limited. {/* [cite: 28] */}
            </p>
            <p className="text-gray-700 mb-1">
              The registered address/Headquarters is: P O BOX 171254 Ntinda Kampala Uganda. {/* [cite: 29] */}
            </p>
            <p className="text-gray-700 mb-1">
              Boda Guy is the data controller for the Boda Guy Application(s) and website(s). {/* [cite: 30] */}
            </p>
            <p className="text-gray-700 mb-1">
              Data Protection Email address: <a href="mailto:bodaguyfreight@gmail.com" className="text-blue-600 underline">bodaguyfreight@gmail.com</a>. {/* [cite: 31] */}
            </p>
             <p className="text-gray-700 mb-4">
              Helpline Telephone number: <a href="tel:+256393102562" className="text-blue-600 underline">0393102562</a> {/* [cite: 31] */} / <a href="tel:+256784818527" className="text-blue-600 underline">+256784818527</a>. {/* [cite: 95] */}
            </p>

            {/* Section 4: What Does This Policy Cover? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. What Does This Policy Cover?</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy applies to your use of our Site and our mobile applications. {/* [cite: 32] */} Please note that we have no control over how your data is collected, stored, or used by other websites whose links may be provided on our website and we advise you to check the privacy policies of any such websites before providing any data to them. {/* [cite: 33] */}
            </p>

            {/* Section 5: What is Personal Data? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. What is Personal Data?</h2> {/* [cite: 34] */}
            <p className="text-gray-700 mb-4">
              Personal data is defined as any information relating to an identified or identifiable natural person. {/* [cite: 34] */} This includes information like your name, ID number, location data, contact details, etc.. {/* [cite: 35] */}
            </p>

            {/* Section 6: What Are Your Rights? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. What Are Your Rights?</h2>
            <p className="text-gray-700 mb-4">
              As a data subject under the Uganda Data Protection and Privacy Act (2019), you have the following rights, which we will always work to uphold: {/* [cite: 36] */}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
              <li>The right to be informed about our collection and use of your personal data. {/* [cite: 36] */} This Privacy Policy should tell you everything you need to know, but you can always contact us to find out more or to ask any questions using the details in Part 14. {/* [cite: 37] */}</li>
              <li>The right to access the personal data we hold about you. {/* [cite: 37] */} Part 12 will tell you how to do this. {/* [cite: 38] */}</li>
              <li>The right to have your personal data rectified if any of your personal data held by us is inaccurate or incomplete. {/* [cite: 38] */} Please contact us using the details in Part 14 to find out more. {/* [cite: 39] */}</li>
              <li>The right to be forgotten, i.e., the right to ask us to delete or otherwise dispose of any of your personal data that we hold, subject to legal or regulatory retention requirements. {/* [cite: 40] */} Please contact us using the details in Part 14 to find out more. {/* [cite: 41] */}</li>
              <li>The right to restrict (i.e., prevent) the processing of your personal data under certain circumstances. {/* [cite: 42] */}</li>
              <li>The right to object to us using your personal data for a particular purpose(s), such as direct marketing. {/* [cite: 43] */}</li>
              <li>The right to data portability. This means that, if you have provided personal data to us directly, we are using it with your consent or for the performance of a contract, and that data is processed using automated means, you can ask us for a copy of that personal data to re-use with another service or business in many cases. {/* [cite: 44] */}</li>
            </ul>
             <p className="text-gray-700 mb-4">
               For more information about our use of your personal data or exercising your rights as outlined above, please contact us using the details provided in Part 14. {/* [cite: 45] */} Further information about your rights can also be obtained from the Personal Data Protection Office of Uganda. {/* [cite: 45] */} If you have any cause for complaint about our use of your personal data, you have the right to lodge a complaint with the Personal Data Protection Office. {/* [cite: 46] */}
             </p>


            {/* Section 7: What Data Do We Collect? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. What Data Do We Collect?</h2> {/* [cite: 47] */}
            <p className="text-gray-700 mb-4">
              Depending upon your use of our Site and/or application(s), we may collect some or all of the following personal and non-personal data including but not limited to: {/* [cite: 47] */}
            </p>
            <div className="ml-4 mb-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">For All Users:</h3> {/* [cite: 47] */}
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                <li>Full names</li> {/* [cite: 47] */}
                <li>Email address</li> {/* [cite: 47] */}
                <li>Telephone number</li> {/* [cite: 47] */}
                <li>Location data (including real-time location during trips/deliveries, pickup/drop-off points)</li> {/* [cite: 47] */}
                <li>Payment information (Mobile Money details, masked card details via payment processors)</li> {/* [cite: 47] */}
                <li>Trip/Delivery History</li> {/* [cite: 47] */}
                <li>IP address</li> {/* [cite: 47] */}
                <li>Web browser type and version (if using web)</li> {/* [cite: 47] */}
                <li>Operating system and device information (for app users)</li> {/* [cite: 47] */}
                <li>Information about your preferences and interests (e.g., saved locations)</li> {/* [cite: 47] */}
                <li>Communications with customer support</li> {/* [cite: 47] */}
                <li>Ratings and feedback provided</li> {/* [cite: 47] */}
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">For Riders:</h3> {/* [cite: 47] */}
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                <li>Photo</li> {/* [cite: 47] */}
                <li>Date of birth</li> {/* [cite: 47] */}
                <li>Gender</li> {/* [cite: 47] */}
                <li>Address</li> {/* [cite: 47] */}
                <li>National Identification Number (NIN)</li> {/* [cite: 47] */}
                <li>Driving Permit details</li> {/* [cite: 47] */}
                <li>Vehicle type (Motorbike/Bicycle)</li> {/* [cite: 47] */}
                <li>Next of Kin details (if required for safety/emergency)</li> {/* [cite: 48] */}
                <li>Earnings data</li> {/* [cite: 48] */}
                <li>Availability status (Duty Mode)</li> {/* [cite: 48] */}
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">For Customers:</h3> {/* [cite: 48] */}
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                 <li>Package details for deliveries (weight, size, description - optional)</li> {/* [cite: 48] */}
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-2 mt-4">For Business Partners:</h3> {/* [cite: 48] */}
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                <li>Company details</li> {/* [cite: 48] */}
                <li>Contact person details</li> {/* [cite: 48] */}
                <li>Bulk order details</li> {/* [cite: 48] */}
                <li>Delivery performance metrics</li> {/* [cite: 48] */}
              </ul>
            </div>
            <p className="text-gray-700 mb-4">We use the information you give to, amongst other things:</p> {/* [cite: 48] */}
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
              <li>Identify you and manage your account</li> {/* [cite: 48] */}
              <li>Provide delivery services (and ride-hailing if applicable - *adjust based on current services*)</li> {/* [cite: 48] */}
              <li>Locate you and track deliveries in real-time</li> {/* [cite: 48] */}
              <li>Pair Customers with Riders using our dispatch system</li> {/* [cite: 48] */}
              <li>Process payments for services via integrated payment providers</li> {/* [cite: 48] */}
              <li>Optimize routes and provide navigation assistance</li> {/* [cite: 48] */}
              <li>Communicate with you (e.g., booking confirmations, status updates, support responses, marketing communications subject to opt-out)</li> {/* [cite: 48] */}
              <li>Calculate fares and provide estimates</li> {/* [cite: 48] */}
              <li>Enable features like trip history viewing, earnings dashboards, and support access</li> {/* [cite: 48] */}
              <li>Improve our services, including app features, safety measures, and route efficiency</li> {/* [cite: 49] */}
              <li>Conduct product research and development</li> {/* [cite: 49] */}
              <li>Provide measurements and analytics (often aggregated or anonymized)</li> {/* [cite: 49] */}
              <li>Ensure safety and security, including fraud detection</li> {/* [cite: 49] */}
              <li>Comply with legal and regulatory obligations (Know Your Customer/Due Diligence)</li> {/* [cite: 49] */}
            </ul>


            {/* Section 8: How Do We Use Your Personal Data? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. How Do We Use Your Personal Data?</h2>
            <p className="text-gray-700 mb-4">
             Further to clause 7, we use your data primarily for the necessary performance of the contract with you (i.e., providing the Boda Guy service you request). {/* [cite: 50] */} We also process data based on your consent (e.g., for optional features or marketing) or where it is in our legitimate business interests (e.g., improving the service, preventing fraud), always ensuring these interests do not override your rights. {/* [cite: 51] */} Your personal data may be used for the purposes detailed in Section 7 above, including: {/* [cite: 52] */}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
                <li>Providing and managing your Account;</li> {/* [cite: 52] */}
                <li>Providing and managing your access to Our Site and/or application(s);</li> {/* [cite: 53] */}
                <li>Personalising and tailoring your experience on Our Site and/or application(s);</li> {/* [cite: 53] */}
                <li>Supplying our services to you. Your personal details are required in order for us to enter into a contract with you.</li> {/* [cite: 54] */}
                <li>Personalising and tailoring our services for you.</li> {/* [cite: 55] */}
                <li>Communicating with you. This may include responding to emails or calls from you.</li> {/* [cite: 55] */}
                <li>Supplying you with information and marketing communications via email, SMS, push notification, or other means (you have the option to opt-out at any time).</li> {/* [cite: 56] */}
                <li>For purposes of “Know Your Customer” (KYC) or Customer Due Diligence as required by law, particularly for Riders and payment processing.</li> {/* [cite: 57] */}
            </ul>
            <p className="text-gray-700 mb-4">
                We may also use your personal data for marketing purposes, which may include contacting you by email, telephone, text message or any other means, with information, news, and offers on our services. {/* [cite: 58] */} You will not be sent any unlawful marketing or spam. {/* [cite: 59] */} We will always work to fully protect your rights and comply with our obligations under the law, and you will always have the opportunity to opt-out. {/* [cite: 60] */}
            </p>
             <p className="text-gray-700 mb-4">
               Third Parties whose content might appear on Our Site (if any) may use third-party Cookies, as detailed below in Part 13. Please refer to Part 13 for more information on controlling cookies. {/* [cite: 61] */} Please note that we do not control the activities of such third parties, nor the data that they collect and use themselves, and we advise you to check the privacy policies of any such third parties. {/* [cite: 62] */}
            </p>

             {/* Section 9: How Long Will You Keep My Personal Data? */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. How Long Will You Keep My Personal Data?</h2>
              <p className="text-gray-700 mb-4">
                We store data until it is no longer necessary to provide our services, fulfill the purposes outlined in this policy, or until your account is deleted - whichever comes first. {/* [cite: 63] */} This is a case-by-case determination that depends on things like the nature of the data, why it is collected and processed, and relevant legal, regulatory, or operational retention needs (e.g., financial transaction records, data needed for potential disputes). {/* [cite: 64] */} We retain data in accordance with Ugandan law and our internal data retention policies. {/* [cite: 65] */}
              </p>

             {/* Section 10: How and Where Do You Store or Transfer My Personal Data? */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. How and Where Do You Store or Transfer My Personal Data?</h2> {/* [cite: 66] */}
              <p className="text-gray-700 mb-4">
                We primarily store and process your personal data within Uganda or in jurisdictions with adequate data protection standards equivalent to those in Uganda. {/* [cite: 67] */} Boda Guy utilizes secure cloud infrastructure, primarily hosted by Amazon Web Services (AWS), which may involve data storage in global data centers. {/* [cite: 68] */} We ensure appropriate technical and organizational measures are in place to protect your data, including encryption and access controls. {/* [cite: 69] */}
              </p>
               <p className="text-gray-700 mb-4">
                 We will only store or transfer your personal data outside Uganda to countries that have adequate data protection standards/laws, where necessary for service provision (e.g., using global service providers), or where you have explicitly consented. {/* [cite: 70] */} We may, for necessary purposes like analytics, payment processing, mapping, cloud hosting, or communication services (as detailed in Sections 7 & 11), share your data with external third parties, which may be based outside Uganda. {/* [cite: 71] */} In any such transfer, we shall ensure data is transferred securely, using appropriate safeguards (like standard contractual clauses where applicable) and following legal requirements in Uganda. {/* [cite: 72] */}
              </p>
              <p className="text-gray-700 mb-4">
                 Data within Boda Guy systems is protected with reasonable security features. Databases (like PostgreSQL, Redis) access is confidential and protected. {/* [cite: 73] */}
               </p>

             {/* Section 11: Do You Share My Personal Data? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Do You Share My Personal Data?</h2>
            <p className="text-gray-700 mb-4">
              Boda Guy may need to share your personal data in the following circumstances: {/* [cite: 74] */}
            </p>
             <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
                 <li><span className="font-semibold">With other Users:</span> To facilitate deliveries, we share necessary information between Customers and Riders (e.g., names, pickup/dropoff locations, real-time location during delivery, contact information via masked call/chat). {/* [cite: 74] */}</li>
                 <li><span className="font-semibold">With Service Providers/Data Processors:</span> We may contract with third-party companies to perform services on our behalf. {/* [cite: 75] */} These may include: {/* [cite: 76] */}
                     <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                         <li>Payment processors (e.g., MTN MoMo, Airtel Money, Flutterwave)</li> {/* [cite: 76] */}
                         <li>Cloud hosting providers (e.g., AWS, Render, Supabase)</li> {/* [cite: 76] */}
                         <li>Mapping and navigation providers (e.g., Google Maps API, OpenStreetMap, Mpabox)</li> {/* [cite: 76] */}
                         <li>Communication services (for SMS, push notifications, emails - e.g., Africastalking, Firebase Cloud Messaging, or similar providers)</li> {/* [cite: 76] */}
                         <li>Analytics and monitoring tools (e.g., potentially Google Analytics, Firebase Analytics, Grafana, ELK Stack, Prometheus, or similar)</li> {/* [cite: 76] */}
                         <li>Customer support tools/platforms</li> {/* [cite: 76] */}
                         <li>Identity verification services (for NIN/phone verification - provider Laboremus, Okta, Persona)</li> {/* [cite: 76] */}
                     </ul>
                     These parties may require access to some or all of your personal data only to perform the tasks we delegate to them. {/* [cite: 76] */} We take steps to ensure that your personal data is handled safely, securely, and in accordance with your rights, our obligations, and the third party’s obligations under the law. {/* [cite: 77] */} You are advised to review the privacy policies of key processors like: {/* [cite: 78] */}
                     {/* NOTE: Actual links should be added here */}
                     <ul className="list-none ml-4 mt-1 space-y-1 text-blue-600 underline">
                       <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy & Terms</a></li> {/* [cite: 78] */}
                       <li><a href="https://aws.amazon.com/privacy/" target="_blank" rel="noopener noreferrer">AWS Privacy</a></li> {/* [cite: 78] */}
                       <li><a href="https://www.mapbox.com/legal/privacy" target="_blank" rel="noopener noreferrer">Mapbox privacy policy</a></li> {/* [cite: 78] */}
                       <li><a href="https://www.mtn.co.ug/privacy-policy/" target="_blank" rel="noopener noreferrer">MTN privacy policy</a></li> {/* [cite: 78] */}
                       <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy and Security</a></li> {/* [cite: 78] */}
                       <li><a href="https://withpersona.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Persona Privacy Notices</a></li> {/* [cite: 78] */}
                       <li><a href="https://www.okta.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Okta Privacy Policy</a></li> {/* [cite: 78] */}
                       <li><a href="https://www.airtel.co.ug/privacy_policy" target="_blank" rel="noopener noreferrer">Airtel privacy policy</a></li> {/* [cite: 78] */}
                    </ul>
                 </li>
                  <li><span className="font-semibold">With Lyanda Technologies Limited Companies:</span> We may share data within our corporate group (subsidiaries, holding company) for operational purposes. {/* [cite: 78] */}</li>
                  <li><span className="font-semibold">For Legal Reasons or in Case of Disputes:</span> We may share information if required by law, regulation, legal process, or governmental request, or if necessary for safety, security, enforcing our terms, or protecting the rights or property of Boda Guy or others. {/* [cite: 79] */}</li>
                  <li><span className="font-semibold">In Connection with a Sale or Merger:</span> If Boda Guy undergoes a merger, acquisition, or asset sale, your data may be transferred as part of that transaction, subject to confidentiality agreements. {/* [cite: 80] */}</li>
            </ul>
            <p className="text-gray-700 mb-4">
              By using the Boda Guy Site/application(s), You (the User) give to Us (Boda Guy) your consent to collect, use, and process your data for the purposes and in the manner indicated herein and in the applicable terms of use. {/* [cite: 81] */}
            </p>

            {/* Section 12: How Can I Control My Personal Data? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. How Can I Control My Personal Data?</h2> {/* [cite: 82] */}
            <p className="text-gray-700 mb-4">
              We provide you with the ability to access, rectify, port and request erasure of your data through your account settings or by contacting support. {/* [cite: 82] */} Features within the app allow you to: {/* [cite: 83] */}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-1">
              <li>View and edit your profile information (subject to verification requirements).</li> {/* [cite: 83] */}
              <li>View your trip/delivery history.</li> {/* [cite: 83] */}
              <li>Manage payment methods.</li> {/* [cite: 84] */}
              <li>Control notification preferences.</li> {/* [cite: 84] */}
            </ul>
             <p className="text-gray-700 mb-4">
               To exercise rights not directly available through the app (like data portability or erasure requests), please contact us using the details in Part 14. {/* [cite: 84] */}
            </p>

            {/* Section 13: How Can I Access My Personal Data? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. How Can I Access My Personal Data?</h2>
            <p className="text-gray-700 mb-4">
               If you want to know what personal data we have about you, you can ask us for details of that personal data and for a copy of it (where any such personal data is held). {/* [cite: 85] */} This is known as a “subject access request”. {/* [cite: 86] */} All subject access requests should be made in writing and sent to the email address shown in Part 14. We will respond to your subject access request within the timelines provided under Ugandan law (typically one month). {/* [cite: 86] */} Normally, we aim to provide a complete response, including a copy of your personal data within that time. {/* [cite: 87] */} In some cases, however, particularly if your request is more complex, more time may be required, up to a further two months as permitted by law. {/* [cite: 88] */} We will keep you informed of our progress. {/* [cite: 89] */}
            </p>

            {/* Section 14: How Do You Use Cookies? */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. How Do You Use Cookies?</h2> {/* [cite: 90] */}
             <p className="text-gray-700 mb-4">
               Our Site and application(s) may place and access certain first-party Cookies and potentially use third-party Cookies (e.g., for analytics, performance). {/* [cite: 90] */} First-party Cookies are those placed directly by us and are used only by us. {/* [cite: 91] */} We use Cookies to facilitate and improve your experience of our Site/app and to provide and improve our services. {/* [cite: 92] */} We have carefully chosen these Cookies and have taken steps to ensure that your privacy and personal data is protected and respected at all times. {/* [cite: 93] */} Please see our separate{" "}
               <a href="/cookie-policy" className="text-blue-600 underline"> {/* Placeholder link */}
                  Cookie Policy
               </a>{" "}
               here: [Link to Boda Guy Cookie Policy - TO BE ADDED] for detailed information on the cookies we use, why we use them, and how you can manage them. {/* [cite: 94] */}
            </p>

            {/* Section 15: How Do I Contact You? */}
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. How Do I Contact You?</h2> {/* [cite: 95] */}
             <p className="text-gray-700 mb-4">
               If you have any questions about this policy, your personal data, or wish to exercise your rights, you can contact us as described below: {/* [cite: 95] */}
             </p>
              <ul className="list-none text-gray-700 mb-4 ml-4 space-y-1">
                 <li>Email: <a href="mailto:bodaguyfreight@gmail.com" className="text-blue-600 underline">bodaguyfreight@gmail.com</a></li> {/* [cite: 95] */}
                 <li>Telephone: <a href="tel:+256393102562" className="text-blue-600 underline">+256393102562</a> / <a href="tel:+256784818527" className="text-blue-600 underline">+256784818527</a></li> {/* [cite: 95] */}
                 <li>Postal Address / Headquarters: P O BOX 171254 Ntinda Kampala Uganda</li> {/* [cite: 95] */}
                 <li>Website: <a href="http://www.bodaguy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.bodaguy.com</a></li> {/* [cite: 95] */}
             </ul>

             {/* Section 16: Changes to this Privacy Policy */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">16. Changes to this Privacy Policy</h2>
             <p className="text-gray-700 mb-4">
               We may change this Privacy Policy from time to time. {/* [cite: 95] */} This may be necessary, for example, if the law changes, or if we change our business in a way that affects personal data protection (e.g., introducing new features or services). {/* [cite: 96] */} Any changes will be immediately posted on our Site and/or application(s), and you will be notified of significant changes where required by law or regulation. {/* [cite: 97] */} Your continued use of our Site and/or application(s) after changes have been posted will constitute your acceptance of the revised policy. {/* [cite: 98] */} We recommend that you check this page regularly to keep up-to-date. {/* [cite: 99] */}
            </p>

            {/* Ensure Last Updated Section is at the very end */}
            <div className="mt-12 pt-8 border-t border-gray-300 text-gray-600 text-sm">
              <p>Last Updated on {lastUpdated}</p> {/* [cite: 4] */}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default Privacy;