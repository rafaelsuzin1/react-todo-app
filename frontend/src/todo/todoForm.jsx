import React from 'react'

import Grid from '../template/grid'
import IconButtom from '../template/iconButtom'

export default props => {

    const keyHandler = (event) => {
        if (event.key === "Enter")
            event.shiftKey ? props.handleSearch() :  props.handleAdd()
        else if (event.key === 'Escape')
            props.handleClear()
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}/>
            </Grid>

            <Grid cols='12 3 2'>
                <IconButtom onClick={props.handleAdd} style='primary' icon='plus' />
                <IconButtom onClick={props.handleSearch} style='info' icon='search' />
                <IconButtom onClick={props.handleClear} style='default' icon='close' />
            </Grid>
        </div>
    )
}