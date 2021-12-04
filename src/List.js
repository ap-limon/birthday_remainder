import React from 'react'

export default function List({ people, wished }) {
    return (
        <>
            {people.map(person => {
                const { id, name, age, image } = person;
                return (
                    <section key={id} className="person">
                        <article className="image">
                            <img
                                alt=""
                                src={image}
                            />
                        </article>
                        <article className="desc">
                            <div className="detail">
                                <h4>{name}</h4>
                                <p>{age} years old</p>
                            </div>
                            <div className="btn">
                                <button onClick={() => wished(id)}>wished</button>
                            </div>
                        </article>
                    </section>
                );
            })}
        </>
    );
}
