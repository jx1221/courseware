import React,{Component} from 'react';

export default class extends Component{
    // constructor(props){
    //     super(props)
    // }因为没有用到
    render(){
        let{id,content,isActive,todoOnChange,deleteTodo} = this.props;
        return(
            <li
                key={id}
                className={isActive ? '' : "completed"}
            >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={!isActive}
                        onChange={ ()=>todoOnChange(id) }
                    />
                    <label>
                        {content}
                    </label>
                    <button
                        className="destroy"
                        onClick={ ()=> deleteTodo(id)}
                    />
                </div>
                <input
                    ref="editField"
                    className="edit"
                />
            </li>
        )
    }
}