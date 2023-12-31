import { useContext, useState } from "react";

export interface IFormHandling {
  openForm: () => void;
  closeForm: () => void;
}

import { BookingCard } from "./BookingCard";
import { TimeSwitcher } from "./TimeSwitcher";
import { BookingsListWrapper } from "./styled/AdminWrappers";
import { BookingHeading } from "./styled/BookingHeading";
import { AdminContext } from "../contexts/AdminContext";
import { AdminUpdateForm } from "./AdminUpdateForm";
import { CurrentBookingContext } from "../contexts/CurrentBookingContext";
import {
  BookingCustomerExt,
  emptyBookingCustomerExt,
} from "../models/BookingCustomerExt";
import { VerticalWrapper } from "./styled/Wrappers";
import { NoBookingAnimation } from "./NoBookingAnimation";

export const BookingsList = () => {
  const { bookings } = useContext(AdminContext);

  /* console.log("bookings", bookings); */
  const [updateFormSwitch, setUpdateFormSwitch] = useState(false);
  const [currentBooking, setChosenBooking] = useState<BookingCustomerExt>(
    emptyBookingCustomerExt
  );

  /* const [formHandling, setFormHandling] = useState<IFormHandling>({
    openForm: ()=> void,
    closeForm: () => void
  }) */

  function handleUpdateForm() {
    setUpdateFormSwitch(!updateFormSwitch);
  }

  function updateChosenBooking(current: any) {
    console.log("current", current);
    setChosenBooking(current);
  }

  return (
    <BookingsListWrapper>
      {/* <TimeSwitcher></TimeSwitcher> */}
      <BookingHeading>Bokningar</BookingHeading>

      <CurrentBookingContext.Provider value={currentBooking}>
        {bookings.filteredList.map((booking) => (
          <BookingCard
            handleUpdateForm={handleUpdateForm}
            key={booking._id}
            booking={booking}
            updateChosenBooking={updateChosenBooking}
          />
        ))}

        {bookings.filteredList.length === 0 && (
          <NoBookingAnimation></NoBookingAnimation>
        )}

        {updateFormSwitch && (
          <AdminUpdateForm
            handleUpdateForm={handleUpdateForm}
          ></AdminUpdateForm>
        )}
      </CurrentBookingContext.Provider>
    </BookingsListWrapper>
  );
};
