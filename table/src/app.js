import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section className="box">
				<Header></Header>
				<Content></Content>
				<Footer></Footer>
			</section>

		)
		
	}
}

ReactDOM.render(

	<App></App>,
	document.getElementById('root')

);