import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import {
  addStorage,
  removeStorage
} from './actions'

injectTapEventPlugin();

const style = {
  marginLeft: 20,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: 0, name: '', price: ''};
  }

  handleChange = (fieldName) => ({ target: { value } }) => {
    this.setState({ [fieldName]: value });
  };

  setIdFieldValue = this.handleChange('id');
  setNameFieldValue = this.handleChange('name');
  setPriceFieldValue = this.handleChange('price');

  addToStorage = () => {
    const item = Object.assign({}, this.state);
    this.props.addStorage(item);
  };

  removeToStorage = (id) => () => {
    this.props.removeStorage(id);
  }

  render() {
    const { id, name, price } = this.state;

    const listItems = this.props.storage.map((obj) => (
      <div key={obj.id}>
        <TextField value={obj.id}/>
        <TextField value={obj.name}/>
        <TextField value={obj.price}/>
        <RaisedButton label="Remover" onTouchTap={this.removeToStorage(obj.id)}/>
      </div>
    ));

    return (
      <MuiThemeProvider>
        <div>
          <Paper zDepth={2}>
            <TextField hintText="Id" style={style} underlineShow={false} value={id} onChange={this.setIdFieldValue}/>
            <Divider />
            <TextField hintText="Name" style={style} underlineShow={false} value={name} onChange={this.setNameFieldValue}/>
            <Divider />
            <TextField hintText="Price" style={style} underlineShow={false} value={price} onChange={this.setPriceFieldValue}/>
            <Divider />
          </Paper>
          <RaisedButton label="Adicionar" onTouchTap={this.addToStorage}/>
          <div>{listItems}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ storage }) => ({ storage });

const mapDispatchToProps = { addStorage, removeStorage };

export default connect(mapStateToProps, mapDispatchToProps)(App);
