import React, {Component} from 'react';
import HttpClient from '../../service/HttpClient';

class AddComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            artist:'',
            year:0,
            tracks:0,
            gender:'',
            message: null
        }

        this.save = this.save.bind(this);
    }

    save = (e) => {
        e.preventDefault();
        let disc = {
            name: this.state.name, 
            artist: this.state.artist, 
            year: this.state.year, 
            tracks: this.state.tracks, 
            gender: this.state.gender
        };

        HttpClient.create(disc)
            .then(res => {
                this.setState({message : 'Disc added successfully.'});
                this.props.history.push('/discs');
            });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <br/>
                <h4 className="text-center">Add Disc</h4>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" placeholder="Disc Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Artist:</label>
                        <input type="text" placeholder="Disc Artist" name="artist" className="form-control" value={this.state.artist} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Year:</label>
                        <input type="text" placeholder="Disc Year" name="year" className="form-control" value={this.state.year} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Tracks:</label>
                        <input type="text" placeholder="Disc Tracks" name="tracks" className="form-control" value={this.state.tracks} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Gender:</label>
                        <input type="text" placeholder="Disc Gender" name="gender" className="form-control" value={this.state.gender} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-primary" onClick={this.save}>Save</button>
                </form>
            </div>
        );
    }

}

export default AddComponent;