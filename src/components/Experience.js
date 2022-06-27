import React from 'react'

function Experience() {
  return (
    <div id="experience" className="background-alt">
      <h2 className="heading">Experience</h2>
      <div id="experience-timeline">
        <div data-date="April 2022 – Present">
          <h3>Self-Employed</h3>
          <h4>Full-stack Developer</h4>
          <ul>
            <li>
              Improved eCommerce web app performance by +18% using ImageEngine
              for React
            </li>
            <li>
              Reduced response time 8.21s to fewer 3s and made real-time chats
              secure using SSL by NextJS
            </li>
            <li>
              Developed highly interactive web applications while integrating
              Restful APIs and external web services, ensuring high performance.
            </li>
            <li>
              Built 4 customized node.js modules integrated with social APIs and
              deployed projects on AWS
            </li>
          </ul>
        </div>

        <div data-date="August 2019 – April 2022">
          <h3>C&F</h3>
          <h4>Full-stack Developer</h4>
          <ul>
            <li>
              Implemented features for the main site and internal applications
              using React/Redux, NextJS, Node, and Django with RESTAPI.
            </li>
            <li>
              Improved and upgraded the development tooling and workflow for
              several projects(Node.js, Express).
            </li>
            <li>
              Integrated platforms with various cloud services and third-party
              APIs, including Amazon S3, PayPal, AWS Lambda, and Mongo Cluster.
            </li>
            <li>
              Built E-Commerce website using NextJS and Strapi and deployed it
              by DigitalOcean.
            </li>
            <li>
              Established reusable & responsive React chart components using
              D3.js that support interactive visualizations of data and
              analysis.
            </li>
            <li>
              Used Elastic search engine on AWS to speed up web page performance
              and React Hooks to prevent unnecessary re-renders.
            </li>
          </ul>
        </div>

        <div data-date="January 2016 – July 2019">
          <h3>ANGI</h3>
          <h4>Junior Web Developer</h4>
          <ul>
            <li>
              Created a survey engine supporting different types of questions
              and views.
            </li>
            <li>Introduced new media to the company’s production team.</li>
            <li>
              Supported the hosting and management of a client base of 300+
              websites.
            </li>
            <li>
              Created a web app MVP for a store delivery management platform
              with 200+ business customers to create, manage, and monitor
              deliveries using React and Redux.
            </li>
            <li>
              Added features to meditation app with 5,000+ monthly users,
              enabling audio and video uploads using Amazon S3 bucket.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience