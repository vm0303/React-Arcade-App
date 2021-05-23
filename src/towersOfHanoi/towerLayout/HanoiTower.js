import React, { Component, Fragment } from "react";
import Tower from "../towerLayout/Tower";
import Constants from "../elements/theConstants";

class HanoiTower extends Component {
    render() {
        return (
            <div style={style}>
                {this.props.towers.map(curr => {
                    return (
                        <Fragment key={curr.id}>
                            <div />
                            <Tower
                                tiles={curr.tiles}
                                removeTile={tileId => this.props.removeTile(tileId)}
                                addTile={(tileId, towerId) =>
                                    this.props.addTile(tileId, towerId)
                                }
                                isMoveValid={(tileId, towerId) =>
                                    this.props.isMoveValid(tileId, towerId)
                                }
                                isTheLatter={tileId => this.props.isTheLatter(tileId)}
                            />
                        </Fragment>
                    );
                })}
            </div>
        );
    }
}

const style = {
    height: Constants.hanoi_height,
    display: "grid",
    gridTemplateColumns: `
    1fr 
    ${Constants.tower_width}
    2fr
    ${Constants.tower_width}
    2fr
    ${Constants.tower_width}
    1fr
  `,
    alignItems: "flex-end"
};

export default HanoiTower;