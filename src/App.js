import React from 'react';
import axios from 'axios';
import Movie from "./Movie";

class App extends React.Component{
  //data가 유동적으로 변함
  state = {
    isLoading: true,
    movies: []
  };
  
  getMovies = async () => {
    const { 
      data: {
        data:{movies}
      }
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );
  this.setState({ movies, isLoading: false });
  }
  componentDidMount(){
   this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
  return <div>{isLoading 
    ? "Loading..." 
    : movies.map( movie => (

        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image} 
          />
    ))}
    </div>
  }
}

export default App;



  //   //setState 호출시, state를 refresh하고 render funtion호출
  //   add = () => {
  //     this.setState(current=>({count: current.count + 1}));
  //    };
  //    minus = () => {
  //      this.setState(current=>({count: current.count - 1}));
  //    };
   
  //    render(){
  //      return <div>
  //        <h1>The number is: {this.state.count}</h1>
  //        <button onClick={this.add}>add</button>
  //        <button onClick={this.minus}>minus</button>
  //        </div>
  //    }
  //  }
