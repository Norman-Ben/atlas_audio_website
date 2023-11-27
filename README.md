# Atlas Audio Website

**Client Testimonial:** “Ben is as personable as he is professional. He surpassed our expectations for our website build, despite the tight deadline we set. He ingeniously elevated our brand’s image in ways we hadn’t considered, while keeping us in the loop at every stage. We felt valued and involved in a process that was largely unfamiliar to us. Working with Ben was both a pleasure and a privilege. We won’t hesitate to collaborate with him in the future. We can’t recommend Ben enough.” - Atlas Audio

**Project Summary:** This project was a bespoke commission for Atlas Audio, a dynamic audio production company based in Bristol. The task was to completely revamp their old Wordpress website.

**Project Requirements:** The chief objectives for this project were to enhance SEO, reduce hosting expenses, boost performance, incorporate a contact form for client inquiries about services, and align the website’s style with their revamped brand image.

**Justification for Tech Stack:** Evaluating the project requirements, I concluded that NextJS would serve as the optimal frontend framework. Its SEO-friendly nature (over React), owing to its ability to generate HTML for each page, and a host of built-in features to improve site performance (such as lazy loading and Server Side Rendering) made it a fitting choice. Moreover, it enabled me to create a backend serverless function to handle form submissions, eliminating the need for a separate server.

For styling, I employed Tailwind, as it ensures consistent UI layout and spacing without compromising the customizability offered by pure CSS.

To manage form submission and emails, I leveraged a serverless NodeJS endpoint in NextJS, which uses the SendGrid API. This allowed me to send emails with the form content to the Atlas Audio team. This strategy helped me do away with the need for a separate backend server and wiped out hosting costs, as everything could be hosted using Vercel’s free tier.

**Project Outcome:** The project was a resounding success. I managed to cut Atlas’ hosting costs down to £0.00 and significantly elevate their website metrics from SEO: 46 -> 92, Performance: 51 -> 97, Accessibility: 64 -> 97, and Best Practices: 72 -> 100, as indicated by Lighthouse. Additionally, website traffic saw a spike of 24% over a 3-month period.
