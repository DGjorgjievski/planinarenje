import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const ClubList = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>Планинарски Клуб Македон</ListGroupItem>
        <ListGroupItem>Планинарски клуб Јелак - Тетово</ListGroupItem>
        <ListGroupItem>Планинарски клуб " Еделвајс</ListGroupItem>
        <ListGroupItem>
          Планинарски спортски клуб ДВЕТЕ УШИ Гевгелија
        </ListGroupItem>
        <ListGroupItem>Планинарски Спортски Клуб Чеплес</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default ClubList;
