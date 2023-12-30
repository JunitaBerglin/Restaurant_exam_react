import { BookingClass } from "../models/BookingClass";

import { BookingHeading } from "./styled/BookingHeading";
import { AdminButton } from "./styled/Buttons";
import { ThickText, ThinText } from "./styled/BookingCardTexts";
import { TimeSlotBlock } from "./styled/TimeSlotBlock";
import {
  BookingCardWrapper,
  BookingCardWrapperVertical,
  ButtonWrapper,
  HorizontalWrapper,
  VerticalWrapper,
} from "./styled/Wrappers";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./styled/Buttons";
import { AdminContext } from "../contexts/AdminContext";
import { ActionType } from "../reducers/AdminReducer";
import { BookingCustomerExt } from "../models/BookingCustomerExt";
import { deleteBooking } from "../services/dataService";

interface IBookingCardProps {
  handleUpdateForm: () => void;
  booking: BookingCustomerExt;
  updateChosenBooking: (
    current: BookingCustomerExt | BookingClass
  ) => void;
}

export const BookingCard = (props: IBookingCardProps) => {
  const { dispatch } = useContext(AdminContext);
  const [bookingToUpdate, setBookingToUpdate] = useState({});
  console.log(props.booking);

  useEffect(() => {}, [bookingToUpdate]);

  const updateBooking = () => {
    props.updateChosenBooking(props.booking);
    const chosenBooking = { ...props.booking };

    props.handleUpdateForm();

    setBookingToUpdate(chosenBooking);

    console.log("chosenBooking", chosenBooking._id);

    dispatch({
      type: ActionType.UPDATE_BOOKING,
      payload: JSON.stringify(chosenBooking),
    });
  };

  const handleDeleteBooking = async () => {
    try {
      await deleteBooking(props.booking._id);
      dispatch({
        type: ActionType.DELETE_BOOKING,
        payload: props.booking._id
          ? props.booking._id.toString()
          : "",
      });
    } catch (error) {
      console.error("Could not delete the booking");
    }
  };

  return (
    <BookingCardWrapper>
      <TimeSlotBlock>{props.booking.time}</TimeSlotBlock>

      <BookingCardWrapperVertical>
        <ThickText>{props.booking.customer.name}</ThickText>
        <ThinText>Gäster: {props.booking.guests}</ThinText>
      </BookingCardWrapperVertical>

      <BookingCardWrapperVertical>
        <ThickText>Datum:</ThickText>
        <ThinText>{props.booking.date}</ThinText>
      </BookingCardWrapperVertical>

      <ButtonWrapper>
        <AdminButton onClick={updateBooking}>Uppdatera</AdminButton>
        <AdminButton onClick={handleDeleteBooking}>
          Ta bort
        </AdminButton>
      </ButtonWrapper>
    </BookingCardWrapper>
  );
};
