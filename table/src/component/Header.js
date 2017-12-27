import React,{Component} from 'react';


export default class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<header className="head clearfix">
				<div className="head_left fl">
					<div className="logo fl">
						<a href="" className="fl wangyi163"> 163 网易免费邮</a>
						<a href="" className="fl wangyi126"> 126 网易免费邮</a>
						<a href="" className="fl wangyiyear">years 网易免费邮</a>
					</div>
					<h2 className="subheading fl">中国第一大电子邮件服务商</h2>
				</div>
				<div className="head_right fr">
					<a href="" className="more fl">了解更多</a>
					<a href="" className="feedback fl">反馈意见</a>
				</div>
			</header>

		)
		
	}
}