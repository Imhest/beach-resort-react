import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services:[
      {
        icon:<FaCocktail/>,
        title:"Free Cocktails",
        info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque totam, nesciunt illum eum commodi blanditiis nihil consequuntur itaque, quis optio tempora ullam. Sint temporibus quia eius ipsam sunt hic amet.'
      },
      {
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque totam, nesciunt illum eum commodi blanditiis nihil consequuntur itaque, quis optio tempora ullam. Sint temporibus quia eius ipsam sunt hic amet.'
      },
      {
        icon:<FaShuttleVan/>,
        title:"Free Shuttle",
        info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque totam, nesciunt illum eum commodi blanditiis nihil consequuntur itaque, quis optio tempora ullam. Sint temporibus quia eius ipsam sunt hic amet.'
      },
      {
        icon:<FaBeer/>,
        title:"Strongest Beer",
        info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque totam, nesciunt illum eum commodi blanditiis nihil consequuntur itaque, quis optio tempora ullam. Sint temporibus quia eius ipsam sunt hic amet.'
      },
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title='services' />
        <div className="services-center">
          {this.state.services.map((item,index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    )
  }
}
