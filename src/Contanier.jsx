import React, { useState, useCallback } from "react";
import { Card } from "./Card";
import update from "immutability-helper";

const style = {
  width: 400,
};
export const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        image: "./slidingImg/01.jpg",
      },
      {
        id: 2,
        image: "./slidingImg/00.jpg",
      },
      {
        id: 3,
        image: "./slidingImg/10.jpg",
      },
      {
        id: 4,
        image: "./slidingImg/02.jpg",
      },
      {
        id: 5,
        image: "./slidingImg/12.jpg",
      },
      {
        id: 6,
        image: "./slidingImg/11.jpg",
      },
      {
        id: 7,
        image: "./slidingImg/21.jpg",
      },
      {
        id: 8,
        image: "./slidingImg/20.jpg",
      },
      {
        id: 9,
        image: "./slidingImg/22.jpg",
      },
    ]);
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          image={card.image}
          moveCard={moveCard}
        />
      );
    };
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
                  You are given a set of fragmented images of the{" "}
                  <b>Minions.</b>
                  <p style={{ color: "black" }}>
                    Drag these fragmented images in order to restore the picture{" "}
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, min-content)",
            gridTemplateRows: "repeat(3, min-content)",
          }}
        >
          {cards.map((card, i) => renderCard(card, i))}
        </div>
      </div>
    );
  }
};
