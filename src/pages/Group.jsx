import React from 'react'
import { Helmet } from "react-helmet-async";
import Cards from "../components/Card"

const Group = () => {
  return (
    <>
      <Helmet>
        <title>Group</title>
        <link rel="canonical" href="https://uc-coding.uz/group" />
        <meta
          name="description"
          content="Connect with me and solve your business problem"
        />
      </Helmet>
      <section className="mt-[100px] w-full">
        <div className='main-container text-4xl text-start py-10'>
          <h1 className='font-bold'>Наш сатрудники :</h1>

          <div className="main-container">
            <Cards />
          </div>

        </div>
      </section>
    </>
  )
}
export default Group;