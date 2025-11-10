import React from 'react'
import { FiTrendingUp, FiUsers, FiAward, FiBook, FiVideo, FiCalendar, FiMessageCircle, FiHeart, FiDownload, FiZap, FiStar } from 'react-icons/fi'
import heroNeuralBg from '../assets/hero-neural-bg.jpg'
import './community.css'

export default function Community() {
  return (
    <main className="community-page">
      {/* Hero Section */}
      <section className="community-hero">
        <div className="hero-background">
          <img src={heroNeuralBg} alt="Neural Network Background" className="neural-bg-image" />
          <div className="neural-network-overlay"></div>
          <div className="floating-particles">
            <span className="particle particle-1"></span>
            <span className="particle particle-2"></span>
            <span className="particle particle-3"></span>
            <span className="particle particle-4"></span>
            <span className="particle particle-5"></span>
            <span className="particle particle-6"></span>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up" data-aos-duration="800">
            Join the <span className="gradient-text">MindSync</span> Community
          </h1>
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            Connect with learners, share your progress, and grow smarter—together.
          </p>
          <button className="cta-button hero-cta" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <FiUsers className="cta-icon" />
            Join Community
          </button>
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Learners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Discussions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Study Circles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Discussions */}
      <section className="community-section" data-aos="fade-up" data-aos-duration="800">
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <FiTrendingUp className="section-icon" />
              <div>
                <h2 className="section-title">Trending Discussions</h2>
                <p className="section-subtitle">Join the conversation and share your thoughts</p>
              </div>
            </div>
            <button className="secondary-button">Explore Discussions</button>
          </div>
          <div className="discussions-grid">
            <DiscussionCard
              avatar="SC"
              title="Best AI tools for students 🔥"
              author="Sarah Chen"
              tags={["AI tools", "Study Tips"]}
              comments={237}
              likes={107}
              avatarColor="teal"
            />
            <DiscussionCard
              avatar="CD"
              title="Daily study goals - Day 7 Challenge 🧠"
              author="Carlos Diaz"
              tags={["Motivation", "Challenges"]}
              comments={189}
              likes={94}
              avatarColor="green"
            />
            <DiscussionCard
              avatar="MU"
              title="How to maintain focus during long sessions"
              author="Maya Upton"
              tags={["Focus", "Productivity"]}
              comments={156}
              likes={82}
              avatarColor="purple"
            />
            <DiscussionCard
              avatar="AK"
              title="Share your favorite study playlist 🎵"
              author="Alex Kim"
              tags={["Music", "Community"]}
              comments={203}
              likes={125}
              avatarColor="teal"
            />
          </div>
        </div>
      </section>

      {/* Community Challenges */}
      <section className="community-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <FiAward className="section-icon" />
              <div>
                <h2 className="section-title">Community Challenges</h2>
                <p className="section-subtitle">Join challenges, collaborate, and level up your learning</p>
              </div>
            </div>
          </div>
          <div className="challenges-grid">
            <ChallengeCard
              icon={<FiZap className="challenge-icon" />}
              title="7-Day Focus Streak Challenge"
              description="Maintain a 7-day study streak and unlock exclusive badges"
              progress={90}
              participants={124}
            />
            <ChallengeCard
              icon={<FiBook className="challenge-icon" />}
              title="Summarize a Video, Share a Note"
              description="Create and share your best video summaries with the community"
              progress={75}
              participants={89}
            />
            <ChallengeCard
              icon={<FiStar className="challenge-icon" />}
              title="Top Flashcard Creator of the Week"
              description="Create the most helpful flashcards and win recognition"
              progress={82}
              participants={156}
            />
          </div>
        </div>
      </section>

      {/* Top Learners */}
      <section className="community-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <FiTrendingUp className="section-icon" />
              <div>
                <h2 className="section-title">Top Learners This Week</h2>
                <p className="section-subtitle">Celebrate the most dedicated learners</p>
              </div>
            </div>
          </div>
          <div className="learners-list">
            <LearnerCard avatar="AR" name="Alex Rhywin" xp="2,347 XP" studyTime="47h study" avatarColor="teal" />
            <LearnerCard avatar="JL" name="Jessica Lee" xp="2,189 XP" studyTime="42h study" avatarColor="green" />
            <LearnerCard avatar="ST" name="Sam Thompson" xp="2,056 XP" studyTime="39h study" avatarColor="purple" />
            <LearnerCard avatar="MC" name="Maria Chen" xp="1,987 XP" studyTime="38h study" avatarColor="teal" />
            <LearnerCard avatar="CK" name="Chris Kim" xp="1,845 XP" studyTime="35h study" avatarColor="green" />
          </div>
        </div>
      </section>

      {/* Study Circles */}
      <section className="community-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <FiUsers className="section-icon" />
              <div>
                <h2 className="section-title">Study Circles</h2>
                <p className="section-subtitle">Find your tribe and learn together in topic-focused groups</p>
              </div>
            </div>
          </div>
          <div className="study-circles-grid">
            <StudyCircleCard
              icon={<span className="circle-icon">&lt;/&gt;</span>}
              title="Web Dev Circle"
              description="Learn web development together"
              members={124}
            />
            <StudyCircleCard
              icon={<FiStar className="circle-icon" />}
              title="AI Learners Hub"
              description="Explore AI and machine learning"
              members={98}
            />
            <StudyCircleCard
              icon={<FiBook className="circle-icon" />}
              title="Exam Prep Forum"
              description="Prepare for exams with peers"
              members={167}
            />
            <StudyCircleCard
              icon={<FiAward className="circle-icon" />}
              title="Study Goals Group"
              description="Set and achieve study goals"
              members={89}
            />
            <StudyCircleCard
              icon={<FiZap className="circle-icon" />}
              title="Productivity Masters"
              description="Master productivity techniques"
              members={112}
            />
            <StudyCircleCard
              icon={<FiTrendingUp className="circle-icon" />}
              title="Learning Science"
              description="Discover effective learning methods"
              members={76}
            />
          </div>
        </div>
      </section>

      {/* Shared Resources */}
      <section className="community-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <FiBook className="section-icon" />
              <div>
                <h2 className="section-title">Shared Resources</h2>
                <p className="section-subtitle">Browse helpful materials shared by the community</p>
              </div>
            </div>
          </div>
          <div className="resources-grid">
            <ResourceCard
              type="PDF"
              title="Complete React Hooks Guide 2024"
              author="Tom Brooks"
              tags={["React", "Web Dev"]}
              downloads={234}
            />
            <ResourceCard
              type="Mind Map"
              title="AI & Machine Learning Roadmap"
              author="Sarah Chen"
              tags={["AI", "Roadmap"]}
              downloads={189}
            />
            <ResourceCard
              type="Playlist"
              title="Focus Music Collection"
              author="Alex Kim"
              tags={["Music", "Focus"]}
              downloads={312}
            />
            <ResourceCard
              type="Article"
              title="Effective Study Techniques"
              author="Maria Chen"
              tags={["Study Tips", "Learning"]}
              downloads={267}
            />
            <ResourceCard
              type="PDF"
              title="JavaScript Cheat Sheet"
              author="Chris Kim"
              tags={["JavaScript", "Reference"]}
              downloads={445}
            />
            <ResourceCard
              type="Mind Map"
              title="Data Structures Overview"
              author="Sam Thompson"
              tags={["CS", "Algorithms"]}
              downloads={198}
            />
          </div>
        </div>
      </section>

      {/* Live Study Rooms */}
      <section className="community-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <FiVideo className="section-icon" />
              <div>
                <h2 className="section-title">Live Study Rooms</h2>
                <p className="section-subtitle">Join live focused study together with peers</p>
              </div>
            </div>
            <button className="primary-button">Create New Room</button>
          </div>
          <div className="study-rooms-grid">
            <StudyRoomCard
              status="live"
              title="Focus Zone Alpha"
              participants={12}
              time="Started: 18:33"
              activity="Current: Study Session"
            />
            <StudyRoomCard
              status="live"
              title="Pomodoro Power"
              participants={8}
              time="Started: 19:15"
              activity="Current: Study Session"
            />
            <StudyRoomCard
              status="waiting"
              title="Deep Work Den"
              participants={5}
              time="Starts: 09:00"
              activity="Current: Waiting"
            />
            <StudyRoomCard
              status="waiting"
              title="Exam Prep Central"
              participants={3}
              time="Starts: 10:30"
              activity="Current: Waiting"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="community-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <FiCalendar className="section-icon" />
              <div>
                <h2 className="section-title">Upcoming Events</h2>
                <p className="section-subtitle">Don't miss out on our upcoming workshops and community events</p>
              </div>
            </div>
          </div>
          <div className="events-grid">
            <EventCard
              isLive={true}
              title="Study with Me - Focus Session"
              date="Tomorrow"
              time="7:00 PM EST"
              host="Hosted by Focus Squad"
              action="Join Live"
            />
            <EventCard
              isLive={false}
              title="AI Tools for Students Workshop"
              date="12/01/2024"
              time="3:00 PM EST"
              host="Hosted by MindSync Team"
              action="Set Reminder"
            />
            <EventCard
              isLive={false}
              title="MindSync Buildathon 2024"
              date="15/01/2024"
              time="10:00 AM EST"
              host="Hosted by MindSync Team"
              action="View Details"
            />
          </div>
        </div>
      </section>

      {/* Community Blog */}
      <section className="community-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-wrapper">
              <FiBook className="section-icon" />
              <div>
                <h2 className="section-title">Community Blog</h2>
                <p className="section-subtitle">Read experiences and insights from fellow learners</p>
              </div>
            </div>
            <button className="secondary-button">View Blog</button>
          </div>
          <div className="blog-grid">
            <BlogCard
              avatar="EA"
              author="Emma Allison"
              date="2 days ago"
              category="Study Tips"
              title="10 Proven Study Techniques That Actually Work"
              description="Discover research-backed methods to improve your learning efficiency and retention..."
              comments={345}
              likes={1200}
              avatarColor="teal"
            />
            <BlogCard
              avatar="MC"
              author="Mike Chen"
              date="4 days ago"
              category="Productivity"
              title="How I Built a Consistent Study Routine"
              description="Learn how to create and maintain a study routine that works for your lifestyle..."
              comments={289}
              likes={987}
              avatarColor="green"
            />
            <BlogCard
              avatar="CJ"
              author="Casey Johnson"
              date="1 week ago"
              category="Learning Science"
              title="The Science of Spaced Repetition"
              description="Understanding how spaced repetition can dramatically improve your memory and recall..."
              comments={412}
              likes={1456}
              avatarColor="purple"
            />
            <BlogCard
              avatar="AG"
              author="Alex Garcia"
              date="1 week ago"
              category="Life Balance"
              title="Balancing Study and Life: A Student's Guide"
              description="Practical tips for maintaining a healthy balance between your studies and personal life..."
              comments={234}
              likes={876}
              avatarColor="teal"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

// Discussion Card Component
function DiscussionCard({ avatar, title, author, tags, comments, likes, avatarColor = 'teal' }) {
  return (
    <div className="discussion-card">
      <div className="discussion-header">
        <div className={`avatar avatar-${avatarColor}`}>{avatar}</div>
        <div className="discussion-info">
          <h3 className="discussion-title">{title}</h3>
          <p className="discussion-author">by {author}</p>
        </div>
      </div>
      <div className="discussion-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="discussion-stats">
        <span className="stat">
          <FiMessageCircle className="stat-icon" />
          {comments} comments
        </span>
        <span className="stat">
          <FiHeart className="stat-icon" />
          {likes} likes
        </span>
      </div>
    </div>
  )
}

// Challenge Card Component
function ChallengeCard({ icon, title, description, progress, participants }) {
  return (
    <div className="challenge-card">
      <div className="challenge-icon-wrapper">{icon}</div>
      <h3 className="challenge-title">{title}</h3>
      <p className="challenge-description">{description}</p>
      <div className="challenge-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-text">{progress}% complete</div>
      </div>
      <div className="challenge-footer">
        <span className="participants">{participants} participants</span>
        <button className="join-button">Join</button>
      </div>
    </div>
  )
}

// Learner Card Component
function LearnerCard({ avatar, name, xp, studyTime, avatarColor = 'teal' }) {
  return (
    <div className="learner-card">
      <div className={`avatar learner-avatar avatar-${avatarColor}`}>{avatar}</div>
      <div className="learner-info">
        <h3 className="learner-name">{name}</h3>
        <p className="learner-stats">{xp} • {studyTime}</p>
      </div>
    </div>
  )
}

// Study Circle Card Component
function StudyCircleCard({ icon, title, description, members }) {
  return (
    <div className="study-circle-card">
      <div className="circle-icon-wrapper">{icon}</div>
      <h3 className="circle-title">{title}</h3>
      <p className="circle-description">{description}</p>
      <div className="circle-footer">
        <span className="circle-members">{members} members</span>
        <button className="join-button outline">Join</button>
      </div>
    </div>
  )
}

// Resource Card Component
function ResourceCard({ type, title, author, tags, downloads }) {
  return (
    <div className="resource-card">
      <div className="resource-type">{type}</div>
      <h3 className="resource-title">{title}</h3>
      <p className="resource-author">by {author}</p>
      <div className="resource-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="resource-footer">
        <span className="downloads">
          <FiDownload className="download-icon" />
          {downloads}
        </span>
        <button className="view-button">View</button>
      </div>
    </div>
  )
}

// Study Room Card Component
function StudyRoomCard({ status, title, participants, time, activity }) {
  return (
    <div className="study-room-card">
      <div className={`room-status ${status}`}>
        {status === 'live' ? 'Live' : 'Waiting'}
      </div>
      <h3 className="room-title">{title}</h3>
      <div className="room-info">
        <span className="room-participants">{participants} participants</span>
        <span className="room-time">{time}</span>
      </div>
      <p className="room-activity">{activity}</p>
      <button className={status === 'live' ? 'join-room-button live' : 'join-room-button'}>
        Join Room
      </button>
    </div>
  )
}

// Event Card Component
function EventCard({ isLive, title, date, time, host, action }) {
  return (
    <div className="event-card">
      {isLive && <div className="event-status live">Live</div>}
      <h3 className="event-title">{title}</h3>
      <div className="event-date">{date}</div>
      <div className="event-time">{time}</div>
      <p className="event-host">{host}</p>
      <button className={isLive ? 'event-button live' : action === 'Set Reminder' ? 'event-button secondary' : 'event-button secondary'}>
        {action}
      </button>
    </div>
  )
}

// Blog Card Component
function BlogCard({ avatar, author, date, category, title, description, comments, likes, avatarColor = 'teal' }) {
  return (
    <div className="blog-card">
      <div className="blog-header">
        <div className={`avatar blog-avatar avatar-${avatarColor}`}>{avatar}</div>
        <div className="blog-author-info">
          <p className="blog-author">by {author}</p>
          <p className="blog-date">{date}</p>
        </div>
      </div>
      <div className="blog-category">{category}</div>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-description">{description}</p>
      <div className="blog-stats">
        <span className="stat">
          <FiMessageCircle className="stat-icon" />
          {comments} comments
        </span>
        <span className="stat">
          <FiHeart className="stat-icon" />
          {likes > 1000 ? `${(likes / 1000).toFixed(1)}K` : likes} likes
        </span>
      </div>
      <a href="#" className="read-more">Read More →</a>
    </div>
  )
}

