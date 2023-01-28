import Card from 'react-bootstrap/Card';
import React from 'react';
import { FaTelegram, FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import '../style.css'
const info = [
  {
    name: 'Erman Koshkarbaev',
    age: 18,
    job: 'Frontend',
    title: 'He can create responsive website'
  },
  {
    name: "O'limjon Nishanaliev",
    age: 18,
    job: 'Frontend',
    title: 'He can using API '
  },
  {
    name: 'Erman Koshkarbaev',
    age: 18,
    job: 'Frontend',
    title: 'He can create responsive website'
  },
  {
    name: "O'limjon Nishanaliev",
    age: 18,
    job: 'Frontend',
    title: 'He can using API '
  },
  {
    name: 'Erman Koshkarbaev',
    age: 18,
    job: 'Frontend',
    title: 'He can create responsive website'
  },
  {
    name: "O'limjon Nishanaliev",
    age: 18,
    job: 'Frontend',
    title: 'He can using API '
  },
  {
    name: 'Erman Koshkarbaev',
    age: 18,
    job: 'Frontend',
    title: 'He can create responsive website'
  },
  {
    name: "O'limjon Nishanaliev",
    age: 18,
    job: 'Frontend',
    title: 'He can using API '
  },
]

const Cards = () => {
  return (
    <div className='mt-6 py-10 outsiteCard'>
      {info.map((item) => (
        <div className='cardInfo'>
          <div className="cardImg">
            <img src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" alt="Maket" />
          </div>
          <h3 className="cardName">Erman Koshkarbaev</h3>
          <h5 className="cardJob">Frontend Dev</h5>
          <div className="messages">
            <a href='' className="github">
              <FaGithub className=" text-5xl text-primary" />
            </a>
            <a href="" className="instagram">
              <FaInstagram className=" text-5xl text-secondary" />
            </a>
            <a href="" className="discord">
              <FaDiscord className='text-5xl text-primary' />
            </a>
          </div>
        </div>

      ))
      }
    </div >


  );
}

export default Cards;

// <Card className='text-xl text-center' style={{ width: '18rem', height: 400, borderRadius: 8, border: '4px solid', boxShadow: '0px 0px 38px 6px rgba(34, 60, 80, 0.59)' }}>
        //   <Card.Header variant="top" className='text-1xl font-bold'>{item.job}</Card.Header>
        //   <Card.Img style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }} alt='maket' src='https://st2.depositphotos.com/2550635/9440/i/950/depositphotos_94407988-stock-photo-silhouette-of-person-in-sportswear.jpg' />
        //   <Card.Body>
        //     <Card.Title>{item.name}</Card.Title>
        //     <Card.Text style={{ fontSize: 14, marginBottom: 5 }} >
        //       {item.title}
        //     </Card.Text>
        //   </Card.Body>
        // </Card>