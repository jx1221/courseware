import React,{Component} from 'react';


export default class Content extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="content">
				<div className="content_head">欢迎注册网易免费邮！邮件地址可以作为网易通行证，使用其他网易旗下产品。
				</div>
				<div className="content_main">
					<div className="main_left fl">
						<div className="mail_type">
							<a href="" className="abc fl">注册字母邮箱</a>
							<a href="" className="phonenumber fl">注册手机号码邮箱</a>
						</div>
						<form className="form">
							<ul className="list">
								<li className="item clearfix">
									<label className="text fl">
										<span className="">*</span>邮件地址									
									</label>
									<div className="info fl">
										<input type="text" name=""/>
										<span>@</span>
										<select name="">
											<option value="">163.com</option>
											<option value="">126.com</option>
											<option value="">years.com</option>
										</select>
										<div className="rules">6~18个字符，可使用字母、数字、下划线，需以字母开头
										</div>
									</div>
								</li>
								<li className="item clearfix">
									<label className="text fl">
										<span className="">*</span>密码									
									</label>
									<div className="info fl">
										<input  className="password" type="text" name=""/>
										
										
										
										<div className="rules">6~16个字符，区分大小写
										</div>
									</div>
								</li>
								<li className="item clearfix queren">
									<label className="text fl">
										<span className="">*</span>确认密码		
									</label>
									<div className="info fl">
										<input className="con_password" type="text" name=""/>
										
										
											
										
										<div className="rules">请再次填写密码
										</div>
									</div>
								</li>
								<li className="item clearfix last">
									<label className="text fl yanzhengma">
										<span className="">*</span>验证码	
									</label>
									<div className="info fl">
										<div className="fl left">
											<input className="id_code fl" type="text" name=""/>
											<div className="rules yanzhengwenzi fl">请填写图片中的字符，不区分大小写
											</div>
										</div>
										<div className="ps_pic fr">									
											<a href="">
												<img src="../assets/img/yanzhengma.jpg"/>
												<span>看不清楚？换张图片</span>
											</a>										
										</div>
									</div>
								</li>
							</ul>
							<div className="law">
								<input className="fl" type="checkbox" name=""/>
								<span className="fl">同意
									<a href="">“服务条款”</a>和
									<a href="">“隐私权相关政策”</a>
								</span>
							</div>
							<div className="submit">
								<input type="submit" name="" value="立即注册" />
							</div>
						</form>
					</div>
					<div className="main_right fl">
						<a href="">
							<img src="../assets/img/right.jpg"/>
						</a>
					</div>
				</div>
			</div>

		)
		
	}
}