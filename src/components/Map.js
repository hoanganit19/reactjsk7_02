import React from "react";

class Map extends React.Component{
    render(){

        const NumberList = (props) => {
            const numbers = props.numbers;
            const doubled = numbers.map((number, index) => 
                <p key={index}>{number*2}</p>
            );  

            return (
                <>
                {doubled}
                </>
            );
        }

        const numbers = [1, 2, 3, 4, 5];

        const todos = [
            {
                id: 1,
                name: 'CV 1'
            },

            {
                id: 2,
                name: 'CV 2'
            },

            {
                id: 3,
                name: 'CV 3'
            }
        ]

        const ListItem = (props) => {
            return (
                <p>
                    {props.name}
                </p>
            );
        }

        // const todoItems = todos.map((item)=>{
        //     return (
        //         <ListItem key={item.id} name={item.name} />
        //     );
        // })

        return (
            <>
                {/* <NumberList numbers={numbers} /> */}
                {
                    todos.map((item)=>{
                        return (
                            <ListItem key={item.id} name={item.name} />
                        );
                    })
                }
            </>
        );
    }
}

export default Map;