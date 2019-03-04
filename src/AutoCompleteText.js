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
            text: '',
        }
    }

    // State changes recognized, changes what gets renders, makes it dynamic
    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }))
    }

    suggestionSelected(value){
        this.setState(() => ({
            text: value,
            suggestion: [],
        }))
    }

    renderSuggestions(){
        const { suggestions } = this.state
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
                {/* Show all items in list */}
                {suggestions.map((item) => <li onClick = {() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render(){
        const { text } = this.state;
        return (
            <div>
                <input value={text} onChange={this.onTextChange} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }


} 