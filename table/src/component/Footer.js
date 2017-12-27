import React,{Component} from 'react';


export default class Footer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<footer className="foot">
				<div className="foot_z">
					<div className="foot_left fl">
						<a href="">关于网易</a>
						<a href="">关于网易免费邮</a>
						<a href="">邮箱官方博客</a>
						<a href="">客户服务</a>
						<a href="">隐私政策</a>
					</div>
					<div className="foot_right fl">
						<span className="fl">网易公司版权所有</span>
					</div>
					<img className="fl" src="../assets/img/footer.jpg"/>
				</div>
			</footer>

		)
		
	}
}