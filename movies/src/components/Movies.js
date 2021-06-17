import React, { Component } from 'react'
import { getMovies } from './moviescontent'



export default class movies extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: getMovies(),
            currval : ''
        }
    }

    onDelete = (id) => {
        let filteredmovies = this.state.movies.filter(movieobj => {
            return movieobj._id != id;
        })
        this.setState({
            movies: filteredmovies
        })
    }

    hadlechange = (e) =>{
        let task = e.target.value;
        this.setState({ currval: task });
        
    } 



    render() {
        let { movies, currval } = this.state
        let searchedmovies = [];
        if(currval != ''){
            searchedmovies = movies.filter(movieobj =>{
                let title = movieobj.title.trim().toLowerCase();
                return title.includes(currval.toLowerCase())
            })
        }else{
            searchedmovies = movies
        }
        return (
            <div className='row'>
                <div className='col-3'>Hello</div>
                <div className='col-9'>
                    <input type='text' value={this.state.currval} onChange={this.hadlechange}></input>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rating</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchedmovies.map(movieobj => (
                                    <tr className='movies-name' key={movieobj._id}>
                                        <td></td>
                                        <td>{movieobj.title}</td>
                                        <td>{movieobj.genre.name}</td>
                                        <td>{movieobj.numberInStock}</td>
                                        <td>{movieobj.dailyRentalRate}</td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => this.onDelete(movieobj._id)}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}



// {
//     movies.map(movieobj =>(
//         <div className='movies-name' key={movieobj._id}>
//             <span>{movieobj.title}</span>
//             <span>{movieobj.genre.name}</span>
//             <span>{movieobj.numberInStock}</span>
//             <span>{movieobj.dailyRentalRate}</span>
//             <button onClick = {()=>this.onDelete(movieobj._id)}>Delete</button>
//         </div>
//     ))
//  }