import React, { Component } from "react";
import HanoiTower from "./towerLayout/HanoiTower";
import Constants from "./elements/theConstants";

export class toh extends Component {
  constructor(props) {
    super(props);

    this.state = {
      towers: [
        { id: 1, tiles: [] },
        { id: 2, tiles: [] },
        { id: 3, tiles: [] },
      ],
    };
  }

  componentDidMount = () => {
    const tiles = [];
    for (let id = 1; id <= Constants.num_tiles; id++) {
      tiles.push({ id: id });
    }

    this.setState({
      towers: [
        { id: 1, tiles: tiles },
        { id: 2, tiles: [] },
        { id: 3, tiles: [] },
      ],
    });
  };

  removeTile = (tileId) => {
    let towerId = null;
    this.setState((prevState) => {
      prevState.towers.forEach((tower) => {
        tower.tiles = tower.tiles.filter((tile) => {
          if (tile.id === tileId) {
            towerId = tower.id;
            return false;
          } else {
            return true;
          }
        });
      });

      return {
        towers: prevState.towers,
      };
    });
    return towerId;
  };

  addTile = (tileId, towerId) => {
    this.setState((prevState) => ({
      towers: prevState.towers.map((tower) => {
        tower.id === towerId && tower.tiles.unshift({ id: tileId });

        return tower;
      }),
    }));
  };

  isMoveValid = (tileId, towerId) => {
    const tower = this.state.towers[towerId - 1];
    if (tower.tiles.length === 0 || tileId < tower.tiles[0].id) {
      return true;
    } else if (tileId > tower.tiles[0].id || tileId === tower.tiles[0].id) {
      return false;
    }
  };

  isTheLatter = (tileId) => {
    let tileIsTheLatter = false;
    this.state.towers.forEach((tower) => {
      if (tower.tiles.length !== 0 && tower.tiles[0].id === tileId) {
        tileIsTheLatter = true;
      }
    });
    return tileIsTheLatter;
  };

  isVictory = () => {
    const { towers } = this.state;
    return (
      towers[1].tiles.length === Constants.num_tiles ||
      towers[2].tiles.length === Constants.num_tiles
    );
  };

  render() {
    return (
      <div>
        <button
          style={{ margin: "10px" }}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Game's Objective
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Game's Objective
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p style={{ color: "black" }}>
                  Towers of Hanoi is a mathematical puzzle where we have three
                  rods and n disks. The objective of the puzzle is to move the
                  entire stack to another rod by following these simple rules:
                  <p style={{ color: "black" }}>
                    <br /> 1. Only one disk can be moved at a time.
                  </p>
                  <p style={{ color: "black" }}>
                    {" "}
                    2. Each move consists of taking the upper disk from one of
                    the stacks and placing it on top of another stack i.e. a
                    disk can only be moved if it is the uppermost disk on a
                    stack.
                  </p>
                  <p style={{ color: "black" }}>
                    {" "}
                    3. No disk may be placed on top of a smaller disk
                  </p>
                  <br />
                  <h2 style={{ color: "black" }}>Good luck!</h2>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div style={layoutStyle}>
          <HanoiTower
            towers={this.state.towers}
            removeTile={this.removeTile}
            addTile={this.addTile}
            isMoveValid={this.isMoveValid}
            isTheLatter={this.isTheLatter}
          />
          {this.isVictory() && alert("Congratulations! You WIN!")}
        </div>
      </div>
    );
  }
}

const layoutStyle = {
  display: "grid",
  gridTemplateRows: `
    ${Constants.header_height}
    calc(${Constants.hanoi_height})
    ${Constants.footer_height}
  `,
};

export default toh;
