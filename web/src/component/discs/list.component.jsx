import React, {Component} from 'react';
import HttpClient from '../../service/HttpClient';

class ListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            discs: [],
            name: '',
            message: null
        }

        this.loadList = this.loadList.bind(this);
    }

    componentDidMount() {
        this.loadList();
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    loadList() {
        HttpClient.list('')
            .then( (res) => {
                this.setState({discs: res.data.data})
            });
    }

    add() {
        window.localStorage.removeItem("discId");
        this.props.history.push('/add');
    }

    edit(id) {
        window.localStorage.setItem("discId", id);
        this.props.history.push('/edit');
    }

    delete(id) {
        HttpClient.delete(id)
            .then( res => {
                this.setState({message: 'Disc deleted successfully!'});
                this.setState({discs: this.state.discs.filter(disc => disc.id !== id)});
            });
    }

    search() {
        HttpClient.list(this.state.name)
            .then( (res) => {
                this.setState({discs: res.data.data})
            });
    }

    render() {
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col">
                        <h4 className="text-center">Discs</h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-dark" onClick={() => this.add()}> Add </button>
                    </div>
                    <div className="col-md-3 offset-md-3">
                        <input type="text" placeholder="Search Disc Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>                                            
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-primary" onClick={() => this.search()}> Search </button>
                    </div>
                </div>
                <br/>                
                <div className="row">
                    <div className="col">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Artist</th>
                                    <th colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.discs.map(
                                        disc =>
                                            <tr key={disc.id}>
                                                <td>{disc.id}</td>
                                                <td>{disc.name}</td>
                                                <td>{disc.artist}</td>
                                                <td>
                                                    <button className="btn btn-info" onClick={() => this.edit(disc.id)}> Edit</button>                                            
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => this.delete(disc.id)}> Delete</button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

export default ListComponent;