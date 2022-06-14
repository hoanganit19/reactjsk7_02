import React from "react";

class MapState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: "Bùi Văn Tèo",
          age: 25,
        },
        {
          id: 2,
          name: "Trần Văn An",
          age: 29,
        },
        {
          id: 3,
          name: "Nguyễn Thị Bưởi",
          age: 22,
        },
      ],
    };

    this.msg = null;
  }

  removeUser = () => {
    const users = this.state.users;
    const deleted = users.pop();
    
    this.setState({
        users: users
    });
    
    this.msg = `Xoá ${deleted.name} thành công`;
  }

  render(){
        //console.log(this.state.users);
        return (
            <>
                {
                    this.state.users.map((item)=>{
                        return <div key={item.id}>
                        <h2>Tên: {item.name}</h2>
                        <h2>Tuổi: {item.age}</h2>
                        <hr/>
                    </div>
                    })
                }
                <button type="button" onClick={this.removeUser}>Delete User</button>
                <div style={{color: 'red'}}>
                    {this.msg}
                </div>
            </>
        );
  }
}

export default MapState;