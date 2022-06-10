import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            content: '',
            province: ''
        }

    }

    hanleSubmit = (e) => {
        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let content = this.state.content;
        let province = this.state.province;
        console.log(name);
        console.log(email);
        console.log(content);
        console.log(province);
    }

    changeValue = (e) => {
       
        let valueObj = {};
        let nameInput = e.target.name;

        valueObj[nameInput] = e.target.value;

        this.setState(valueObj);
    }

    render(){

        return (
            <form onSubmit={this.hanleSubmit}>
                <p><input type="text" name="name" placeholder="Tên của bạn..." defaultValue={this.state.name} onChange={this.changeValue}/></p>

                <p><input type="email" name="email" placeholder="Email của bạn..." defaultValue={this.state.email} onChange={this.changeValue}/></p>
                
                <p>
                    <textarea name="content" placeholder="Nội dung..." onChange={this.changeValue} defaultValue={this.state.content} />
                </p>

                <p>
                    <select name="province" onChange={this.changeValue}>
                        <option value="0">Chọn Tỉnh/Thành phố</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                    </select>
                </p>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;