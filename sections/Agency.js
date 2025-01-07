import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">

          <div className="heading-title">
            <TitleSm title="WHY SPONSOR/PARTNER WITH US" /> <br />
            <br />
            <Title
              title="GREAT PUBLICITY TO A WIDE VARIETY OF AUDIENCES"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="WHY PARTNER With EVENT360 WITH FAFALI?" />
              <p className="desc-p">
                Welcome to EVENT360 WITH FAFALI, the premier TV talk show that
                brings families together for engaging interviews, reviews, and
                discussions on the latest trends in entertainment, beauty, and
                culture. Our show attracts a diverse and dedicated audience
                across Ghana, making it the perfect platform for your brand to
                shine.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>50+ SHOWS</h3>
                </div>
                {/* <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div> */}
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/fafali2.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/fafali1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our Reach" />
              <br />
              <p className="misson-p">
                <p>
                  Wide TV Audience: As a family show, we appeal to viewers of
                  all ages, offering your brand exposure to a broad demographic.
                </p>
                <p>
                  Prime-Time Slot: Our show airs during prime-time hours,
                  ensuring maximum viewership.
                </p>
                <p>
                  Cross-Platform Engagement: Beyond TV, our audience engages
                  with us online, expanding your brand’s reach to digital
                  spaces.
                </p>
              </p>
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/interview2.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Why Advertise with Us" />
              <br />
              <p className="misson-p">
                <p>
                  Build Trust: Being featured on a reputable family show
                  enhances your brand’s credibility.
                </p>
                <p>
                  Increase Visibility: Our loyal audience connects with the
                  brands we showcase, making it easier for your message to
                  resonate.
                </p>
                <p>
                  Tailored Exposure: We integrate your brand into our show
                  naturally, creating a seamless and effective advertising
                  experience.
                </p>
                <p>
                  Proven Impact: Many of our past sponsors have seen significant
                  growth in brand awareness and customer engagement.
                </p>
              </p>
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/event360banner.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our Mission" />
              <br />
              <p className="misson-p">
                <p>
                  At EVENT360 WITH FAFALI, our mission is to inform, inspire,
                  and entertain by bringing the vibrant stories of Ghana’s
                  entertainment, beauty, and cultural industries to life. We aim
                  to create a platform where diverse voices are heard, industry
                  specialists are celebrated, and families come together to
                  enjoy meaningful content.
                </p>
                <p>
                  Through insightful interviews, honest reviews, and lively
                  discussions, we connect our audience to the trends and events
                  that shape their world. By integrating brands and sponsors
                  seamlessly into our show, we strive to build lasting
                  relationships that add value to our viewers and our partners
                  alike.
                </p>
                <p>
                  We are committed to delivering quality, family-friendly
                  programming that uplifts, educates, and fosters a sense of
                  community.
                </p>
              </p>
            </div>
          </div>

        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
