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
        <div className="w-full text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            About Me
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto md:mx-0 mb-6"></div>
        </div>

        {/* Bio Section */}
        <div className="mb-12 md:mb-16 prose prose-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-none">
          <div className="grid md:grid-cols-1 gap-6">
            <p className="text-lg text-justify">
              Hey, I&apos;m Rohit. I&apos;m a developer, writer, musician, football fan and just a naturally curious person in life.
              I work at Trellix as a SDE on their platform team working on building SecOps products. I&apos;m also an
              Auth0 Ambassador working on sharing knowledge, tips, and best practices on topics relating to identity, security,
              and authentication.
              <br></br>
              <br></br>
              I have previously worked on building a reliable product for agents to sell insurance at Turtlemint
              and helped them scale 50x from 20k insurance agents to 1 million + insurance agents and a growing SaaS business.
              I have done 7 internships during my undergraduate education culminating with my intership at HackerRank
            </p>

            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">When I&apos;m not coding, I am:</h3>
              <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside space-y-1">
                <li>Staying up to date with the latest technological developments</li>
                <li>Binging Spotify playlists to find new unheard of artists</li>
                <li>Going for Gigs and Music Festivals</li>
                <li>Playing/Watching Football</li>
                <li>Attempting to not be an out of Practice Musician</li>
              </ul>
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
