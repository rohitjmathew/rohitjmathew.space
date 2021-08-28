import Link from 'next/link';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
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
    <p className="text-gray-600 text-justify dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container title="About – Rohit Jacob Mathew">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
          <p>
            Hey, I&apos;m Rohit. I&apos;m a developer, writer, musician, football fan and just a naturally curious person in life.
            I work at McAfee as a SDE on their enterprise platform team working on building SecOps products. I&apos;m also a 
            Auth0 Ambassador working on sharing knowledge, tips, and best practices on topics relating to identity, security, 
            and authentication.
          </p>
          <p>
            I have previously worked on building a reliable product for agents to sell insurance at Turtlemint 
            and helped them scale 50x from 20k insurance agents to 1 million + insurance agents and a growing SaaS business.
            I have done 7 internships during my undergraduate education culminating with my intership at HackerRank
          </p>
          <p>
          If I&apos;m not coding, I am generally:
          <ul>
            <li>Staying up to date with the latest technological developments</li>
            <li>Binging Spotify playlists to find new unheard of artists</li>
            <li>Going for Gigs and Music Festivals</li>
            <li>Playing/Watching Football</li>
            <li>Attempting to not be an out of Practice Musician</li>
          </ul>
          </p>
        </div>

        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h2>

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

        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Research Papers
        </h2>

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

        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Talks
        </h2>

        <Talk
          title="Dockerization"
          link="https://www.linkedin.com/posts/rohitjmathew_docker-deployment-microservices-activity-6592494174543667200-gekN"
        >
          Spoke to the students of SRM University, Chennai on Dockerization and how we use docker in deployment pipelines at Turtlemint.
          This talk took place in October 2019.
        </Talk>
      </div>
    </Container>
  );
}
