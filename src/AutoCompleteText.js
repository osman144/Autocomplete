import React from 'react';


export default class AutoCompleteText extends React.Component {
    // Ensure component set up correctly
    constructor(props){
        super(props)

        // Based on list, render markup
        this.items = [
            'Alabama', 
            'Alaska', 
            'Arizona', 
            'Arkansas',
            'California', 
            'Colorado', 
            'Connecticut', 
            'Delaware', 
            'Florida', 
            'Georgia', 
            'Hawaii', 
            'Idaho', 
            'Illinois',
            'Indiana', 
            'Iowa', 
            'Kansas', 
            'Kentucky', 
            'Louisiana', 
            'Maine', 
            'Maryland', 
            'Massachusetts', 
            'Michigan', 
            'Minnesota', 
            'Mississippi', 
            'Missouri',
            'Montana', 
            'Nebraska', 
            'Nevada', 
            'New Hampshire',
            'New Jersey',
            'New Mexico', 
            'New York', 
            'North Carolina', 
            'North Dakota', 
            'Ohio', 
            'Oklahoma', 
            'Oregon', 
            'Pennsylvania', 
            'Rhode Island', 
            'South Carolina', 
            'South Dakota', 
            'Tennessee', 
            'Texas', 
            'Utah', 
            'Vermont', 
            'Virginia', 
            'Washington', 
            'West Virginia', 
            'Wisconsin', 
            'Wyoming',
        ];
        this.state = {
            suggestions: [],
        }
    }

    // State changes recognized, changes what gets renders, makes it dynamic
    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
        }
        if(value.length === 0){
            this.setState(() => ({
                suggestions: [],
            }))
        } else {
            const suggestions = this.items.sort().filter(v => v.test(regex));

            // Update state with filtered list of suggestion
            this.setState(() => ({ suggestions }));
        }
    }

    render(){
        return (
            <div>
                <input onChange={onTextChange} type="text" />
                <ul>
                    {/* Show all items in list */}
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }


} 