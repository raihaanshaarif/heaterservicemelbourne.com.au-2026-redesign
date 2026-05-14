export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  authorImage: string;
  authorName: string;
  excerpt: string;
  content: string;
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "5 Signs Your Gas Ducted Heater Needs a Service",
    slug: "/blog/signs-gas-ducted-heater-needs-service",
    category: "Heating Tips",
    date: "April 10, 2026",
    image: "/assets/images/blog/blog-2-1.jpg",
    authorImage: "/assets/images/blog/blog-one-author-img-1.jpg",
    authorName: "Faisal Khan",
    excerpt:
      "Is your gas ducted heater not performing as expected? Here are five key warning signs that your system is due for a professional service before winter hits Melbourne.",
    content: `
      <p>Gas ducted heating is one of the most popular heating solutions across Melbourne homes, but like all mechanical systems, it requires regular maintenance to operate safely and efficiently. Ignoring early warning signs can lead to costly repairs or, worse, safety hazards.</p>

      <h3>1. Unusual Noises During Operation</h3>
      <p>If your heater is making banging, rattling, or whistling sounds, this could indicate a loose component, dirty burners, or a failing motor. Normal operation should be relatively quiet — any new or worsening noise is a signal to call a technician.</p>

      <h3>2. Uneven Heating Across Rooms</h3>
      <p>When some rooms feel warm while others remain cold, the issue may lie with blocked ducts, a failing thermostat, or poor airflow balance. A service inspection can diagnose and correct these distribution problems.</p>

      <h3>3. Rising Energy Bills</h3>
      <p>A sudden spike in your gas bill without a change in usage patterns often means your heater is working harder than it should. Dirty filters, worn heat exchangers, or calibration issues reduce efficiency and drive up costs.</p>

      <h3>4. Yellow or Orange Pilot Light</h3>
      <p>A healthy gas flame is blue. A yellow or orange flame indicates incomplete combustion, which can produce carbon monoxide — a colourless, odourless gas that is dangerous to your household. This requires immediate professional attention.</p>

      <h3>5. Heater Takes Longer to Warm Up</h3>
      <p>If your system is taking noticeably longer to reach your set temperature, it may be struggling due to a clogged filter, ageing components, or reduced gas pressure. Regular servicing keeps startup times consistent and reliable.</p>

      <p>Don't wait until your heater breaks down in the middle of a Melbourne winter. Book an annual service with our licensed technicians and stay warm all season long.</p>
    `,
  },
  {
    id: 2,
    title: "Hydronic Heating vs. Ducted Heating: Which Is Right for Your Home?",
    slug: "/blog/hydronic-vs-ducted-heating-melbourne",
    category: "Buyer's Guide",
    date: "May 2, 2026",
    image: "/assets/images/blog/blog-2-2.jpg",
    authorImage: "/assets/images/blog/blog-one-author-img-2.jpg",
     authorName: "Faisal Khan",
    excerpt:
      "Choosing between hydronic and ducted heating can be overwhelming. We break down the key differences in comfort, efficiency, cost, and installation to help Melbourne homeowners make the right decision.",
    content: `
      <p>When it comes to whole-home heating in Melbourne, two systems dominate the conversation: hydronic heating and gas ducted heating. Both are highly effective, but they suit different homes, lifestyles, and budgets. Here's a side-by-side breakdown to help you decide.</p>

      <h3>How Each System Works</h3>
      <p><strong>Hydronic heating</strong> circulates hot water through a network of pipes connected to panel radiators or in-floor coils. Heat radiates gently and evenly from surfaces throughout the room.</p>
      <p><strong>Gas ducted heating</strong> heats air via a central gas furnace and distributes it through ceiling or floor ducts into every room of the home.</p>

      <h3>Comfort & Air Quality</h3>
      <p>Hydronic systems are generally considered superior for comfort. Radiant heat warms objects and people directly without circulating dust, allergens, or dry air. This makes it an excellent choice for allergy sufferers or households with young children.</p>
      <p>Ducted systems heat rooms quickly but can reduce humidity and circulate dust if filters aren't maintained regularly.</p>

      <h3>Energy Efficiency</h3>
      <p>Hydronic systems are among the most energy-efficient heating options available, particularly when paired with a high-efficiency boiler or heat pump. Water retains heat better than air, reducing the energy needed to maintain temperature.</p>
      <p>Modern gas ducted systems with inverter technology and zoning controls have significantly improved in efficiency, but typically still consume more energy than hydronic equivalents.</p>

      <h3>Installation & Cost</h3>
      <p>Hydronic heating has a higher upfront installation cost, particularly in established homes where pipes must be retrofitted. However, long-term running costs are lower, and the system adds significant value to your property.</p>
      <p>Gas ducted heating is less expensive to install, especially in homes where ducting already exists. It's a popular choice for new builds and renovations on a tighter budget.</p>

      <h3>Our Recommendation</h3>
      <p>For new builds or complete renovations where cost is secondary to comfort and efficiency, hydronic heating is the premium choice. For existing homes needing a cost-effective upgrade, a zoned gas ducted system delivers outstanding value.</p>
      <p>Our team services and installs both systems across Melbourne. Contact us for a free consultation and quote tailored to your home.</p>
    `,
  },
];

export default blogData;
