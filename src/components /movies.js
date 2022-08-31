import React from "react";
import Row from "react-bootstrap/Row";
import Movie from "./Movie";
class Movies extends React.Component {
  render() {
    return (
      <>
        <h2>Movies</h2>
        {this.props.Flag && (
          <p>
            <Row xs={1} md={4} className="g-4">
              {this.props.movies &&
                this.props.movies.map((item) => {
                  return (
                    <Movie
                      poster_path={item.poster_path}
                      title={item.title}
                      vote_average={item.vote_average}
                      vote_count={item.vote_count}
                      popularity={item.popularity}
                      release_date={item.release_date}
                      overview={item.overview}
                    />
                  );
                })}
            </Row>
          </p>
        )}
      </>
    );
  }
}

export default Movies;
