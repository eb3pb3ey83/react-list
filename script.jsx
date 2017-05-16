var TodoInput = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    };
  },
  onChange:function(e){
    this.setState({
      text: e.target.value
    });
  },
  onChange2:function(e){
    this.setState({
      text2: parseInt(e.target.value)
    });
  },  
  onSubmit:function(e){
    e.preventDefault();
    this.props.addItem(this.state.text,this.state.text2);
    this.setState({text:''});
    this.setState({text2:''});
  },
  render: function() {
    return (
      <form className="todo-input" onSubmit={this.onSubmit}>

        請輸入寵物名:<input
          type="text"
          onChange={this.onChange}
          value={this.state.text}
          />
        請輸入cp值:<input
          type="text"
          onChange={this.onChange2}
          value={this.state.text2}
          />          
          <button type="submit" >Submit</button>
      </form>
    );
  }
});

var TodoItem = React.createClass({
  render: function() {
    var cn = "todo-item";
    return (
      <li>
        {this.props.children}
      </li>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <ul className="todo-list">
        {
          this.props.data.map(function(item){
            return (
              <TodoItem key={item.id}>
                <span>寵物名:{item.text}</span>&nbsp;&nbsp;&nbsp;<span>cp值:{item.text2}</span>
              </TodoItem>
            );
          })
        }
      </ul>
    );
  }
});

var Todo = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.initialData
    };
  },
  addItem: function(text,text2){
    var data = this.state.data.concat({
      id: this.state.data.length+1,
      text: text,
      text2: text2
    });
    
    data.sort(this.sortNumber);
    this.setState({data:data});
  },
  sortNumber:function(a,b){
     return a['text2'] - b['text2'];
  },
  render: function() {
    return (
      <div className="todo">
        <h1>pokemon go寵物表</h1>
        <TodoInput addItem={this.addItem}/>
        <TodoList data={this.state.data}/>
      </div>
    );
  }
});

var data = [
  {id:1,text:'慢龍',text2:parseInt("3000")}
];
ReactDOM.render(
  <Todo initialData={data}/>,
  document.getElementById('content')
);
