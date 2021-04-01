import React,{useState} from 'react'
import data from './data'
const List = () => {
    const [person, setPerson] = useState(data);

    const removePerson=(id)=>{
        let newPeople=person.filter((p)=>p.id !== id) //burada aslında silme yapılmıyor tıkladığımız remove id ye eşitse filtrelenenlerin içine alınmıyor 
        setPerson(newPeople)
    }
    return (
        <div>
            <h2>{person.length} birthdays today</h2>
            {person.map((p)=>{
                const {id,name,age,image}=p
                return <div key={id} className="person">
                    <img src={image} alt={name}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                        <button onClick={()=>removePerson(id)}>Remove</button>
                    </div>
                </div>
            })}
            <button onClick={()=>setPerson([])}>Clear All</button>
        </div>
    )
}

export default List

