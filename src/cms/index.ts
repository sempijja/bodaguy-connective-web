
import { BlogPost } from '@/types/blog';
import { NewsItem } from '@/types/news';

// CMS entry point that would be replaced by actual CMS integration
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  return blogPosts;
};

export const fetchNewsItems = async (): Promise<NewsItem[]> => {
  return newsItems;
};

export const fetchBlogCategories = async (): Promise<string[]> => {
  return ['All', 'Business', 'Product', 'Driver Tips', 'Industry', 'Technology'];
};

export const fetchNewsCategories = async (): Promise<string[]> => {
  return ['All', 'Press Releases', 'Company News', 'Product Updates', 'Events'];
};

// This data would be managed through DeliverJS CMS
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How On-Demand Delivery is Reshaping Local Businesses in Uganda',
    excerpt: 'The rise of on-demand delivery services has transformed how local businesses in Kampala and across Uganda connect with customers. Learn how small businesses are adapting to this new reality and thriving.',
    date: '2025-02-10',
    readTime: '5 min',
    image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/z_1.5/v1234567890/Urban_Cycling_Serenity_twgyzy',
    category: 'Business',
    author: {
      name: 'Luwaga Meshack',
      avatar: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/g_face,z_1.0/v1234567890/meshack-lyanda_ejufmb',
    },
    content: `
      <p>The landscape of local businesses in Uganda is undergoing a profound transformation, driven by the increasing adoption of on-demand delivery services. From bustling markets in Kampala to small shops in regional towns, business owners are discovering new ways to reach customers and expand their reach.</p>  <br>
      
      <h2>The Digital Transformation</h2> <br>
      <p>Traditionally, Ugandan businesses relied heavily on walk-in customers and word-of-mouth marketing. However, with smartphone penetration increasing across the country, consumers are increasingly looking for convenience in how they access products and services.</p>
      
      <p>On-demand delivery platforms like Boda Guy are bridging the gap between traditional businesses and digital-savvy consumers, creating a new ecosystem that benefits both parties.</p>
       <br>
      <h2>Impact on Small Businesses</h2> <br>
      <p>For small business owners in Uganda, partnering with delivery services has opened up new markets and revenue streams. Local restaurants, grocery stores, and specialty shops that previously served only their immediate neighborhoods can now reach customers across entire cities.</p>
      <br>
      <blockquote>
        "Before we started using Bodaguy, our customer base was limited to people who lived or worked within walking distance. Now we're delivering our products across Kampala and even to neighboring areas." - Sarah Namukasa, Owner of Taste of Uganda Restaurant
      </blockquote>
      <br>
      <h2>Adapting to Change</h2> <br>
      <p>The transition hasn't been without challenges. Many business owners have had to adapt their operations, products, and packaging to ensure they're suitable for delivery. Some have created special menus or products designed specifically for delivery customers.</p>
      
      <p>Despite these challenges, the benefits have been substantial. Businesses report increased sales, wider customer reach, and valuable data insights that help them optimize their offerings.</p>
      <br>
      <h2>Looking Forward</h2> <br>
      <p>As internet connectivity and smartphone usage continue to grow in Uganda, the on-demand delivery sector is expected to expand further. Forward-thinking business owners are already exploring how to make the most of this trend, from creating delivery-exclusive products to developing loyalty programs specifically for delivery customers.</p>
      
      <p>The future of local business in Uganda is increasingly digital, and on-demand delivery is at the forefront of this transformation.</p>
    `
  },
  {
    id: '2',
    title: '10 Tips for Maximizing Your Earnings as a Boda Guy Driver in Kampala',
    excerpt: 'Discover insider strategies for increasing your earnings, managing your time efficiently, and providing excellent service as a delivery driver on the Bodaguy platform in Uganda\'s capital.',
    date: '2025-02-25',
    readTime: '7 min',
    image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/z_1.5/v1234567890/30shots_so_gqcfqs',
    category: 'Driver Tips',
    author: {
      name: 'Ssempijja Charles',
      avatar: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/v1234567890/ssempijja-lyanda_kkqv3l'
    },
    content: `
      <p>Working as a delivery driver in Kampala offers flexibility and earning potential, but navigating the busy streets and maximizing your income requires strategy. Here are ten proven tips to help you succeed on the Bodaguy platform.</p>
      <br>
      <h2>1. Learn the City's Rhythm</h2> <br>
      <p>Kampala has distinct traffic patterns that vary by time and day. Understanding these patterns can help you avoid congestion and complete more deliveries. Generally, early mornings (before 7 AM) and late evenings (after 8 PM) offer faster travel times around the city.</p>
      <br>
      <h2>2. Focus on High-Demand Areas</h2>
      <p>Areas like Nakasero, Kololo, and Bugolobi often have higher order volumes, especially during lunch and dinner hours. Position yourself near these areas during peak times to increase your chances of getting delivery requests.</p>
      <br>
      <h2>3. Maintain Your Vehicle</h2>
      <p>Whether you're using a boda boda (motorcycle) or car, regular maintenance is essential. A well-maintained vehicle is less likely to break down and will use fuel more efficiently, directly impacting your bottom line.</p>
      <br>
      <h2>4. Use Multiple Apps</h2>
      <p>During slower periods, consider running multiple delivery apps to maximize your earning potential. Just be careful not to overcommit and ensure you can fulfill all orders promptly.</p>
      <br>
      <h2>5. Track Your Expenses</h2>
      <p>Keep detailed records of fuel, maintenance, and other expenses. This not only helps you understand your actual earnings but is also essential for tax purposes.</p>
      <br>
      <h2>6. Build Relationships with Restaurants</h2>
      <p>Becoming familiar with staff at popular restaurants can lead to smoother pickups and sometimes even priority service, allowing you to complete deliveries faster.</p>
      <br>
      <h2>7. Provide Excellent Customer Service</h2>
      <p>Positive ratings and reviews can lead to more orders and higher tips. Always be polite, communicate clearly about any delays, and ensure food is properly handled.</p>
      <br>
      <h2>8. Know Alternative Routes</h2>
      <p>Kampala's traffic can be unpredictable. Familiarize yourself with alternative routes so you can adapt quickly when main roads are congested.</p>
      <br>
      <h2>9. Stay Safe</h2>
      <p>Your safety should always be your top priority. Wear appropriate safety gear when on a motorcycle, be cautious in unfamiliar areas, and don't risk your safety for a delivery.</p>
      <br>
      <h2>10. Take Advantage of Promotions</h2>
      <p>Bodaguy regularly offers bonuses and incentives for drivers. Stay informed about these opportunities and adjust your schedule to qualify for these additional earnings.</p>
      <br>
      <p>By implementing these strategies consistently, you can significantly increase your earnings while providing valuable service to customers across Kampala.</p>
    `
  },
  {
    id: '3',
    title: 'The Evolution of Last-Mile Delivery Technology in East Africa',
    excerpt: 'From manual routing to AI-powered delivery networks, explore how technology has revolutionized last-mile delivery in Uganda and East Africa, and what innovations are on the horizon.',
    date: '2024-12-12',
    readTime: '6 min',
    image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/z_1.5/v1234567890/pexels-artempodrez-8989331_u5y5o1',
    category: 'Technology',
    author: {
      name: 'Luwaga Meshack',
      avatar: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/g_face,z_1.0/v1234567890/meshack-lyanda_ejufmb'
    },
    content: `
      <p>The delivery landscape in East Africa has undergone remarkable evolution in recent years, with Uganda at the forefront of adopting innovative last-mile delivery solutions. This transformation has been driven by unique local challenges and opportunities.</p>
      <br>
      <h2>From Manual to Digital</h2>
      <p>Just a decade ago, delivery logistics in Uganda were largely manual processes. Customers would call businesses directly, and deliveries were tracked on paper, if at all. The advent of smartphone technology and affordable data has completely transformed this landscape.</p>
      <br>
      <h2>The Rise of Mapping Technologies</h2>
      <p>One of the greatest challenges for delivery services in Uganda has been addressing. Unlike Western countries with standardized address systems, locations in many parts of Uganda are often described using landmarks and directions rather than street addresses.</p>
      <br>
      <p>Innovative mapping technologies have emerged to solve this problem. Companies have developed systems that combine GPS coordinates with local knowledge to create accurate delivery points, even in areas without formal addressing.</p>
      <br>
      <h2>AI and Machine Learning Applications</h2>
      <p>The latest advancement in the sector is the integration of artificial intelligence and machine learning. These technologies are being used to:</p>
      <br>
      <ul>
        <li>Predict delivery times more accurately, accounting for traffic patterns unique to Ugandan cities</li>
        <li>Optimize routing to reduce fuel consumption and delivery times</li>
        <li>Match orders with the most suitable drivers based on location, vehicle type, and delivery history</li>
        <li>Forecast demand to ensure adequate driver coverage in different areas</li>
      </ul>
      <br>
      <h2>Mobile Payments Integration</h2>
      <p>The integration with mobile money platforms like MTN Mobile Money and Airtel Money has been a game-changer for delivery services in Uganda. This integration allows for seamless, cashless transactions that improve security and convenience for both customers and delivery personnel.</p>
      <br>
      <h2>Challenges and Solutions</h2>
      <p>Despite technological advances, last-mile delivery in Uganda still faces challenges such as inconsistent internet connectivity, especially in rural areas, and varied road conditions that can impact delivery reliability.</p>
      <br>
      <p>Companies are addressing these challenges through innovations like offline mode capabilities in delivery apps and adaptive routing algorithms that consider road quality and seasonal factors.</p>
      <br>
      <h2>The Future</h2>
      <p>Looking ahead, we can expect to see further innovations such as:</p>
      <br>
      <ul>
        <li>Integration of drones for deliveries to hard-to-reach areas</li>
        <li>Enhanced predictive analytics to further optimize delivery networks</li>
        <li>Greater collaboration between different logistics providers to create more efficient delivery ecosystems</li>
        <li>Sustainable delivery options that reduce environmental impact</li>
      </ul>
      <br>
      <p>As technology continues to evolve, the last-mile delivery sector in Uganda and wider East Africa will likely continue to develop unique solutions tailored to local needs and infrastructure.</p>
    `
  }
];

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Building Boda Guy: Engineering a Scalable Ride-Hailing and Delivery Platform',
    excerpt: 'A deep dive into the technology and engineering decisions behind Boda Guy, Uganda’s newest ride-hailing and delivery platform, and how we built a seamless experience for riders and customers alike.',
    date: '2025-01-15',
    image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/g_face/v1234567890/pexels-divinetechygirl-1181244_yuyhvp',
    category: 'Engineering',
    content: `
      <p><strong>KAMPALA, UGANDA</strong> - As we gear up for the official launch of Boda Guy, we want to take a moment to reflect on the engineering and technical choices that went into building a robust, scalable, and user-friendly platform. Boda Guy is more than just another ride-hailing app; it’s a full-fledged ecosystem designed to optimize transportation and delivery services across Uganda.</p>
      <br>
      <h3>Our Core Technology Stack</h3>
      <p>From the outset, we focused on scalability, performance, and ease of use. Our backend is built on <strong>Node.js</strong> with a microservices architecture, leveraging <strong>PostgreSQL</strong> for structured data and <strong>Redis</strong> for caching frequently accessed queries. The frontend is powered by <strong>React Native</strong>, allowing us to deliver a seamless experience across both iOS and Android. We also use <strong>GraphQL</strong> to streamline API queries, improving efficiency for both frontend and backend interactions.</p>
      <br>
      <h3>Solving the Challenge of Real-Time Routing and Tracking</h3>
      <p>One of the biggest engineering challenges we faced was optimizing real-time routes for both ride-hailing and deliveries. Uganda’s road infrastructure is constantly changing, with congestion, roadworks, and unmarked paths making navigation difficult. To solve this, we integrated <strong>Google Maps API</strong> and <strong>OpenStreetMap</strong>, layering them with custom machine-learning models that predict traffic flow based on historical data.</p>
      <p>For real-time tracking, we implemented <strong>WebSockets</strong> and <strong>MQTT</strong>, ensuring minimal latency when updating riders and customers about their trip status. Our dynamic traffic analysis system also recalculates the best routes mid-trip, helping drivers avoid unnecessary delays.</p>
      <br>
      <h3>Seamless Payment Integration and Wallet System</h3>
      <p>Payment is a crucial component of the Boda Guy experience. We integrated mobile money services like <strong>MTN MoMo</strong> and <strong>Airtel Money</strong> to make transactions accessible to all. Additionally, we support traditional card payments through <strong>Flutterwave</strong>. To enhance convenience, we introduced an in-app wallet that allows users to preload funds, reducing transaction friction for frequent riders.</p>
      <p>For security, our payment systems are PCI-DSS compliant, using tokenization to prevent fraud and unauthorized transactions. We also built an automated refund system, allowing customers to get instant credits in case of cancellations.</p>
      <br>
      <h3>Battery Booking and IoT Integration</h3>
      <p>Since Boda Guy is heavily invested in electric bikes, we needed a system to manage battery swapping efficiently. We built a <strong>Battery Booking</strong> system that lets riders reserve batteries at charging stations in advance. This system integrates IoT sensors within each station to provide real-time updates on battery availability.</p>
      <p>To extend battery life and reduce downtime, we developed an AI-driven predictive maintenance system that analyzes battery performance and suggests optimal charging cycles. This ensures that riders always get a fully charged and well-maintained battery whenever they need it.</p>
      <br>
      <h3>Ensuring Scalability and High Availability</h3>
      <p>With an anticipated surge in demand, we designed Boda Guy’s backend for high scalability. Our cloud infrastructure is built on <strong>AWS</strong>, utilizing auto-scaling groups to handle traffic spikes. Kubernetes orchestrates our microservices, while <strong>NGINX</strong> serves as our load balancer.</p>
      <p>For monitoring and troubleshooting, we use <strong>Prometheus</strong> and <strong>Grafana</strong>, giving us real-time visibility into system health. In case of failures, our distributed logging system (ELK stack: Elasticsearch, Logstash, Kibana) helps us quickly diagnose and resolve issues.</p>
      <br>
      <h3>Security and User Privacy</h3>
      <p>Security is a top priority at Boda Guy. We implemented OAuth 2.0 authentication, role-based access control (RBAC) for different user types, and AES encryption for sensitive data storage. Additionally, we comply with Uganda’s Data Protection Act to safeguard user information.</p>
      <p>To prevent fraud, our AI-based fraud detection system monitors transaction patterns and flags suspicious activities. We also conduct regular penetration testing to identify vulnerabilities and patch them proactively.</p>
      <br>
      <h3>Optimizing the Driver and Rider Experience</h3>
      <p>Ensuring a smooth experience for both drivers and riders was a priority. Our driver app includes earnings insights, real-time trip recommendations, and GPS-based analytics to maximize earnings. On the rider side, we introduced an AI-powered fare estimation tool that provides cost predictions based on demand, traffic, and route complexity.</p>
      <p>We also built an in-app customer support system that connects users directly to agents via chat or call, ensuring that any issues are resolved swiftly.</p>
      <br>
      <h3>Leveraging AI for Smart Decision-Making</h3>
      <p>Machine learning plays a vital role in Boda Guy’s operations. We use AI models for:</p>
      <ul>
        <li><strong>Smart fare estimation:</strong> Adjusting ride prices dynamically based on demand and distance.</li>
        <li><strong>Fraud detection:</strong> Identifying suspicious activities and preventing unauthorized transactions.</li>
        <li><strong>Personalized recommendations:</strong> Suggesting rides, routes, and promotions based on user behavior.</li>
        <li><strong>Driver matching:</strong> Predicting the best driver for a trip based on location, experience, and traffic conditions.</li>
      </ul>
      <p>By constantly refining these models, we ensure that Boda Guy remains efficient and responsive to user needs.</p>
      <br>
      <h3>What’s Next for Boda Guy?</h3>
      <p>With our upcoming launch in Kampala, our focus will shift to expanding across Uganda. In the next 12 months, we aim to:</p>
      <ul>
        <li>Expand operations to 10 additional cities.</li>
        <li>Enhance AI-driven route prediction to further optimize travel times.</li>
        <li>Introduce new safety features, such as real-time hazard detection for riders.</li>
        <li>Launch a corporate package for businesses that need regular deliveries.</li>
        <li>Partner with local merchants for last-mile e-commerce logistics.</li>
      </ul>
      <p>We are also working on integrating electric vehicle incentives, providing riders with benefits for using eco-friendly transportation.</p>
      <br>
      <p>Stay tuned as we continue refining and improving Boda Guy. We are excited to introduce Uganda to a smarter, more efficient way to ride and deliver goods.</p>
    `
  },
  {
    id: '2',
    title: 'Boda Guy Launches New Same-Day Delivery Service for Ugandan Businesses',
    excerpt: 'Business customers in Kampala can now offer same-day delivery to their customers through Bodaguy\'s expanded delivery network and optimized routing technology.',
    date: '2025-02-22',
    image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/z_0.4/v1234567890/Phone_with_Case_Mockup_gfzgxq',
    category: 'Product Updates',
    content: `
      <p><strong>KAMPALA, UGANDA</strong> - Boda Guy today announced the launch of its new same-day delivery service designed specifically for business customers in Kampala. The service enables local businesses to offer their customers reliable same-day delivery, helping them compete with larger e-commerce platforms.</p>
      <br>
      <p>The new offering, called "Boda Guy Business Express," leverages the company's extensive network of delivery partners and its proprietary routing technology to ensure efficient and timely deliveries even during Kampala's busy traffic hours.</p>
      <br>
      <p>"We've been listening carefully to the needs of Ugandan businesses," said Ssempijja Charles, Chief Product Officer at Bodaguy. "Time and again, we heard that reliable same-day delivery is essential for them to meet customer expectations. With Boda Guy Business Express, we're providing a solution that helps local businesses thrive in an increasingly competitive market."</p>
      <br>
      <p>Key features of the new service include:</p>
      <br>
      <ul>
        <li>Guaranteed same-day delivery for orders placed before 2:00 PM</li>
        <li>Real-time tracking for both businesses and their customers</li>
        <li>Customizable delivery windows to meet specific business needs</li>
        <li>Integration options for e-commerce platforms and point-of-sale systems</li>
        <li>Dedicated support team for business clients</li>
      </ul>
      <br>
      <p>Early adopters of the service have reported significant benefits. "Since implementing Bodaguy Business Express, we've seen a 40% increase in online orders," said Joseph Mugisha, owner of Kampala Crafts, a local artisanal products store. "Our customers love being able to receive their purchases the same day, and it's helped us win business from larger competitors."</p>
      <br>
      <p>The service is initially available throughout Kampala and its immediate suburbs, with plans to expand to additional Ugandan cities in the coming months. Pricing is based on distance and volume, with special rates available for businesses with regular delivery needs.</p>
      <br>
      <p>Interested businesses can learn more and sign up for the service at <a href="https://business.bodaguy.com">business.bodaguy.com</a>.</p>
    `
  },
  {
    id: '3',
    title: 'Bodaguy Partners with Major Retail Chain to Handle Last-Mile Delivery Across Uganda',
    excerpt: 'The partnership will allow the retail chain to offer faster delivery options to customers while leveraging Bodaguy\'s extensive network of delivery drivers throughout Uganda.',
    date: '2025-01-18',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    category: 'Company News',
    content: `
      <p><strong>KAMPALA, UGANDA</strong> - Bodaguy and SuperMart, one of Uganda's largest retail chains, today announced a strategic partnership that will revolutionize how SuperMart delivers products to customers across the country. Under the agreement, Bodaguy will become the exclusive last-mile delivery partner for SuperMart's online orders in all regions where both companies operate.</p>
      <br>
      <p>The partnership comes as e-commerce continues to grow rapidly in Uganda, with more consumers expecting fast and reliable delivery options. By leveraging Bodaguy's technology platform and extensive network of delivery partners, SuperMart aims to significantly improve delivery times and provide customers with a more transparent and efficient delivery experience.</p>
      <br>
      <p>"This collaboration represents an important step in our digital transformation journey," said Robert Kigongo, CEO of SuperMart. "Bodaguy's innovative approach to last-mile delivery aligns perfectly with our commitment to providing exceptional service to our customers. Together, we'll set a new standard for retail delivery in Uganda."</p>
      <br>
      <p>Through this partnership:</p>
      <br>
      <ul>
        <li>SuperMart customers will benefit from real-time tracking of their deliveries</li>
        <li>Delivery times are expected to improve by up to 40% in urban areas</li>
        <li>The service will eventually extend to all 20 cities where SuperMart operates</li>
        <li>Customers will have access to more flexible delivery windows, including same-day options</li>
      </ul>
      <br>
      <p>"We're thrilled to partner with SuperMart, a company that shares our commitment to innovation and customer satisfaction," said Emmanuel Okiror, CEO of Bodaguy. "This partnership demonstrates how traditional retail and technology companies can work together to create better experiences for Ugandan consumers."</p>
      <br>
      <p>The integrated delivery service will launch first in Kampala this month, followed by a phased rollout to other major cities including Entebbe, Jinja, and Mbarara. The companies expect to cover all SuperMart locations by the end of the year.</p>
      <br>
      <p>This partnership marks another significant milestone for Bodaguy, which has been expanding its business services division to complement its consumer-facing delivery platform.</p>
    `
  }
];
