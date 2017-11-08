import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Item from './components/item';
import Footer from './components/Footer';
import './common/style/index.css';
import './common/style/base.css';

// import todoData from './common/data/todoData';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal:'',
            todoData:[],
            view:'all'//要切换，需要一个变量控制显示哪里？？？？？？？？？
        };
        //改变this的指向，在这个地方直接绑定组件的实例化对象，因为调用的位置和元素不清楚
        // 只要写的函数需要用到this就先绑定一下。先这样记
        this.inputChange = this.inputChange.bind(this);
        this.inputOnEnter = this.inputOnEnter.bind(this);
        this.todoOnChange = this.todoOnChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.changeView = this.changeView.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }
    inputChange(ev){
        // let {inputVal} = this.state;

        console.log(ev.target.value);
        this.setState({
            inputVal: ev.target.value
        });

    }

    inputOnEnter(ev){
        // console.log(ev.keyCode);
        if(ev.keyCode!==13) return;
        let{value} = ev.target;//ev.target可以拿到一个真实的dom元素
        //if(value.trim()==='') return;//这种应该也行吧……
        if(!value.trim()) return;



        let{todoData} = this.state;
        this.setState({
            todoData: [
                ...todoData,//把原有的todoData放进去，然后后面再添加一个
                {
                    id: Math.random(),
                    content: value,
                    isActive: true
                }
            ],
            inputVal: ''
        })
    }
    todoOnChange(id){
        let {todoData} =this.state;
        let newTodos = todoData.map((todo,indx)=>{
            if(todo.id===id){
                todo.isActive = !todo.isActive;
            }
            return todo;
        });
        this.setState({
            todoData:newTodos
        })
    }
    //删除一个todo
    deleteTodo(id){//这个地方为什么id就直接是当前id了
        let {todoData} =this.state;//先要拿到原来的数据
        let newTodos = todoData.filter((todo,indx)=>{

            return todo.id ===id?false:true;//ture是保留false是删掉
        });
        this.setState({
            todoData:newTodos
        })
    }
    //全选
    toggleAll(ev){
        console.log(11)
        let {todoData} =this.state;
        let{checked} = ev.target;//从目标元素中拿到checked的状态
        this.setState({
            todoData: todoData.map(elt =>{  //把这个数据里面的每一个元素都遍历一遍
                elt.isActive = !checked;
                return elt;
            })
        })
    }

    //切换显示不同状态的todo
    changeView(view){//这个函数专门用来修改view的值
        this.setState({
            view
        })
    }
    //清除完成项
    clearCompleted(){
        let{todoData} = this.state;
        let newTodos = todoData.filter( (todo, indx)=>{
            return todo.isActive ? true : false //true的就保留下来
        } );

        this.setState({
            todoData: newTodos
        })
    }

    render(){
        let {inputVal,todoData,view} = this.state;//把这些变量从State里面取出来
        let{inputChange,inputOnEnter,todoOnChange,deleteTodo, toggleAll, changeView, clearCompleted} =this;
        let todosLength = todoData.length;
        let leftCount =todosLength;//假设有多少个没有被勾选，假设全部没有被勾选
        // let{data}=this.props;
        let filteredTodosData = todoData.filter((elt, indx, arr)=>{
            let{id,content,isActive} = elt;
            let shouldStay = false;
            if(!isActive) leftCount--;//!isActive这个是被勾选了
            switch (view){
                case 'active':
                    if (isActive===true){
                        shouldStay = true;
                    }
                    break;
                case 'completed':
                    if (isActive===false){
                        shouldStay = true;
                    }
                    break;
                default:
                    shouldStay = true;
            }
            return shouldStay;
        });
        let todoComponent = filteredTodosData.map((elt,indx,arr)=>{
            let{id,content,isActive} = elt;//这个可以直接在上面一行的elt的进行解构
            return(
                <Item
                    key={id}
                    {...{ //这个点点点是jsx提供的语法，跟es6没有关系，只要有react的预设就可以使用这个
                        id,
                        content,
                        isActive,
                        todoOnChange,
                        deleteTodo   //要用到的参数
                    }}

                />


            )

        });
        return(
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus={true}
                        value={inputVal}
                        onChange={inputChange}//onChange是input里的一个事件
                        onKeyDown ={inputOnEnter}
                    />
                </header>
                {
                    todosLength>0?(
                        <section className="main">
                            <input
                                className="toggle-all"
                                type="checkbox"
                                onChange={toggleAll}
                                checked={ leftCount===0 }

                            />
                            <ul className="todo-list">
                                {todoComponent}
                            </ul>
                        </section>
                    ):null
                }
                {
                    todosLength>0?(
                        <Footer
                            {
                                ...{
                                    changeView,
                                    leftCount,
                                    view,
                                    clearCompleted: clearCompleted,
                                    //只要有一个被勾选，就会是显示状态也就是true
                                    //用所有通洞的长度和剩余没有被勾选的todo的长度比较，只要
                                    //剩余的长度小于全部todo的长度，就说明有todo被勾选
                                    showClearButton:todosLength > leftCount
                                }
                            }

                        />
                    ):null
                }


            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);