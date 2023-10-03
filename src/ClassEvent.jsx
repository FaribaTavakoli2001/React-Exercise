import React, { PureComponent } from 'react';

class ClassEvent extends PureComponent {
    constructor(props){
        super(props);

        this.input = React.createRef();

        this.state = {
            text : "",
            option : 'option1',
          
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.setState ({
            
        })
        
    }

    changeHandler = (event) => {

        this.setState({
            text : event.target.value ,
        })
        // console.log(event.target.value)
    }

    selectHandler = (event) => {
        this.setState({
            option : event.target.value ,
        })
        // console.log(event.target.value)
        
    }

    submitHandler = (event) => {
        event.preventDefault();
        // console.log(this.state.text)
        // console.log(this.state.option)

    }

    showRef = () =>{
        console.log(this.input.current.value)
    }


    // گرفتن اینپوت در مونت کردن
    componentDidMount(){
        this.input.current.focus()
    }
    render() {

        const {text } = this.state;

        return (
            <>
            <form onSubmit={this.submitHandler}>
                <input ref={this.input} type="text" value={text} onChange={this.changeHandler} />
               <br />
               <br />

                <select value={this.state.option} onChange={this.selectHandler}>
                    <option value ='option1'>option1</option>
                    <option value ='option2'>option2</option>
                    <option value ='option3'>option3</option>
                    <option value ='option4'>option4</option>

                </select>
                <br />
                <br />

                <button onClick={this.showRef} type='submit'>Save</button>
                <br/>
                <br/>

            </form>
                <button onClick={this.props.sayHello}>click</button>
       </>
                );
    }
}

export default ClassEvent;