import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail />,
                title:"Free cocktails",
                info:'lorem ipsum dolor sit amet consectetur adisicing elit. Magni, corporis!'
            },
            {
                icon:<FaHiking />,
                title:"Endless hiking",
                info:'lorem ipsum dolor sit amet consectetur adisicing elit. Magni, corporis!'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:'lorem ipsum dolor sit amet consectetur adisicing elit. Magni, corporis!'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'lorem ipsum dolor sit amet consectetur adisicing elit. Magni, corporis!'
            }
        ]
    };
    render() {
        return (
            <section className="services">
              <Title title="services" />
              <div className="services-center">
                  {this.state.services.map(item => {
                      return (
                         <article key={`item-${item.title}`} className="service">
                          <span>{item.icon}</span>
                          <h6>{item.title}</h6>
                          <p>{item.info}</p>
                      </article>
                      );
                  })}
              </div>
            </section>
        );
    }
}
