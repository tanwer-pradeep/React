import React, { Component } from 'react'
// import { getMovies } from './moviescontent'
import axios from 'axios'



export default class movies extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: [],
            currval: '',
            currpage: 1,
            pagelimit: 4
        }
    }

    async componentDidMount() {
        let promise = axios.get('https://backend-react-movie.herokuapp.com/movies');
        let data = await promise;
        // console.table(data.data.movies);
        this.setState({
            movies: data.data.movies
        })
    }

    onDelete = (id) => {
        let filteredmovies = this.state.movies.filter(movieobj => {
            return movieobj._id !== id;
        })
        this.setState({
            movies: filteredmovies
        })
    }

    hadlechange = (e) => {
        let task = e.target.value;
        this.setState({ currval: task });

    }

    sortbyrating = (e) => {
        let name = e.target.className;
        // console.log(name);

        let sortedarr = []

        if (name === 'fas fa-sort-up') {
            // ascending 
            sortedarr = this.state.movies.sort((a, b) => {
                return a.dailyRentalRate - b.dailyRentalRate
            });
        } else {
            // descending
            sortedarr = this.state.movies.sort((a, b) => {
                return b.dailyRentalRate - a.dailyRentalRate
            });
        }
        this.setState({ movies: sortedarr });
    }

    sortbystock = (e) => {
        let name = e.target.className;
        // console.log(name);
        let sortedarr = []

        if (name === 'fas fa-sort-up') {
            // ascending 
            sortedarr = this.state.movies.sort((a, b) => {
                return a.numberInStock - b.numberInStock
            });
        } else {
            // descending
            sortedarr = this.state.movies.sort((a, b) => {
                return b.numberInStock - a.numberInStock
            });
        }
        this.setState({ movies: sortedarr });
    }

    handlepage = (e) => {
        let num = Number(e.target.value);
        this.setState({ pagelimit: num })
    }

    handlepagechange = (pages) => {
        this.setState({ currpage: pages })
    }

    render() {
        let { movies, currval, currpage, pagelimit } = this.state
        let searchedmovies = [];
        if (currval !== '') {
            searchedmovies = movies.filter(movieobj => {
                let title = movieobj.title.trim().toLowerCase();
                return title.includes(currval.toLowerCase())
            })
        } else {
            searchedmovies = movies;
        }


        let si = (currpage - 1) * pagelimit;
        let ei = si + pagelimit;

        let numofpages = Math.ceil(searchedmovies.length / pagelimit);

        let pages = [];
        for (let i = 0; i < numofpages; i++) {
            pages.push(i + 1);
        }
        // console.table(pages)
        searchedmovies = searchedmovies.slice(si, ei);


        return (
            <>
                {
                    this.state.movies.length === 0?  
                    <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button>

                   : <div className='row'>

                        <div className='title'>
                            <h1 >Movie App in React</h1>
                        </div>
                        <div className='col-3 sidebar'>Hello</div>
                        <div className='col-9'>
                            <input type='text' value={this.state.currval} onChange={this.hadlechange}></input>
                            <input type='number' value={pagelimit > searchedmovies.length ? searchedmovies.length : pagelimit} onChange={this.handlepage} min='1' max={movies.length}></input>

                            <table className='table table-striped table-dark'>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">
                                            <i className="fas fa-sort-up" onClick={this.sortbystock}></i>
                                            <i className="fas fa-sort-down" onClick={this.sortbystock}></i>
                                            Stock
                                        </th>
                                        <th scope="col">
                                            <i className="fas fa-sort-up" onClick={this.sortbyrating}></i>
                                            <i className="fas fa-sort-down" onClick={this.sortbyrating}></i>
                                            Rating
                                        </th>
                                        <th scope='col'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        searchedmovies.map(movieobj => (
                                            <tr className='movies-name' key={movieobj._id}>
                                                <td>{(searchedmovies.indexOf(movieobj)) + 1}</td>
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
                            <nav aria-label="...">
                                <ul className="pagination">
                                    {
                                        pages.map(page => {
                                            let classnametoset = page === currpage ? 'page-item active' : 'page-item'
                                            return (
                                                <li onClick={() => this.handlepagechange(page)} className={classnametoset} key={page}>
                                                    <span className="page-link">{page}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                }
            </>

        )

    }
}



