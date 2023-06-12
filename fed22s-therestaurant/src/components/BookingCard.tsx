import { Booking } from "../models/Booking";
import { Customer } from "../models/Customer";
import { BookingHeading } from "./styled/BookingHeading";
import { ContactButton } from "./styled/Button";
import { ThinText } from "./styled/ThinText";
import { TimeSlotBlock } from "./styled/TimeSlotBlock";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./styled/Wrappers";

interface BookingCardProps {
  bookings: (Booking | Customer)[];
}

export const BookingCard = ({ bookings }: BookingCardProps) => {
  return (
    <HorizontalWrapper>
      <TimeSlotBlock>{bookings}</TimeSlotBlock>
      <VerticalWrapper>
        <BookingHeading>{booking.customer}</BookingHeading>
        <ContactButton>Kontakta</ContactButton>
        <ThinText>{booking.guests}</ThinText>
      </VerticalWrapper>
      <VerticalWrapper>
        <ThinText>{booking.date}</ThinText>
        <ThinText>Bord 1</ThinText>
      </VerticalWrapper>
    </HorizontalWrapper>
  );
};
