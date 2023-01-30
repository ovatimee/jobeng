# Normady Job Engine

# Welcome to the Remote Work Web App

Description:

The Remote Work Web App is designed to revolutionize the way recruiters find talent and job seekers find their dream jobs.
Our platform provides a one-stop solution for all your remote work needs,
making it easier than ever for recruiters to find the best talent and for job seekers to prepare for interviews and get matched with the best jobs and recruiters.

We believe that remote work is the future of work, and our goal is to make this transition as smooth and seamless as possible.
Our platform provides job seekers with the tools they need to prepare for interviews and showcase their skills to recruiters.
At the same time, we make it easy for recruiters to find the best talent, no matter where they are located.
Whether you're a recruiter looking to expand your team or a job seeker looking for your next opportunity, the Remote Work Web App is the place to be.

Pushing the normady workforce to work harder and achieve more
TO contribue, suggest a feature, just write a feature of what you'd want added and open a pr
If you would like to have collaborator permissions on the repo to merge your own PRs or review others' PRs please let me know.

## How to contribute:

Add features you'd want to contribute, open a PR

Download [Jobend Postgres Backup]().
Create a local db and do pg_restore ... load the database backup on your local machine
clone the project, make your changes and open a pr

```
psql -c "CREATE DATABASE \"jobeng\";"
psql -d Jobeng < jobengdata.sql
```

(If you do not have a database created for your user account then you may need to also add: `-U postgres` to the above two commands.)

```
\c "jobeng"
\dt (Jobs|Types|Categories|Users).*
```
## Using with Docker

You can spin up a new database using **Docker** with `docker-compose up`.

## Motivation

## The Motivation Behind the Remote Work Web App

The traditional way of working and searching for jobs can be a real grind. Endless hours of commuting, rigid schedules, and the pressure to be available 24/7 can quickly wear you out. As someone who has experienced this firsthand, I know how frustrating it can be to waste so much time and energy on something that doesn't bring you joy. That's why I was inspired to create a solution that would make the process of finding a job and managing a career easier and more efficient.

The Remote Work Web App was born out of a desire to make a change. I wanted to create a platform that would help people find the best jobs and recruiters without sacrificing their time and energy. By providing a one-stop solution for all your remote work needs, our platform eliminates the need for endless job searching and makes it easier than ever for recruiters to find the best talent. Whether you're a recruiter looking to expand your team or a job seeker looking for your next opportunity, the Remote Work Web App is the place to be.

I am confident that this project will make a real difference in the lives of many people, and I encourage others to contribute and help make this vision a reality. Whether you are a developer, designer, or simply passionate about remote work, I invite you to join us in making the future of work a better place. Together, we can create a platform that will revolutionize the way we work and live.

Let's keep coding fun.


## Future Goals

Our remote work web app is not just focused on connecting recruiters with job seekers, but also on helping developers enhance their skills and advance in their careers. We aim to do this in a number of ways:

Solving Programming Challenges: Our platform will provide a comprehensive guide on how to master a particular stack, by giving step-by-step instructions on how to solve real-world programming challenges. This will not only help experienced developers, but also new developers who are just starting out.
Organizing Hackathons: We believe that hackathons are a great way to bring developers together, collaborate and solve real-world problems. Our platform will facilitate the organization of virtual hackathons that will bring developers from different backgrounds and locations together.
Working on Projects Together: Our platform will also match developers with projects that they can work on together. This will not only help developers gain practical experience, but also provide a unique opportunity for them to collaborate and learn from each other.
Our ultimate goal is to create a vibrant community of developers who are passionate about their work and continuously strive to improve their skills and knowledge. By providing a platform for developers to connect, collaborate and learn from each other, we hope to make a positive impact on the remote work ecosystem and help shape the future of work.