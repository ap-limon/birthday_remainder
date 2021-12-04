import React, {useState} from 'react'
import Data from './Data';
import List from './List';
import Footer from './Footer';

export default function App() {
    const [people, setPeople] = useState(Data)
    const handleChange = (id) => {
        setPeople((oldPeople) => {
            let newPeople = oldPeople.filter((person) => id !== person.id);
            return newPeople;
        })
    }
    return (
        <>
            <main className="container">
                <h2>{people.length} friends birthdaylist</h2>
                <List people={people} wished={handleChange}/>
                <button onClick={() => setPeople([])}>wished all</button>
            </main>
            <Footer />
        </>
    );
}
