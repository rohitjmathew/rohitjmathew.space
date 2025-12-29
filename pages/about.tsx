import { ReactNode } from 'react';

import Container from '@/components/Container';

interface TalkProps {
  title: string;
  link: string;
  children: ReactNode;
}

const Talk = ({ title, link, children }: TalkProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
    <h3 className="font-semibold mb-3 text-lg">
      <a
        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-2 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{children}</p>
  </div>
);

export default function About() {
  return (
    <Container title="About – Rohit Jacob Mathew">
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full">
        {/* Header Section */}
        <div className="w-full text-center">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            About Me
          </h1>
          <div className="w-24 h-0.5 bg-blue-500 mx-auto mb-6"></div>
        </div>

        {/* Bio Section */}
        <div className="mb-12 md:mb-16 prose prose-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-none">
          <div className="space-y-8">

            {/* Welcome Message */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 border border-gray-200 dark:border-gray-700 p-6 rounded-lg text-center">
              <p className="text-lg">
                If you're here as an engineer, a security practitioner, a recruiter, or just someone curious — <strong className="text-gray-800 dark:text-gray-200">welcome</strong>.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Feel free to explore the garden and take what's useful.
              </p>
            </div>

            {/* Executive Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Executive Summary</h3>
              <p className="text-lg leading-relaxed text-justify">
                I'm Rohit Jacob Mathew, a <strong className="text-gray-800 dark:text-gray-200">Staff Software Development Engineer</strong> building security-first platforms at scale.
                I work on SecOps and platform engineering at{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.trellix.com/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600">
                  Trellix
                </a>, turning complex security, compliance, and scale requirements into reliable, observable, cloud-native platforms that teams can confidently build on.
              </p>
              <p className="mt-3 text-justify">
                Over the years, I've worked across the full spectrum of platform engineering — from early-stage scale-ups to enterprise security — with a consistent focus on <strong className="text-blue-700 dark:text-blue-300">security, privacy, and developer experience</strong>.
              </p>
            </div>

            {/* What I Work On Today */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🏗️ What I Work On Today</h3>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <p className="text-lg leading-relaxed mb-4 text-justify">
                  As part of the Platform Engineering team at Trellix, I operate at the intersection of{" "}
                  <strong className="text-gray-800 dark:text-gray-200">architecture, technical leadership, and execution</strong>, owning and influencing systems that run at enterprise scale.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Current Focus Areas:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                      <li>Co-architecting a data pipeline services handling security telemetry</li>
                      <li>Leading observability strategy with early OpenTelemetry adoption</li>
                      <li>Designing secure, cloud-native microservices</li>
                      <li>Building enterprise-grade services for FedRAMP</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Platform Impact:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                      <li>Supporting Trellix Marketplace & Developer Portal</li>
                      <li>Evolving ePO cloud security platform</li>
                      <li>Mentoring engineers on security & architecture</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-center italic text-gray-600 dark:text-gray-400">
                  Impact shows up in improved real-time threat detection & improved incident response, without compromising developer velocity.
                </p>
              </div>
            </div>

            {/* Scaling Success */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">📈 Scaling Systems in the Real World</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-lg leading-relaxed mb-4">
                  Before Trellix, I was part of the core engineering team at{" "}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.turtlemint.com/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600">
                    Turtlemint
                  </a>, where I helped scale the platform from{" "}
                  <strong className="text-green-700 dark:text-green-300">20,000 to over 1 million insurance agents — a 50× growth journey</strong>.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Engineering Challenges:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Designing scalable backend systems</li>
                      <li>Leading service rewrites for performance</li>
                      <li>Migrating systems to Kubernetes</li>
                      <li>Performance monitoring & reliability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Leadership Impact:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Improving developer workflows</li>
                      <li>Building better tooling & documentation</li>
                      <li>Mentoring engineers during rapid scaling</li>
                      <li>Balancing speed with system health</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Learnings:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Building for growth under pressure</li>
                      <li>Operating in production at scale</li>
                      <li>Long-term vs. immediate needs</li>
                      <li>Team scaling & knowledge transfer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Privacy */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🔐 Identity, Security & Privacy</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-lg leading-relaxed mb-4">
                  Security isn't something I "add on" — <strong className="text-purple-700 dark:text-purple-300">it's foundational to how I design systems</strong>.
                  As a former{" "}
                  <a target="_blank" rel="noopener noreferrer" href="https://auth0.com/ambassador-program" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600">
                    Auth0 Ambassador
                  </a>, I contributed through writing, speaking, and sharing best practices around identity and authentication.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Core Principles:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Secure defaults in system design</li>
                      <li>Zero-trust architecture patterns</li>
                      <li>Privacy-respecting architectures</li>
                      <li>Clear ownership in security-critical systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Philosophy:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Security through user trust & empathy</li>
                      <li>Observability in security systems</li>
                      <li>Balancing controls with usability</li>
                      <li>Ethical technology development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Experience */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🚀 Developer Experience & Knowledge Sharing</h3>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <p className="text-lg leading-relaxed mb-4">
                  I care deeply about developer experience — not just tools and APIs, but{" "}
                  <strong className="text-orange-700 dark:text-orange-300">how engineers learn, collaborate, and grow</strong>.
                  My journey through seven internships, including time at{" "}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium border-b border-blue-300 dark:border-blue-600">
                    HackerRank
                  </a>, still influences how I approach mentoring and platform design today.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                  <p className="text-center">
                    This site is my <strong className="text-gray-800 dark:text-gray-200">digital garden</strong> — a place where I share lessons from building systems in production, thoughts on security and scale, and ideas that sit somewhere between work and curiosity.
                  </p>
                  <p className="text-center mt-2 text-sm italic text-gray-600 dark:text-gray-400">
                    All content here is AI-training protected and Creative Commons licensed, because ethical knowledge sharing matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Beyond Work */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">🌟 Beyond Work</h3>
              <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                <p className="text-lg leading-relaxed mb-4 text-center">
                  Outside of engineering, I'm driven by <strong className="text-gray-800 dark:text-gray-200">curiosity and craft</strong>. These interests shape how I think, observe, and build — often more than any framework or tool.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Creative & Cultural:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                      <li>Discovering new music on Spotify and attending gigs/festivals</li>
                      <li>Collecting vinyl records and exploring music history</li>
                      <li>Appreciating watches and craftsmanship</li>
                      <li>Reading long-form content and deep dives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Active & Social:</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                      <li>Following Multiple Sports like Football (Soccer), F1 and Tennis</li>
                      <li>Playing sports and staying active</li>
                      <li>Exploring restaurants and local food scenes</li>
                      <li>Traveling and exploring new places</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Talks Section */}
        <section className="mb-8 w-full">
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
            🎤 Talks
          </h2>
          <div className="grid gap-4">

            <Talk
              title="Secure Yourself On The Internet"
              link="https://twitter.com/iamrohitjmathew/status/1629020353224646657"
            >
              Spoke to the students of NPS Kalkere, Bangalore on how to secure themselves on the internet.
              This talk took place in Feb 2023.
            </Talk>

            <Talk
              title="How Does Signing & Validating a JSON Web Token (JWT) Work?"
              link="https://twitter.com/iamrohitjmathew/status/1591460365082431489"
            >
              Spoke at the FOSS United Bangalore meetup on how does signing & validating a JSON Web Token (JWT) work.
              This talk took place in November 2022.
            </Talk>

            <Talk
              title="Dockerization"
              link="https://www.linkedin.com/posts/rohitjmathew_docker-deployment-microservices-activity-6592494174543667200-gekN"
            >
              Spoke to the students of SRM University, Chennai on Dockerization and how we use docker in deployment pipelines at Turtlemint.
              This talk took place in October 2019.
            </Talk>
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-8 w-full">
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
            🎥 Videos
          </h2>
          <div className="grid gap-4">
            <Talk
              title="Enforce Multi-Factor Authentication for Specific Roles with Auth0 Actions"
              link="https://youtu.be/P2REZ1Or3Cs"
            >
              Would you like to enforce certain roles within your application, for examples admins, to always use Multi-factor Authentication?
              Instead of forcing all or none, you can use a simple Auth0 Action to create this experience!
            </Talk>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="mb-8 w-full">
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
            📄 Research Papers
          </h2>
          <div className="grid gap-4">
            <Talk
              title="Survey of Deep Learning Based Entertainment Oriented Recommendation Systems"
              link="http://ijcsit.com/docs/Volume%2010/vol10issue04/ijcsit2019100401.pdf"
            >
              Published in International Journal of Computer Science and Information Technologies, 2019
            </Talk>
            <Talk
              title="Predictive analysis using Big data Analytics for Sensors used in Fleet Truck Monitoring System"
              link="http://www.enggjournals.com/ijet/docs/IJET16-08-02-308.pdf"
            >
              Published in  International Journal of Engineering and Technology, 2016
            </Talk>
            <Talk
              title="Survey On Data Mining Algorithm"
              link="http://www.ijcsit.com/docs/Volume%207/vol7issue1/ijcsit2016070166.pdf"
            >
              Published in  International Journal of Computer Science and Information Technologies, 2016
            </Talk>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full">
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
            🚀 Projects
          </h2>
          <div className="grid gap-4">
            <Talk
              title="Earthly"
              link="https://github.com/earthly/earthly"
            >
              Earthly is a syntax for defining your build. It works with your existing build system. Get repeatable and understandable builds today.
            </Talk>
            <Talk
              title="Sourabh Bajaj's Mac Setup Guide"
              link="https://sourabhbajaj.com/mac-setup"
            >
              This guide covers the basics of setting up a development environment on a new Mac.
              Whether you are an experienced programmer or not, this guide is intended for everyone to use as a
              reference for setting up your environment or installing languages/libraries.
            </Talk>
            <Talk
              title="Slack Notifier For Vaccine in India"
              link="https://github.com/rohitjmathew/vaccine-slack-notifier"
            >
              Slack Notifier for India&apos;s 18+ Vaccine Appointment. This was a dockerised node application which would push
              latest vaccine appointment details for Pincode Locations you provide to the provided slack channel.
            </Talk>
            <Talk
              title="readme.so"
              link="https://readme.so"
            >
              readme.so is a markdown editor with ready made templates to easily create a simple README for your repositories.
            </Talk>
            <Talk
              title="Templater Bot"
              link="https://github.com/marketplace/templater"
            >
              A GitHub App built with Probot that requests more info from newly opened Pull Requests and Issues
              that contain either default titles, whose description is left blank or templates not followed.
            </Talk>
            <Talk
              title="Manchester United Quiz"
              link="https://assistant.google.com/services/a/uid/0000006f43c77ac7"
            >
              Google Assistant chatbot to test the user knowledge about Manchester United Football Club.
            </Talk>
            <Talk
              title="Personal Website"
              link="https://github.com/rohitjmathew/rohitjmathew.space"
            >
              A minimalist portfolio website built using Next.js, MDX, Tailwind CSS, and Vercel.
            </Talk>
            <Talk
              title="Slack Jenkins Bot"
              link="https://github.com/rohitjmathew/slack-jenkins-bot"
            >
              A slack bot to trigger jenkins jobs and post status back to a slack channel. Made using hubot (GitHub).
            </Talk>
            <Talk
              title="Hubot Jenkins Optimised Plugin"
              link="https://www.npmjs.com/package/hubot-jenkins-optimised"
            >
              A custom Jenkins integration for Hubot with multiple server support.
            </Talk>
            <Talk
              title="Hubot Slack Attachment Optimised Plugin"
              link="https://www.npmjs.com/package/hubot-slack-attachment-optimised"
            >
              A Slack integration for Hubot which enables sending detailed messaged (by means of attachments) from Hubot to Slack.
            </Talk>
            <Talk
              title="Hubot Jenkins Notifier for Slack"
              link="https://www.npmjs.com/package/hubot-slack-attachment-optimised"
            >
              A custom Slack integration for Hubot which responds to Jenkins notifications in a format appropriate for Slack attachments.
            </Talk>
          </div>
        </section>

      </div>
    </Container>
  );
}
