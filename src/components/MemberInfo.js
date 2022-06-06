/*
Nếu muốn sử dụng State trong Function Component => Dùng hook useState
*/
import React, {useState} from "react";

function MemberInfo(props){

    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);

    const changeInfo = () => {
        setName('Tạ Hoàng An');
        setAge('35');
    }

    return (
        <div className="member-info">
            <h3>Tên: {name}</h3>
            <h3>Tuổi: {age}</h3>
            <button type="button" onClick={() => changeInfo()}>Change</button>
        </div>
    );
}

export default MemberInfo;