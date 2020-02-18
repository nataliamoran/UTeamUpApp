import React from "react";


import TeamPreviewList from "./../TeamPreviewList";
import SearchForm from "./../SearchForm";

import { filterTeams } from "../../actions/searchTeam";

class SearchTeam extends React.Component {

    state = {
        teamUniversity: "",
        teamCourse: "",
        teams: [
            { teamUniversity:"UofT", teamCourse: "CSC309", teamID: "1", teamDescription: "A+ group looking for a JS Jedi" },
            { teamUniversity:"UofT", teamCourse: "CSC207", teamID: "2", teamDescription: "Let's crash this course together!"  }
        ],
        filteredTeams: [
            { teamUniversity:"UofT", teamCourse: "CSC309", teamID: "1", teamDescription: "A+ group looking for a JS Jedi" },
            { teamUniversity:"UofT", teamCourse: "CSC207", teamID: "2", teamDescription: "Let's crash this course together!"  }
        ]
    };


    handleSearchInput = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Find your team</h1>

                <SearchForm
                    teamUniversity={this.state.teamUniversity}
                    teamCourse={this.state.teamCourse}
                    handleSearch={this.handleSearchInput}
                    filterTeams={() => filterTeams(this)}
                />

                <TeamPreviewList teams={this.state.filteredTeams} />
            </div>
        );
    }
}

export default SearchTeam;
