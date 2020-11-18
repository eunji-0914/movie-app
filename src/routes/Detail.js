import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/")
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="title">{location.state.title}</div>
                    <span className="year">{location.state.year}년 개봉 / {location.state.genres}</span>
                    <div className="summary">{location.state.summary}</div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;