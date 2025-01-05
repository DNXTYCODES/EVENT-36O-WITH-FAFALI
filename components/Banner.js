import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Get Started with Us' /> <br />
            <TitleLogo title='Let’s Create Something Amazing Together!' />
          </div>
          <div>
            <button className='button-primary'>Contact Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
