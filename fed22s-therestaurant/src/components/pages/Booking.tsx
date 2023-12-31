import { BookingsCalendar } from "../BookingsCalendar/BookingsCalendar";
import {
  Dispatch,
  DispatchWithoutAction,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Form } from "../Form";
import { CenteringWrapper } from "../styled/Wrappers";
import { BookingsContext } from "../../contexts/BookingsContext";
import { BookingClass } from "../../models/BookingClass";
import { getBookings } from "../../services/dataService";
import { NewBookingContext } from "../../contexts/NewBookingContext";
import { BookingDispatchContext } from "../../contexts/BookingDispatchContext";
import {
  BookingReducer,
  IBookingAction,
} from "../../reducers/BookingReducer";
import { actionType } from "../../enums/actionType";

export const Booking = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [bookings, setBookings] = useState<BookingClass[]>([]);
  const [activeTables, setActiveTables] = useState(0);

  const [booking, dispatch] = useReducer(BookingReducer, {
    name: "",
    email: "",
    phonenumber: "",
    guests: 0,
    date: "",
    time: "",
  });

  console.log("Antal bord sällskapet tar", activeTables);

  useEffect(() => {
    getBookings().then((bookings: BookingClass[]) =>
      setBookings(bookings)
    );
  }, []);

  function openCalendar() {
    setCalendarOpen(true);
  }

  function closeCalendar() {
    setCalendarOpen(false);
  }

  function addTime(value: IBookingAction) {
    dispatch(value);
  }

  function addDate(value: IBookingAction) {
    dispatch(value);
  }

  function updateActiveTables(value: number) {
    setActiveTables(value);
  }

  return (
    <>
      <CenteringWrapper>
        <NewBookingContext.Provider value={booking}>
          <BookingsContext.Provider value={bookings}>
            <Form
              addTime={addTime}
              closeCalendar={closeCalendar}
              openCalendar={openCalendar}
              updateActiveTables={updateActiveTables}></Form>

            <BookingDispatchContext.Provider value={dispatch}>
              {calendarOpen && (
                <BookingsCalendar
                  addDate={addDate}
                  addTime={addTime}
                  closeCalendar={closeCalendar}
                  activeTables={activeTables}></BookingsCalendar>
              )}
            </BookingDispatchContext.Provider>
          </BookingsContext.Provider>
        </NewBookingContext.Provider>
      </CenteringWrapper>
    </>
  );
};
