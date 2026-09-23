import { Star, Quote, Play } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'MediaTech Advertising delivered a professional and modern website for Kailvora Infra. Their creative approach, responsiveness, and attention to detail made the entire experience smooth and effective.',
    name: 'Vibhash Kumar Singh',
    role: 'Founder & CEO, Kailvora Infra Pvt. Ltd.'
  },
  {
    id: 2,
    quote:
      'MediaTech Advertising understood our requirements and delivered a professional digital solution that matched our vision. Their communication, creativity, and attention to detail made the overall experience smooth and reliable.',
    name: 'Arnim Bhardwaj',
    role: 'Co-Founder, Orions Advertising'
  },
  {
    id: 3,
    quote:
      'The team understood our requirements quickly and turned our ideas into a clean and professional digital presence. Communication throughout the project was smooth.',
    name: 'Rahul Sharma',
    role: 'Director, Sharma Enterprises'
  },
  {
    id: 4,
    quote:
      'MediaTech Advertising brought a fresh creative approach to our project. The design was modern, responsive and aligned well with our business requirements.',
    name: 'Amit Verma',
    role: 'Founder, Verma Solutions'
  },
  {
    id: 5,
    quote:
      'From the initial discussion to the final delivery, the team maintained clear communication and paid attention to the details that mattered to our brand.',
    name: 'Priya Kapoor',
    role: 'Marketing Head, Kapoor Group'
  },
  {
    id: 6,
    quote:
      'We wanted a stronger online presence and MediaTech Advertising helped us present our business in a much more professional and engaging way.',
    name: 'Rohit Agarwal',
    role: 'Founder, Agarwal Ventures'
  },
  {
    id: 7,
    quote:
      'The team was responsive, creative and easy to work with. They understood the direction we wanted and delivered a solution that felt right for our business.',
    name: 'Neha Bansal',
    role: 'Director, Bansal Enterprises'
  },
  {
    id: 8,
    quote:
      'MediaTech Advertising combined design and technology very effectively. The final result was clean, modern and easy for our customers to navigate.',
    name: 'Ankit Malhotra',
    role: 'Co-Founder, Malhotra Digital'
  },
  {
    id: 9,
    quote:
      'Working with the MediaTech team was a positive experience. They were open to feedback and made the required improvements throughout the project.',
    name: 'Saurabh Gupta',
    role: 'Managing Director, Gupta Associates'
  },
  {
    id: 10,
    quote:
      'The project was handled professionally from start to finish. We appreciated the attention to design, responsiveness and overall digital presentation.',
    name: 'Pooja Singh',
    role: 'Founder, Singh Enterprises'
  }
]

const STORIES = [
  {
    id: 1,
    title: 'Kailvora Infra',
    caption: 'Website design and digital presence'
  },
  {
    id: 2,
    title: 'Orions Advertising',
    caption: 'Digital solutions and creative support'
  },
  {
    id: 3,
    title: 'Client Project',
    caption: 'Website and digital marketing project'
  }
]

function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">

      <div className="testimonial-card__top">
        <div className="testimonial-card__avatar">
          {item.name
            .split(' ')
            .map((word) => word[0])
            .slice(0, 2)
            .join('')}
        </div>

        <div className="testimonial-card__person">
          <h4>{item.name}</h4>
          <p>{item.role}</p>
        </div>

        <span className="testimonial-card__google">
          G
        </span>
      </div>

      <div className="testimonial-card__stars" aria-label="5 star rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={15}
            fill="currentColor"
            strokeWidth={0}
          />
        ))}
      </div>

      <div className="testimonial-card__quote">
        <Quote size={18} />
        <p>{item.quote}</p>
      </div>

    </article>
  )
}

function StoryCard({ story }) {
  return (
    <article className="client-story">

      <div className="client-story__visual">
        <div className="client-story__play">
          <Play size={20} fill="currentColor" />
        </div>
      </div>

      <div className="client-story__content">
        <h4>{story.title}</h4>
        <p>{story.caption}</p>
      </div>

    </article>
  )
}

export default function Testimonials() {

  // Duplicate the cards so the marquee can loop continuously
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="section tst">

      <div className="container">

        {/* HEADER */}

        <header className="section-head tst__head" data-reveal>

          <span className="eyebrow">
            Client Stories
          </span>

          <h2>
            Partners Who Stayed.
          </h2>

          <p>
            We believe good digital work is built on trust,
            communication and long-term relationships.
          </p>

        </header>


        {/* REVIEW STATS */}

        <div className="tst__stats" data-reveal>

          <div className="tst__stat">

            <span className="tst__stat-icon">
              <Star size={17} fill="currentColor" />
            </span>

            <strong>10+</strong>

            <span>
              Client Satisfaction
            </span>

          </div>


          <div className="tst__stat">

            <span className="tst__stat-icon">
              <Quote size={17} />
            </span>

            <strong>10+</strong>

            <span>
              Client Stories
            </span>

          </div>

        </div>


        {/* GOOGLE REVIEWS STYLE LABEL */}

        <div className="tst__review-heading">

          <div>
            <span className="tst__review-star">
              ★
            </span>

            <strong>Client Reviews</strong>
          </div>

          <span className="tst__verified">
            Real client experiences
          </span>

        </div>


        {/* CONTINUOUS SLIDER */}

        <div
          className="testimonial-marquee"
          data-reveal
        >

          <div className="testimonial-track">

            {marqueeItems.map((item, index) => (
              <TestimonialCard
                key={`${item.id}-${index}`}
                item={item}
              />
            ))}

          </div>

        </div>


        {/* VIDEO STORIES */}

        <div
          className="stories"
          data-reveal
        >

          <div className="stories__head">

            <div>
              <span className="eyebrow">
                Video Testimonials
              </span>

              <h3>
                Hear From Our Clients
              </h3>
            </div>

          </div>


          <div className="stories__grid">

            {STORIES.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}