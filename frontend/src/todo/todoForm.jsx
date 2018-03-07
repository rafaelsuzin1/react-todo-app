import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButtom from '../template/iconButtom'
import {changeDescription, search, add, clear} from './todoActions'

class TodoForm extends Component {

    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(event) {
        const { add, search, clear, description} = this.props
        if (event.key === "Enter")
            event.shiftKey ? search(description) :  add(description)
        else if (event.key === 'Escape')
            clear()
    }

    componentWillMount(){
        this.props.search()
    }

    render(){
        const { add, search, clear, description} = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}/>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButtom onClick={() => add(description)} style='primary' icon='plus' />
                    <IconButtom onClick={search} style='info' icon='search' />
                    <IconButtom onClick={clear} style='default' icon='close' />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({changeDescription, search, add, clear}
    , dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)